import React from 'react';
import './Pupil.css';
import { NavLink, Route } from 'react-router-dom';
import Greet from './Greeting';
import Profile from './Profile';
import Sub from './Sub';
import History from './History';

function Pupil(props) {
    return (<div id="Pupil">
      
    <header className="header">
        {/* <div><img className="himg" src="https://st2.depositphotos.com/4281247/11539/i/600/depositphotos_115399638-stock-photo-cupcake-watercolor-illustration.jpg"/></div> */}
        <div className="title"><h1>Университет мультипликации</h1></div>
       

        <div id="navigator">
        <ul className="UL">
      <li><NavLink to="/Profile">Личный кабинет</NavLink></li>
      <li><NavLink to="#">Регистрация</NavLink></li>
      </ul>
        </div>

    </header>

    <body className="body">
      <Route exact path="/" component={Greet}></Route>
      <Route path="#"></Route>
      <Route exact path="/Sub" render={() =><Sub/>}/>
      <Route exact path="/Profile" render={()=><Profile/>}/>
      <Route exact path="/History" component={History}/>
    </body>

    <footer className="footer"></footer>
    </div>)}
    
export default Pupil

// https://nsportal.ru/sites/default/files/styles/large/public/media/2019/04/08/07611cd1cd2d.png?itok=wEgAWoUo