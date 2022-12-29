import {db, auth} from "./Config"

  
//   db.settings({
//     timestampsInSnapshots: true
//   });

// const grades = document.querySelector('#grades');

// function creater (doc) {
//     let li = document.createElement('li')
//     let name = document.createElement('span')
//     let city = document.createElement('span')

//     li.setAttribute('data-id', doc.id);
//     name.textContent = doc.data().current1
//     city.textContent = doc.data().midterm1

//     li.appendChild(name)
//     li.appendChild(city)

//     grades.appendChild(li);
//     }


// db.collection("History").get().then( milky => 
//     {
//         const lst = []
//         milky.forEach (doc =>
//             {
//                 const data = doc.data()
//                 console.log(doc)
//                 students_grades.push(data)
//             })
//     })

import React, { Component } from 'react'

export default class History extends Component {
    state =
    {
        student_grades: null
    }

    componentDidMount()
    {
        db.collection('History')
        .doc(auth.currentUser.uid)
        .get()
        .then(
            ( object ) => this.state.student_grades = object.data())
    }

    render() {
        return (
                <div>
                    <div>89</div>
                    <div>90</div>
                    <div>78</div>
                    <div>100</div>
                    <hr />
                </div>
                )
    }
}




