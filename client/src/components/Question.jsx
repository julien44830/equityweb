import { useState, useEffect } from "react";

function Question({ data }) {
  console.log('%c⧭', 'color: #1d3f73', data);
  const [reponse, setReponse] = useState("");
  console.log('%c⧭', 'color: #997326', "reponse", reponse);
  console.log('%c⧭', 'color: #997326', "reponse", data.reponse);

  const selectReponse = (e) => {
    setReponse(e.target.value);
  };

  useEffect(() => {
    if (data.reponse === reponse) {
      console.log("gagné");
    }
  }, [reponse, data.reponse]);

  return (
    <section className="question">
      <h2>{data.Question}</h2>

      
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
      <button type="button" className="btn btn-default">Question suivante</button>
    </section>
  );
}

export default Question;
