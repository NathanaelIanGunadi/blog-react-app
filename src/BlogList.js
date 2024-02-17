import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = (prop) => {
    const blogs = prop.blogs;
    const handleDelete = prop.handleDelete;

    return ( 
        <div className="blog-list">
            
            <h1>{prop.title}</h1>
            {blogs.map((blog) => (
                <div className="blog-prev" key={blog.id}>
                    <Link to={`/details/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>written by {blog.author}</p>
                    </Link>
                    <button onClick={() => handleDelete(blog.id)}>Delete</button>
                </div>
            ))}
            
        </div>
     );
}
 
export default BlogList;