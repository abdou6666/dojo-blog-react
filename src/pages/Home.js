import React from 'react'
import useFetch from '../customHooks/useFetch';
import BlogList from '../components/BlogList';
function Home() {   
  const { error, isLoading, data: blogs } = useFetch('http://localhost:8000/blogs');

    return (
      <div className="home">
           { error && <div>{ error }</div> }
           { isLoading && <div>Loading...</div> }
           { blogs && <BlogList blogs={blogs} /> }

        </div>
    );
}
export default Home;

//blogs && <BlogList blogs={blogs} title="All Blogs !" /> 