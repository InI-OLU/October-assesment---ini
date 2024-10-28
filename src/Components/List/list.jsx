import './list.css'
import axios from 'axios';
import { useEffect,useState } from 'react';

const List = ({handleDelete}) => {
	const [post, setPost] = useState([])
	const getData = async () => {
		await axios
		  .get("https://assessment-server-8rmp.onrender.com/ini/todos")
		  .then((response) => {
			setPost(response.data);
		  })
		  .catch((error) => {
			console.error(error);
		  });
	  };
	  useEffect(() => {
		getData();
	  }, []);
	return (
		<div className = 'box-container'>
			<p className = 'title'>LIST OF TO DO</p>

			<div className = 'list'>
				{post.length <= 0 ? (<p className = 'empty'>YOU HAVE NO TO DO</p>): (
                    post.map((items) => (
                    	<div key= {items?.id} className ='contact-card'>

                    	<div className = 'contact-info'>
                    <p className ='contact-name'>
                    	{items?.title} {items?.message}
                        </p>
    
                    	</div>
                           
                           <button onClick = {() =>handleDelete( items.id)}>Delete</button>
                    </div>
                    ))
					)}
			</div>
		</div>

		)
}
export default List


