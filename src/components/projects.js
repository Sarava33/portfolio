import React from "react";
import "../styles/projects.css";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import FadeInSection from "./fadeinsection";

class Projects extends React.Component {
  render() {
    const projects = {
      "Personal Portfolio Website": {
        desc:
          "Designed and developed a responsive portfolio from scratch to showcase projects and experience using modern web technologies.",
        techStack: "React, JSX, HTML, CSS"
      },
      "Azure Access Compliance Scanner": {
        desc:
          "Developed a PowerShell-based tool to scan Azure subscriptions for access violations and role assignment deviations at the resource group level.",
        techStack: "PowerShell, Azure Active Directory, RBAC"
      },
      "EmotionSense": {
        desc:
          "Built a multimodal emotion recognition system using CNNs and Bayes Theorem to classify human emotions from real-time facial video and audio inputs.",
        techStack: "Python, OpenCV, TensorFlow, Keras, AlexNet, NumPy, Pandas"
      },
      "ConversAI": {
        desc:
          "Designed and trained a competitive chatbot by analyzing market solutions and building a custom database for conversational learning using TensorFlow.",
        techStack: "Python, C++, TensorFlow, NLP, Data Preprocessing"
      },
      "AeroSimCity": {
        desc:
          "Interactive drone simulation platform using A* pathfinding to visualize flight paths and estimate collision-based damage costs in real-time urban environments.",
        techStack: "C#, Unity, A* Pathfinding, Mapbox SDK, OpenStreetMap"
      },
      "Forward Collision Warning System": {
        desc:
          "Developed a portable Lidar-based proximity system with Bluetooth connectivity and a mobile speedometer app to alert drivers and prevent rear-end collisions.",
        techStack: "Arduino, Lidar, HC-06 Bluetooth, Java, XML, Android Studio"
      }
    };

    return (
      <div id="projects">
        <div className="section-header">
          <span className="section-title">/ projects</span>
        </div>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`} key={key}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon" style={{ paddingBottom: "10px" }}>
                      <FolderOpenRoundedIcon style={{ fontSize: 35 }}/>
                    </div>
                  </div>
                  <div className="card-title" style={{ paddingBottom: "10px" }}>{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
