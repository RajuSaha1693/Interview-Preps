import { useEffect, useState } from "react"
import { JsonPlaceholderInstance, FakeStoreInstance} from "./services/Instances"
import Posts from "./components/Posts";
import Navbar from "./layouts/Navbar";
import Products from "./components/Products";
import "./App.css"
const App = () => {
  const [posts,setPosts]=useState([]);
  const [products,setProducts]=useState([]);
  useEffect(()=>{
    const fetchPosts=async()=>{
      const response=await JsonPlaceholderInstance.get("posts");
      const postList=await response.data;
      setPosts(postList);
    }
    const fetchProducts=async()=>{
      const response=await FakeStoreInstance.get("products");
      const productList=await response.data;
      setProducts(productList)
    }
    fetchPosts();
    fetchProducts();
  },[])
  console.log(products);
  return (
    <>
    <Navbar/>
    <div className="main-container">
      <Products products={products}/>
      <Posts posts={posts}/>
    </div>
  </>
  )
}

export default App