import { Link } from "react-router-dom";
import IconAnimate from '../components/IconAnimate';
import IconAnimateEye from '../assets/icons/animate/eye-vision.json';
import IconAnimateQuestion from '../assets/icons/animate/question.json';

function HomePage() {
    return (

        <main className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <IconAnimate animationData={IconAnimateQuestion} height={200} width={200} />

                        <h2>Quizz</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium eos, optio rem facilis ipsam dicta autem delectus natus eligendi officia quos alias facere suscipit quo ex ad veniam porro ea.</p>
                        <Link className="btn btn-default" to="immersion">Testez vos connaissances</Link>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <IconAnimate animationData={IconAnimateEye} height={150} width={150} />

                        <h2>Immersion</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium eos, optio rem facilis ipsam dicta autem delectus natus eligendi officia quos alias facere suscipit quo ex ad veniam porro ea.</p>
                        <Link className="btn btn-default" to="quiz">Immersion</Link>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default HomePage;