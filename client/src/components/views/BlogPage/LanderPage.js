import React,{useEffect,useState} from 'react';

import { Icon,Layout, Menu,Col,Card,Row, Button} from 'antd';
import Sidebar from '../SideBar/sidebar'
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import Axios from 'axios';


const { Header, Content, Footer, Sider } = Layout;



function LanderPage(props) {
    const userId = props.match.params.userId;


    const [Skip, setSkip] = useState(0);
    const [Limit, setLimit] = useState(8);
    const [Contents, setContents] = useState("");

    useEffect(() => {
        
        let body = {
            skip : Skip,
            limit : Limit
        }

        getContents(body);


    }, [])


    const getContents = (body) => {
        Axios.post('api/contents/content')
        .then(response => {
            if(response.data.success){
                if(body.loadMore){
                    setContents([...Contents,...response.data.contentInfo])
                }else{
                    setContents(response.data.contentInfo)
                }

                setSkip(Skip + Limit);
                setPostSize(response.data.postSize);


            }else{
                alert("상품정보를 가져오는데 실패하였습니다.")
            }

        })
    }





    return (
        <Layout  style={{ height: '100vh'   }} >
            <Sidebar></Sidebar>

            <Layout className="site-layout" style = {{ marginLeft: 200 ,backgroundColor : '#40a9ffa8' }}> 
             

                <Header className="site-layout-background" 
                style={{ borderBottom : '1px solid gray',
                            height: '66px',fontSize: '30px',
                            display :'flex',
                            justifyContent: 'center', 
                            padding: 0  }} >
                    YOON
                </Header>
            


                <Content style={{ margin: '16px',    }}>
                    <div className="site-layout-background" 
                            style={{overflow: 'auto',
                            height:'100%',
                            padding: 24, 
                            minHeight: 360 }}>

                        <div style={{display:'flex', justifyContent:'flex-end' ,}}>
                            <Button onClick = { () => { props.history.push('/write')}} >글쓰기</Button>
                        </div>

                        <Col lg={6} md={8} xs={24}>
            
            
                            <Card
                                cover ={<a href > </a>}
                                >
                                  
                            </Card>
                        </Col> 
                    </div>
                </Content>

            
            </Layout>
         

        </Layout>
    )
}

export default LanderPage
