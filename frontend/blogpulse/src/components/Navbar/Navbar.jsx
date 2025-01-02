import React, { useState } from "react";
import logo from "../../assets/images/logo1.png";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [login, setLogin] = useState(false);
  const [toggle, setToggle] = useState(false);

  const navigate = useNavigate();

  function handleMoreBtnClick(category) {
    console.log(category);
    category === "all" ? navigate("/") :
    navigate(`category?category=${category}`);
    setToggle(false);
  }
function handleNavigationClick(link){
    navigate(`${link}`);

}

  function handleToggleClick() {
    setToggle(!toggle);
  }

  return (
    <div>
      <div className="navbar">
        <div className="left-section">
          <div className="logo-section">
            <img src={logo} alt="logo_image" />
          </div>
        </div>

        <div className="middle-section">
          <div className="link-section">
            <div className="navigation-section">
              <ul>
                <li onClick={()=>handleNavigationClick("/")}>Home</li>
                <li onClick={()=>handleNavigationClick("about-us")}>About Us</li>
                <li onClick={()=>handleNavigationClick("contact-us")}>Contact Us</li>
              </ul>
            </div>
            <div
              className={`category-section ${
                toggle ? "after-toggle-category-section" : ""
              }`}
            >
              <select
                name="category"
                id="category"
                onChange={(e) => handleMoreBtnClick(e.target.value)}
              >
                <option value="all">All Categories</option>
                <option value="sports">Sports</option>
                <option value="entertainment">Entertainment</option>
                <option value="health">Health</option>
                <option value="travel">Travel</option>
                <option
                  value="fashion"
                  onChange={() => handleMoreBtnClick("fashion")}
                >
                  Fashion
                </option>
              </select>
            </div>
          </div>
        </div>

        <div className="right-section">
          <div
            className={`user-section ${
              toggle ? "after-toggle-user-section" : ""
            } `}
          >
            {login ? (
              <div className="profile">
                <img src={logo} alt="" />
              </div>
            ) : (
              <div className="register">Login</div>
            )}
          </div>
          <div className="toggle-section" onClick={handleToggleClick}>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      </div>

      <div className={toggle ? "after-toggle" : ""}></div>
    </div>
  );
}

export default Navbar;
