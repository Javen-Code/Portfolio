"use client";
import React from "react";
import { Layout, Typography} from "antd";
import Link from "next/link";

const { Title, Text } = Typography;
const { Content } = Layout;

const project = {
  id: "Video-Deepfake-Detector",
  title: "Video Deepfake Detector",
  description:
    "A deepfake detection application that leverages a hybrid CNN-RNN model to analyze live or uploaded videos and classify them.",
  image: "/deepfakeDetect1.jpg",
  tags: ["Flask", "Python", "TensorFlow", "ChatGPT API"],
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
              <Text className="text-content">As part of a school group project, I worked on a problem statement addressing the growing threat of synthetic media. In response, my team developed an Audio and Video Deepfake Detection Application capable of analyzing and classifying media content as real or fake.</Text>
              <br></br>
              <br></br>
              <br></br>
              <Text className="text-content">Our team of four was divided into two pairs — one focused on audio detection, while my pair handled video-based detection. The goal was to develop a Minimum Viable Product (MVP) to demonstrate the feasibility of an AI-powered detection system. This project also marked my first hands-on experience with machine learning.</Text>
              <br></br>
              <br></br>
              <br></br>
              <Text className="text-content">For the video detection component, we implemented a hybrid CNN-RNN model. The CNN extracted spatial features from individual video frames, while the RNN analyzed temporal inconsistencies across frame sequences — a key indicator of deepfakes.</Text>
              <br></br>
              <br></br>
               <br></br>
              <Text className="text-content">I was responsible for the full development of the video detection pipeline:</Text>
              <br></br>
              <br></br>
              <Text>
                <ul>
                  <li className="text-content"><strong>Model Architecture & Development:</strong> Designed and trained the CNN-RNN model using TensorFlow with publicly available datasets. Applied data augmentation and cross-validation to improve generalizability and reduce overfitting.</li>
                  <li className="text-content"><strong>System Design & Deployment:</strong> Built a system capable of handling both live video streams and uploaded videos, enabling real-time and offline detection for use cases such as content verification and social media moderation.</li>
                  <li className="text-content"><strong>Interface & Integration:</strong> Developed a frontend that visualized the model's predictions and provided real-time user feedback. Enhanced user understanding by passing the visual outputs to the ChatGPT Vision API, which explained detection results in plain language.</li>
                </ul>
              </Text>
              <br></br>
              <Text className="text-content">This project helped me build a strong foundation in AI model development, machine learning workflows, and video analysis. It also showed me how important it is to design tools that are easy for users to understand and trust, especially when dealing with complex technologies like deepfake detection.</Text>
            </div>
          </div>

        </Content>
      </Layout>
    </div>
  );
}

