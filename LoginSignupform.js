import React, { Component } from 'react'
import { Modal } from "react-responsive-modal";
import { validate } from 'validate.js'
//import './css/style.css'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            sign: false,
            login: false,
        }
    }

    onOpenModal = () => {
        this.setState({ sign: true});
    };

    onOpenModalLogin = () => {
        this.setState({ login: true});
    };;

    onCloseModal = () => {
        this.setState({sign: false});
    };
    onCloseModalclose  = () => {
        this.setState({login: false});
    };

    render() {
        const {login , sign } = this.state;
        return (

            <header className = "header header-animated opaque" style = {{"display": 'block', "paddingTop": "5px", "paddingBottom": "20px"}}>
                <div className = "container">
                    <nav className = "navbar navbar-default" role = "navigation">

                        <div className = "nav-toggle collapsed" data-toggle = "collapse" data-target = "#navbarMain" aria-expanded = "false">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className = "navbar-collapse collapse in" id = "navbarMain" aria-expanded = "true" style = {{top: "65px"}}>
                            <ul className = "nav navbar-nav navbar-right">
                                <li>
                                    <button className = "btn btn-primary-outline" id = "signup" onClick = {this.onOpenModal}SignUp></button>
                                    <button className = "btn btn-primary-outline" id = "login" onClick = {this.onOpenModalLogin}Login></button>
                                    </li>
                                    </ul>       
                        </div>
                    </nav>
                </div>
            </header>

/*Signup modal */

            <Modal open = {sign} onClose = {this.onCloseModal}>
                <div className = "modal-body">
                    <form className = "contact-form form-validate3" novalidate = "novalidate">
                        <div className ="form-group">
                            <input className = "form-control" type = "text" name = "name" id = "name" placeholder = "Firstname" required = "" autoComplete ="off"></input>
                        </div>
                        <div className ="form-group">
                            <input className = "form-control" type = "email" name = "email" placeholder = "E-mail" required ="" autoComplete ="off"></input>
                        </div>
                        <div className ="form-group">
                            <input className = "password" name = "pass" className = "form-control" placeholder = "Password" required ="" autoComplete ="off"></input>
                        </div>    
                <input className = "btn btn-md btn-primary btn-center" id = "signup" type = "button" value = "Sign Up" onClick = "Rediect();"></input>
                    </form>
              </div>
            </Modal>

            /*login form*/

            <Modal open = {login} onClose = {this.onCloseModalclose}>
                <div className = "modal-body">
                    <form className = "contact-form form-validate4" novalidate ="novalidate">
                        <div className = "form-group">
                            <input className = "form-control"  type = "email" name = "email" placeholder = "E-mail" required ="" autoComplete ="off"></input>
                             </div>
                             <div className ="form-group">
                            <input className = "password" name = "pass" className = "form-control" placeholder = "Password" required ="" autoComplete ="off"></input>
                        </div>    
                <input className = "btn btn-md btn-primary btn-center" id = "login btn" type = "button" value = "Login" onClick = "Rediect();"></input>

                    </form>

                </div>
            </Modal>
        );
    }

} 
export default Login;