import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { isActive } from '../utils/validations'
import Home from '../views/home/home'
import Login from '../views/login/login'
import Register from '../views/register/register'

export default function Navigate() {
  return (
    <Routes>
        {
            isActive() ? (
                <>
                    <Route path="/" element={<Home />} />
                </>
            ):(
                <>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </>
            )
        }
    </Routes>
  )
}
