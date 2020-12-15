import React, {Component} from "react";
import {ReactComponent as LogoImg} from "../public/assets/Logo.svg"
import './Main.scss'
import LanguageSwitcher from "../components/LanguageSwitcher/LanguageSwitcher"
import CarouselComponent from "../components/CarouselComponent/CarouselComponent";
import RegistrationLoginForm from "../components/RegistrationLoginForm/RegistrationLoginForm";
const languages = ["US", "FR", "DE", "IT"]
class Main extends Component{
    state  = {
        selectedLanguage: languages[0],
        notRegistered: true
    }
    render(){
        return (
            <div className="main-page">
                <div className="row full-height">
                    <div className="common-info col-lg-7">
                        <div className="row center-lg logo-container">
                            <LogoImg/>
                        </div>
                        <CarouselComponent className="box"/>
                    </div>
                    <div className="login-form col-lg-5">
                        <div className="end-lg box">
                            <LanguageSwitcher curLang={this.state.selectedLanguage} options={languages}/>
                            <RegistrationLoginForm notRegistered={this.state.notRegistered}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Main