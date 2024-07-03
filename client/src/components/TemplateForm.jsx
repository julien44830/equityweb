function TemplateForm (){
    return (
        <section>
            <form>
                <input type="text" id="firstname" name="firstname" placeholder="Prénom"/>
                <input type="text" id="lastname" name="lastname" placeholder="Nom"/>
                <input type="email" id="email" name="email" placeholder="Email"/>
                <input type="password" id="password" name="password" placeholder="Mot de passe"/>
                <input type="password" id="password-confirmation" name="password-confirmation" placeholder="Confirmation mot de passe"/>
                <button type="submit">Valider</button>
            </form>
        </section>
    )
}

export default TemplateForm;