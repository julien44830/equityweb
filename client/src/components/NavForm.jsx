import PropTypes from "prop-types";

function NavForm({ setHandicap, setComponent }) {



  const selectHandicap = (e) => {
    setComponent(e.target.value)
    // setHandicap(e.target.value);
  };

  return (
    <fieldset role="radiogroup" onChange={selectHandicap} className="section-radio">
      <legend>Selectionnez votre handicap:</legend>
      <label className="radio" htmlFor="cecite">
        <input type="radio" id="cecite" name="handicap" value="BlindForm" />
        <span className="inputRadioName">Cécité</span></label>

      <label className="radio" htmlFor="daltonisme">
        <input type="radio" id="daltonisme" name="handicap" value="Daltonien" />
        <span className="inputRadioName">Daltonisme</span></label>

      <label className="radio" htmlFor="trouble">
        <input type="radio" id="trouble" name="handicap" value="Trouble" />
        <span className="inputRadioName">Trouble de l'attention</span></label>

      <label className="radio" htmlFor="parkinson">
        <input type="radio" id="parkinson" name="handicap" value="Parkinson" />
        <span className="inputRadioName">Trouble de parkinson</span></label>
    </fieldset>
  );
}

NavForm.propTypes = {
  // setHandicap: PropTypes.func.isRequired,
  setComponent: PropTypes.func.isRequired,
};

export default NavForm;
