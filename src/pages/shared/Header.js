import React from 'react';
import Scrollspy from 'react-scrollspy'

export class Header extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            visible_state: ''
        }
    }
    menuToggle(){
        this.setState({
            visible_state: !this.state.visible_state
        });
    }

    render() {
        return (
            <header className="s-header  sticky offset scrolling">
                <div className="header-logo">
                    <a className="site-logo" href="index.html"><img src="/assets/images/logo.png" alt="Homepage" /></a>
                </div>
                <nav className={`header-nav-wrap ${this.state.visible_state ? 'show' : 'hide'}`}>
                    <Scrollspy className="header-nav" items={['home', 'about', 'works', 'contact']} offset={0} currentClassName="current">
                        <li ><a href="#home" title="home">Home</a></li>
                        <li><a href="#about" title="about">About</a></li>
                        <li><a href="#works" title="works">Works</a></li>
                        <li><a href="#contact" title="contact">Contact</a></li>
                    </Scrollspy>
                </nav>
                <a className="header-menu-toggle" onClick={this.menuToggle.bind(this)} href="#0"><span>Menu</span></a>
            </header>
        )
    }
}