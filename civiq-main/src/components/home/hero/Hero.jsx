import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='' title='Best Car Safety System' />
            <p>Safety isn't an option; it's a standard. From our family to yours, we're committed to engineering vehicles that prioritize your well-being on the road.</p>
            <div className='button'>
              <button className='primary-btn'>
                LET'S GET STARTED <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              {/* <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button> */}
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
