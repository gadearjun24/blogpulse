import React, { useContext } from "react";
import "./BlogCategories.css";
import BlogsSection from "../BlogsSection/BlogsSection";
import BlogsContext from "../../Context/BlogsContext";
import { useNavigate } from "react-router-dom";

function BlogCategories({ categorires }) {
  const { blogs, loading } = useContext(BlogsContext);
  const navigate = useNavigate();

  function handleMoreBtnClick(category) {
    console.log(category);
    navigate(`/category?category=${category}`);
  }

  return (
    <>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <>
          {categorires.map((category, index1) => {
            return (
              <div className="single-blog-container" key={index1}>
                <div className="category-name">
                  <h1>{category}</h1>
                </div>
                <div className="blogs">
                  {blogs.map((blog, index2) => {
                    if (
                      // index2 < (index1 + 1) * 3 &&
                      blog.category === category
                    ) {
                      return (
                        <BlogsSection
                          key={index2}
                          title={blog.title}
                          description={blog.content}
                          image={blog.image}
                          category={category}
                          id={blog.id}
                        />
                      );
                    }
                  })}

                  <div
                    className="more-blogs-card"
                    onClick={() => handleMoreBtnClick(category)}
                  >
                    <div className="more-btn">More ➔</div>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
}

export default BlogCategories;
