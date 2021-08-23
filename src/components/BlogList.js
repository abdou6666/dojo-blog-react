import React from 'react';

export default function BlogList(props) {
    console.log(props);
    const blogs = props.blogs;
    return (
        
            blogs.map( (blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Write by {blog.author}</p>
                </div>
                
            ))
    )
            
}
