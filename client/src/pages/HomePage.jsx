import { Link } from "react-router-dom";
import Lottie from 'lottie-react';

import IconAnimateBrain from '../assets/icons/animate/brain.json';
import IconAnimateQuestion from '../assets/icons/animate/question.json';
import IconAnimateEyeVision from '../assets/icons/animate/eye-vision.json';
import IconAnimate from '../components/IconAnimate';

function HomePage() {
    const style = {
        height: 150,
    };
    return (

        <main className="container">
            <div className="row">
                <div className="col-md-6 px-5">
                    <div className="card" data-expand-target>
                        <Lottie animationData={IconAnimateQuestion} loop={1} autoplay={true} style={style} />

                        <h2 className="mt-0" tabIndex="0">Quizz</h2>
                        <p tabIndex="0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium eos, optio rem facilis ipsam dicta au</p>

                        <p className="d-flex w-100 justify-content-end"><Link className="btn btn-default" to="quiz" data-expand-link>Testez vos connaissances</Link></p>
                    </div>
                </div>
                <div className="col-md-6  px-5">
                    <div className="card" data-expand-target>
                        <Lottie animationData={IconAnimateBrain} loop={1} autoplay={true} style={style} />

                        <h2 className="mt-0" tabIndex="0">Immersion</h2>
                        <p tabIndex="0">Lorem ipsum dolorm sam datus eligendi officia quos alias facere suscipit quo ex ad veniam porro ea.</p>
                        <p className="d-flex w-100 justify-content-end"><Link className="btn btn-default" to="immersion" data-expand-link>Immersion</Link></p>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default HomePage;