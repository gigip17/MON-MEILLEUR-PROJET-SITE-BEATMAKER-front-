import { Component } from 'react';
import Titre from "../../components/UI/Titres/TitreH1";
import Formulaire from "./Formulaire/Formulaire";
import axios from "axios"

class Contact extends Component{
    componentDidMount = () => {
        document.title = "Page de contact";
    }
    handleEnvoiMail =(message) => {
        axios.post("http://localhost/suikerprod/front/sendMessage",message)
        .then(reponse=> {
            console.log(reponse)
        })
        .catch(error => {
            console.log(error)
        })
    }
    render() {
        return (
            <>
            {/* on import les composants Titre et Formulaire */}
            <Titre bgColor="bg-sucess">Contactez nous !</Titre>
            <div className="container">
                <h2>Adress :</h2>
                xxxxxxx
                <h2>Téléphone</h2>
                00 00 00 00 00
                <h2>Vous préferez nous écrire ? </h2>
                <Formulaire sendMail = {this.handleEnvoiMail} />
            </div>
            </>
        );
     }
}

export default Contact;