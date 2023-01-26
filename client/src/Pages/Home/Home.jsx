import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Card from '../../Components/Card/Card'
import './Home.scss'
import axios from 'axios'
import { useFormik } from 'formik';


const Home = () => {

  var myNav = document.getElementById('navbar');
  window.onscroll = function () { 
    if (document.body.scrollTop >= 200 ) {
        myNav.classList.add("changed-navbar");
    } 
    else {
        myNav.classList.remove("changed-navbar");
    }
};




  const [teachers,setTeachers] = useState([])
  const [state,setState] = useState(false)

  useEffect(()=>{
    axios.get("http://localhost:8080/api/teachers").then(response=>{
      setTeachers(response.data)
    })
  },[state])


  const formik = useFormik({
    initialValues: {
      name: '',
      subject: '',
      description: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      axios.post('http://localhost:8080/api/teachers',{
        ...values
      }).then((res)=>{
        setState(!state)
      })
    },
  });


  return (
    <>
      <div id='intro'>
        <div className='.container'>

        </div>
      </div>

      <div id='programs'>
        <h1>Our Programs</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut neque! Doloribus sunt non aut reiciendis, vel recusandae obcaecati hic dicta repudiandae in quas quibusdam ullam, illum sed veniam!</p>
        <div className='container'>
          <div className='programs__left'>
            <img src="https://preview.colorlib.com/theme/oneschool/images/undraw_youtube_tutorial.svg" alt="" />
          </div>
          <div className='programs__right'>
            <h2>We Are Excellent In Education</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.</p>
            <div>
              <span></span>
              <p>22,931 Yearly Graduates</p>
            </div>
            <div>
              <span></span>
              <p>150 Universities Worldwide</p>
            </div>
          </div>
        </div>
      </div>

      <div id='strive'>
        <div className='container'>
          <div className='strive__left'>
            <h2>Strive for Excellent</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.</p>
            <div>
              <span></span>
              <p>22,931 Yearly Graduates</p>
            </div>
            <div>
              <span></span>
              <p>150 Universities Worldwide</p>
            </div>
          </div>
          <div className='strive__right'>
            <img src="https://preview.colorlib.com/theme/oneschool/images/undraw_teaching.svg" alt="" />
          </div>
        </div>
      </div>

      <div id='teachers'>
        <div className='teachers__header'>
        <h1>Our Teachers</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut neque! Doloribus sunt non aut reiciendis, vel recusandae obcaecati hic dicta repudiandae in quas quibusdam ullam, illum sed veniam!</p>
        </div>
        <div className="container">
          {teachers && teachers.map(teacher=>{
            return <Card key={teacher._id} id={teacher._id} name={teacher.name} subject={teacher.subject} desc={teacher.description} state={state} setState={setState}/>
          })}
          
        </div>
      </div>


      <div id='add'>

          <div className='container'>
          <form onSubmit={formik.handleSubmit}>
          <div className='add__header'>
          <h1>Add Teacher</h1>
          <p>Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
        </div>
       <input
       placeholder='Name'
         id="name"
         name="name"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.name}
       />
       <input
       placeholder='Subject'
         id="subject"
         name="subject"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.subject}
       />
       <input
       placeholder='Description'
         id="description"
         name="description"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.description}
       />
       <button type="submit">Submit</button>
     </form>
          </div>
      </div>
    </>
  )
}

export default Home