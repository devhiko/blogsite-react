const Blog = () => {
  return (
    <div className="blog">
      <a href="/"><h4>Blog Title</h4></a>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit officia recusandae, vero tempore ipsum error vel impedit. Similique accusantium beatae illo labore, incidunt, perspiciatis quos ratione odit alias soluta earum.</p>
      <small><em><p>Author: author</p></em></small>
      <small><p className="likes">Likes: 10</p></small>
      <button className="like">Like</button>
      <a href="/" className="read">Read More</a>
    </div>
  );
}

export default Blog;