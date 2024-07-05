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

                        <h2 className="mt-0">Quizz</h2>
                        <p>Testez votre compréhension en matière d'inclusivité en répondant à un quizz de 20 questions.</p>

                        <p className="d-flex w-100 justify-content-end"><Link className="btn btn-default" to="quiz" data-expand-link>Testez vos connaissances</Link></p>
                    </div>
                </div>
                <div className="col-md-6  px-5">
                    <div className="card" data-expand-target>
                        <Lottie animationData={IconAnimateBrain} loop={1} autoplay={true} style={style} />

                        <h2 className="mt-0">Immersion</h2>
                        <p>Essayez une expérience immersive sur les problèmes rencontrés par certains types de handicaps sur le web.</p>
                        <p className="d-flex w-100 justify-content-end"><Link className="btn btn-default" to="immersion" data-expand-link>Immersion</Link></p>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default HomePage;