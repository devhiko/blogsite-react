import useFetch from "../useFetch";

const Home = () => {
  // FIXME: ERROROOOARO HERE
  const { data: blogs } = useFetch('http://localhost:8000/blogs');
  return (
    <div className="blogs">
      {blogs.map(blog => {
        return (
          <div key={blog.id} className="blog">
            <a href="/" ><h4 >{blog.title}</h4></a>
            <p>{blog.content}</p>
            <small><em><p>Author: {blog.author}</p></em></small>
            <small><p className="likes">Likes: 10</p></small>
            <button className="like">Like</button>
            <a href="/" className="read">Read More</a>
          </div>
        )
      })}
    </div>
  )
}

export default Home;