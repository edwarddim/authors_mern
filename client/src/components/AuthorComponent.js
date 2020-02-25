import React from 'react'
import HomeComponent from './HomeComponent'

import {Router} from '@reach/router'


const AuthorComponent = () => {
    return(
        <Router>
            <HomeComponent path="/" />
        </Router>
    )
}
export default AuthorComponent;