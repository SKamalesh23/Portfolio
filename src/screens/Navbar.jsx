import "./Navbar.css";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import useWindowWidth from "../hooks/useWindowwidth";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [showmenu,setShowmenu] = useState(false);
  const width = useWindowWidth()
  return (
    <>
      <div>
        <ul className="montserrat-text" >
          <li>
            <a href="#about" style={{ textDecoration: "none", color: "#fff" }}>
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Projects
            </a>
          </li>
          <li>
            <a href="#skill" style={{ textDecoration: "none", color: "#fff" }}>
              Skill
            </a>
          </li>
          <li>
            <a
              style={{ textDecoration: "none", color: "#fff" }}
              href="https://drive.google.com/uc?export=download&id=1F6Da_CAH-MqVl8GBGGKLcfT6NflyC5WS
"
            >
              Resume
            </a>
          </li>
          <li>
            {" "}
            <a
              href="#contact"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      {width <= 768 && <ul className={`montserrat-text1`}>
    <li onClick={() => setShowmenu(!showmenu)} className="menu-toggle">
  <span className={`icon ${showmenu ? 'hide' : 'show'}`}>
    <MdMenu />
  </span>
  <span className={`icon ${showmenu ? 'show' : 'hide'}`}>
    <IoClose />
  </span>
</li>

  </ul> }
  

<div className={`mobile ${showmenu ? 'show' : ''}`}>
        <ul className="text-mob" >
          <li >
            {" "}
            <a href="#about" style={{ textDecoration: "none", color: "#000" }} onClick={()=>{setShowmenu(!showmenu)}}>
              About
            </a>
          </li>
          <li>
            {" "}
            <a
              href="#projects"
              style={{ textDecoration: "none", color: "#000" }}
              onClick={()=>{setShowmenu(!showmenu)}}
            >
              Projects
            </a>
          </li>
          <li>
            {" "}
            <a href="#skill" style={{ textDecoration: "none", color: "#000" }}
                          onClick={()=>{setShowmenu(!showmenu)}}
>
              Skill
            </a>
          </li>
          <li>
            <a
              style={{ textDecoration: "none", color: "#000" }}
              href="https://drive.google.com/uc?export=download&id=1F6Da_CAH-MqVl8GBGGKLcfT6NflyC5WS"
              onClick={()=>{setShowmenu(!showmenu)}}
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="#contact"
              style={{ textDecoration: "none", color: "#000" }}
              onClick={()=>{setShowmenu(!showmenu)}}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
