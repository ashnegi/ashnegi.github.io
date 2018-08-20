import React from 'react';
import Lightbox from "react-image-lightbox";

export class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photoIndex: 0,
            isOpen: false
        };
    }

    render() {
        let images = []
        if (this.props.data) {
            var workBio = this.props.data.workBio;
            var projects = this.props.data.projects.map((project, index) => {
                var obj = {};
                obj["src"] = project.image;
                obj["title"] = project.title;
                obj["description"] = project.description;
                images.push(obj)
                return <div key={project.id} className="masonry__brick">
                    <div className="item-folio">
                        <div className="item-folio__thumb">
                            <a onClick={() => this.setState({ isOpen: true, photoIndex: index })} className="thumb-link" title={project.title} >
                                <img src={project.image} alt="" />
                                <span className="shadow-overlay"></span>
                            </a>
                        </div>

                        <div className="item-folio__text">
                            <h3 className="item-folio__title">
                                {project.title}
                            </h3>
                            <p className="item-folio__cat">
                                {project.category}
                            </p>
                        </div>

                        <a href={project.url} className="item-folio__project-link" title="Project link">
                            <i className="im im-link"></i>
                        </a>

                        <div className="item-folio__caption">
                            <p>{project.description}</p>
                        </div>

                    </div>
                </div>
            })
        }
        const { photoIndex, isOpen } = this.state;

        return (
            <section id="works" className="s-works target-section">
                <div>
                    {isOpen && (
                        <Lightbox
                            mainSrc={images[(photoIndex)].src}
                            imageTitle = {images[(photoIndex)].title}
                            imageCaption = {images[(photoIndex)].description}
                            nextSrc={images[(photoIndex + 1) % images.length].toString()}
                            prevSrc={images[(photoIndex + images.length - 1) % images.length].toString()}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                            onMovePrevRequest={() =>
                                this.setState({
                                    photoIndex: (photoIndex + images.length - 1) % images.length
                                })}
                            onMoveNextRequest={() =>
                                this.setState({
                                    photoIndex: (photoIndex + 1) % images.length
                                })}
                        />
                    )}
                </div>
                <div className="row narrow section-intro has-bottom-sep">
                    <div className="col-full">
                        <h3>Portfolio</h3>
                        <h1>See My Latest Projects.</h1>
                        <p className="lead">{workBio}</p>
                    </div>
                </div>

                <div className="row masonry-wrap">
                    <div className="masonry">
                        {projects}
                    </div>
                </div >

            </section >
        )
    }
}