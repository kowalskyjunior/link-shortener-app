import './AdvancedText.css'
import './Responsive.css'

function AdvancedText() {
    return (
        <div className='container'>

            <div className="adv-wraper">
                <div className="adv-text">
                    <h2>Advanced Statistics</h2>

                    <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
                </div>
            </div>

            <div className="card-wraper">
                <div className="line"></div>
                <div className="card-single card01">

                    <div className="card-image image01">
                    </div>

                    <div className="card-text">
                        <h2>Brand Recognition</h2>
                        <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                    </div>
                </div>

                <div className="card-single card02">

                    <div className="card-image image02">
                    </div>

                    <div className="card-text">
                        <h2>Detailed Records</h2>
                        <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                    </div>
                </div>

                <div className="card-single card03">

                    <div className="card-image image03">
                    </div>

                    <div className="card-text">
                        <h2>Fully Customizable</h2>
                        <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                    </div>
                </div>





            </div>

        </div>
    )
}

export default AdvancedText