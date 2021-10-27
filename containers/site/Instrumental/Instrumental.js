import { Component } from 'react';
import TitreH1 from '../../../components/UI/Titres/TitreH1';
import axios from "axios";
import Instru from "./Music/Music";
 class Instrumental extends Component{
     state = {
         instrus : null
     }
     componentDidMount = () => {
        //  a changer avec le nom du site 
        // requete asynchrone
         axios.get('http://localhost/suikerprod/front/instrus')
         .then(reponse => {
            //  mettre a jour le composant 
            // Objetct.values:mettre en tableau les valeurs 
             this.setState({instrus:Object.values(reponse.data)});
         })
     }
     render() {
        return (
             <>
             <TitreH1>Mes instrumentals</TitreH1>
             <div className="container">
                 <div className="row no-gutters">
                 {
                    //  on test si instrus est vrai
                  this.state.instrus &&
                    //on parcours le tableau
                  this.state.instrus.map(instru => {
                    //   on appel le composants Instru et envoyer toute nos info a notre composants 
                    // on met une clef pour que chaque elements sois unique 
                    // j'utilise bootsrap sur la div pour qu'elle sois responsive et faire des collones 
                    // col-12 pour petit ecran , l'instu prend toute la taille , pour les grands écran , je montre 3 instru (12/4)
                      return (
                        
                          <div className="col-12 col-md-6 col-xl-4" key={instru.id}>
                              
                              <Instru {...instru} />
                          </div>
                      )
                  })                
                  }
                  </div>
             </div>
  
             </>
        );
      }
 }
export default Instrumental;