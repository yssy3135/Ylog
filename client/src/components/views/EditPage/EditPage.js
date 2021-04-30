import React,{useState ,useEffect} from 'react'
import { useSelector,  } from "react-redux";
import Editor from '@toast-ui/editor';
import { Input ,Button,Select} from 'antd';
import axios from 'axios';
import '@toast-ui/editor/dist/toastui-editor.css'; 


let editor;
const { Option } = Select;

function EditPage(props) {
  
    
    const contentInfo = props.location.state.contentsInfo;
    const [Title, setTitle] = useState(contentInfo.title);
    const [Images, setImages] = useState(contentInfo.images);
    const [Category, setCategory] = useState([]);
    const user = useSelector(state => state.user);
    const [categoryValue, setcategoryValue] = useState("");
    
    



    const titleChangeHandler = (event) =>{
        setTitle(event.currentTarget.value);
        
        
    }
    
    
    if(document.getElementById("editor") && document.getElementById("editor").childElementCount === 0){
            let formData = new FormData();

            const config = {
                header : {'content-type': 'multipart/form-data'}
            }

            editor = new Editor({
            el: document.querySelector('#editor'),
            previewStyle: 'vertical',
            height:'auto',
            initialEditType: 'wysiwyg',
            initialValue : contentInfo.contents,
            hooks : {
                addImageBlobHook: (blob,callback) =>{
                    
                    console.log(blob)
                    formData.append("file",blob)
                    

                    axios.post("/api/contents/image",formData,config)
                    .then(response => {
                        if(response.data.success){
                            console.log(response.data.filePath)
                            setImages([...Images,response.data.filePath])
                            let replaced = response.data.filePath.replace("\\","/");
                            callback(`http://localhost:5000/${replaced}`,"alt text");

                        }else{
                            alert('파일을 저장하는데 실패했습니다.')
                        }
                    })
              

                }
                
            }         
        });
 
        }


    const editHandler= (event) => {
      

        let content = editor.getHtml();
        let textcontent = document.getElementsByClassName('tui-editor-contents')[0].innerText
        // console.log(editor.getTextObject(editor.getRange()))
        // console.log(document.getElementsByClassName('tui-editor-contents')[0].innerText)
        if(!Title || !content ){
            return alert("모든 값을 작성해야합니다.")
        }

        const body = {
            title : Title,
            contents : content,
            textcontents : textcontent,
            images : Images,
            contentsId : contentInfo._id
        }

        axios.post('/api/contents/edit',body)
        .then(response => {
            if(response.data.success){
       
                props.history.push(`/blog/${user.userData._id}/${contentInfo._id}`)
            }else{
               alert("수정에 실패했습니다.")
            }

        });

       


    }


      


    return (
       
         
            <div style={{display:'flex' , flexDirection: 'column' ,alignItems:'center',marginTop:'50px'}}>

                  
                    <div style={{display:'flex' ,flexDirection:'column'}}>
                

                    <Input style= {{     
                        
                        height:'50px',
                        width:'860px',
                        marginBottom :'50px'
                        }} onChange = {titleChangeHandler} value = {Title}>
                    </Input>
                    </div>   
                    <div id = "editor" style= {{     
                        overflowY: 'hidden',
                        paddingLeft: '10px',
                        paddingRight: '10px',
                        paddingBottom: '50px',
                        height:'100%',
                        width:'880px',
                        }}>
                
                    </div>
                    
                    <div style={{display:'flex' ,justifyContent:'center'}}>
                        <Button onClick = {editHandler}  style={{marginRight:'10px'}}>수정</Button>
                        <Button onClick = {()=> { props.history.push(`/blog/${props.user.userData._id}`)}}>취소</Button>
                    </div>   
            </div>
   
    )
}

export default EditPage
