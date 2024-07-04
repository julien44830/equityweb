import PropTypes from "prop-types";

function NavForm({ setHandicap, setComponent }) {



  const selectHandicap = (e) => {
    setComponent(e.target.value)
    // setHandicap(e.target.value);
  };

  return (
    <fieldset role="radiogroup" onChange={selectHandicap} className="section-radio">
      <legend>Selectionnez votre handicap:</legend>

      <input type="radio" id="cecite" name="handicap" value="BlindForm" />
      <label htmlFor="voyant">Cécité</label>

      <input type="radio" id="daltonisme" name="handicap" value="Daltonien" />
      <label htmlFor="daltonisme">Daltonisme</label>

      <input type="radio" id="trouble" name="handicap" value="Trouble" />
      <label htmlFor="trouble">Trouble de l'attention</label>
    </fieldset>
  );
}

NavForm.propTypes = {
  // setHandicap: PropTypes.func.isRequired,
  setComponent: PropTypes.func.isRequired,
};

export default NavForm;
