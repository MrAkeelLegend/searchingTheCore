import { useState } from "react";
import { useHistory } from "react-router-dom";


const Create = () => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Akeellegend');
  const[isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    //const blog = { title, body, author };
    const blog = {
      title: title,
      body: body,
      author: author
    };

    setIsPending(true);

    //https://my-json-server.typicode.com/MrAkeelLegend/searching-the-core/blogs
    //http://localhost:5000/add-blog

    fetch('https://searching-the-core-backend.herokuapp.com/add-blog', {
      method: "POST",
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(blog)
      //body: "hebhbfhub"
      //body: blog
    }).then(() => {
      setIsPending(false);
      console.log("new blog added Successfully");
      console.log(JSON.stringify(blog));
      //history.go(-1);
      history.push('/');
    })

    //console.log(blog);
  }

  return ( 
    <div className="create">
      <h2>Add New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input 
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Body</label>
        <textarea
          required
          rows="10"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        >

        </textarea>
        <label>Blog Author</label>
        <select
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Akeellegend">Akeellegend</option>
          <option value="Annonymous">Annonymous</option>
        </select>
        { !isPending && <button>Add Blog</button> }
        { isPending && <button disabled>Adding ...</button> }
      </form>
    </div>
   );
}
 
export default Create;