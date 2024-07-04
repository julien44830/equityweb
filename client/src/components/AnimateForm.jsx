import '../styles/animate-form.css'

function TemplateForm() {

    return (
        <section className="template-form">

            <div className="text">
                <h2>titre</h2>
                <p>texte</p>
            </div>
            <form className="form">
                <input type="text" id="firstname" name="firstname" placeholder=" Prénom " />
                <input type="text" id="lastname" name="lastname" placeholder=" Nom " />
                <input type="email" id="email" name="email" placeholder=" Email " />
                <input type="password" id="password" name="password" placeholder=" Mot de passe" />
                <input type="password" id="password-confirmation" name="password-confirmation" placeholder=" Confirmation mot de passe" />
                <button type="submit" to="/quiz">Valider</button>
                <div class="animation-container">
                    <div class="lightning-container">
                        <div class="lightning white"></div>
                        <div class="lightning red"></div>
                    </div>
                    <div class="boom-container">
                        <div class="shape circle big white"></div>
                        <div class="shape circle white"></div>
                        <div class="shape triangle big yellow"></div>
                        <div class="shape disc white"></div>
                        <div class="shape triangle blue"></div>
                    </div>
                    <div class="boom-container second">
                        <div class="shape circle big white"></div>
                        <div class="shape circle white"></div>
                        <div class="shape disc white"></div>
                        <div class="shape triangle blue"></div>
                    </div>
                </div>
            </form>
        </section >
    )
}


export default TemplateForm;

