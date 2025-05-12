import React from "react";
import "./Modal.css";

const ProjectModal = ({
  isOpen,
  onClose,
  title,
  description,
  image,
  detail,
  link,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          &#10006;
        </button>
        {image && <img src={image} alt={title} className="modal-image" />}
        <h2 className="modal-title">{title}</h2>
        <p className="modal-description">{description}</p>
        {link && (
          <a href={link} style={{ textDecoration: "none" }}>
            View Website
          </a>
        )}
        <p className="modal-detail">{detail}</p>
      </div>
    </div>
  );
};

export default ProjectModal;
