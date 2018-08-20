import React, { Component } from 'react';
import {Header} from './pages/shared/Header';
import {Footer} from './pages/shared/Footer';

import {Intro} from './pages/Intro';
import {About} from './pages/About';
import {Portfolio} from './pages/Portfolio';
import {Contact} from './pages/Contact';

import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)
    this.state = { webdata: {}} 
  }

  componentDidMount(){
    axios.get('https://portfolio-aa920.firebaseio.com/.json')
      .then(res => {
        this.setState({
          webdata: res.data
        });
      })
      .catch(error => {
        console.log(error.res);
      });
  }
  componentWillUnmount() {
    this.serverRequest.abort();
  }
  render() {
    if (this.state.webdata) {
      console.log(this.state.webdata)
    }
    return (
      <div>
        <section id="home">
          <Header></Header>
          <Intro data={this.state.webdata.intro}></Intro> 
        </section>   
        <section id="about">
          <About data={this.state.webdata.about}></About>
        </section>   
        <section id="work">
          <Portfolio data={this.state.webdata.portfolio}></Portfolio>
        </section>   
        <section id="contact">
          <Contact></Contact>
        </section>   
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
