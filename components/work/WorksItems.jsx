/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";

const WorksItems = ({ item }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const previewTimeoutRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
      if (previewTimeoutRef.current) clearTimeout(previewTimeoutRef.current);
    };
  }, []);

  const handleDemoClick = (e) => {
    e.preventDefault();

    if (item.status !== "completed") {
      setShowTooltip(true);
      return;
    }

    if (item.demoUrl && item.demoUrl !== "#") {
      window.open(item.demoUrl, "_blank", "noreferrer");
    }
  };

  const handleSourceClick = (e) => {
    e.preventDefault();
    if (item.sourceUrl && item.sourceUrl !== "#") {
      window.open(item.sourceUrl, "_blank", "noreferrer");
    }
  };

  const handleMouseEnter = () => {
    if (item.status !== "completed") return;

    if (!isMobile && item.demoUrl && item.demoUrl !== "#") {
      previewTimeoutRef.current = setTimeout(() => {
        setShowPreview(true);
      }, 500);
    }
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
    if (previewTimeoutRef.current) clearTimeout(previewTimeoutRef.current);
    setShowPreview(false);
  };

  return (
    <div
      className="work__card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={item.image} alt={item.title} className="work__img" />

      {/* STATUS BADGE */}
      <span className={`work__status work__status--${item.status}`}>
        {item.status === "completed"
          ? "Completed"
          : item.status === "academic"
          ? "Academic Project"
          : "Under Development"}
      </span>

      <h3 className="work__title">{item.title}</h3>

      {/* LIVE PREVIEW (Desktop Only) */}
      {!isMobile &&
        showPreview &&
        item.status === "completed" &&
        item.demoUrl && (
          <div className="work__preview">
            <iframe
              src={item.demoUrl}
              title={`Preview of ${item.title}`}
              className="work__preview-iframe"
              sandbox="allow-scripts allow-same-origin"
            />
            <div className="work__preview-overlay">
              <button
                className="work__preview-button"
                onClick={() =>
                  window.open(item.demoUrl, "_blank", "noreferrer")
                }
              >
                Open Live Project
              </button>
            </div>
          </div>
        )}

      {/* BUTTONS */}
      <div className="work__button-container">
        <a
          href="#"
          className="work__button"
          onClick={handleDemoClick}
          onMouseEnter={() =>
            item.status !== "completed" && setShowTooltip(true)
          }
          onMouseLeave={() => setShowTooltip(false)}
        >
          <i className="bx bx-globe work__button-icon" />
          Live Demo
        </a>

        {showTooltip && item.status !== "completed" && (
          <div className="work__tooltip">
            {item.status === "academic"
              ? "Academic / FYP Project"
              : "Project in Progress"}
          </div>
        )}

        <a href="#" className="work__button" onClick={handleSourceClick}>
          <i className="bx bxl-github work__button-icon" />
          Source Code
        </a>
      </div>
    </div>
  );
};

export default WorksItems;
