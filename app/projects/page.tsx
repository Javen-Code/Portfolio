"use client";
import React from "react";
import { Layout, Typography, Card,} from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";

const { Title, Text } = Typography;
const { Content } = Layout;

const projects = [
  {
    id: "Portfolio",
    title: "Portfolio Website",
    description: "It is the website you are viewing right now! " ,
    image: "./portfolioWeb1.png", 
    tags: ["Next.js", "CSS", "AntD"],
    year: "2025",
  },
  {
    id: "Claim-Queue",
    title: "Claim Queue",
    description: "A web module within NPHC (National Platform for Healthcare Claims) that allow users to track their claim status and position in real time.",
    image: "./claimQueue1.png",
    tags: ["Next.js", "Kotlin", "Springboot", "AntD"],
    year: "2024",
  },
  {
    id: "Video-Deepfake-Detector",
    title: "Video Deepfake Detector",
    description: "A deepfake detection application that leverages a hybrid CNN-RNN model to analyze live or uploaded videos and classify them.",
    image: "./deepfakeDetect1.jpg",
    tags: ["Flask", "Python", "TensorFlow", "ChatGPT API"],
    year: "2024",
  },
  {
    id: "Bussing",
    title: "Bussing",
    description: "Bussing is an Android app that provides users with the up-to-date Singapore bus arrival times and a map for easy bus stop location visualization.",
    image: "./busTiming1.png", 
    tags: ["Android Studio", "Java", "Google Maps API", "LTA DataMall API"],
    year: "2023",
  },
];


export default function ProjectPage() {
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Title level={1}>
              my projects. <span style={{ fontSize: "50px" }}>&#128187;</span>
            </Title>

            <div
              className="featured-div"
              style={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "24px",
                cursor: "pointer",
              }}
            >
              {projects.map((project) => (
                 <Link key={project.id} className="project-card" href={`/projects/${project.id}`} passHref>
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
                    <div style={{ zIndex: "500", paddingTop: "15px" }}>
                      <Title level={5} style={{margin:"0"}}>{project.title}</Title>
                      <Text type="secondary">{project.year}</Text>
                      <p style={{marginTop:"10px"}}>{project.description}</p>
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
                </Link>
              ))}
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
}