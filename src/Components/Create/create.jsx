import './create.css'

const Create = ({firstName,phoneNumber,setLastName,setFirstName,setPhoneNumber,handleClick}) => {
	return (
	<div className = 'box-container'>
		<p className='title'>CREATE NEW TO DO</p>

		<div className = 'create'>


		    <label>
			TITLE
			<input type = 'text' name = 'firstName' placeholder = 'Enter title'value = {firstName} onChange={(e) =>setFirstName(e.target.value) }/>
			</label>

			<label>
			BODY
			<input type = 'text' name = 'PhoneNumber'placeholder = 'Enter todo' value = {phoneNumber} onChange={(e) =>setPhoneNumber(e.target.value) }/>
			</label>
            <button onClick = {handleClick} >Create</button>
		</div>
 </div>
		)
}
export default Create