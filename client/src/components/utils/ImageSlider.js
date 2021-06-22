import React from 'react'
import {Carousel } from 'antd'
import { PictureOutlined } from '@ant-design/icons';

function ImageSlider(props) {


    if(props.content.images.length === 0){

        

        return <div   style={{width:'100%',height:'200px', display:'flex' ,justifyContent:'center' ,alignItems:'center', fontSize:'100px'}}> 
            <PictureOutlined onClick ={ () => {props.cardHandler("detail",props.content)}}
                    
            />
        </div>
    }else{
        return (
        
            <div style = {{width:'100%', height:'200px'}}onClick ={ () => {props.cardHandler("detail",props.content)}} >
                <img  style = {{width: '100%' , height: '100%'}} src={`http://localhost:5000/${props.content.images[0]}`}/>
            </div>

             
            
            
        )

    }

}

export default ImageSlider
