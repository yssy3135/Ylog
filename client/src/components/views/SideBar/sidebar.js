import React ,{useState , useEffect}from 'react'

import { Icon,Layout, Menu,Modal,Input } from 'antd';
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
      
        return   <Menu.Item key={index+1} icon={<UserOutlined />}>
                    <RightOutlined />
                    {name.category}
                </Menu.Item>
               
    }) 


    return (
    
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    padding: '0 10px 0 10px',
                   
                }}
                theme="light"
                >
                    
                <div className="logo" style ={{ display:'flex' ,alignItems:'center' ,justifyContent:'center' ,fontSize : '20px',borderBottom : '1px solid gray',}}  >
                    Y LOG
                </div>
                
                
                <PlusOutlined  onClick ={showModal} style ={{display : 'flex' , justifyContent:'flex-end', paddingRight:'15px',fontSize:'large'}} />

                <Modal title="카테고리 추가" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <Input onChange = {categoryChangeHandler} placeholder ="추가할 카테고리를 입력하세요"/>
                </Modal>


                <Menu theme="" mode="inline" defaultSelectedKeys={['0']}  >
                     {showCategory}
                </Menu>
            </Sider>
    
    )
}

export default Sidebar
