"use client";
import React from "react";
import { Layout } from "antd";
import Link from "next/link";
import '../app/globals.css';  // Make sure this is included

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header
      style={{
        background: "white",
        padding: "0 30px",
        backgroundColor: "#ffffff99",
        backdropFilter: "blur(7px)",
        paddingBlockStart: "10px",
        position: "fixed",
        width: "100%",
        left: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >

        <div
          style={{
            display: "flex",
            gap: "30px",
          }}
        >
          <Link className="header-button" href="/">home</Link>
          <Link className="header-button" href="/projects">projects</Link>

          {/* <Link className="header-button" href="/achievements">achievements</Link> */}

        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "flex-end",
            gap: "30px",
          }}
        >

          {/* <Link href="/">
            <span className="header-button" style={{ fontSize: "20px" }}>&#x1F5B3;</span>
          </Link> */}
          
        </div>
      </div>
    </Header>
  );
};

export default Navbar;
