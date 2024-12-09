"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";

interface CounterProps {
  height?: string;
  width?: string;
  poster?: string;
  videoLink?: string;
  objectPosition?: string;
}

function Counter({
  poster = "",
  videoLink = "https://d2y941kkirbmq4.cloudfront.net/media/ldvideos/motherdancing.mp4",
  width = "100%",
  height = "488px",
  objectPosition = "center",
}: CounterProps) {



  return (
    <div style={{
      height,
      width,
    }} >
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={poster}
        aria-label="Video content"
        style={{
          objectFit: "cover",
          objectPosition,
          height,
          width,
        }}
      >
        <source src={videoLink} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Counter;
