import React from 'react';

export class About extends React.Component {
    render() {
        if (this.props.data) {
            var shortBio = this.props.data.shortBio;
            var bio = this.props.data.bio;
            var skills = this.props.data.skills.map((skill) => {
                return <li key={skill.name}><div className={`progress percent${skill.level}`}><span>{skill.level}%</span></div> <strong>{skill.name}</strong></li>
            });
            var education = this.props.data.education.map((edu) => {
                return <div key={edu.degree} className="timeline__block col-six">
                    <div className="timeline__bullet"></div>
                    <div className="timeline__header">
                        <p className="timeline__timeframe">{edu.graduated}</p>
                        <h3>{edu.school}</h3>
                        <h5>{edu.degree}</h5>
                    </div>
                    <div className="timeline__desc">
                        <p>{edu.description}</p>
                    </div>
                </div>
            });
            var work = this.props.data.work.map((w) => {
                return <div key={w.id} className="timeline__block col-six">
                    <div className="timeline__bullet"></div>
                    <div className="timeline__header">
                        <p className="timeline__timeframe">{w.years}</p>
                        <h3>{w.company}</h3>
                        <h5>{w.title}</h5>
                    </div>
                    <div className="timeline__desc">
                        <p>{w.description}</p>
                    </div>
                </div>
            });


        }
        return <section id="about" className="s-about target-section">
            <div className="row narrow section-intro has-bottom-sep">
              <div className="col-full text-center">
                <h3>About</h3>
                <h1>More About Me</h1>
                <p className="lead">{shortBio}</p>
              </div>
            </div>

            <div className="row about-content">
              <div className="col-six tab-full left">
                <h3>Howdy!</h3>
                <p>{bio}</p>
              </div>

              <div className="col-six tab-full right">
                <h3>I've Got Some skills.</h3>

                <ul className="skill-bars">{skills}</ul>
              </div>
            </div>

            <div className="row about-content about-content--buttons">
              <div className="col-twelve tab-full center">
                <a href="#0" className="btn btn--primary full-width">
                  Download My CV
                </a>
              </div>
              {/* <div className="col-six tab-full right">
                        <a href="#0" className="btn full-width">Hire Me Now</a>
                    </div> */}
            </div>
            <div className="row about-content about-content--timeline">
              <div className="col-full text-center">
                <h3>My Work Experience.</h3>
              </div>
              <div className="col-twelve tab-full">
                <div className="timeline row">{work}</div>
              </div>

              <div className="col-full text-center">
                <h3>My Education.</h3>
              </div>
              <div className="col-twelve tab-full">
                <div className="timeline row">{education}</div>
              </div>
            </div>
          </section>;
    }
}