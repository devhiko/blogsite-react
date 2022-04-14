import { useState, useEffect } from "react";

const useFetch = (url) => {
  // ! it must be empty array instead null for no blogs
  const [data, setBlogs] = useState([]);
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setBlogs(data))
      .catch(err => console.log(err.message));
  }, [url]);
  return { data };
}

export default useFetch;