import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import WelcomePage from './views/LandingPage/Welcome';
import LoginPage from './views/LoginPage/LoginPage'
import RegisterPage from './views/RegisterPage/RegisterPage'
import Auth from '../hoc/auth'



function App() {
    return (
        <Suspense fallback={(<div>Loading...</div>)}>
            {/* <NavBar /> */}
           
            <div >
                <Switch>
                    <Route exact path="/" component={Auth(WelcomePage,null)} />
                    <Route exact path="/login" component={Auth(LoginPage,false)} />
                    <Route exact path="/register" component={Auth(RegisterPage,false)} />
                
                
                
                </Switch>
            </div>
            
            {/* <Footer /> */}
        </Suspense>
   
    )
}

export default App
