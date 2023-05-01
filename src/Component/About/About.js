import React from "react"
import "../About/About.css"
import me from "../Picture/mypic.png"
// import skill1 from "../pic/skill1.png"
// import skill2 from "../pic/skill2.png"
// import skill3 from "../pic/skill3.png"
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='about' id='home'>
        <div className='container-fluid row'>
          <div className='col-md-7'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Amlan Bhowmick</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" Professional Coder.", " .Net Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>
            <div className='about_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                    <i className='fab fa-facebook-f'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i className='fab fa-instagram'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i className='fab fa-linkedin-in' ></i>
                  </button>
                </div>
              </div>
              {/* <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  <img src={skill1} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill2} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button>
              </div> */}
            </div>
          </div>
          <div className='col-md-5 col-sm-12'>
            <div className='my-pic'>
              <img className="img-fluid" src={me} alt='My picture' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
