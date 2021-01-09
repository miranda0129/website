import React from "react";
import {TweenMax} from "gsap";

import GitHubLogo from './images/GitHub-Mark-64px.png';
import LinkedinLogo from './images/LinkedInLogo.png';
import GmailLogo from './images/GmailLogo.png';

class Home extends React.Component {
    render(){
        return(
            <div>
                <div>
                    <Header />
                </div>
                <div className="body">
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
                <Blurb /> 
                <Socials />
                <Skills />
                <Projects />
                <About/>
            </div>
        );
    }
}

class Blurb extends React.Component{
    render(){
        return(
            <div className="flex-container blurb"> 
                <p>Software engineer, web developer, digital photographer & creative</p>
            </div>
        );
    }
}

class Socials extends React.Component{
    render(){
        return(
            <div className="socials">
                <h3>Connect With Me</h3>
                <div className="flex-container" id="social-icons">
                    <div className="grid-item" id="github-link">
                        <a href="https://github.com/miranda0129">
                            <img src={GitHubLogo} alt="GitHubLogo"/>
                        </a>
                    </div>
                    <div className="grid-item" id="linkdin-link">
                        <a href = "https://www.linkedin.com/in/miranda-ransom-15989a1a9/">
                            <img src={LinkedinLogo} alt="LinkedinLogo"></img>
                        </a>
                    </div>
                    <div className="grid-item" id="gmail-link">
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
            <div className="flex-container header">
                    <Intro />
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
                <h2>I'm Miranda Ransom</h2>
            </div>
        );
    }
}

class Skills extends React.Component{
    render(){
        return(
            <div id="skills">
                <table className="table">
                   <thead>
                        <tr>
                            <th>Languages</th>
                            <th>Technologies</th>
                        </tr>
                   </thead>
                    <tbody>
                        <tr>
                            <td>
                                <p>C, Java, Python, PHP, Javascript, HTML, CSS, C#, SQL</p>
                            </td>
                            <td>
                                <p>Git & GitHub, React, Bootstrap, Adobe XD</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

class Projects extends React.Component{
    render(){
        return(
            <div id="projects">
            <h3>Projects</h3>
                <ul>
                    <li>Side Scrolling Platformer Video Game</li>
                    <li>Productivity Desktop Application</li>
                    <li>Virus Total Command Line Interface</li>
                    <li>Band Meetup Website</li>
                    <li>Tiny to Java translator</li>
                </ul>
            </div>
        )
    }
}

class About extends React.Component{
    render(){
        return(
            <div id="about">
                <div className="flex-container">
                    <div>
                        <p>My name is Miranda Ransom.  I am a software developer located in Canada.  After finishing
                        my undergraduate degree in computer science I hope to develop practical software
                        and continue to grow my skills.</p>
                    </div>
                    <div>
                        <p>photo goes here</p>
                    </div>
                </div>
            </div>
        )
    }
}
  