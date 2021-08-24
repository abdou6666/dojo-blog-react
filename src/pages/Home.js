import React from 'react'
import useFetch from '../customHooks/useFetch';
import BlogList from '../components/BlogList';
function Home() {
  //  let name = 'mario';
   
  const { error, isLoading, data: blogs } = useFetch('http://localhost:8000/blogs');
  console.log("error " +error);
  console.log("loading " +isLoading)
  console.log("blogs " +blogs)
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