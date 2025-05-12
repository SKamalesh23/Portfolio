import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <ul className="montserrat-text">
        <li ><a href="#about"  style={{ textDecoration: "none", color: "#fff" }}>About</a></li>
        <li ><a href="#projects"  style={{ textDecoration: "none", color: "#fff" }}>Projects</a></li>
        <li><a href="#skill"  style={{ textDecoration: "none", color: "#fff" }}>Skill</a></li>
        <li>
          <a
            style={{ textDecoration: "none", color: "#fff" }}
            href="https://drive.google.com/uc?export=download&id=1F6Da_CAH-MqVl8GBGGKLcfT6NflyC5WS
"
          >
            Resume
          </a>
        </li>
        <li> <a href="#contact"  style={{ textDecoration: "none", color: "#fff" }}>Contact</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
