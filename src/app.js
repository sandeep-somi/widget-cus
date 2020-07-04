import React, { Component } from 'react';
import Main from './containers/Widget/index'

export default class extends Component {

  componentDidMount() {
    let font_awesome_link = document.createElement("LINK");
    font_awesome_link.rel = "stylesheet";
    font_awesome_link.href = "https://kit-pro.fontawesome.com/releases/v5.9.0/css/pro.min.css";
    document.getElementsByTagName('head')[0].appendChild(font_awesome_link);

    let google_font_link = document.createElement("LINK");
    google_font_link.rel = "stylesheet";
    google_font_link.href = "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap";
    document.getElementsByTagName('head')[0].appendChild(google_font_link);
  }

  render() {

    return (
      <Main />
    )
  }
}