import React from "react"

import { Link } from 'gatsby'
import pic from '../assets/images/pic.jpeg'
import Layout from '../components/layout'
import Nav from '../components/nav'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>

        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Asfi Fardous</h2>
                </header>
                <p>
                  I am a Computer Science Graduate and looking for full-time opportunities in Software Development. I am comfortable with both Frontend and Backend development and have 3 years of experience in SQL, PHP/HTML/CSS for web development, 1 year experience using Python (pyTorch,Flask) to build ML/AI solutions and web applications and 1 year of experience building softwares using Spring Boot, ReactJs, REST APIs, AWS, Heroku, PostgreSQL and Git.
  
                </p>

              </div>
              <span className="image">
                <img src={pic} alt="" />
              </span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Projects</h2>
            </header>
            <ul className="features">
              <li>

                <h3><b>Multiplayer Tic-Tac-Toe Game</b></h3>
                <p>
                  Developed a web based multiplayer tic-tac-toe game using <b>React JS, Spring boot and MySQL</b> as the database. The app allows to play with random player or with a friend. Player can play gmae multiple times by clicking PLAY AGAIN button.
                  
                </p>
                <p><a href="http://tictactoe.asfi.me"><b>Play Here</b></a></p>

              </li>
              <li>
                <h3><b>Chatroom</b></h3>
                <p>
                  The app has been developed with <b>Flask and React.Js</b> framework.Users will be able to register and then log in using their username and password.
                  Allows users to add channels to the platform, sending and receiving messages in each channel and also add members to a channel.
                </p>
               <p><a href=""><b>GitHub Repo</b></a></p> 
              </li>
              <li>
                <h3><b>Online Book Review Site</b></h3>
                <p>
                  A web-based application built using <b>Flask (python) and PostgreSQL</b> as the database where registered users can search for books, see details of each book. Users can also post book reviews and see all the reviews of a book including rating of a book in Goodreads.
                  The site also provides API access to the book info.

                </p>
                <p><a href="http://bibliomania.asfi.me"><b>View Site Here</b></a></p>
                
              </li>
              <li>

                <h3><b>RUET Transport System</b></h3>
                <p>
                  Develop a web-based applications for booking, managing and scheduling the university transport system of Rajshahi University of Engineering and Technology (RUET).
                  Built the vehicle booking subsystem including the approval workflow consisting of multiple user types. Written in  <b>PHP, HTML and CSS</b> and used <b>MySQL</b> as the database.
                </p>
              </li>
            </ul>

          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Publication</h2>
            </header>
            <h4><b><a href="https://ieeexplore.ieee.org/document/8679258">Handwritten Isolated Bangla Compound Character Recognition</a></b></h4>
            Asfi Fardous, Shyla Afroge 
            <p>2019 International Conference on Electrical, Computer and Communication Engineering (ECCE), Cox'sBazar, Bangladesh</p>
            
            <p>Developed a machine learning model to recognize 171 different compound characters for Bangla Language. The model was primarily based on Convolutional Neural Networks and used PyTorch as the implementation framework.</p>

          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Contacts</h2>
            </header>

            <dl className="alt">
              {/* <dt>Address:</dt> */}
              <dd>141 Roma Corte, 1 Elmira Street, London, United Kingdom</dd>
              {/* <dt>Phone:</dt> */}
              <dd>+44 7377787210</dd>
              {/* <dt>Email:</dt> */}
              <dd>
                asfi.ruet2014@gmail.com
              </dd>
            </dl>
            <ul className="icons">
              <li>
                <a
                  href="https://www.linkedin.com/in/asfifardous/"
                  className="icon fa-linkedin alt"
                >
                  <span className="label">linkedin</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/AsfiFardous"
                  className="icon fa-github alt">
                  <span className="label">GitHub</span>
                </a>
              </li>

              <li>
                <a href="#" className="icon fa-facebook alt">
                  <span className="label">Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon fa-instagram alt">
                  <span className="label">Instagram</span>
                </a>
              </li>
            </ul>

          </section>
        </div>
      </Layout>
    )
  }
}

export default Index