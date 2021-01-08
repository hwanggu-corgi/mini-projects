import corgi from './assets/imgs/corgi.jpg';
import './App.css';

import { Component } from 'react';

class App extends Component {

  componentDidMount() {
    document.addEventListener("scroll", this.handleLazyLoading)
  }

  handleLazyLoading = e => {
    const scroll = e.target.scrollingElement;
    const main = document.querySelector("main");

    // Check if it has reached the bottom of the page
    // if it has reached the bottom of page, then load more images
    if (scroll.scrollHeight <= scroll.scrollTop + scroll.clientHeight) {
      for (let i = 0; i < 20; i++) {
          let img = document.createElement("img");
          img.src = "./corgi.jpg";
          main.appendChild(img);
      }
    }
  }

  render() {
    return (
      <main>
          <img src={corgi} alt="Corgi"/>
          <img src={corgi} alt="Corgi"/>
          <img src={corgi} alt="Corgi"/>
          <img src={corgi} alt="Corgi"/>
          <img src={corgi} alt="Corgi"/>
          <img src={corgi} alt="Corgi"/>
          <img src={corgi} alt="Corgi"/>
          <img src={corgi} alt="Corgi"/>
          <img src={corgi} alt="Corgi"/>
          <img src={corgi} alt="Corgi"/>
      </main>
    );
  }
}

export default App;
