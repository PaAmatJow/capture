import React from 'react';
// Import icons
import clock from '../img/clock.svg';
import teamwork from '../img/teamwork.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import home2 from '../img/home2.png'
// Styles
import styled from 'styled-components'
import {About, Description, Image, Hide} from '../styles'

const ServicesSection = () => {
  return (
    <Services>
      <Description>
        <h2>High <span>quality</span> services</h2>
        <Cards>
          {/* single card */}
          <Card>
            <div className="icon">
              <img src={clock} alt='clock'/>
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          {/* end of single card */}
          {/* single card */}
          <Card>
            <div className="icon">
              <img src={teamwork} alt='people'/>
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          {/* end of single card */}
          {/* single card */}
          <Card>
            <div className="icon">
              <img src={diaphragm} alt='camera'/>
              <h3>Pro Grade Gear</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          {/* end of single card */}
          {/* single card */}
          <Card>
            <div className="icon">
              <img src={money} alt='money'/>
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          {/* end of single card */}
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="" />
      </Image>
    </Services>
  )
}

const Services = styled(About)`
  h2{
    padding-bottom: 5rem;
  }
  p{
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Card = styled.div`
	flex-basis: 20rem;
	.icon {
		display: flex;
		align-items: center;
		h3 {
			margin-left: 1rem;
			background-color: white;
			color: #1d1d1d;
			padding: 1rem;
			border-radius: 8px 8px 8px 8px / 6px 6px 6px 6px;
		}
	}
`;

export default ServicesSection