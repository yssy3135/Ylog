import React,{useEffect,useState} from 'react';
import {useSelector} from 'react-redux'
import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer';
import { PageHeader } from 'antd';
import axios from 'axios';
import {Button} from 'antd';





function DetailContentsPage(props) {
    const userId = props.match.params.userId;
    const contentId = props.match.params.contentId
    const user = useSelector(state => state.user)

    const [contentsInfo, setcontentsInfo] = useState({})
    const [categoryInfo, setcategoryInfo] = useState({})
    const [writeInfo, setwriteInfo] = useState({})


    useEffect(() => {
       
        getContent()
        

    }, [])
    
    

    const getContent = () => {
        let body = {
            contentId : contentId
        }

        axios.post('/api/contents/detail',body)
        .then(response => {
            if(response.data.success){

                let ymd = response.data.contentsInfo[0].createdAt.substring(0,10)
                let hmc = response.data.contentsInfo[0].createdAt.substring(11,19)


                
                response.data.contentsInfo[0].createdAt = ymd+" "+hmc
                setcontentsInfo(response.data.contentsInfo[0])
                setcategoryInfo(response.data.contentsInfo[0].category)
                setwriteInfo(response.data.contentsInfo[0].writer);
            }else{
                alert("게시물을 불러오는데 실패했습니다.")
            }
        })
        
    }

    const listHandler = () => {
        props.history.push(`/blog/${userId}`)
    }

    if(document.getElementById("viewer")  ){
        const editor = new Viewer({
            el: document.querySelector('#viewer'),
            previewStyle: 'vertical',
            height:'700px',
            initialValue: contentsInfo.contents,
            

        });
    }

    const deleteHandler = () => {
        let body = {
            contentId : contentId
        }

        axios.post('/api/contents/delete',body)
        .then(response => {
            if(response.data.success){
                props.history.push(`/blog/${userId}`)
            }else{
                alert("게시글 삭제를 실패했습니다.")
            }
        })
    }




        if(user.userData && user.userData.id === userId){

            return (
                <div>
      
                <div style={{display:'flex' , flexDirection: 'column' ,alignItems:'center',backgroundColor:'#f0f2f5'}}>
                   <div  style={{backgroundColor:'skyblue',padding: '5% 0 5% 0',backgroundColor:'white',width:'60%' }}>
                        <div style= {{     
                                    height:'50px',
                                    width:'100%',
                                    marginBottom :'30px',
                                    display : 'flex',
                                    alignItems:'center',
                                    fontSize: 'xxx-large',
                        }}>
                            <div style={{display: 'flex',fontSize :'x-large' ,borderBottom:'1px solid #a3a3a3'}} >
                                {categoryInfo.category}
                            </div>
    
                    </div>
                        <div style= {{     
                                height:'50px',
                                width:'100%',
                                padding: '2% 0 3.5% 0',
                                borderBottom:'1px solid black',
                                display : 'flex',
                                alignItems:'center',
                                fontSize: 'xxx-large'
                            }}>
                            {contentsInfo.title}
                        </div>
    
                        <div style= {{     
                                height:'50px',
                                width:'100%',
                                display : 'flex',
                                alignItems:'center',
                                paddingBottom : '20px',
                                fontSize: 'large',
                                justifyContent: 'flex-end'
                    }} >{contentsInfo.createdAt}</div> 
    
                        
    
                    <div id = "viewer" style= {{     
                        overflowY: 'hidden',
                        paddingLeft: '10px',
                        paddingRight: '10px',
                    
                        width:'100%',
                        minHeight:'600px',
                        padding: '20px',
                        borderBottom:'1px solid black',
                    }}>
                    </div>
                        <div style= {{paddingTop:'20px'}}>      
                            <Button onClick = {listHandler}style= {{marginRight:'10px'}}>목록</Button>
                            <Button onClick = {deleteHandler} style= {{marginLeft:'10px'}}>삭제</Button>
                        </div>
                    </div>
                </div>
    
            </div>

            )

        }else{
            return(
                <div>
      
                <div style={{display:'flex' , flexDirection: 'column' ,alignItems:'center',backgroundColor:'#f0f2f5'}}>
                   <div  style={{backgroundColor:'skyblue',padding: '5% 0 5% 0',backgroundColor:'white',width:'60%' }}>
                        <div style= {{     
                                    height:'50px',
                                    width:'100%',
                                    marginBottom :'30px',
                                    display : 'flex',
                                    alignItems:'center',
                                    fontSize: 'xxx-large',
                        }}>
                            <div style={{display: 'flex',fontSize :'x-large' ,borderBottom:'1px solid #a3a3a3'}} >
                                {categoryInfo.category}
                            </div>
    
                    </div>
                        <div style= {{     
                                height:'50px',
                                width:'100%',
                                padding: '2% 0 3.5% 0',
                                borderBottom:'1px solid black',
                                display : 'flex',
                                alignItems:'center',
                                fontSize: 'xxx-large'
                            }}>
                            {contentsInfo.title}
                        </div>
    
                        <div style= {{     
                                height:'50px',
                                width:'100%',
                                display : 'flex',
                                alignItems:'center',
                                paddingBottom : '20px',
                                fontSize: 'large',
                                justifyContent: 'flex-end'
                    }} >{contentsInfo.createdAt}</div> 
    
                        
    
                    <div id = "viewer" style= {{     
                        overflowY: 'hidden',
                        paddingLeft: '10px',
                        paddingRight: '10px',
                    
                        width:'100%',
                        minHeight:'600px',
                        padding: '20px',
                        borderBottom:'1px solid black',
                    }}>
                    </div>
                        <div style= {{paddingTop:'20px'}}>      
                            <Button onClick = {listHandler}style= {{marginRight:'10px'}}>목록</Button>
                           
                        </div>
                    </div>
                </div>
    
            </div>

                


            )
        }
       
    
}

export default DetailContentsPage
