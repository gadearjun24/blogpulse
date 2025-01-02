import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import BlogsContext from "../../Context/BlogsContext.jsx";
import BlogDetail from "../../components/BlogDetail/BlogDetail.jsx";

function Blog() {
  const {loading } = useContext(BlogsContext);

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const category = searchParams.get("category");

  return (
    <>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <BlogDetail id={id} category={category} />
      )}
    </>
  );
}

export default Blog;
