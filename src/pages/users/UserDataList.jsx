import React, { useState } from 'react'
import { Button, Table,Modal } from 'react-bootstrap'
import LoadingPage from '../../components/LoadingPage';
import UpdateUser from './UpdateUser';

export default function UserDataList(props) {
  const {users,isloading, handleDeleteUser,fetchUserData} = props;
  const [openEdit, setOpenEdit] = useState(false);
  const [prepareData,setPrepareDate] = useState([])
  
  
  
  const onCloseModelEdit = () =>{
    setOpenEdit(false)
  }
  const handleEdit = (item) =>{ 
    setPrepareDate(item)
    setOpenEdit(true)
  }

  if(isloading) return <LoadingPage/>
  return (
    <React.Fragment>

    <Table hover>
      <thead>
        <tr> 
          <th>ID</th>
          <th>image</th>
          <th>First name</th>
          <th>Last name</th>
          <th>User name</th>
          <th>action</th>
          
        </tr>
      </thead>
      <tbody>
        {users.map((item,index) =>(
          <tr key={index} className='hover-button-edit'>
            <td>
            {index}
            </td>
            <td>
              <img style={{ maxWidth:60}} alt={item.fname} src={item.avatar} />
            </td>
            <td>{item.fname}</td>
            <td>{item.lname}</td>
            <td>{item.username}</td>
            <td>
              <div className='d-flex  gap-2 button-action'>
                <Button onClick={() => handleEdit(item)} variant='outline-info'  >edit</Button>
                <Button onClick={() => handleDeleteUser(item)}  variant='outline-danger'>delete</Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    <Modal show={openEdit} onHide={onCloseModelEdit}  >
        <Modal.Header closeButton>
          <Modal.Title>Update user</Modal.Title>
        </Modal.Header>
        <Modal.Body> <UpdateUser fetchUserData={fetchUserData} prepareData={prepareData} onCloseModelEdit={onCloseModelEdit}/></Modal.Body> 
      </Modal>
    </React.Fragment>
  )
}
