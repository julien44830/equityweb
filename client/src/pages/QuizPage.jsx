// import { useLoaderData } from "react-router-dom";
import data from "../data"
import Question from "../components/Question"
import { useState } from "react";

function QuizPage() {

  console.log('%c⧭', 'color: #e57373', data);
  const [numb, setNumb] = useState(0)
  console.log('%c⧭', 'color: #ffcc00', numb);


    return (
        <main className="container formpage">
            <Question data={data[numb]} setNumb={setNumb} numb={numb}/>
        </main>
    )
}

export default QuizPage;