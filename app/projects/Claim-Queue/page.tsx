"use client";
import React from "react";
import { Layout, Typography } from "antd";
import Link from "next/link";

const { Title, Text } = Typography;
const { Content } = Layout;

const project = {
  id: "Claim-Queue",
  title: "Claim Queue |  FYP at NCS",
  description:
    "A web module within NPHC (National Platform for Healthcare Claims) that allows users to track their claim status and position in real time.",
  image: "/claimQueue1.png",
  tags: ["Next.js", "Kotlin", "Springboot", "AntD"],
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
              <Text className="text-content">As part of my 52-week internship at NCS, I had the opportunity to work on a key component of the National Platform for Healthcare Claims (NPHC) — <strong>the Claim Queue Module</strong> — which I developed as my Final Year Project.</Text>
              <br></br>
              <br></br>
              <br></br>
              <Text className="text-content">This module was designed to help Medical Institutes (MIs) and Private Medical Insurers (PMIs) track the status of healthcare claims in real-time. It enables users to monitor exactly where a claim is positioned in the processing queue, improving transparency and reducing follow-up efforts.</Text>
              <br></br>
              <br></br>
              <br></br>
              <Text className="text-content">I was responsible for the end-to-end development of this module. My role covered the full software development lifecycle:</Text>
              <br></br>
              <br></br>
              <Text>
                <ul>
                  <li className="text-content"><strong>Requirement Gathering:</strong> Engaged directly with stakeholders to identify user needs and define clear technical requirements.</li>
                  <li className="text-content"><strong>Design & Development:</strong> Architected the solution and built the module from the ground up, ensuring alignment with industry standards and system compatibility.</li>
                  <li className="text-content"><strong>Testing & Iteration:</strong> Conducted rigorous testing and implemented feedback to refine the user experience.</li>
                  <li className="text-content"><strong>Deployment:</strong> Successfully deployed the module into the staging and production environments under guidance from senior engineers.</li>
                </ul>
              </Text>
              <br></br>
              <Text className="text-content">This project strengthened my skills in agile development, client communication, and healthcare IT systems. It was a valuable real-world experience that showcased my ability to deliver production-ready software that addresses critical business needs.</Text>
            </div>
          </div>

        </Content>
      </Layout>
    </div>
  );
}
