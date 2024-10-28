import axios from "axios";
import { useEffect, useState } from "react";


const About = () => {
	const [post, setPost] = useState([])
  const getData = async () => {
    await axios
      .get("https://assessment-server-8rmp.onrender.com/ini/todos")
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return <div>
	{post.map(items => <p key={items?.id}>{items?.title}, {items?.message}</p>)}
  </div>;
};
export default About;
