import React from 'react'
import HomeComponent from './HomeComponent'

import {Router} from '@reach/router'


const AuthorComponent = () => {
    return(
        <div>
            <h1>Favorite Authors</h1>
            <Router>
                <HomeComponent path="/" />
            </Router>
        </div>
    )
}
export default AuthorComponent;