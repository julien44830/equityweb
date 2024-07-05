import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function NavForm({ setComponent }) {

  const selectHandicap = (e) => {
    setComponent(e.target.value)
  };

  return (
    <fieldset role="radiogroup" onChange={selectHandicap} className="section-radio">
      <legend>Selectionnez votre handicap:</legend>
      <label className="radio" htmlFor="cecite">
        <input type="radio" id="cecite" name="handicap" value="BlindForm"/>
        <span className="inputRadioName">Cécité</span></label>

      <label className="radio" htmlFor="daltonisme">
        <input type="radio" id="daltonisme" name="handicap" value="Daltonien" />
        <span className="inputRadioName">Daltonisme</span></label>

      <label className="radio" htmlFor="trouble">
        <input type="radio" id="trouble" name="handicap" value="Trouble" />
        <span className="inputRadioName">Trouble de l'attention</span></label>

      <label className="radio" htmlFor="parkison">
        <input type="radio" id="parkison" name="handicap" value="Parkison" />
        <span className="inputRadioName">Parkison</span></label>
      <NavLink to="/eye-tracking">
        <label className="radio" htmlFor="tetraplegie">
          <input  type="radio" id="tetraplegie" name="handicap" value="tetraplegie" />
          <span className="inputRadioName">Tétraplégie</span></label>
      </NavLink>
    </fieldset>
  );
}

NavForm.propTypes = {
  setComponent: PropTypes.func.isRequired,
};

export default NavForm;
