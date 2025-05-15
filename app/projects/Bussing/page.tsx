"use client";
import React from "react";
import { Layout, Typography} from "antd";
import Link from "next/link";

const { Title, Text } = Typography;
const { Content } = Layout;

const project = {
  id: "Bussing",
  title: "Bussing",
  description:
    "Bussing is an Android app that provides users with up-to-date Singapore bus arrival times and a map for easy bus stop location visualization.",
  image: "./busTiming1.png",
  tags: ["Android Studio", "Java", "Google Maps API", "LTA DataMall API"],
  buttonLink: "",
};

export default function ProjectDetailPage() {
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
<Layout style={{ background: "#fff"}}>
            <Content style={{ maxWidth: "700px", margin: "0 auto" }}>
          <Link
            style={{ fontSize: "16px", width: "15%", color: "#8f8e8e", fontWeight:"lighter" }}
            href="/projects"
          >
            ← back to projects
          </Link>
          <img
            src={project.image}
            alt={project.title}
            className="project-img"
            style={{ marginTop: "30px" }}
          />
          <Title level={1} style={{ marginTop: "50px" }}>{project.title}</Title>
          <div className="tags-container" style={{ marginTop: "20px", fontSize: "medium" }}>
            {project.tags.map((tag, i) => (
              <span className="custom-tag" key={i}>
                {tag}
              </span>
            ))}
          </div>

          <div style={{ marginTop: "50px" }}>
            <div style={{ display: "block" }}>
              <Text className="text-content">I created <strong>Bussing</strong>, an Android application that provides real-time bus arrival times and an interactive map to help users locate nearby bus stops in Singapore.</Text>
              <br></br>
              <br></br>
              <br></br>
              <Text className="text-content">This was a personal project where I challenged myself to build something useful from scratch. The app brings together live public transport data and location services to offer a smooth and helpful experience for daily commuters.</Text>
              <br></br>
              <br></br>
              <br></br>
              <Text className="text-content">The core technologies used include:</Text>
              <br></br>
              <br></br>
              <Text>
                <ul>
                  <li className="text-content"><strong>Android Studio & Java:</strong> Built the entire mobile application using native Android development tools, ensuring a responsive and stable user experience across devices.</li>
                  <li className="text-content"><strong>LTA DataMall API: </strong> Integrated Singapore’s official Land Transport Authority API to fetch accurate, up-to-date bus arrival times.</li>
                  <li className="text-content"><strong>Google Maps API:</strong> Embedded an interactive map interface to help users easily locate nearby bus stops and visualize routes.</li>
                </ul>
              </Text>
              <br></br>
              <Text className="text-content">This project helped me improve my skills in Android development, working with APIs, and using map features in mobile apps. More importantly, it taught me how to design simple, user-friendly solutions that solve everyday problems.</Text>
            </div>
          </div>

        </Content>
      </Layout>
    </div>
  );
}
