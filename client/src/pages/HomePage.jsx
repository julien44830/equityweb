import { Link } from "react-router-dom";

function HomePage() {
    return (

        <main className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="encart">
                        <h2>Immersion</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium eos, optio rem facilis ipsam dicta autem delectus natus eligendi officia quos alias facere suscipit quo ex ad veniam porro ea.</p>
                        <Link className="btn btn-default" to="./pages/FormPage.jsx" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="encart">
                        <h2>Quizz</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium eos, optio rem facilis ipsam dicta autem delectus natus eligendi officia quos alias facere suscipit quo ex ad veniam porro ea.</p>
                        <Link className="btn btn-default" to="./pages/QuizPage.jsx" />
                    </div>
                </div>
            </div>
        </main>
        
    )
}

export default HomePage;