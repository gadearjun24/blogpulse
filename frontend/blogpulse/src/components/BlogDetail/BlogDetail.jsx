import { useContext } from "react";
import "./BlogDetail.css";
import BlogsContext from "../../Context/BlogsContext";

function BlogDetail({ id, category }) {
  const { blogs, loading } = useContext(BlogsContext);

  return (
    <>
      <div>
        <div className="detail-blog-container">
          <div className="blog-full-image">
            <img src={blogs[id - 1]?.image} alt="" />
            <div className="blog-date">
              <span>date : </span>
              {blogs[id - 1]?.date}
            </div>
          </div>

          <div className="blog-title">
            <h1>
              <span>title : </span>
              {blogs[id - 1]?.title}
            </h1>

            <div className="blog-auther">
              <span>author ✍️ : </span> {blogs[id - 1]?.author}
            </div>
          </div>

          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: blogs[id - 1]?.content }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default BlogDetail;
