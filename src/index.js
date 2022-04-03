import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const dialogsData = [
    {id: 1, name: 'Evgeniy'},
    {id: 2, name: 'Lilia'},
    {id: 3, name: 'Vova'},
    {id: 4, name: 'Dmitry'},
    {id: 5, name: 'Sasha'}

]
const messageData = [
    {id: 1, message: 'Hey'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'What are you doing?'},
    {id: 4, message: 'Can you help me?'},
    {id: 5, message: 'I read that.'}

]
const postData = [
    {id: 1, message: 'First post'},
    {id: 2, message: 'Second post'}
]
ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messageData={messageData} postData={postData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
