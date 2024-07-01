import React, { useEffect, useState } from "react";
import bckBlog from "../images/backgroundBlog.png";
import bckBlogMob from "../images/backgroundBlogMobile.png";
import data from '../data/data.json';
import Header from './header'
import '../styles/blog.css'
import { GetALLAdvice } from "../api/conf";
import likeIcone from "../images/likeIcon.png"

export default function Blog() {
  console.log(data);
  const [dataAdvice, setDataAdvice] = useState()
  console.log(dataAdvice);
  useEffect(() => {
    const bckBlogId = document.getElementById('bckBlogId');
    const mediaQuery = window.matchMedia('(max-width: 600px)');

    const handleMediaChange = (event) => {
        if (event.matches) {
            bckBlogId.setAttribute('src', bckBlogMob);
        } else {
            bckBlogId.setAttribute('src', bckBlog);
        }
    };

    handleMediaChange(mediaQuery);
    const res = GetALLAdvice()
    res.then((e)=> {setDataAdvice(e.data.advices)})




}, []);


  return (
    <>
     <Header/>
      <section id="sct1blog">
        <img id="bckBlogId"  alt="" srcSet="" />
        <div id="ctn1Blog1"><h1>Blog Arosa-je</h1></div>
        <div id="ctn2Blog1">
          <div id="ssCtnBlog1">
            <span><span></span></span>
            <span><span></span></span>
          </div>
        </div>
      </section>
      {dataAdvice ? (
      dataAdvice.map(art => (
        <section className={"sctGenblog"} key={art.id_advice}>
          <div className="ctnGenBlog">
            <div className="ssCtn1GenBlog">
            <img
                    src={`http://127.0.0.1:8000${art.picture}`}
                    alt=""
                  />
              
            </div>
            <div className="ssCtn2GenBlog">
              <div>
                <h2>{art.title}</h2>
                <p>{art.description}</p> {/* Correction de la propriété ici */}
                <div className="!justify-start">
                  <img className="!w-[25px]" src={likeIcone} alt="" srcset="" />
                  <p>{art.like}</p>
                </div>

              </div>
            </div>
          </div>

          <div>


          </div>
        </section>
      ))
    ): null}
      




    </>
  );
}
