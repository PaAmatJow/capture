import React, {useState} from 'react'
// styles
import styled from 'styled-components'
import { About } from '../styles'

const FaqSection = () => {
  const [show, setShow] = useState(false)
  return (
		<Faq>
			<h2>
				Any Questions <span>FAQ</span>
			</h2>
			{/* single question */}
			<div className='question' onClick={()=>setShow(!show)}>
				<h4>How Do I Start?</h4>
				{show && (
					<div className='answer'>
						<p>Lorem ipsum dolor sit amet.</p>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque,
							in.
						</p>
					</div>
				)}
				<div className='faq-line'></div>
			</div>
			{/* end of single question */}
			{/* single question */}
			<div className='question'>
				<h4>Daily Schedule</h4>
				<div className='answer'>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque,
						in.
					</p>
				</div>
				<div className='faq-line'></div>
			</div>
			{/* end of single question */}
			{/* single question */}
			<div className='question'>
				<h4>Different Payment Methods</h4>
				<div className='answer'>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque,
						in.
					</p>
				</div>
				<div className='faq-line'></div>
			</div>
			{/* end of single question */}
			{/* single question */}
			<div className='question'>
				<h4>What Products Do You Offer?</h4>
				<div className='answer'>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque,
						in.
					</p>
				</div>
				<div className='faq-line'></div>
			</div>
			{/* end of single question */}
		</Faq>
	);
}

const Faq = styled(About)`
  display: block;
  span{
    display: block;
  }
  h2{
    padding-bottom: 2rem;
  }
  .faq-line{
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question{
    padding: 3rem;
    cursor: pointer;
  }
  .answer{
    padding: 2rem;
    p{
      padding: 1rem 0rem;
    }
  }
`

export default FaqSection