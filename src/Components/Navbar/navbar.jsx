import './navbar.css'

const Navbar = ({page ,setPage}) => {
	return(
		<div className = 'navbar'>
			<p className ='title'>TO DO LIST</p>

			<div className='navlinks'>
				<p className = {`link ${page && 'active'}`} onClick = {() =>setPage(true)}>List</p>
				<p className =  {`link ${!page && 'active'}`} onClick = {() =>setPage(false)}>Create</p>
			</div>
		</div>
		)
}
export default Navbar