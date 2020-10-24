import React from "react";
import {TweenMax} from "gsap";

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
    render(){
        return(
            <div>
                <h3>Connect With Me</h3>
                        <div class="grid-container">
                        <div class="grid-item" id="github-link">1</div>
                        <div class="grid-item" id="linkdin-link">2</div>
                        <div class="grid-item" id="gmail-link">3</div>
                </div>
            </div>
        );
    }
}

class Header extends React.Component{
    render(){
        return(
            <div className="intro" class="card">
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
        this.myTween = TweenMax.from(this.myElement, {opacity: 0, x: -40, delay: 0.5,duation: 40, ease: "bounce.out"});
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
  