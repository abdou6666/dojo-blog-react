import { useParams } from "react-router-dom";
import useFetch from "../customHooks/useFetch";
const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isLoading, error } = useFetch(`http://localhost:8000/blogs/${id}`);
    return (
        <div className="blog-details">
            {isLoading && <div>Loading ...</div>}
            {error && <div> {error} </div>}
        
           {blog && (<article>
                 <h2>{blog.title}</h2>
                 <div>{blog.body}</div>
                 <p> Write by {blog.author}</p>
            </article>)
            }
        </div>
    );
}
 
export default BlogDetails;