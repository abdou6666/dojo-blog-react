import { useState } from 'react';
import { useHistory } from 'react-router-dom';
const NewBlog = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Yoshi');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    function titleHandle(e) {
        setTitle(e.target.value);
    }


     function bodyHandle(e) {
        setBody(e.target.value);
    }

     function authorHandle(e) {
        setAuthor(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const blog = { title, body, author };
        setIsPending(true);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body : JSON.stringify(blog)
        })
        .then(() => {
            console.log("added blog");
            setIsPending(false);
            //shistory.go(-1);
            history.push('/');
        })
    }
    return (<div className="create">
        <h2>Add a New Blog</h2>
        <form onSubmit={handleSubmit}>
            <label> Blog title :</label>
            <input type="text" value={title} onChange={titleHandle} required/>
            <label> Body :</label>
            <textarea required value={body} onChange={bodyHandle}> </textarea>
            <label> Blog Author :</label>
            <select value={author} onChange={authorHandle}>
                <option value="Yoshi"> Yoshi</option>
                <option value="Mario"> Mario</option>
            </select>
            {!isPending && <button> Add Blog</button>}
            {isPending && <button disabled> Adding blog...</button>}
         
            </form>
    </div> );
}
 
export default NewBlog;