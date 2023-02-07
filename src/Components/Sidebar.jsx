import { useState } from "react";
import { BsHouseDoor, BsPerson, BsChatSquareText } from "react-icons/bs";


export const Sidebar = () => {
    const [isExpended, setExpendedState] = useState(false);

    const menuItems = [
        {
            text: "Home",
            icon: <BsHouseDoor/>,
        },
        {
            text: "Profile",
            icon: <BsPerson/>,
        },
        {
            text: "Message",
            icon: <BsChatSquareText/>,
        }
    ]

    return (
        <div className={isExpended ? "nav-container" : "nav-container nav-container-NX"}>
            <div className="nav-upper">
                <div className="nav-heading">
                    {isExpended && (
                        <div className="nav-brand">
                            <img src="https://img.icons8.com/plasticine/100/null/flower-doodle.png" alt="Logo"/>
                            <h2>Name</h2>
                        </div>
                    )}
                    <button 
                        className={
                            isExpended ? "hamburger hamburger-in" : "hamburger hamburger-out"
                        }
                        onClick = {() => setExpendedState(!isExpended)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <div className="nav-menu">
                    {menuItems.map(({text, icon}) =>(
                        <a 
                            href="#" 
                            className={isExpended ? "menu-item" : "menu-item menu-item-NX"}
                        >
                            <span>{icon}</span>
                            {isExpended && <p>{text}</p>}
                        </a>
                    ))}
                </div>
            </div>
            <div className="nav-footer">
                {isExpended && (
                    <div className="nav-details">
                        <img src="" alt="" />
                        <div className="nav-footer-info">
                            <p className="nav-footer-user-name">User Name</p>
                            <p className="nav-footer-user-position">Admin</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}