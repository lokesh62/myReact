import { useState } from "react";

const Home = () => {
    const[blogs,setBlogs] = useState([
        {title:"1st website", body:"welcome to first blog", author:"robert",id:1},
        {title:"2nd website", body:"welcome to second blog", author:"chris",id:2},
        {title:"3rd website", body:"welcome to third blog", author:"rocket",id:3}
    ]);
     return (    
        <div className="Home">  
        {blogs.map((blog) => (         
            <div className="blogPreview">
            <h2>{blog.title}</h2>
            <p>written by <strong>{blog.author}</strong></p>  
            </div>    
                  
        ))}
        </div>
     );
    }
export default Home;