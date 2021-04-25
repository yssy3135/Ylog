import React from 'react'

import { Icon,Layout, Menu } from 'antd';
import "../SideBar/sidebar.css"

import {
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  WalletOutlined,
  RightOutlined,
  RightSquareOutlined
} from '@ant-design/icons';


const { Sider } = Layout;
function sidebar() {
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
                <Menu theme="" mode="inline" defaultSelectedKeys={['0']}  >
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        <RightOutlined />
                        nav 1
                    </Menu.Item>

                    <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                    <RightOutlined />
                    nav 2
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined />}>
                    <RightOutlined />
                    nav 3
                    </Menu.Item>
                    <Menu.Item key="4" icon={<UserOutlined />}>
                    <RightOutlined />
                    nav 4

                    </Menu.Item>
                </Menu>
            </Sider>
    
    )
}

export default sidebar
