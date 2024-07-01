import React, { useState } from "react";
// import axiosInstance from '../api/conf';
import Advice from "../components/adviceComponent";


export default function Advicee(){

  //   const [formData, setFormData] = useState({
  //       "title": "killian titre 2",
  //       "description": "Je suis la description 2",
  //       "like": 15,
  //       "id_category": 1,
       

      
  //       "picture": null
  //     });
    

  //  function submitTest(){
  //   // const response =  axiosInstance.post('http://localhost:8000/advice/create', formData);
  //  }
  //  function getAll(){
  //   // const response =  axiosInstance.get('http://localhost:8000/category');
  //   // console.log(response);
  //   // response.then((el)=> {console.log(el.data[0].name)})
  //  }


    return(
       <>
          <Advice/>
  
       </>
    );
}