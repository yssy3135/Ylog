import React from 'react'
import { Layout ,Button } from 'antd';
import { useSelector,useDispatch } from "react-redux";
import { logoutUser } from '../../../_actions/user_actinos';
import {LanderPage} from '../BlogPage/LanderPage'
const { Header,Content } = Layout;

function Welcome(props) {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch();
   

    const logoutHandler = () => {
        let dataToSubmit = user.userData
        dispatch(logoutUser(dataToSubmit)).then(response => {
            if(response.payload.success){
              
                window.location.replace("/")
            }else{
                alert(response.payload.err);
            }
        })
    }
    


    if(user.userData && user.userData.isAuth ){

        return (

            <div>
                <Layout style={{height :'100vh'}}>
                    <div style={{ display :'flex', justifyContent:'center',height: '20%'  }}></div>
                    <Content
                        style={{ display :'flex', justifyContent:'center',height: '50%', backgroundColor: 'white',alignItems:'center' }}>
                        <h1 style={{fontSize :  '50px'}}>
                            Y Log
                        </h1>
                        <img src = "http://18.221.22.88:5000/uploads/charater.png"
                            style={{justifyContent:'center',height: '70%', alignItems :'center' }}
                        />
                        
                    </Content>
                    <div
                        style={{ height: '30%',display :'flex', alignItems:'center', justifyContent:'center' }}>
                        <Button onClick = {() => { props.history.push(`/blog/${user.userData._id}`)}}
                            type='primary' 
                            style={{  marginRight : '5%', width : '20%', height : '20%'}} 
                        >
                            {user.userData.id}님 환영합니다 (블로그로 이동)
                        </Button>
                        <Button type='primary' style = {{  width : '20%', height : '20%'}} 
                         onClick = {logoutHandler}>로그아웃</Button>

                    </div>
                </Layout>
            </div>
          

        

        )

    }else{
        return (
            <div>
                <Layout style = {{height :'100vh'}}>
                    <div style = {{ display :'flex', justifyContent:'center',height: '20%'  }}></div>
                    <Content style={{ display :'flex', justifyContent:'center',height: '50%', backgroundColor: 'white',alignItems:'center' }}>
                        <h1 style={{fontSize :  '50px'}}>
                            Y Log
                        </h1>
                        <img src = "http://18.221.22.88:5000/uploads/charater.png"
                            style={{justifyContent:'center',height: '70%', alignItems :'center' }}
                        />
                        
                    </Content>
                    <div style = {{ height: '30%',display :'flex', alignItems:'center', justifyContent:'center' }}  >
                        <Button type='primary' style = {{ marginRight : '5%', width : '20%', height : '20%'}} 
                        onClick = {() =>{
                            props.history.push("/login");
                        }} >
                        로그인
                        </Button>
                        <Button type='primary' style = {{ width : '20%', height : '20%'}} 
                         onClick = {() =>{
                            props.history.push("/register");
                        }}>회원가입</Button>
        
                    </div>
                </Layout>
            </div>
        )

    }
    
}

export default Welcome
