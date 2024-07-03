function TemplateForm (){
    return (
        <section className="template-form">
            <div className="text">
                <h2>Déficience à montrer</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe dolores, officiis officia illum consequuntur provident, facilis error quasi sint qui, voluptatum vitae? Illum, veniam et laboriosam earum quo unde libero.</p>
            </div>
            <form className="form">
                <div className="div-form">

                <input type="text" id="firstname" name="firstname" placeholder=" Prénom "/>
                <input type="text" id="lastname" name="lastname" placeholder=" Nom "/>
                <input type="email" id="email" name="email" placeholder=" Email "/>
                <input type="password" id="password" name="password" placeholder=" Mot de passe"/>
                <input type="password" id="password-confirmation" name="password-confirmation" placeholder=" Confirmation mot de passe"/>
                <button type="submit">Valider</button>
                </div>
            </form>
        </section>
    )
}

export default TemplateForm;