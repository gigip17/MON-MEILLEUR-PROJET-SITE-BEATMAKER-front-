import React from "react";
import instagram from "../../assets/images/footer/logoInstagram.png"
import youtube from "../../assets/images/footer/logoYoutube.png"
import twitter from "../../assets/images/footer/logoTwitter.png"
import soundcloud from "../../assets/images/footer/logoSoundcloud.png"



const Footer = (props) => (
    <footer className="bg-primary">
        <div className="text-white text-center"> SuikerProd - tous droits reserver </div>
        <div className="row no-gutters align-items-center text-center pt-2">
            <div className="col-3">
                <a href="www" className="d-block" target="_blank">
                    <img src={instagram} alt="instagram" className="logoI" />
                </a>
            </div>
            <div className="col-3">
                <a href="www" className="d-block" target="_blank">
                    <img src={youtube} alt="youtube" className="logoY" />
                </a>
            </div>
            <div className="col-3">
                <a href="www" className="d-block" target="_blank">
                    <img src={twitter} alt="twitter" className="logoT" />
                </a>
            </div>
            <div className="col-3">
                <a href="www" className="d-block" target="_blank">
                    <img src={soundcloud} alt="soundcloud" className="logoS" />
                </a>
            </div>

        </div>
    </footer>
);

export default Footer;