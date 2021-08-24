import React from 'react';
import { Link } from 'react-router-dom';
export default function BlogList(props) {
// export default function BlogList( {blogs,title} ) another way of deconstructing it 
    const blogs = props.blogs;
    const title = props.title;
 //   const deleteHandler = props.deleteHandler;
    return (
        <div className="blog-list">
            <h2> {title}</h2>
           { blogs.map( (blog) => (
                <div className="blog-preview" key={blog.id}>
                   <Link to={`blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                   <p>Write by {blog.author}</p>
                   </Link>

                </div>
                
            ))}
        </div>
        
    )
            
}
