import React,{useEffect,useState} from 'react';
import {useSelector} from 'react-redux'

import { Layout,Col,Card,Row, Button ,Image} from 'antd';
import Sidebar from '../SideBar/sidebar'
import ImageSlider from '../../utils/ImageSlider'
import Meta from 'antd/lib/card/Meta'
import Axios from 'axios';
import HeaderPage from '../HeaderPage/HeaderPage'
import {
    EditOutlined
  } from '@ant-design/icons';


const { Content } = Layout;



function LanderPage(props) {
    const userId = props.match.params.userId;
    

    const [Skip, setSkip] = useState(0);
    const [Limit, setLimit] = useState(8);
    const [Contents, setContents] = useState([]);
    const [PostSize, setPostSize] = useState(0);
    const [Category, setCategory] = useState("");
    const user = useSelector(state => state.user)


    useEffect(() => {
        
        let body = {
            skip : Skip,
            limit : Limit
        }

        getContents();


    }, [Category])


    const getContents = () => {
      
        let body = {
            writer : userId,
            category : Category
        }
        Axios.post('/api/contents/content',body)
        .then(response => {
            if(response.data.success){
                setContents([...response.data.contentsInfo])
                // if(body.loadMore){
                //     console.log(Contents)
                // }else{
                //     console.log(response.data)
                //     setContents(response.data.contentInfo)
                // }
                
                setSkip(Skip + Limit);
                setPostSize(response.data.postSize);


            }else{
                alert("상품정보를 가져오는데 실패하였습니다.")
            }

        })
     
    }


    const cardHandler = (type,data) =>{
       
        if(type === "edit"){
            props.match.params = data;
            props.history.push( {
                pathname: `/edit/${data._id}`,
                state : {contentsInfo : data}
            })
        }else if(type === "detail"){
            props.history.push(`/blog/${userId}/${data._id}` )
        }
    }




    const renderCards = Contents.map((content,index) => {
        
        if(user.userData._id === userId){
            return <Col key= {index} lg={4} md={8} xs={24}   >
       
                <Card
                    hoverable
                    cover ={<ImageSlider content= {content} cardHandler = {cardHandler} />}
                    actions={[  <EditOutlined key="edit" onClick ={ () => {cardHandler("edit",content ) } } />]}
                    
                    >
                        <Meta
                            onClick ={ () => {cardHandler("detail",content) }}
                            title={content.title}
                        /> 
                
                        <Meta
                            description={content.textcontents}
                            style={{

                            overflow:'hidden',
                            textOverflow:'ellipsis',
                            fontSize:'small',
                            whiteSpace:'nowrap'
                        }}
                        />
                    
                </Card>
             
        </Col> 


        }else{
            return <Col key= {index} lg={4} md={8} xs={20} >
                    <a href = {`/blog/${userId}/${content._id}`}>
                        <Card
                            hoverable
                            cover ={<ImageSlider content= {content} cardHandler = {cardHandler} />}
                         
                            >
                                <Meta
                                    title={content.title}
                                /> 
                        
                                <Meta
                                    description={content.textcontents}
                                    style={{

                                    overflow:'hidden',
                                    textOverflow:'ellipsis',
                                    fontSize:'small',
                                    whiteSpace:'nowrap'
                                }}
                                />
                            
                        </Card>
                    </a>
                </Col> 

        }
   

    })

    const handleCategory = (selected) => {
        setCategory(selected)
    }

    const loginHandler = () => {
        if(user.userData._id === userId){
            return <Button>로그아웃</Button>
        }else{
            return <Button>로그인</Button>
        }
    }
    



    return (
        <Layout>
            <Layout className="site-layout" > 
            <Sidebar userData = {userId} handleCategory = {selected => handleCategory(selected)}></Sidebar>
                <Layout>
                    <HeaderPage props={props}></HeaderPage>
                
                        <Content className="site-layout-background" 
                                style={{
                                padding: 24, 
                                minHeight: 360,
                                margin: '24px 16px 0'
                                }}>

                            <div style={{display:'flex', justifyContent:'flex-end' ,marginBottom:'10px'}}>
                                <Button onClick = { () => { props.history.push('/write')}} >글쓰기</Button>
                            </div>


                            <Row gutter ={[16,16]} style={{height:'10%'}}>
                                {renderCards}
                            </Row>
                        </Content>
                  

                </Layout>
            </Layout>
        </Layout>
    )
}

export default LanderPage
