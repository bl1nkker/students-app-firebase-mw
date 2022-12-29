import React from 'react';
import './Profile.css';
import { NavLink, Route } from 'react-router-dom';
import {db, auth} from "./Config"

function Profile() {

    
    return(<div className="Profile">

<div className="Base">
<h2>Мишулина Полина Михайловна</h2>
<img className="Portret" src="https://i.pinimg.com/originals/86/49/ff/8649ff07ee4908e46d52595d0c416d31.jpg"/>
</div>

<div className="Action"> 

<div className="Bold">
<h3>Курс:</h3>
<h3>Специальность:</h3>
<h3>Отделение:</h3>
<h3>Успеваемость (GPA):</h3>
<NavLink to='/Sub'><button className="text">Дисциплины</button></NavLink>
</div>

<div className="NotBold">
<h3>2</h3>
<h3>Анимация</h3>
<h3>Русскоязычное</h3>
<h3>3.9</h3>
<button className="text">Расписание</button>
</div>

</div>

</div> )
}

export default Profile