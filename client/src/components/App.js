import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import WelcomePage from './views/LandingPage/Welcome';
import LoginPage from './views/LoginPage/LoginPage'
import RegisterPage from './views/RegisterPage/RegisterPage'
import LandingPage from './views/BlogPage/LanderPage'
import WritePage from './views/WritePage/WritePage'
import DetailContentsPage from './views/DetailContentsPage/DetailContentsPage'
import Auth from '../hoc/auth'
import "antd/dist/antd.css"
import './views/BlogPage/LanderPage.css'



function App() {
    return (
        <Suspense fallback={(<div>Loading...</div>)}>
            {/* <NavBar /> */}
           
            <div >
                <Switch>
                    <Route exact path="/" component={Auth(WelcomePage,null)} />
                    <Route exact path="/login" component={Auth(LoginPage,false)} />
                    <Route exact path="/register" component={Auth(RegisterPage,false)} />
                    <Route exact path="/blog/:userId" component={Auth(LandingPage,null)} />
                    <Route exact path="/blog/:userId/:contentId" component={Auth(DetailContentsPage,null)} />
                    <Route exact path="/write" component={Auth(WritePage,true)} />
                
                
                
                
                
                </Switch>
            </div>
            
            {/* <Footer /> */}
        </Suspense>
   
    )
}

export default App
