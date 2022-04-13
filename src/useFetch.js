import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setBlogs] = useState(null);
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => { setBlogs(data) })
      .catch(err => console.log(err.message));
  }, [url]);

  return data;
}

export default useFetch;