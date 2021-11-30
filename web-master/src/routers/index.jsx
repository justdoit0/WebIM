
import React, { Fragment } from "react"
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import LoginPage from "../pages/login/LoginPage"
import MyChat from "../pages/myChat"


export default(
    <Fragment>
        <Router>
         <Switch>
         <Route     path="/" exact component={ LoginPage }/>     
         <Route     path="/register" exact component={ LoginPage }/>    
        <Route  path="/chat" exact component={ MyChat }/> 
        </Switch>
        </Router>
        </Fragment>
)