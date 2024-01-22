// src/components/Resumes.js
import React from "react";

const Resumes = () => {
  return (
    <section id="resume">
      <h2>Resume</h2>
      {/* Add your resume or link to your LinkedIn profile here */}
      <p>
        <a href="./CV.pdf" target="_blank" style={{ color: "#000" }}>
          CV
        </a>
      </p>
      <p>
        <a
          href="https://www.linkedin.com/in/kunndnn/"
          target="_blank"
          style={{ color: "#000" }}
        >
          LinkedIn
        </a>
      </p>
      <p>
        <a
          href="https://github.com/kunndnn"
          target="_blank"
          style={{ color: "#000" }}
        >
          Github
        </a>
      </p>
    </section>
  );
};

export default Resumes;
