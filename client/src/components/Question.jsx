import { useState, useEffect } from "react";

function Question({ data, setNumb, numb }) {
  console.log('%c⧭', 'color: #1d3f73', data);
  const [reponse, setReponse] = useState("");
  console.log('%c⧭', 'color: #997326', "reponse", reponse);
  console.log('%c⧭', 'color: #997326', "reponse", data.reponse);

  // const [true, setTrue] = useState("");
  // const [false, setFalse] = useState("");

  // on va tester ça :

  const [selectedOption, setSelectedOption] = useState(null);
  const [isLocked, setIsLocked] = useState(false);

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    setIsLocked(true);
  };

  // <label className={selectedOption === 'option1' ? 'selected' : ''}>
  // <input
  //   type="radio"
  //   name="quiz"
  //   value="option1"
  //   checked={selectedOption === 'option1'}
  //   onChange={handleOptionChange}
  //   disabled={isLocked && selectedOption !== 'option1'}
  // />
  // <span>Option 1</span>


  // fin du test, et bientot fin de chantier :)



  const selectReponse = (e) => {
    setReponse(e.target.value);
  };

  useEffect(() => {
    if (data.reponse === reponse) {
      console.log("gagné");
      setTrue("question-true")
      // input + span (qui sont dans un label, qui est selectionné)
      //  = green (le background? juste le border?)
    }

    if (numb === 19) {
      setNumb(0)
      // afficher un component resultat avec nombre de bonne rep
    }
  }, [reponse, data.reponse], numb);

  const cuntNum = () => {
    setNumb(numb + 1)
  }

  return (
    <section className="question">
      <h1>{data.Question}</h1>


      <fieldset role="radiogroup" className="section-radio-vertical">
        <label className="label-radio" htmlFor={`prop1-${data.id}`}>
          <input
            type="radio"
            id={`prop1-${data.id}`}
            name={`quiz-${data.id}`}
            value="Proposition1"
            onChange={selectReponse}
          />
          <span className="inputRadioName">{data.Proposition1}</span>
        </label>

        <label className="label-radio" htmlFor={`prop2-${data.id}`}>
          <input
            type="radio"
            id={`prop2-${data.id}`}
            name={`quiz-${data.id}`}
            value="Proposition2"
            onChange={selectReponse}
          />
          <span className="inputRadioName">{data.Proposition2}</span>
        </label>

        <label className="label-radio" htmlFor={`prop3-${data.id}`}>
          <input
            type="radio"
            id={`prop3-${data.id}`}
            name={`quiz-${data.id}`}
            value="Proposition3"
            onChange={selectReponse}
          />
          <span className="inputRadioName">{data.Proposition3}</span>
        </label>
      </fieldset>
      <button type="button" className="btn btn-default" onClick={cuntNum}>Question suivante</button>
    </section>
  );
}

export default Question;
