import React from 'react'

const FaqSection = () => {
  return (
    <div className="faq">
      <h2>Any Questions <span>FAQ</span></h2>
      {/* single question */}
      <div className="question">
        <h4>How Do I Start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, in.</p>
        </div>
      </div>
      {/* end of single question */}
      {/* single question */}
      <div className="question">
        <h4>Daaily Schedule</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, in.</p>
        </div>
      </div>
      {/* end of single question */}
      {/* single question */}
      <div className="question">
        <h4>Different Payment Methods</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, in.</p>
        </div>
      </div>
      {/* end of single question */}
      {/* single question */}
      <div className="question">
        <h4>What Products Do You Offer?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, in.</p>
        </div>
      </div>
      {/* end of single question */}
    </div>
  )
}

export default FaqSection