import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'


import Landing from './Pages/Landing'
import TeacherList from './Pages/TeacherList'
import TeacherForm from './Pages/TeacherForm'
export default function Routes(){
    return(
        <BrowserRouter>
                <Route path="/" exact component={Landing} />
                <Route path="/study" component={TeacherList}/>
                <Route path="/give-classes" component={TeacherForm}/>
        </BrowserRouter>
    )
}