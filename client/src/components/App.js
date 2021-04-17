import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import WelcomePage from '../views/LandingPage/welcome';
import LoginPage from '../views/LoginPage/LoginPage'
import RegisterPage from '../views/RegisterPage/RegisterPage'



function App() {
    return (
        <Suspense fallback={(<div>Loading...</div>)}>
            {/* <NavBar /> */}
           
            <div >
                <Switch>
                    <Route exact path="/" component={WelcomePage} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/register" component={RegisterPage} />
                
                
                
                </Switch>
            </div>
            
            {/* <Footer /> */}
        </Suspense>
   
    )
}

export default App
