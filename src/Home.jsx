import React from "react";
import {TweenMax} from "gsap";

import GitHubLogo from './images/GitHub-Mark-64px.png';
import LinkedinLogo from './images/LinkedInLogo.png';
import GmailLogo from './images/GmailLogo.png';

class Home extends React.Component {
    render(){
        return(
            <div>
                <div class="header">
                    <Header />
                </div>
                <div class="body">
                    <Body />
                </div>
            </div>
        );
    }

};
export default Home;

class Body extends React.Component{
    constructor(props){
        super(props);
        // reference to the DOM model
        this.myElement = null;
        // reference to the animation
        this.myTween = null;

    }

    componentDidMount(){
        // use the node ref to create the animation
        this.myTween = TweenMax.from(this.myElement, {opacity: 0, y: 100, delay: 0.9,duation: 90, ease: "power2.out"});
    }

    render(){
        return(
            <div ref={div => this.myElement = div }>
                <h3>Connect With Me</h3>
                        <div class="grid-container">
                        <div class="grid-item" id="github-link">
                            <a href="https://github.com/miranda0129">
                                <img src={GitHubLogo} alt="GitHubLogo"/>
                            </a>
                        </div>
                        <div class="grid-item" id="linkdin-link">
                            <a href = "https://www.linkedin.com/in/miranda-ransom-15989a1a9/">
                                <img src={LinkedinLogo} alt="LinkedinLogo"></img>
                            </a>
                        </div>
                        <div class="grid-item" id="gmail-link">
                            <a href="mailto:mirandaransom.0129@gmail.com">
                                <img src={GmailLogo} alt="Gmail Logo"></img>
                            </a>
                        </div>
                </div>
            </div>
        );
    }
}

class Header extends React.Component{
   
    render(){
        return(
            <div>
                <div className="intro" class="card">
                    <Intro />
                </div>
            </div>
        );
    }
}

class Intro extends React.Component{
    constructor(props){
        super(props);
        // reference to the DOM model
        this.myElement = null;
        // reference to the animation
        this.myTween = null;
    }

    componentDidMount(){
        // use the node ref to create the animation
        this.myTween = TweenMax.from(this.myElement, {opacity: 0, x: -200, delay: 0.5,duation: 90, ease: "elastic.out(0.5, 0.3)"});
    }

    render(){
        return(
            <div ref={div => this.myElement = div }>
                <h1>Hello</h1>
                <h1>My name is Miranda Ransom</h1>
            </div>
        );
    }
}
  