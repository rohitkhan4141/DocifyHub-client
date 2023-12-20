import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import "./Dashboard.css";

function DashBoardLayout() {
  return (
    <div>
      <Navbar />
      <div className="drawer lg:drawer-open">
        <input id="chat-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <Outlet />
        </div>
        <div className="drawer-side absolute z-50 overflow-y-auto shadow-right">
          <label htmlFor="chat-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-56 min-h-full bg-base-200 text-base-content">
            <>
              <li className="hover:bg-accent rounded me-1">
                <Link to='/dashboard/createDocument'>Create Document</Link>
              </li>
              <li className="hover:bg-accent rounded me-1">
                <Link to='/dashboard/AllDocuments'>All Documents</Link>
              </li>
              <li className="hover:bg-accent rounded me-1">
                <Link to='/dashboard/SharedDocument'>Shared File</Link>
              </li>
              <li className="hover:bg-accent rounded me-1">
                <Link to='/dashboard/chat'>Group Chat</Link>
              </li>
            </>
          </ul>

        </div>
      </div>
    </div>
  )
}

export default DashBoardLayout