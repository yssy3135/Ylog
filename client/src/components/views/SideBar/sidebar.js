import React ,{useState , useEffect}from 'react'

import { Icon,Layout, Menu,Modal,Input, Button } from 'antd';
import Axios from 'axios'
import "../SideBar/sidebar.css"


import {
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  RightOutlined,
  PlusOutlined
} from '@ant-design/icons';


const { Sider } = Layout;
function Sidebar(props) {


    const [isModalVisible, setIsModalVisible] = useState(false);
    const [category, setCategory] = useState("");
    const [categoryNames, setcategoryNames] = useState([])
    const [categoryKey, setcategoryKey] = useState(0)


    useEffect(() => {
        
        
        getCategory();

        
    }, [])
    
    
    const getCategory = () => {

        let body = {
            id : props.userData
        }

         
        Axios.post('/api/categorys/category',body)
        .then( response => {
            if(response.data.success){
               
                setcategoryNames(response.data.categoryNames)
            }else{
                alert('카테고리 목록을 불러오는데 실패하였습니다.')
            }
        });
    }

    
    const showModal = () => {
        setIsModalVisible(true);
    };
    
    const handleOk = () => {

        if(!category){
            return alert("카테고리 이름을 입력해주세요")
        }

        let body  = {
            id : props.userData,
            category : category 
        }
    

        Axios.post('/api/categorys',body)

        .then( response => {
            if(response.data.success){
                setcategoryNames(response.data.categoryNames)
                setCategory("")
                return alert("카테고리가 추가되었습니다.")
            }else{
                return alert(response.err)
            }
        })


        setIsModalVisible(false);
    };
    
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const categoryChangeHandler = (event) => {
        
        setCategory(event.currentTarget.value);
    }
    
    
    const showCategory = categoryNames.map((name,index) => {
        
        return   <Menu.Item value={name._id} key={index+1}  icon={<UserOutlined />}>
                    <RightOutlined />
                    {name.category}
                </Menu.Item>
               
            }) 
            
    const selectedHandler = (event) => {
        setcategoryKey(event.item.props.eventKey)
        props.handleCategory(event.item.props.value);
    }

    const totalHandler = () => {
        setcategoryKey(0)
        props.handleCategory();
    }

  
    return (
    
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                style={{
                    overflow: 'auto',
                    height: '100vh',               
                }}
                theme="light"
                className="site-layout-background"
                >
                    
                <div className="logo" style ={{ height:'15%',display:'flex' ,alignItems:'center' ,justifyContent:'center',borderBottom : '1px solid gray',}}  >
                    <img src = "http://18.221.22.88:5000/uploads/charater.png"
                                style={{height: '100%' ,paddingBottom:'5%'}}
                            />
                </div>
                
                
                <PlusOutlined  onClick ={showModal} style ={{display : 'flex' , justifyContent:'flex-end', paddingRight:'15px',fontSize:'large'}} />

                <Modal title="카테고리 추가" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <Input  value={category} onChange = {categoryChangeHandler} placeholder ="추가할 카테고리를 입력하세요"/>
                </Modal>


                <Menu selectedKeys={categoryKey} onClick={selectedHandler}  mode="inline" defaultSelectedKeys={['0']}  >
                     {showCategory}
                </Menu>

                <div style = {{display:'flex' ,alignItems:'center' ,justifyContent:'center'}}>
                    <Button onClick={totalHandler} >전체보기</Button>
                </div>
            </Sider>
    
    )
}

export default Sidebar
