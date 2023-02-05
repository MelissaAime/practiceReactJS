import { useState } from "react";

export const Sidebar = () => {
    const [isExpended, setExpendedState] = useState(false);

    const menuItems = [
        {
            text: "Home",
            icon: "",
        },
        {
            text: "Profile",
            icon: "",
        },
    ]

    return (
        <div className={isExpended ? "nav-container" : "nav-container nav-container-NX"}>
            <div className="nav-upper">
                <div className="nav-heading">
                    {isExpended && (
                        <div className="nav-brand">
                            <img src="#" alt="Logo" />
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
                <div className="nav-menu">{menuItems.map(({text, icon}) =>(
                    <a 
                        href="#" 
                        className={isExpended ? "menu-item" : "menu-item menu-item-NX"}
                    >
                        <img src={icon} alt="" />
                        {isExpended && <p>{text}</p>}
                        {!isExpended && <div className="tooltip">{text}</div>}
                    </a>
                ))}</div>
            </div>
        </div>
    )
}