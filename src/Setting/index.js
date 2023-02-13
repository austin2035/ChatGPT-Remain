import "./index.css";
import React from "react";

import { setToken, getToken } from "../utility/request";


export default function Setting() {
  const [value, setValue] = React.useState("");

  const handleInput = (e) => {
    setValue(e.target.value);
    setToken(e.target.value);
  }

  React.useEffect(() => {
    const token = getToken();
    if (token) {
      setValue(token);
    }
  }, []);

  return (
    <div className="setting-main content">
      <div className="setting-box">
        <div className="setting-wrapper">
        <p className="desc">将你的 OpenAI KEY 粘贴于此</p>
          <div className="key-wrapper">
            <span className="key">KEY</span><input value={value} onChange={handleInput} />
          </div>
        </div>
      </div>
    </div>
  )
}