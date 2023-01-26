import React from 'react'
import './Card.scss'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Card = ({id, name, subject, desc,state,setState}) => {
    

    
  return (
    <div id='card'>
        <img src="https://preview.colorlib.com/theme/oneschool/images/person_1.jpg.webp" alt="" />
        <h2>{name}</h2>
        <h3>{subject} Teacher</h3>
        <h4>{desc}</h4>
        <div>
        <button onClick={()=>{
            axios.delete(`http://localhost:8080/api/teachers/${id}`).then(res=>{
                setState(!state)
            })
        }}>Delete</button>
        <button><Link to={`/detail/${id}`}>Detail</Link></button>
        </div>
    </div>
  )
}

export default Card