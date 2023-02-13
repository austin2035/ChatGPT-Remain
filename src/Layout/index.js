import { Link, Outlet } from "react-router-dom"
import "./index.css"

export default function Layout() {

  return (
    <div className="layout">
      <div className="guider">
        <div className="guider-wrapper">
          <div className="header">
            <div className="nav">
              <Link className="logo" to="/">
                <img src="/logo.svg" alt="logo"></img>
              </Link>

              <div className="link-wrapper">
                <div className="link">
               <div className="item-wraper">
               <Link to="/setting" className="item">
                    <img src="/setting.svg" alt="logo"></img>
                    <span className="text">设置</span>
                  </Link>
               </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>

  )
}