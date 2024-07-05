import PropTypes from "prop-types";
import { useRef, useEffect, useState } from "react";

function TemplateForm({ data, component }) {
  const [tremble, setTremble] = useState(false);
  // console.log('%c⧭tremble ', 'color: #735656', tremble);

  useEffect(() => {
    if (component === 'Parkison') {
      setTremble(true);
    } else {
      setTremble(false);
    }
  }, [component]);

  // console.log('%c⧭ component', 'color: #cc0088', component);
  console.log('%c⧭data ', 'color: #917399', data.classForm);


  const divRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const div = divRef.current;
      const cursor = cursorRef.current;

      if (div && cursor) {
        const rect = div.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;
        cursor.style.display = 'block';

        // Ajoutez un effet de tremblement
        const randomX = (Math.random() - 0.5) * 30; // Ajustez la valeur pour plus ou moins de tremblement
        const randomY = (Math.random() - 0.5) * 30; // Ajustez la valeur pour plus ou moins de tremblement

        cursor.style.transform = `translate(${randomX}px, ${randomY}px)`;
      }
    };

    const handleMouseLeave = () => {
      const cursor = cursorRef.current;
      if (cursor) {
        cursor.style.display = 'none';
      }
    };

    const div = divRef.current;
    if (div) {
      div.addEventListener('mousemove', handleMouseMove);
      div.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (div) {
        div.removeEventListener('mousemove', handleMouseMove);
        div.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);



  return (
    <section className="row template-form">
      <aside className="text col-md-6">
        <h2 tabIndex="0">{data.h2}</h2>
        <p tabIndex="0">{data.p}</p>
      </aside>
      {tremble ? (
        <div className="shaking-cursor-div col-md-6" ref={divRef}>
          <div className="custom-cursor" ref={cursorRef} />
          <form className="form">
            <div className="form-item">
              <input type="text" id="firstname" name="firstname" required />
              <label htmlFor="firstname">Prénom</label>
            </div>
            <div className="form-item">
              <input type="text" id="lastname" name="lastname" required />
              <label htmlFor="lastname">Nom</label>
            </div>
            <div className="form-item">
              <input type="email" id="email" name="email" required />
              <label htmlFor="email">Email</label>
            </div>
            <div className="form-item">
              <input type="password" id="password" name="password" required />
              <label htmlFor="password">Mot de passe</label>
            </div>
            <div className="form-item">
              <input type="password" id="password-confirmation" name="password-confirmation" required />
              <label htmlFor="password-confirmation">Confirmation mot de passe</label>
            </div>
            <button type="submit" className="btn btn-default">Valider</button>
          </form>
        </div>
      ) : (
        <div className="col-md-6">
          <form className={`form ${data.classForm}`}>
            <div class="form-item">
              <input type="text" id="firstname" name="firstname" required />
              <label htmlFor="firstname">Prénom</label>
            </div>
            <div class="form-item">
              <input type="text" id="lastname" name="lastname" required />
              <label htmlFor="lastname">Nom</label>
            </div>
            <div class="form-item">
              <input type="email" id="email" name="email" required />
              <label htmlFor="email">Email</label>
            </div>
            <div className="form-item">
              <input type="password" id="password" name="password" required />
              <label htmlFor="password">Mot de passe</label>
            </div>
            <div className="form-item">
              <input type="password" id="password-confirmation" name="password-confirmation" required />
              <label htmlFor="password-confirmation">Confirmation mot de passe</label>
            </div>
            <button type="submit" className="btn btn-default">Valider</button>
          </form>
        </div>
      )}
    </section>
  );
}

TemplateForm.propTypes = {
  data: PropTypes.shape({
    h2: PropTypes.string.isRequired,
    p: PropTypes.string.isRequired
  }).isRequired,
  component: PropTypes.string.isRequired,
};

export default TemplateForm;
