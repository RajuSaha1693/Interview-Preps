import { useEffect, useState } from "react"
import { JsonPlaceholderInstance } from "./services/Instances"
import Posts from "./components/Posts";
import "./App.css"
const App = () => {
  const [posts,setPosts]=useState([]);
  useEffect(()=>{
    const fetchPosts=async()=>{
      const response=await JsonPlaceholderInstance.get("posts");
      const postList=await response.data;
      setPosts(postList);
    }
    fetchPosts();
  },[])
  return (
    <div className="main-container">
      <Posts posts={posts}/>
    </div>
  )
}

export default App