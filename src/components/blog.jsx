import React, { useEffect } from "react";
import bckBlog from "../images/backgroundBlog.png";
import bckBlogMob from "../images/backgroundBlogMobile.png";
import data from '../data/data.json';
import Header from './header'
import '../styles/blog.css'

export default function Blog() {
  console.log(data);
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
      {data.articles.map(art => (
        <section className={"sctGenblog"} key={art.id}>
          <div className="ctnGenBlog">
            <div className="ssCtn1GenBlog">
              <img src={bckBlog} alt="" />
            </div>
            <div className="ssCtn2GenBlog">
              <div>
                <h2>{art.title}</h2>
                <p>{art.paragraphBlog}</p> {/* Correction de la propriété ici */}
                <div>
                  <p className="pAuteurBlog">{art.auteur}</p>
                  <p className="pDateBlog">{art.date}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
      




    </>
  );
}
