import React from 'react'
import { Layout ,Button } from 'antd';

const { Header,Content } = Layout;

function welcome(props) {


    



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
                    <Button type='primary' style = {{ marginRight : '10px', width : '20%', height : '20%'}} 
                    onClick = {() =>{
                        props.history.push("/login");
                    }} >
                    로그인
                    </Button>
                    <Button type='primary' style = {{ marginLeft : '10px' , width : '20%', height : '20%'}}>회원가입</Button>
    
                </div>
            </Layout>
        </div>
    )
}

export default welcome
