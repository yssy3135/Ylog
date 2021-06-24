import React from 'react'
import { Layout, Button } from 'antd';
import { logoutUser } from '../../../_actions/user_actinos';
import {useSelector , useDispatch} from 'react-redux'


const { Header } = Layout;
function HeaderPage(Pprops) {
    const userId =  Pprops.userId;

    const user = useSelector(state => state.user)
    const dispatch = useDispatch();
    console.log(user)
    const logoutHandler = () => {
     
        let dataToSubmit = user.userData
            dispatch(logoutUser(dataToSubmit)).then(response => {
            if(response.payload.success){
                window.location.replace(`/blog/${userId}`)
            }else{
                alert(response.payload.err);
            }
        })
    }
  
    const loginHandler = () => {
        Pprops.props.history.push('/login')
    }

    const myblogHandler = () =>{
        window.location.replace(`/blog/${user.userData.userId}`)
    }
    

    if(Pprops.isMaster){
        return <div style={{backgroundColor:"white"}}>
        
                    <div style={{ borderBottom : '1px solid gray',
                                height: '70px',fontSize: '30px',
                                display :'flex',
                                justifyContent: 'space-between',
                                alignItems:'center' 
                                }}> 
                        
                        <div style ={{width:'38.234px'}}></div>
                        <div>
                        <Header className="site-layout-background">
                                <h1>Y log</h1>
                        </Header>
                        </div>
                        <div style={{margin:'24px'}}>
                        <Button onClick = {logoutHandler}>로그아웃</Button>
                        </div>
                    </div>
                </div>
    }else if ( user.userData && user.userData.userId && !Pprops.isMater ){
        return<div style={{backgroundColor:"white"}}>
        
                <div style={{ borderBottom : '1px solid gray',
                            height: '70px',fontSize: '30px',
                            display :'flex',
                            justifyContent: 'space-between',
                            alignItems:'center' 
                             }}> 
                    
                    <div style ={{width:'38.234px'}}></div>
                    <div>
                    <Header className="site-layout-background">
                    YOON
                    </Header>
                    </div>
                    <div style={{margin:'24px'}}>
                    <Button onClick = {myblogHandler}>내 블로그 가기</Button>
                    </div>
                </div>
        </div>

    }else{
        return<div style={{backgroundColor:"white"}}>
        
                <div style={{ borderBottom : '1px solid gray',
                            height: '70px',fontSize: '30px',
                            display :'flex',
                            justifyContent: 'space-between',
                            alignItems:'center' 
                             }}> 
                    
                    <div style ={{width:'38.234px'}}></div>
                    <div>
                    <Header className="site-layout-background">
                    YOON
                    </Header>
                    </div>
                    <div style={{margin:'24px'}}>
                    <Button onClick = {loginHandler}>로그인</Button>
                    </div>
                </div>
        </div>

    }
}

export default HeaderPage
