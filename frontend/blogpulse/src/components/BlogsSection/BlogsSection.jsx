import React from "react";
import "./BlogsSection.css";
import { useNavigate } from "react-router-dom";

function BlogsSection({ title, description, image, category, id }) {
  const navigate = useNavigate();

  function handleBlogClick(category, id) {
    navigate(`/blog?category=${category}&id=${id}`);
    window.scrollTo(0, 0);
  }
  return (
    <>
      <div
        className="blog-section"
        onClick={() => handleBlogClick(category, id)}
      >
        <div className="blog-image-detail">
          <div className="blog-image">
            <img src={image} alt="blog_image" />
          </div>
          <div className="blog-details">
            <div className="title">
              <h1>{title}</h1>
            </div>
            <div className="description">
              <h3 dangerouslySetInnerHTML={{ __html: description }}></h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogsSection;
