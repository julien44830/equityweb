// import { useLoaderData } from "react-router-dom";
import data from "../data"
import Question from "../components/Question"

function QuizPage() {

  console.log('%c⧭', 'color: #e57373', data);


    return (
        <main className="container">
            <Question data={data[0]}/>
        </main>
    )
}

export default QuizPage;