import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { redirection: false };
    }


    login(e) {
        e.preventDefault();
        let request = {
            email: document.getElementById('inputEmail').value,
            password: document.getElementById('inputPassword').value
        };

        axios.post('http://localhost:9000/login', request)
            .then( resp => {
                let message = resp.data.message;
                if(message === "Login réussi") {
                    this.setState({ redirection: true });
                } else {
                    alert(message);
                }
            })
            .catch( err => {
                console.log(err);
            });
    }


    render() {
        if (this.state.redirection) {
            return <Redirect to='/success'/>;
        }
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Bienvenue !<br/>Veuillez vous identifier s'il-vous-plait...</h1>
                </header>
                <div className="container">
                    <form onSubmit={(e) => this.login(e)}>
                        <div className="form-group">
                            <label htmlFor="inputEmail">Adresse email</label>
                            <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputPassword">Mot de passe</label>
                            <input type="password" className="form-control" id="inputPassword"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Envoyer</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginForm;