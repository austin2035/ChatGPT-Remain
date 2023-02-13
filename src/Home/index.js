import "./index.css";
import { Logo } from "../utility/icon";
import React from "react";
import request from "../utility/request";
import { LoadingSvg } from "../utility/icon";

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      msg: "",
      chatList: [
        { id: 0, type: 2, text: "你好，我是 ChatGPT，我可以和你聊天，你可以问我关于人工智能的问题，我会尽力回答你。" }
      ],
      isLoading: false
    }
    this.handleSend = this.handleSend.bind(this);
  }

  chatRef = React.createRef();

  generateID() {
    return this.state.chatList[this.state.chatList.length - 1].id + 1;
  }

  componentDidMount() {

  }

  componentDidUpdate() {
    console.log("组件更新")
  }

  removeLineBreak(str) {
    if (str.substring(0, 1) === "\n") {
      return str.substring(1);
    }
    if (str.substring(0, 2) === "\n\n") {
      return str.substring(2);
    }
    return str;
  }

  
  completions() {
    let { chatList } = this.state;

    let prompt = "";
    chatList.forEach(item => {
      if (item.type === 1) {
        prompt += ` Human: ${item.text}\n\n`
      } else {
        prompt += ` ChatGPT: ${item.text}\n\n`
      }
    });
    prompt +=  `\nChatGPT: `;

    console.log("completions 接受到的", chatList)

    request({
      url: "/completions",
      method: "POST",
      needToken: true,
      data: {
        "model": "text-davinci-003",
        "prompt": prompt,
        "temperature": 0.9,
        "max_tokens": 1000,
        "top_p": 1,
        "frequency_penalty": 0,
        "presence_penalty": 0.6,
        "stop": [" Human:", " ChatGPT:"]
      }
    }).then(res => {
      let text = res.choices[0].text;
      text = this.removeLineBreak(text);
      console.log("completions 返回的 text", text)
      this.setState({
        isLoading: false,
        chatList: [...chatList, { id: this.generateID(), type: 2, text: text }]
      }, () => {
        this.updateScroll()
        console.log("completions 执行完返回的 chatList", this.state.chatList)
      })

    }).catch(err => {
      this.setState({
        isLoading: false,
        chatList: [...chatList, { id: this.generateID(), type: 2, text: "出错了" }]
      }, () => {
        this.updateScroll()
      })
    })
  }


  handleSend() {
    // 消息为空，返回
    if (this.state.msg === "") {
      return;
    };
    
    // 正在加载中，返回
    if(this.state.isLoading) {
      return;
    }

    this.setState({
      isLoading: true,
      msg: "",
      chatList: [...this.state.chatList, { id: this.generateID(), type: 1, text: this.state.msg }]
    }, () => {
      this.completions()
    })

    let timer2 = setTimeout(() => {
      this.updateScroll();
      clearTimeout(timer2);
    }, 50)
  }

  // 更新滚动条
  updateScroll() {
    this.chatRef.current.scrollTop = this.chatRef.current.scrollHeight;
  }

  render() {
    return <div className="chat-main content">
      <div className="chat-wrapper">
        <div className="chat-content" ref={this.chatRef} id="chat">
          {this.state.chatList.length > 0 &&
            <MessageRender chatList={this.state.chatList} />
          }
          {this.state.isLoading && <LoadingMessage />}
        </div>
        <div className="msg-send">
          <div className="send-wrapper">
            <textarea className="msg" rows={1} value={this.state.msg} onChange={(e) => { this.setState({ msg: e.target.value }) }}></textarea>
            <div className="send" onClick={this.handleSend}>
              <img src="/send.png" alt="send"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}


function HumanMessage({ text }) {
  return (
    <div className="human-wrapper msg-wrapper">
      <div className="human msg-item">
        <p className="text">{text}</p>
        <div className="icon-wraper">
          <Logo fillColor="#000" size={32} />
        </div>
      </div>
    </div>
  )
}

function MessageRender({ chatList }) {
  console.log(chatList)
  return chatList.map((item) => {
    if (item.type === 1) {
      return <HumanMessage text={item.text} key={item.id} />
    } else {
      return <OracleMessage text={item.text} key={item.id} />
    }
  });
}

function OracleMessage({ text }) {
  return (
    <div className="oracle-wrapper msg-wrapper">
      <div className="oracle msg-item">
        <div className="icon-wraper">
          <Logo size={32} />
        </div>
        <p className="text">{text}</p>
      </div>
    </div>
  )
}

function LoadingMessage({ text }) {
  return (
    <div className="oracle-wrapper msg-wrapper">
      <div className="oracle msg-item">
        <div className="icon-wraper">
          <Logo size={32} />
        </div>
        <p className="text"><LoadingSvg />思考中</p>
      </div>
    </div>
  )
}