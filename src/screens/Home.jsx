import "./Home.css";
import a1 from "../assets/mypic.jpg";
import b1 from "../assets/bus_logo.jpg";
import collegeImage from "../assets/college.jpg";
import clinic from "../assets/clinical.jpg";
import ProjectModal from "../modal/ProjectModal";
import chatImage from "../assets/chatting.jpg";
import { useState } from "react";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
  FaEnvelope,
  FaSuitcase,
} from "react-icons/fa";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const projectList = [
    {
      title: "Bus Tracking System",
      description: "Mobile Application To Track Bus Location",
      image: b1,
      detail:
        " Developed a mobile application using React Native for real-time bus tracking. The driver’s mobile device sends GPS coordinates to the backend, which updates location data in the client app. Used live location and speed data to calculate and display estimated arrival times at each stop, enabling users to track buses accurately and plan travel efficiently",
    },
    {
      title: "Issue Management System",
      description: "Web Application to know the status of college issues",
      image: collegeImage,
      link:"https://endearing-gaufre-c979ec.netlify.app/",
      detail:
        "The Issue Tracking System is designed to create a scalable platform for managing issues and fostering a collaborative environment for college assessments in both educational and professional settings. It features secure authentication,automated grading, and real-time analytics for tracking issues. The platform also provides a responsive user interface.",
    },
    {
      title: "Smart Clinical Lab Management",
      description: "Desktop Application to Bill Clinical lab results",
      image: clinic,
      detail:
        "The Smart Lab Clinical Management Frontend Application is a user-friendly system designed to facilitate the entry and management of patient test reports. The application allows lab users to input test values, automatically match them with predefined test names and normal ranges stored in the application, and generate printable test reports",
    },
    {
      title: "Simple Chat Web Application",
      description: "Website for chatting",
      image: chatImage,
      detail:
        " The real-time chat application uses React.js, Node.js, Express.js, and Socket.IO to enable instant communication.The application supports user authentication, real-time messaging, and dynamic room management for group chats and private one-on-one conversations.",
    },
  ];
  return (
    <div>
      <div className="Home"></div>
      <section id="about" className="about">
        <div>
          {" "}
          <img src={a1} alt="My Image" height="300px" id="myImage" />
        </div>
        <div>
          <h1 className="montserrat-fullstack">Full Stack Developer</h1>
          <p className="para">
            Innovative Software Developer with hands-on experience in building
            scalable web and mobile apps using JavaScript, React, Node.js, and
            SQL. Skilled in problem-solving, clean coding, and team
            collaboration under tight deadlines.
          </p>
          <div className="tables">
            <div>
              {" "}
              <table>
                <tr>
                  <td>
                    <b> Date of Birth : </b>
                  </td>
                  <td>23-01-2004</td>
                </tr>
                <tr>
                  <td>
                    <b> Phone :</b>
                  </td>
                  <td>8220696132</td>
                </tr>
                <tr>
                  <td>
                    <b> Degree : </b>
                  </td>
                  <td>Bachelor of Engineering</td>
                </tr>
              </table>
            </div>
            <div>
              <table>
                <tr>
                  <td>
                    <b> Age : </b>
                  </td>
                  <td>21</td>
                </tr>
                <tr>
                  <td>
                    <b> Email : </b>
                  </td>
                  <td>skamalesh2301@gmail.com</td>
                </tr>
                <tr>
                  <td>
                    <b> Major : </b>
                  </td>
                  <td>Computer Science</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </section>
      <section id="skill">
        <div className="montserrat-skills">
          <h1 className="pos">Skills </h1>

          <div className="skill-display">
            <div className="skill-column">
              <div className="skill">
                HTML:
                <div className="progress-container">
                  <div className="progress-bar" style={{ width: "100%" }}>
                    100%
                  </div>
                </div>
              </div>
              <div className="skill">
                CSS:
                <div className="progress-container">
                  <div className="progress-bar" style={{ width: "90%" }}>
                    90%
                  </div>
                </div>
              </div>
              <div className="skill">
                Java:
                <div className="progress-container">
                  <div className="progress-bar" style={{ width: "80%" }}>
                    80%
                  </div>
                </div>
              </div>
              <div className="skill">
                JavaScript:
                <div className="progress-container">
                  <div className="progress-bar" style={{ width: "85%" }}>
                    85%
                  </div>
                </div>
              </div>
            </div>

            <div className="skill-column">
              <div className="skill">
                React:
                <div className="progress-container">
                  <div className="progress-bar" style={{ width: "80%" }}>
                    80%
                  </div>
                </div>
              </div>
              <div className="skill">
                React Native:
                <div className="progress-container">
                  <div className="progress-bar" style={{ width: "70%" }}>
                    70%
                  </div>
                </div>
              </div>
              <div className="skill">
                Python:
                <div className="progress-container">
                  <div className="progress-bar" style={{ width: "95%" }}>
                    95%
                  </div>
                </div>
              </div>
              <div className="skill">
                SQL:
                <div className="progress-container">
                  <div className="progress-bar" style={{ width: "80%" }}>
                    80%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="projects" id="projects">
        <h1 className="montserrat-project">Projects</h1>
        <div className="card-container">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="card"
              onClick={() => handleCardClick(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="card-image"
              />
              <h3 className="card-title">{project.title}</h3>
              <div className="card-description">{project.description}</div>
            </div>
          ))}
        </div>

        <ProjectModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={selectedProject.title}
          description={selectedProject.description}
          image={selectedProject.image}
          detail={selectedProject.detail}
          link={selectedProject.link}
        />
      </section>
      <section id="contact">
        <footer className="footer">
          <p>
            &copy; {new Date().getFullYear()} Kamalesh. All rights reserved.
          </p>
          <div className="social-links">
            <a
              href="https://instagram.com/kam_lesh_23_01"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com/kamalesh2301"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://wa.me/8220696132"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a href="mailto:skamalesh2301@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
            <a
              href="https://linkedin.com/in/skamalesh23"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.naukri.com/mnjuser/profile=&altresid"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Naukri"
            >
              <FaSuitcase />
            </a>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Home;
