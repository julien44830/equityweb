import { useState, useEffect } from "react";

function Question({ data, setNumb, numb }) {
  const [reponse, setReponse] = useState("");
  const [isLocked, setIsLocked] = useState(false);

  const selectReponse = (e) => {
    setReponse(e.target.value);
    setIsLocked(true);
  };

  useEffect(() => {
    if (data.reponse === reponse) {
      console.log("gagné");
    }

    if (numb === 19) {
      setNumb(0);
      // afficher un component resultat avec nombre de bonne rep
    }
  }, [reponse, data.reponse, numb, setNumb]);

  const cuntNum = () => {
    setNumb(numb + 1);
    setIsLocked(false); // Reset lock for next question
    setReponse(""); // Reset selected answer for next question
  };

  const getLabelClass = (option) => {
    if (!isLocked) return '';
    return reponse === option
      ? reponse === data.reponse
        ? 'correct'
        : 'incorrect'
      : '';
  };

  return (
    <section className="question">
      <h1>{data.Question}</h1>
      <fieldset role="radiogroup" className="section-radio-vertical">
        <label className={`label-radio ${getLabelClass("Proposition1")}`} htmlFor={`prop1-${data.id}`}>
          <input
            type="radio"
            id={`prop1-${data.id}`}
            name={`quiz-${data.id}`}
            value="Proposition1"
            onChange={selectReponse}
            disabled={isLocked}
          />
          <span className="inputRadioName">{data.Proposition1}</span>
        </label>

        <label className={`label-radio ${getLabelClass("Proposition2")}`} htmlFor={`prop2-${data.id}`}>
          <input
            type="radio"
            id={`prop2-${data.id}`}
            name={`quiz-${data.id}`}
            value="Proposition2"
            onChange={selectReponse}
            disabled={isLocked}
          />
          <span className="inputRadioName">{data.Proposition2}</span>
        </label>

        <label className={`label-radio ${getLabelClass("Proposition3")}`} htmlFor={`prop3-${data.id}`}>
          <input
            type="radio"
            id={`prop3-${data.id}`}
            name={`quiz-${data.id}`}
            value="Proposition3"
            onChange={selectReponse}
            disabled={isLocked}
          />
          <span className="inputRadioName">{data.Proposition3}</span>
        </label>
      </fieldset>
      <button type="button" className="btn btn-default" onClick={cuntNum}>Question suivante</button>
    </section>
  );
}

export default Question;
