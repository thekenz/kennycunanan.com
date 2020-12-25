import React from "react"
import Hero from "../assets/hero.png"

// style={{
//   backgroundImage: `${Hero} background image css stuff`
// }}

export default function Home() {
  return (
    <div class="main-section">
      <link rel="stylesheet" href="/css/webfonts/millik.css" type="text/css" charset="utf-8" />
      <header>

        <h1 class="logo">KNZ</h1>

        <div>
          <span class="item">about</span>
          <span class="item">work</span>
          <span class="item">contact</span>
        </div>
        
      </header>
      <div class="main">
        <img src={Hero} alt="Hero"/>

        <div class="text-box">
          <h2 class="subtitle">Let's Build a Better</h2>
          <h1 class="title">Commmunity</h1>
          <p>My name’s Kenny Cunanan and I’m a creative based out in California. I’m passionate about creating tools that other people can use to understand the world a bit better.</p>
          <p>I’m currently building the future of data experiences as a Product Manager for Looker’s design system and component library.</p>
          <p>Let’s build a better community together.</p>

          <div class="button-container">
            <button class="cta1">Contact Me</button>
            <button class="cta2">Get In Touch</button>
          </div>
        </div>
        
      </div>
    </div>
  
    )
  }
  
