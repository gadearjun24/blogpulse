import React, { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import "./CategoryBlog.css";
import BlogsSection from "../../components/BlogsSection/BlogsSection";
import BlogsContext from "../../Context/BlogsContext";

function CategoryBlog() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const { blogs, loading, } = useContext(BlogsContext);
  return (
    <div className="category-blog">
      <h1 className="category-title">
        {category.split("-")[0]} {category.split("-")[1]}
      </h1>
      <div className="blogs-container">
        {blogs.map((blog, index) => {
          if (blog.category === category) {
            return (
              <BlogsSection
                key={index}
                title={blog?.title}
                description={blog?.content}
                category={blog?.category}
                image={blog?.image}
                id={blog?.id}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default CategoryBlog;
