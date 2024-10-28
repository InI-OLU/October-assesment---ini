import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
const NotFound = () => {
	const route = useNavigate()
	return (
     <div>
     	404! This page is not found 

     	<Link to='/'>Go back to home</Link>

     	<button onClick ={() => route('/About')}>Go to About</button>
     </div>
		)
}
export default NotFound