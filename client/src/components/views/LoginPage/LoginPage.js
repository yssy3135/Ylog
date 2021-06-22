import React, {useState} from 'react'
import { Formik } from "formik";
import * as Yup from 'yup';
import { Form, Icon, Input, Button, Checkbox, Typography } from 'antd';
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_actinos";

const { Title } = Typography;

function LoginPage(props) {
    const dispatch = useDispatch();
    const rememberMeChecked = localStorage.getItem("rememberMe") ? true : false;

    const [rememberMe, setrememberMe] = useState(rememberMeChecked)
    const [formErrorMessage, setFormErrorMessage] = useState('')


    const handleRememberMe = () => {
        setrememberMe(!rememberMe)
      };


    const initialId= localStorage.getItem("rememberMe") ? localStorage.getItem("rememberMe") : '';

    return (
        <Formik
            initialValues={{
                id: initialId,
                password: '',
            }}
            validationSchema = {Yup.object().shape({
                id : Yup.string()
                .required('아이디를 입력해주세요'),
                password: Yup.string()
                .min(6, '최소 6자리의 비밀번호를 입력해주세요')
                .required('비밀번호를 입력하세요')
            })}
            

            onSubmit= {(values, {setSubmitting}) => {
                setTimeout( () => {
                    let dataToSubmit = {
                        id : values.id,
                        password: values.password
                    };
            
                    dispatch(loginUser(dataToSubmit))
                    .then(response => {
                        if(response.payload.loginSuccess) {
                            window.localStorage.setItem('userId', response.payload.userId);
                            if(rememberMe === true){
                                window.localStorage.setItem('rememberMe', values.id);
                            }else{
                                localStorage.removeItem('rememberMe');
                            }
                            props.history.push("/");
                        } else {
                            setFormErrorMessage('Check out your Account or Password again')
                          }
                    })
                    .catch(err => {
                        setFormErrorMessage('Check out your Account or Password again')
                        setTimeout(() => {
                          setFormErrorMessage("")
                        }, 3000);
                      });

                      setSubmitting(false);
                    }, 500);
            }}
        >
            {props => {
                const {
                    values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset,
                } = props;
                return (
                    <div className="app" style={{ width: '100%', backgroundColor: 'skyblue' ,display : 'flex', justifyContent:'center', paddingTop : '1.5%'}}>
                    
                    <form onSubmit={handleSubmit} style={{ width: '350px' }}>
        
                      <Form.Item required>
                        <Input
                          id="id"
                          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                          placeholder="아이디"
                          type="text"
                          value={values.id}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                            errors.id && touched.id ? 'text-input error' : 'text-input'
                          }
                        />
                        {errors.id && touched.id && (
                          <div className="input-feedback">{errors.id}</div>
                        )}
                      </Form.Item>
        
                      <Form.Item required>
                        <Input
                          style ={{fontFamily : '-apple-system'}}
                          id="password"
                          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                          placeholder="비밀번호"
                          type="password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                            errors.password && touched.password ? 'text-input error' : 'text-input'
                          }
                        />
                        {errors.password && touched.password && (
                          <div className="input-feedback">{errors.password}</div>
                        )}
                      </Form.Item>
        
                      {formErrorMessage && (
                        <label ><p style={{ color: '#ff0000bf', fontSize: '0.7rem', border: '1px solid', padding: '1rem', borderRadius: '10px' }}>{formErrorMessage}</p></label>
                      )}
        
                      <Form.Item>
                        <Checkbox id="rememberMe" onChange={handleRememberMe} checked={rememberMe} >비밀번호 기억</Checkbox>
                        <div>
                          <Button type="primary" htmlType="submit" className="login-form-button" style={{ minWidth: '100%' }} disabled={isSubmitting} onSubmit={handleSubmit}>
                            로그인
                        </Button>
                        </div>
                        <a href="/register">회원가입</a>
                      </Form.Item>
                    </form>
                  </div>
                );


            }}
        </Formik>
    )
}

export default LoginPage
