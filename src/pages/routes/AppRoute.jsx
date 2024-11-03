import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import UserPage from '../users/UserPage'
import Login from '../auth/Login'
import { NoteFound404 } from '../NoteFound404'
import PublicRoute from './PublicRoute'
import { PolicyPage } from '../PolicyPage'
import TemplateLayout from '../../layout/TemplateLayout'
import CountNumber from '../../components/CountNumber'
import AddUser from '../users/AddUser'
export default function AppRoute() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path='/' element={
                    <Login />
                } />

                <Route path='/user' element={
                    <PrivateRoute>
                        <TemplateLayout> 
                            <UserPage />
                        </TemplateLayout>
                    </PrivateRoute>
                } />
                <Route path='/create_user' element={
                    <PrivateRoute>
                        <TemplateLayout> 
                            <AddUser />
                        </TemplateLayout>
                    </PrivateRoute>
                } />
             

                <Route path='policy' element={
                    <PublicRoute>
                        <PolicyPage />
                    </PublicRoute>
                } />


             // ການເຂົ້າເຖິງແບບມົວຊົວ
                <Route path='*' element={<NoteFound404 />} />
            </Routes>
        </BrowserRouter>
    )
}
