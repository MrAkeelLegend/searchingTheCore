import { useHistory, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";


const BlogDetails = () => {

  const { id } = useParams();
  //const { data: blog, isPending, error } = useFetch(`https://my-json-server.typicode.com/MrAkeelLegend/searching-the-core/blogs/${id}`);
  const { data: blog, isPending, error } = useFetch(`https://searching-the-core-backend.herokuapp.com/${id}`);
  const history = useHistory();

  const handleDelete = () => {
    fetch(`https://searching-the-core-backend.herokuapp.com/${id}`, {
      method: "DELETE"
    }).then(() => {
      console.log("blog deleted successfully");
      history.push('/');
    })
  }

  console.log(id);

  return ( 
    <div className="blog-details">
      {error && <div>{error}</div> }
      {isPending && <div>Loading....</div> }
      {blog &&
        <article>
          <h2>{ blog.title }</h2>
          <p>wriiten by: { blog.author }</p>
          <div>{ blog.body }</div>
          <button onClick={() => handleDelete()}>Delete Blog</button>
        </article>
      }
    </div>
   );
}
 
export default BlogDetails;