import React from "react";
import "../styles/index.css"
import img1 from "../images/indexSct1Img1.png"
import img2 from "../images/indexSct2Img1.png"
import Header from './header'
import Footer from './footer'


export default function Index() {



    return (
        <>
             <Header/>
            <section className="sct1Index">
                <div id="ctnGenIndex1">
                    <div id="ctnRightIndex1">
                        <div id="ssCtnRightIndex1"> <p id="para1sct1index">Décourez notre appliaction.</p>
                            <h1 id="titre1sct1Index">Arosa-<span className="colorGreen">je</span></h1>
                            <p id="para2sct1index">Les plantes sont des organismes photosynthétiques et autotrophes, caractérisés par des cellules végétales. Elles forment l'un des règnes des Eukaryota. Ce règne est un groupe monophylétique comprenant les plantes terrestres.</p>
                            <button><span className="colorGreen">Décou</span><span className="colorBlack">vrire</span></button>
                        </div>

                    </div>
                    <div id="ctnLeftIndex1">
                        <img src={img1} alt="" srcset="" />
                    </div>
                </div>
            </section>
            <section id="sct2Index">
                <div id="ctnGenIndex2">
                    <div id="ctnRightIndex2">
                        <img src={img2} alt="" srcset="" />
                    </div>
                    <div id="ctnLeftIndex2">
                        <div id="ssCtnLeftIndex2">
                            <h2><span className="colorBlack">Nos</span><span className="colorGreen"> valeur</span></h2>
                            <p>Les plantes sont des organismes photosynthétiques et autotrophes, caractérisés par des cellules végétales. Elles forment l'un des règnes des Eukaryota. Ce règne est un groupe monophylétique comprenant les plantes terrestres.</p>
                            <button><span className="colorGreen">Décou</span><span className="colorWhite">vrire</span></button>
                        </div>

                    </div>
                </div>

            </section>
            <section id="sct3Index">
                <div id="ctnGenIndex3">
                    <div id="ctnTopIndex3">
                        <p> Nos <span className="colorGreen">services</span></p>

                    </div>
                    <div id="ctnIndex3">
                        <div id="ssCtnBottom1Index3">
                            <h2 id="h2_1Index3">Gardiennage</h2>
                            <p>Les plantes sont des organismes photosynthétiques et autotrophes, caractérisés par des cellules végétales. Elles forment l'un des règnes des Eukaryota. </p>
                            <div>
                                <svg width="198" height="45" viewBox="0 0 198 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0H198L169.938 45H0V0Z" fill="black" />
                                </svg>
                                <button id="btn1Index3">Découvrire</button>

                            </div>
                        </div>
                        <div id="ssCtnBottom1Index3">
                            <h2 id="h2_2Index3"><span className="colorBlack">Conseil </span><span className="colorGreen"> expert</span></h2>
                            <p>Les plantes sont des organismes photosynthétiques et autotrophes, caractérisés par des cellules végétales. Elles forment l'un des règnes des Eukaryota. </p>
                            <div>
                                <svg width="198" height="45" viewBox="0 0 198 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0H198L169.938 45H0V0Z" fill="green" />
                                </svg>     
                               <button id="btn2Index3">Découvrire</button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>


    )
}