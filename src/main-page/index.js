import React, { Component } from 'react';
import './main-page.css';
import Header from './Header';
import Content from './Content';
import About from './About';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="container-xxl">
        <Header subtitle="Making a difference with one kid's artwork at a time."/>
        <Content title="Kids Art for Good"/>
        <About />
        <Footer />
      </div>
    );
  }
  
}

export default App;
