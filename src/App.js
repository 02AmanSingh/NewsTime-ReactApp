// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";


export default class App extends Component {

  pageSize = 15;
  apiKey= process.env.REACT_APP_NEWS_API;

  render() {
    return (
      <BrowserRouter>
      <div>
          <Navbar/>
          <Routes>
          <Route exact path="/" element={<News key="general" pageSize={this.pageSize} apiKey={this.apiKey} country='in' category="general" />} />
          <Route exact path="/business" element={<News key="business" pageSize={this.pageSize} apiKey={this.apiKey} country='in' category='business' />} />
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} apiKey={this.apiKey} country='in' category='entertainment' />} />
          <Route exact path="/general" element={<News key="general" pageSize={this.pageSize} apiKey={this.apiKey} country='in' category='general' />} />
          <Route exact path="/health" element={<News key="health" pageSize={this.pageSize} apiKey={this.apiKey} country='in' category='health' />} />
          <Route exact path="/science" element={<News key="science" pageSize={this.pageSize} apiKey={this.apiKey} country='in' category='science' />} />
          <Route exact path="/sports" element={<News key="sports" pageSize={this.pageSize} apiKey={this.apiKey} country='in' category='sports' />} />
          <Route exact path="/technology" element={<News key="technology" pageSize={this.pageSize} apiKey={this.apiKey} country='in' category='technology' />} />
        </Routes>
      </div>
      </BrowserRouter>
    )
  }
}
