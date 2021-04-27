import React,{useEffect,useState} from 'react';

import { Layout,Col,Card,Row, Button ,} from 'antd';
import Sidebar from '../SideBar/Sidebar'
import ImageSlider from '../../utils/ImageSlider'
import Meta from 'antd/lib/card/Meta'
import Axios from 'axios';



const { Header, Content } = Layout;



function LanderPage(props) {
    const userId = props.match.params.userId;
    

    const [Skip, setSkip] = useState(0);
    const [Limit, setLimit] = useState(8);
    const [Contents, setContents] = useState([]);
    const [PostSize, setPostSize] = useState(0);
    const [Category, setCategory] = useState("");

    useEffect(() => {
        
        let body = {
            skip : Skip,
            limit : Limit
        }

        getContents();


    }, [Category])


    const getContents = () => {
        console.log(Category)
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


    const renderCards = Contents.map((content,index) => {
   
        return <Col key= {index} lg={5} md={7} xs={20}>
                <a href = {`/blog/${userId}/${content._id}`}>
                    <Card
                        hoverable
                        cover ={<ImageSlider images= {content.images}/>}
                        >
                            <Meta
                                title={content.title}
                            />
                    </Card>
                </a>
            </Col> 

    })

    const handleCategory = (selected) => {
        setCategory(selected)
    }
    



    return (
        <Layout  style={{ height: '100vh'   }} >
            <Sidebar userData = {userId} handleCategory = {selected => handleCategory(selected)} ></Sidebar>

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


                        <Row gutter ={[16,16]}>
                            {renderCards}
                        </Row>

                    </div>

                    

                </Content>

            
            </Layout>
         

        </Layout>
    )
}

export default LanderPage