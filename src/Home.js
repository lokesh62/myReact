import { useState } from "react";
import BlogList from "./BlogsLists";


const Home = () => {
    const[blogs,setBlogs] = useState([
        {title:"1st website", body:"welcome to first blog", author:"robert",id:1},
        {title:"2nd website", body:"welcome to second blog", author:"chris",id:2},
        {title:"3rd website", body:"welcome to third blog", author:"rocket",id:3}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    };
     return (    
        <div className="Home">
        <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
        </div>
     );
    }
export default Home;