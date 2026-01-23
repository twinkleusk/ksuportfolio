import {
  FaChartBar,
  FaPython,
  FaDatabase,
  FaProjectDiagram,
  FaCloud,
  FaCogs,
} from "react-icons/fa";
import "./WhatIDo.css";

// ✅ add this import (path must match your file)
import geminiformalandworkingImg from "../assets/whatido/geminiformalandworking.png";

function WhatIDo() {
  return (
    <section className="whatido" id="what-i-do">
      <h2 className="whatido-title">What I Do?</h2>

      <div className="whatido-grid">
        <div className="whatido-illustration">
          <div className="illus-card">

            {/* ✅ NEW: image area (top-right corner) */}
            <div className="illus-media">
              <img src={geminiformalandworkingImg} alt="Analytics illustration" loading="lazy" />
            </div>

            <div className="illus-stat">
              <h4>+40%</h4>
              <p>Pipeline Performance Improvement</p>
            </div>
            <div className="illus-stat">
              <h4>150+</h4>
              <p>ETL & Data Pipelines Built</p>
            </div>
            <div className="illus-stat">
              <h4>8M+</h4>
              <p>Records Processed</p>
            </div>
          </div>
        </div>

        <div className="whatido-right">
          <h3 className="whatido-heading">
            Data Engineering & <br /> Analytics
          </h3>

          <div className="whatido-icons">
            <div className="whatido-icon"><FaChartBar /></div>
            <div className="whatido-icon"><FaPython /></div>
            <div className="whatido-icon"><FaDatabase /></div>
            <div className="whatido-icon"><FaProjectDiagram /></div>
            <div className="whatido-icon"><FaCloud /></div>
            <div className="whatido-icon"><FaCogs /></div>
          </div>

          <ul className="whatido-list">
            <li>Building scalable batch and streaming data pipelines</li>
            <li>Data Modeling, warehouse optimization and performance tuning</li>
            <li>Automation, monitoring, and reliable data delivery for analytics team</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WhatIDo;
