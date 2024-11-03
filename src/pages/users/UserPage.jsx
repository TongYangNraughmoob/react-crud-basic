import React, { useEffect, useState } from 'react'
import ProductList from './UserDataList'
import axios from 'axios'
import { END_POINT_SERVER } from '../../config/Api'
import { Button,Modal } from 'react-bootstrap'
import AddUser from './AddUser'
import UserDataList from './UserDataList'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'
export default function UserPage() {
  const [users,setUsers] = useState([])
  const [isloading,setIslonading] = useState(false)
  const [isOpen, setOpen] = useState(false)
  const navigate = useNavigate()
  useEffect(()=>{
    fetchUserData()
  },[])

  const fetchUserData = async ()=>{
    try{
      setIslonading(true)
      await axios.get(END_POINT_SERVER+"users")
      .then(reponse =>{
        setUsers(reponse?.data)
        setIslonading(false)
      })
      .catch(error =>{
        console.log(error)

        setIslonading(false)
      }
      
      )
    }catch(error){
      console.log(error)
    }

  }
  const onOpenForm = () =>{
    setOpen(true)
  }
  const onCloseModel = () =>{
    setOpen(false)
  }

  const handleDeleteUser = (item) =>{
   
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser(item?.id)
      }
    });
  }
  const deleteUser = async (userid) =>{
    try {
      const reponse = await axios.delete(END_POINT_SERVER + "users/delete",{
        data: {id:userid} 
      })
      if(reponse?.status === 200){
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        fetchUserData()
      }
    } catch (error) {
    }
  }
  return (
    <div>
      <h1>User page</h1>
      <div className='d-flex gap-2 justify-content-end'>
        
      <Button onClick={fetchUserData} >Refresh</Button>
      <Button onClick={()=>navigate('/create_user')} >Add New</Button>
      </div>
       
      <UserDataList fetchUserData={fetchUserData} users={users} isloading={isloading} handleDeleteUser={handleDeleteUser} />
       
      <Modal show={isOpen} onHide={onCloseModel}  >
        <Modal.Header closeButton>
          <Modal.Title>Create new user</Modal.Title>
        </Modal.Header>
        <Modal.Body><AddUser onCloseModel={onCloseModel} fetchUserData={fetchUserData}/></Modal.Body> 
      </Modal>
    </div>
  )
}
