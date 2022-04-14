import useFetch from "../useFetch";
import BlogList from "./BlogList";

const Home = () => {
  const { data: blogs } = useFetch('http://localhost:8000/blogs');
  return (
    <div className="blogs">
      <BlogList blogs={blogs} />
    </div>
  )
}

export default Home;