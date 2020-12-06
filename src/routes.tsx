import React from "react"
import { Route, BrowserRouter } from "react-router-dom"

// importar páginas
import LoginPage from './Presents/Login'
import HomePage from './Presents/Home' 

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={HomePage} exact path='/' />
            <Route component={LoginPage} path='/signin' />
        </BrowserRouter>
    )
} 

export default Routes