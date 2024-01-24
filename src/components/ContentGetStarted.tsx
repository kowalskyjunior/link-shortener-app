import './ContentGetStarted.css'
import Ilustration from '../assets/illustration-working.svg'

function ContentGetStarted() {
    return (
        <div className="container">
            <div className="side-wraper">
                <div className="left-side">
                    <h2 className='left-side-title'>More than just shorter links</h2>

                    <p className='left-side-text'>Build your brand's recognition and get detailed insights on how your links are performing</p>

                    <button className='left-side-btn'>Get Started</button>
                </div>
                <div className="right-side">
                    <img className='ilustration-img' src={Ilustration} alt="Ilustration" />
                </div>
            </div>
        </div>
    )
}

export default ContentGetStarted