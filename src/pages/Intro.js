import React from 'react';

export class Intro extends React.Component {
    render() {
        if (this.props.data) {
            var name = this.props.data.name;
            var occupation = this.props.data.occupation;
            var place = this.props.data.place;
         
        }
        return (
            <section id="home" className="s-home page-hero target-section" data-parallax="scroll" data-image-src="/assets/images/hero-bg.jpg" data-natural-width='3000' data-natural-height='2000' data-position-y='center' >
                <div className="overlay"></div>
                <div className="shadow-overlay"></div>
                <div className="home-content">
                    <div className="row home-content__main">
                        <h3>Hello There</h3>
                        <h1>
                            I am {name} <br />
                            I am a {occupation} based in {place}.
                        </h1>
                        <div className="home-content__buttons">
                            <a href="#works" className="smoothscroll btn btn--stroke">
                                Latest Projects
                            </a>
                            <a href="#about" className="smoothscroll btn btn--stroke">
                                More About Me
                            </a>
                        </div>
                        <div className="home-content__scroll">
                            <a href="#about" className="scroll-link smoothscroll">
                                <span>Scroll Down</span>
                            </a>
                        </div>
                    </div>
                </div>
                <ul className="home-social">
                    {/* <li>
                        <a href="#"><i className="im im-facebook" aria-hidden="true"></i><span>Facebook</span></a>
                    </li> */}
                    <li>
                        <a href="#"><i className="im im-twitter" aria-hidden="true"></i><span>Twiiter</span></a>
                    </li>
                    {/* <li>
                        <a href="#"><i className="im im-instagram" aria-hidden="true"></i><span>Instagram</span></a>
                    </li> */}
                    <li>
                        <a href="#"><i className="im im-behance" aria-hidden="true"></i><span>Behance</span></a>
                    </li>
                    {/* <li>
                        <a href="#"><i className="im im-pinterest" aria-hidden="true"></i><span>Pinterest</span></a>
                    </li> */}
                </ul>
            </section>
        )
    }
}