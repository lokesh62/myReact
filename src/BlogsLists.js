const BlogList = ({blogs,title,handleDelete}) => {
  
    return ( 
        <div className="blog-list"> 
            <p>{title}</p>
            {blogs.map((blog) => (         
            <div className="blogPreview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>written by <strong>{blog.author}</strong></p>  
            <button onClick={()=>handleDelete(blog.id)}>Delete</button>
            </div>               
        ))}
        </div>
     );
}
 
export default BlogList;