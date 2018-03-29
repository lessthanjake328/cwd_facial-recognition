import React, { Component } from 'react';
import 'tachyons';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }
 
    onSubmitSignIn = (event) => {

        fetch('http://localhost:3000/register',
            {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password,
                    name: this.state.name
                })
            })
            .then(res => {
                return res.json();
            })
            .then(user => {
                if (user.id) {
                    console.log(user);
                    this.props.loadUser(user);
                    this.props.onRouteChange('home');
                }
            })
    }

    onNameChange = (event) => {
        this.setState({ name: event.target.value });
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value });
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value });
    }

    render() {
        const { onRouteChange } = this.props;
        return (
            <article className="mw6 center bg-white-30 br3 pa3 pa4-ns mv1 ba b--black-10 shadow-4">
                <div className="tc">
                    <main className="pa4 black-80">
                        <div className="measure">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                <legend className="f1 fw6 ph0 mh0">Register</legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                    <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="name"
                                    id="name"
                                    onChange={this.onNameChange}
                                    ></input>
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="email" 
                                    name="email-address" 
                                    id="email-address"
                                    onChange={this.onEmailChange}></input>
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="password" 
                                    name="password" 
                                    id="password"
                                    onChange={this.onPasswordChange}></input>
                                </div>
                            </fieldset>
                            <div className="">
                                <input
                                    onClick={this.onSubmitSignIn}
                                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                    type="submit"
                                    value="Submit"></input>
                            </div>
                            <div className="lh-copy mt3">
                                <p onClick={() => onRouteChange('register')} className="f6 link dim black db">Forgot your password?</p>
                            </div>
                        </div>
                    </main>
                </div>
            </article>
        )
    }
}
export default Register;