const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map((blog) =>
      (
        <div className="blog" key={blog.id}>
          <a href="/blogs/${blog.id}" ><b>{blog.title}</b></a>
          <p>{blog.content}</p>
          <small><em><p>Author: {blog.author}</p></em></small>
          {/* <small><p className="likes">Likes: 10</p></small> */}
        </div>)
      )
      }
    </div>
  )
}

export default BlogList;