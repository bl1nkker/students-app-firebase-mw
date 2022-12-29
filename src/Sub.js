import React from 'react';
import './Sub.css';
import { NavLink, Route } from 'react-router-dom';


function Sub(
) {
    return(<div>

        <div className="Title"><h2>Дисциплины</h2></div>

        <div className="Subs">
       
       
<div className="Card">
    <div><img className="cardimg" src="https://static3.depositphotos.com/1001952/247/i/600/depositphotos_2478371-stock-photo-old-magnifying-glass-on-word.jpg"/></div>
    <div> <h2>История</h2></div>
    <div><NavLink to='/History'><button className="but">Перейти</button></NavLink></div>
    </div>
   

<div className="Card">
<div ><img className="cardimg" src="https://automated-testing.info/uploads/default/original/2X/4/4d2585dce97e783e56abeb35fe9136625c519c40.jpg"/></div>
   <div><h2> Английский язык</h2></div>
   <div><button className="but">Перейти</button></div></div>
  

<div className="Card">
<div><img className="cardimg" src="https://pngimg.com/uploads/tom_and_jerry/tom_and_jerry_PNG29.png"/></div>
    <div><h2>Анимация</h2></div>
    <div><button className="but">Перейти</button></div></div>

    <div className="Card">
<div><img className="cardimg" src="https://i.pinimg.com/originals/8a/eb/f6/8aebf65216dab97e0f14aad748455c31.png"/></div>
    <div><h2>Искусство</h2></div>
    <div><button className="but">Перейти</button></div></div>



        </div>
        </div>
    

        
    )
    
}
export default Sub

{/* <div><h3>История: 5 5 4 3 5 5 5</h3></div>
<div><h3>Анимация: 5 5 5 5 5 4 3 5 5</h3></div>
<div><h3>Английский язык: 5 5 4 3 5 5 5</h3></div>
<div><h3>История: 5 5 4 3 5 5 5</h3></div>
<div><h3>История: 5 5 4 3 5 5 5</h3></div>
<div><h3>История: 5 5 4 3 5 5 5</h3></div> */}