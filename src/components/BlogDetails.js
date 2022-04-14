import { useState } from "react";
import useFetch from "../useFetch";
// state changes spreads all of elements
// TODO: see TODO and add React Router
const BlogDetails = () => {
  const { data: blog } = useFetch('http://localhost:8000/blogs/1')
  const [likes, setLikes] = useState(10);
  const handleClick = (e) => {
    setLikes(likes => likes + 1);
    e.target.setAttribute('disabled', true)
  }
  return (
    <div className="blog-details">
      <h3 href="/blogs/${blog.id}" ><b>{blog.title}</b></h3>
      <p>{blog.content}</p>
      <small><em><p>Author: {blog.author}</p></em></small>
      <small><p className="likes">Likes: {likes}</p></small>
      <button onClick={handleClick}>Like</button>
    </div>
  );
}

export default BlogDetails;