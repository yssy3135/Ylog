import React from 'react'
import { Menu, Icon,Badge } from 'antd';
import { useSelector } from "react-redux";

function RightMenu(props) {
    const user = useSelector(state => state.user)



    if(user.userData && !user.userData.isAuth){
        <Menu mode = {props.mode}>


        </Menu>
    }else{

    }
}

export default RightMenu
