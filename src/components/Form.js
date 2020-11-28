import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toaster  from '../../src/helper/toast';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import { sendPost } from '../actions/post';

const Form = () => {
    const dispatch = useDispatch();
    const [post, setPost] = useState({
        title: '',
        body: ''
    });
    const handleChange = (e) => {
        const {name, value} = e.target
        setPost((post )=> ({...post, [name]: value}))
    }
    const submit = (event) => {
        event.preventDefault();
        if (post.title === '' || post.body ==='') {
            toaster('Please fill the fields', 'warn')
            return false
        }
        dispatch(sendPost(post));
    }
    // const result = useSelector(state => state.items.item)
    const loading = useSelector(state => state.data.loading);
    console.log(post)

    return ( 
        <div className="login-page">
        <ToastContainer 
            draggable={true} 
            transition={Zoom} 
            autoClose={(loading) ? 500 : 8000} 
            position={toast.POSITION.TOP_CENTER}
        />
        <h1>Add Todo</h1>
        <form>
            <label htmlFor="name">
                Title
                <input type="text" placeholder="Enter todo title" 
                onChange={handleChange}
                name="title"/>
            </label>
            <label htmlFor="email">
                Body
                <input type="text" placeholder="Enter a todo body" 
                onChange={handleChange}
                name="body"/>
            </label>
            <input type="submit" value="Submit" onClick={submit}/>
        </form>
        </div>
     );
}
 
export default Form;