import React from 'react';
// Import icons
import clock from '../img/clock.svg';
import teamwork from '../img/teamwork.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import home2 from '../img/home2.png'

const ServicesSection = () => {
  return (
    <div className="services">
      <div className="discription">
        <h2>High <span>quality</span> services</h2>
        <div className="cards">
          {/* single card */}
          <div className="card">
            <div className="icon">
              <img src={clock} alt='clock'/>
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          {/* end of single card */}
          {/* single card */}
          <div className="card">
            <div className="icon">
              <img src={teamwork} alt='people'/>
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          {/* end of single card */}
          {/* single card */}
          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt='camera'/>
              <h3>Pro Grade Gear</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          {/* end of single card */}
          {/* single card */}
          <div className="card">
            <div className="icon">
              <img src={money} alt='money'/>
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          {/* end of single card */}
        </div>
      </div>
      <div className="image">
        <img src={home2} alt="" />
      </div>
    </div>
  )
}

export default ServicesSection