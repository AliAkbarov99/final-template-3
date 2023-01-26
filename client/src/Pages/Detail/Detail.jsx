import axios from 'axios'
import React from 'react'
import './Detail.scss'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const [teacher,setTeacher] = useState({})
  const {id} = useParams()

  useEffect(()=>{
    axios.get(`http://localhost:8080/api/teachers/${id}`).then(res=>{
      setTeacher(res.data)
      
    })
  },[])
  return (
    <div id='detail' style={{paddingTop:"200px",width:"100%",height:"100vh "}} >
      <img src="https://preview.colorlib.com/theme/oneschool/images/person_1.jpg.webp" alt="" />
      <h1>Name:{teacher.name}</h1>
      <h1>Subject:{teacher.subject}</h1>
      <h2>Subject:{teacher.description}</h2>
    </div>
  )
}

export default Detail