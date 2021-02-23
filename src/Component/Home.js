import useFetch from '../hooks/useFetch';
import Bloglist from './Bloglist';

const Home = () => {

  //const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs");
  //https://my-json-server.typicode.com/MrAkeelLegend/searching-the-core/db
  //const { data: blogs, isPending, error } = useFetch("https://my-json-server.typicode.com/MrAkeelLegend/searching-the-core/blogs");
  const { data: blogs, isPending, error } = useFetch("https://searching-the-core-backend.herokuapp.com/all-blogs");
  //const { data: blogs, isPending, error } = useFetch("https://my-json-server.typicode.com/MrAkeelLegend/searching-the-core/blogs");


  return ( 
    <div className="home">
      {error && <div>{error}</div> }
      {isPending && <div>Loading....</div> }
      { blogs && <Bloglist blogs={blogs} title='All Blogs' />}
    </div>
   );
}
 
export default Home;