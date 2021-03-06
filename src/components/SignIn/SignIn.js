import React, { Component } from 'react';
import 'tachyons';

class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({ signInEmail: event.target.value });
    }

    onPasswordChange = (event) => {
        this.setState({ signInPassword: event.target.value });
    }

    onSubmitSignIn = (apiUrlBasedOnEnvironment) => {
        fetch(apiUrlBasedOnEnvironment + 'signin',
            {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: this.state.signInEmail,
                    password: this.state.signInPassword
                })
            })
            .then(res => {
                return res.json();
            })
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user);
                    this.props.onRouteChange('home');
                }
            })
            .catch(err => {
                console.log('error!!:', err);
            })
    }

    render() {
        const { onRouteChange, apiUrlBasedOnEnvironment } = this.props;
        return (
            <article className="mw6 center bg-white-30 br3 pa3 pa4-ns mv1 ba b--black-10 shadow-4">
                <div className="tc">
                    <main className="pa4 black-80">
                        <div className="measure">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                <div>test@test.com : 123 -- for testing</div>
                                <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                                <div className="mt3">
                                    <label
                                        className="db fw6 lh-copy f6"
                                        htmlFor="email-address">Email</label>
                                    <input
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="email"
                                        name="email-address"
                                        id="email-address"
                                        onChange={this.onEmailChange}></input>
                                </div>
                                <div className="mv3">
                                    <label
                                        className="db fw6 lh-copy f6"
                                        htmlFor="password">Password</label>
                                    <input
                                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="password"
                                        name="password"
                                        id="password"
                                        onChange={this.onPasswordChange}></input>
                                </div>
                                <input type="checkbox"></input><label className="pa0 ma0 lh-copy f6 pointer"> Remember me</label>
                            </fieldset>
                            <div className="">
                                <input
                                    onClick={() => this.onSubmitSignIn(apiUrlBasedOnEnvironment)}
                                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                    type="submit"
                                    value="Sign in">
                                </input>
                            </div>
                            <div className="lh-copy mt3">
                                <a onClick={() => onRouteChange('register')} href="#0" className="f6 link dim black db pointer">Sign up</a>
                                <a href="#0" className="f6 link dim black db">Forgot your password?</a>
                            </div>
                        </div>
                    </main>
                </div>
            </article>
        )
    }
}
export default SignIn;