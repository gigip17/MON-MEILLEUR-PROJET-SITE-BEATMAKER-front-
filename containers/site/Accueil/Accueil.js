import React, { Component } from 'react';
import TitreH1 from "../../../components/UI/Titres/TitreH1";
import logo from "../../../assets/images/logo.png";
import banderole from "../../../assets/images/banderole.jpg"
class Accueil extends Component {

   componentDidMount =() => {
      document.title = "Suiker fais des prods"
   }
   render() {
      return (
         <div>
            <img src={banderole} alt="banderole" className="img-fluid" />

            <TitreH1>Suiker beatz</TitreH1>

            <div className="container">
               <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                  , when an unknown printer took a galley of type and scrambled it to make a type specimen book
                  . It has survived not only five centuries, but also the leap into electronic typesetting.
               </p>
               <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining
               </p>
               <div className="row no gutters align-items-center">
                  <div className="col-12 col-md-6">
                     <img src={logo} alt="logo du site" className="img-fluid"/>
                  </div>

                  <div className="col-12 col-md-6">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining
              
                  </div>
                  
                  <div className="col-12 col-md-6">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining
              
                  </div>
                  <div className="col-12 col-md-6">
                     <img src={logo} alt="logo du site" className="img-fluid"/>
                  </div>
               </div>

            </div>

         </div>
      );
   }
}

export default Accueil;