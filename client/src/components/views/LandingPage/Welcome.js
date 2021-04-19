import React from 'react'
import { Layout ,Button } from 'antd';
import { useSelector,useDispatch } from "react-redux";
import { logoutUser } from '../../../_actions/user_actinos';

const { Header,Content } = Layout;

function Welcome(props) {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch();
    
    console.log(user)



    const logoutHandler = () => {
        let dataToSubmit = user.userData
        dispatch(logoutUser(dataToSubmit)).then(response => {
            if(response.payload.success){
                props.history.push("/");
            }else{
                alert(response.payload.err);
            }
        })
    }
    


    if(user.userData && user.userData._id){

        return (

            <div>
                <Layout style={{height :'100vh'}}>
                    <div style={{ display :'flex', justifyContent:'center',height: '20%'  }}>Header</div>
                    <Content
                        style={{ display :'flex', justifyContent:'center',height: '50%', backgroundColor: 'skyblue',alignItems:'center' }}>
                        <h1 style={{fontSize :  '50px'}}>
                            Y Log
                        </h1>

                    </Content>
                    <div
                        style={{ height: '30%',display :'flex', alignItems:'center', justifyContent:'center' }}>
                        <Button type='primary' style={{  marginRight : '5%', width : '20%', height : '20%'}} onClick={()=>{ props.history.push("/login"); }}  >
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
                    <div style = {{ display :'flex', justifyContent:'center',height: '20%'  }}>Header</div>
                    <Content style = {{ display :'flex', justifyContent:'center',height: '50%', backgroundColor: 'skyblue',alignItems:'center' }}>
                        <h1 style = {{fontSize :  '50px'}}>
                            Y Log
                        </h1>
                            
                        
                            
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
