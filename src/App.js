import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import firebase from "firebase";
import Pupil from './Pupil';
import {db, auth} from "./Config"


class App extends React.Component {
constructor(props){
  super(props);
  this.state = {
    email:'',
    password:'',
    hasAccount: false,
    name: '',
    key: '',
    value: ' ',
    data : {}
  }
}

  componentDidMount = () => {
    const db = firebase.database();
    const name = db.ref('name')
    name.on('value', (elem) =>
    {this.setState({name:elem.val()});})

    const surname = db.ref('ololo')
    surname.on('value', (elem) => {this.setState({data: elem.val()});})
    }
  
  
handleChange = ({target: {value, id}}) => {
this.setState({[id]: value})

}

createAccount = () => {
  const {email, password} = this.state;
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .catch(error=>console.log(error));
  
firebase.auth().signInWithEmailAndPassword(email, password)
.then(response=>{this.setState({hasAccount: true})})
.catch(error=>console.log(error))
}

sendData = () => {
const {key,value} = this.state;
const db = firebase.database();
db.ref(key).push(value)
alert('successful')
};



render(){ 
  const {hasAccount, name, data } = this.state;

  return (
    <div>
      {
        hasAccount ? (<div>
   
         <Pupil/>
        </div>) : 
        (
          <div className="LoginBlock">
        <input type="text" id="email" placeholder="E-mail" onChange={this.handleChange}></input>
        <input type="password" id="password" placeholder="Password" onChange={this.handleChange}></input>
        <button type="sub" onClick={this.createAccount}>Submit</button>
      </div>
        )
      }
      
    </div>
  )
    }
  }


export default App