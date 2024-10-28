import Navbar from '../Components/Navbar/navbar'
import List from '../Components/List/list'
import Create from '../Components/Create/create'
import {useState} from 'react'
import axios from 'axios'

const Home = () => {
  const [contactList,setContactList] = useState([])
  const [active , setActive] = useState(true)
    const [firstName,setFirstName]=useState('')
      const [phoneNumber,setPhoneNumber]=useState('')
   const handleCreate = async() => {
  if ( firstName.trim() ==='' || phoneNumber.trim() === '' ){
    alert('Please fill all necessary fields!')
    return false
  }

  setContactList([...contactList, {firstName,phoneNumber}])

  setFirstName('')

  setPhoneNumber('')

  setActive(true)
   const response = await axios.post ( 'https://assessment-server-8rmp.onrender.com/ini/todos',{
    title:phoneNumber ,
    message:firstName
   })
   
   } 
   const handleDelete = async (id) => {
      await axios.delete( `https://assessment-server-8rmp.onrender.com/ini/todos/${id}`)
   }     

  return (
    <div className = 'container'>
       <Navbar page = {active} setPage={setActive} />

      {active ?  <List contacts={contactList} handleDelete = {handleDelete} /> : <Create  firstName = {firstName} phoneNumber ={phoneNumber}  setFirstName ={setFirstName} setPhoneNumber={setPhoneNumber} handleClick = {handleCreate}/>}
       </div>
    )
}
export default Home