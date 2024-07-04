
import PropTypes from "prop-types";

function TemplateForm({data} ) {
console.log('%c⧭', 'color: #917399', data);

    return (
        <section className="template-form">
            <div className="text">
                <h2>{data.h2}</h2>
                <p>{data.p}</p>
            </div>
            <form className="form">
                <input type="text" id="firstname" name="firstname" placeholder=" Prénom "/>
                <input type="text" id="lastname" name="lastname" placeholder=" Nom "/>
                <input type="email" id="email" name="email" placeholder=" Email "/>
                <input type="password" id="password" name="password" placeholder=" Mot de passe"/>
                <input type="password" id="password-confirmation" name="password-confirmation" placeholder=" Confirmation mot de passe"/>
                <button type="submit" to="/quiz">Valider</button>
            </form>
        </section>
    )
}

TemplateForm.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      h2: PropTypes.string.isRequired,
      p: PropTypes.string.isRequired
    })
  ).isRequired
};

export default TemplateForm;

