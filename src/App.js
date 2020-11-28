import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from './actions/fetch';
import Form from './components/Form';
import './App.css';
import toaster  from './helper/toast';

// import { FETCH_SUCCESS } from './constants/types';


const styles = {
  color: 'blue', 
  marginLeft:100, 
  fontSize: 25
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(fetchPosts());
  // eslint-disable-next-line
  },[]);

  const result = useSelector(state => state.data.result);
  const loading = useSelector(state => state.data.loading);
  const error = useSelector(state => state.data.error);

  return (
    <div >
      <Form/>
      <h1 className="App">Lrn material UI pr</h1>
      {
        (loading) ? toaster('wait.....', 'info') :
        (result.length !== 0) ?
        (result.map(todo => (
          <div style={{marginLeft:150}} key={todo.id}>
          <h2 style={styles}>{todo.userId}</h2>
          <h3 style={{marginLeft: 70}}>{(todo.title)}</h3>
          <p>{todo.body}</p>
          </div>
        ))) : (error !== null) ? toaster(error, 'error') : ''        
      }
    </div>
  );
}

export default App
