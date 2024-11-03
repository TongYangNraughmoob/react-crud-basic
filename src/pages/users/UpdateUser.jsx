import React, { useEffect, useState } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { END_POINT_SERVER } from '../../config/Api';
import Swal from 'sweetalert2';



export default function UpdateUser({prepareData,onCloseModelEdit,fetchUserData }) {
  const [isloadingCreate, setIslonadingCreate] = useState(false)
  const [userId,setUserId] = useState()
  useEffect(() =>{
      if(prepareData){
        setUserId(prepareData?.id)
      }
  },[prepareData])

  const handleCreateProduct = async (values)=>{
    try {
        setIslonadingCreate(true)
        await axios.put(END_POINT_SERVER+"users/update",{
          id: userId,
          fname: values.fname,
          lname: values.lname
        }).then(reponse =>{
          if(reponse?.status == 200){
             setIslonadingCreate(false)
             onCloseModelEdit()
             fetchUserData()
          }
        })
      
    } catch (error) {
      console.log(error)
      setIslonadingCreate(false)
    }
  }
  return (
    <Formik
      initialValues={{
        fname: prepareData?.fname,
        lname: prepareData?.lname,
        avatar: prepareData?.avatar,
        username: prepareData?.username,
         
      }}
      
      onSubmit={(values) => {
        // console.log('Form Submitted', values);
        handleCreateProduct(values)
      }}
    >
      {({ handleSubmit, handleChange, values, errors, touched }) => (
        <Form noValidate onSubmit={handleSubmit}>
         
          <Form.Group className="mb-3" controlId="fname">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              name="fname"
              value={values.fname}
              onChange={handleChange}
              isInvalid={touched.fname && !!errors.fname}
              placeholder="Enter lname"
            />
            <Form.Control.Feedback type="invalid">
              {errors.fname}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="lname">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              name="lname"
              value={values.lname}
              onChange={handleChange}
              isInvalid={touched.lname && !!errors.lname}
              placeholder="Enter lname"
            />
            <Form.Control.Feedback type="invalid">
              {errors.lname}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="avatar">
            <Form.Label>Avatar</Form.Label>
            <Form.Control
              type="text"
              name="avatar"
              value={values.avatar}
              onChange={handleChange}
              isInvalid={touched.avatar && !!errors.avatar}
              placeholder="Enter avatar URL"
            />
            <Form.Control.Feedback type="invalid">
              {errors.avatar}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={values.username}
              onChange={handleChange}
              isInvalid={touched.username && !!errors.username}
              placeholder="Enter username"
            />
            <Form.Control.Feedback type="invalid">
              {errors.username}
            </Form.Control.Feedback>
          </Form.Group>
         

          <br />
          <div className='d-flex justify-content-end w-100 gap-2'>
            <Button onClick={onCloseModelEdit} variant='outline-secondary' type="button">
              Close
            </Button>
            <Button disabled={isloadingCreate? true: false} variant='primary' type="submit">
               {isloadingCreate?<><Spinner size='10'/> Creating...</>:"Create"}
              Create
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}