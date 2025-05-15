"use client";
import React from "react";
import { Layout, Typography} from "antd";
import Link from "next/link";

const { Title, Text } = Typography;
const { Content } = Layout;

const project = {
  id: "Portfolio",
  title: "Portfolio Website",
  image: "./portfolioWeb1.png",
  tags: ["Next.js", "CSS", "AntD"],
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
      <Layout style={{ background: "#fff" }}>
        <Content style={{ maxWidth: "700px", margin: "0 auto" }}>
          <Link
            style={{ fontSize: "16px", width: "15%", color: "#8f8e8e", fontWeight:"lighter"}}
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
              <Text className="text-content">I came across a really impressive portfolio by&nbsp;
                <a
                  href="https://tedawf.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{textDecoration:"underline"}}
                >
                  Ted 
                   </a>, and it inspired me to build one of my own.</Text>
              <br></br>
              <br></br>
              <Text className="text-content">While I used his site as a design reference, I created mine entirely from scratch without looking at his code.</Text>
              <br></br>
              <br></br>
              <Text className="text-content">It was a great way to apply what I have learned and turn it into something personal and useful.</Text>
              <br></br>
              <br></br>
              <Text className="text-content">
                The whole process was really fulfilling, and it's nice to finally have a space that represents my work!
              </Text>
            </div>
          </div>

        </Content>
      </Layout>
    </div>
  );
}


