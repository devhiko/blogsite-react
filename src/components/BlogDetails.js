// import { useState } from "react";
import { useParams } from "react-router";
import useFetch from "../useFetch";
import '../styles/BlogDetails.style.css'

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog } = useFetch(`http://localhost:8000/blogs/${id}`)
  // const [likes, setLikes] = useState(10);
  // const handleClick = (e) => {
  //   setLikes(likes => likes + 1);
  //   e.target.setAttribute('disabled', true)
  // }
  // localStorage.setItem('Likes', likes);
  // const newLike = localStorage.getItem('Likes');
  // console.log(newLike)
  return (
    <div className="blog-details">
      <h3><b>{blog.title}</b></h3>
      <p>{blog.content}</p>
      <small><em><p>Author: {blog.author}</p></em></small>
      {/* <small><p className="likes">Likes: {newLike}</p></small> */}
      {/* <button onClick={handleClick}>Like</button> */}
    </div>
  );
}

export default BlogDetails;