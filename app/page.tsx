"use client";
import React, { useState } from "react";
import { Layout, Typography, Card } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";


const { Title, Text } = Typography;
const { Content } = Layout;

const portfolioData = {
  education: [
    {
      id: "edu1",
      school: "Temasek Polytechnic",
      degree: "Diploma with Merit, Cybersecurity & Digital Forensics",
      period: "2022 - 2025",
      description: [
        "Graduated with a CGPA of 3.79/4.00",
        "Recipient of Director's List for AY2023/2024 and AY2024/2025",
        "Recieved the Daisy Phay TP Foundation Scholarship",
        "Completed Temasek Poly LEADership Programme (LEAD-EXCEL)",
      ],
      logo:
        "https://pbs.twimg.com/profile_images/582710143407628288/KnH1av6w_400x400.jpg",
      linkName: "Academic Transcript",
      link: "/Academic Transcript.pdf"
    },
    {
      id: "edu2",
      school: "Temasek Polytechnic",
      degree: "Polytechnic Foundation Programme, Informatics & IT",
      period: "2021 - 2022",
      description: [],
      logo:
        "https://pbs.twimg.com/profile_images/582710143407628288/KnH1av6w_400x400.jpg",
    },
  ],
  workExperience: [
    {
      id: "work1",
      company: "NCS",
      role: "Software Engineer Intern",
      period: "April 2024 - March 2025",
      description: [
        "Worked closely with GovTech and MOH colleagues to develop an healthcare web app.",
        "Developed a module actively being used by over 3,000 Medical Institutes and 7 Private Medical Insurers, allowing them to check the status of claims.",
        "Created using Kotlin, Next.js and Spring Boot",
      ],
      logo:
        "https://media.licdn.com/dms/image/v2/C4D0BAQFxBZqArwK5ZQ/company-logo_200_200/company-logo_200_200/0/1635497135829/ncs_group_logo?e=2147483647&v=beta&t=UXMYiE5sLlUdT8s6iySI2MSnPj-NhJoqiaotUtHRKEs",
    },
  ],
};

const projects = [
  {
    id: "Video-Deepfake-Detector",
    title: "Video Deepfake Detector",
    description:
      "A deepfake detection application that leverages a hybrid CNN-RNN model to analyze live or uploaded videos and classify them.",
    image: "/deepfakeDetect1.jpg",
    tags: ["Flask", "Python", "TensorFlow", "ChatGPT API"],
    buttonLink: "/projects/Video-Deepfake-Detector",
  },
  {
    id: "Bussing",
    title: "Bussing",
    description:
      "Bussing is an Android app that provides users with the up-to-date Singapore bus arrival times and a map for easy bus stop location visualization.",
    image: "/busTiming1.png",
    tags: ["Android Studio", "Java", "Google Maps API", "LTA DataMall API"],
    buttonLink: "/projects/Bussing",
  },
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("education");
  const router = useRouter();

  const handleProjectClick = (projectId: string) => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
    router.push(`/projects/${projectId}`);
  };

  return (

    <div
      style={{
        maxWidth: "700px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        marginBlockStart: "100px",
      }}
    >
      <Layout style={{ background: "#fff" }}>
        <Content style={{ maxWidth: "700px", margin: "0 auto" }}>
          {/* Header Section */}
          <div className="header" style={{ marginBottom: "50px" }}>
            <div className="left-section">
              <Title style={{ marginTop: "20px" }} level={1}>
                hey, i'm javen&#128512;
              </Title>
              <p style={{ fontSize: "17.5px"}}>a 21-year-old poly graduate from Singapore 🇸🇬</p>
              <p style={{fontSize: "17.5px"}}>i enjoy coding, overthinking and watching my pet shrimps &#129424;</p>
              <div style={{ display: "flex", gap: "15px", marginTop: "30px" }}>

                <a
                  href="https://www.linkedin.com/in/javengoh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "transparent",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center"
                  }}
                >
                  <i className="fa fa-linkedin fa-lg" style={{ width: "30px", height: "30px" }}></i>
                </a>
                <a
                  href="https://github.com/Javen-Code"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "transparent",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center"
                  }}
                >
                  <i className="fa fa-github fa-lg" style={{ width: "30px", height: "30px" }}></i>
                </a>
                <a
                  href="mailto:javen.goh73@gmail.com"
                  style={{
                    background: "transparent",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center"
                  }}
                >
                  <i className="fa fa-envelope fa-lg" style={{ width: "30px", height: "30px" }}></i>
                </a>
              </div>
            </div>

            <div className="right-section" style={{ position: "relative" }}>
              <img className="profile-img" width={"200px"} src="/profilePic.png" />
              <span
                className="waving-hand"
                style={{ fontSize: "100px", position: "absolute", color: "black" }}
              >
                👋
              </span>
            </div>
          </div>

          {/* Tabs */}
          <div
            className="custom-tabs-container"
            style={{
              backgroundColor: "#f3f4f6",
              padding: "4px",
              borderRadius: "8px",
              marginBottom: "10px",
            }}
          >
            <button
              className={`custom-tab-button ${activeTab === "education" ? "active" : ""
                }`}
              onClick={() => setActiveTab("education")}
              style={{ cursor: "pointer" }}
            >
              Education
            </button>
            <button
              className={`custom-tab-button ${activeTab === "work" ? "active" : ""
                }`}
              onClick={() => setActiveTab("work")}
              style={{ cursor: "pointer" }}
            >
              Work
            </button>
          </div>

          {/* Tab Content */}
          <div className="custom-tab-content" style={{ marginBottom: "50px" }}>
            {activeTab === "education" &&
              portfolioData.education.map((edu) => (
                <Card key={edu.id} className="education-card">
                  <div
                    style={{
                      position: "absolute",
                      width: "1px",
                      height: "100%",
                      marginLeft: "24.5px",
                      backgroundColor: "#cfd1d3",
                      marginTop: "-20px",
                    }}
                  ></div>
                  <div style={{ display: "flex" }}>
                    <img
                      src={edu.logo}
                      style={{
                        border: "2px solid #f3f4f6",
                        borderRadius: "10px",
                        height: "50px",
                        width: "50px",
                        marginRight: "15px",
                        zIndex: "500",
                      }}
                    />
                    <div>
                      <Title level={5} style={{ marginBottom: "5px" }}>
                        {edu.school}
                      </Title>
                      <Text type="secondary">{edu.period}</Text>
                      <p style={{color:"#000000", fontWeight:"bold"}}>
                        {edu.degree}
                      </p>
                    </div>
                  </div>
                  <ul style={{ textAlign: "left", marginLeft: "40px", marginTop: "-10px", }}>
                    {edu.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                  <div
                    style={{
                      marginLeft: "65px",
                      marginTop: "-5px",
                    }}
                  >
                  {edu.link && edu.linkName && (
                      <a href={edu.link} target="_blank" rel="noopener noreferrer" className="linkButton">
                        &#128205;{edu.linkName}
                      </a>
                  )}
                  </div>
                </Card>
              ))}
            {activeTab === "work" &&
              portfolioData.workExperience.map((work) => (
                <Card key={work.id} className="experience-card">
                  <div
                    style={{
                      position: "absolute",
                      width: "1px",
                      height: "100%",
                      marginLeft: "24.5px",
                      backgroundColor: "#cfd1d3",
                      marginTop: "-20px",
                    }}
                  ></div>
                  <div style={{ display: "flex" }}>
                    <img
                      src={work.logo}
                      style={{
                        border: "2px solid #f3f4f6",
                        borderRadius: "10px",
                        height: "50px",
                        width: "50px",
                        marginRight: "15px",
                        zIndex: "500",
                      }}
                    />
                    <div>
                      <Title level={5} style={{ marginBottom: "5px" }}>
                        {work.company}
                      </Title>
                      <Text type="secondary">{work.period}</Text>
                      <p style={{color:"#000000", fontWeight:"bold"}}>
                        {work.role}
                      </p>
                    </div>
                  </div>
                  <ul style={{ textAlign: "left", marginLeft: "40px", marginTop: "-10px", }}>
                    {work.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </Card>
              ))}
          </div>

          {/* Featured Projects */}
          <div className="featured-content">
            <div style={{ display: "flex", width: "100%", marginBottom: "10px" }}>
              <h1 style={{ width: "85%" }}>featured projects</h1>
              <Link
                style={{ fontSize: "15px", width: "15%", textAlign: "right", color: "#8f8e8e", fontWeight: "lighter" }}
                href="/projects"
              >
                view more →
              </Link>
            </div>
            <div
              style={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "24px",
              }}
            >
              {projects.map((project) => (
                <Card
                  key={project.id}
                  onClick={() => handleProjectClick(project.id)}
                  style={{ width: "100%", cursor: "pointer" }}
                >
                  <div>
                    <div style={{ height: "200px", overflow: "hidden" }}>
                      <img
                        src={project.image}
                        alt={project.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                    <div style={{ paddingTop: "15px" }}>
                      <Title level={5}>{project.title}</Title>
                      <p>{project.description}</p>
                      <div className="tags-container">
                        {project.tags.map((tag, i) => (
                          <span className="custom-tag" key={i}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default Portfolio;
