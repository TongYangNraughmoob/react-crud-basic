import React, { useState } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { END_POINT_SERVER } from '../../config/Api';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

// Define validation schema using Yup
const validationSchema = Yup.object({
  fname: Yup.string().required('First Name is required'),
  lname: Yup.string().required('Last name is required'),
  avatar: Yup.string().required('Avatar is required'),
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
  email: Yup.string().required('Email is required')
});

export default function AddUser({onCloseModel,fetchUserData}) {
  const [isloadingCreate, setIslonadingCreate] = useState(false)

  const navigate = useNavigate()


  const handleCreateProduct = async (values)=>{
    try {
        setIslonadingCreate(true)
        await axios.post(END_POINT_SERVER+"users/create", values)
          // fname: values?.fname,
          // lname: values?.lname,
          // password: values?.password,
          // avatar: values?.avatar,
          // email: values?.email,
          // username: values?.username
        .then(reponse =>{
          if(reponse?.status == 200){
             setIslonadingCreate(false)
             onCloseModel()
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
        fname: '',
        lname: '',
        avatar: '',
        username: '',
        email: '',
        password: ''
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // console.log('Form Submitted', values);
        handleCreateProduct(values)
      }}
    >
      {({ handleSubmit, handleChange, values, errors, touched }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="fname">
            <Form.Label>First name</Form.Label>
            <Form.Control
              type="text"
              name="fname"
              value={values.fname}
              onChange={handleChange}
              isInvalid={touched.fname && !!errors.fname}
              placeholder="Enter product name"
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
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>email</Form.Label>
            <Form.Control
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
              isInvalid={touched.email && !!errors.email}
              placeholder="Enter email"
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>password</Form.Label>
            <Form.Control 
             placeholder="Enter Password"
              name="password"
              value={values.password}
              onChange={handleChange}
              isInvalid={touched.password && !!errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>

          <br />
          <div className='d-flex justify-content-end w-100 gap-2'>
            <Button onClick={()=> navigate('/user')} variant='outline-secondary' type="button">
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