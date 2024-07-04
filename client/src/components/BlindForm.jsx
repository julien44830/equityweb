function BlindForm (){
    return (
        <section className="template-form">
            <aside className="text">
                <h2 tabIndex="0">Cécité</h2>
                <p tabIndex="0">Nous vous proposons d'expérimenter le remplissage du formulaire caché à droite en se mettant à la place d'une personne aveugle. Pour cette immersion, télécharger le lecteur d'écran NVDA.</p>
            </aside>
            <form class="form">
                <div class="form-item">
                    <input type="text" id="firstname" name="firstname"/>
                    <label htmlFor="firstname">Prénom</label>
                </div>
                <div class="form-item">
                    <input type="text" id="lastname" required/>
                    <label htmlFor="lastname">Nom</label>
                </div>
                 <div class="form-item">
                    <input type="email" id="email" required/>
                    <label htmlFor="email">Email</label>
                </div>
                <div class="form-item">
                    <input type="password" id="password" required/>
                    <label htmlFor="password">Mot de passe</label>
                </div>
                <div class="form-item">
                    <input type="password" id="password-confirmation" required/>
                    <label htmlFor="password-confirmation">Confirmation mot de passe</label>
                </div>
                <button type="submit">Valider</button>
            </form>
        </section>
    )
}

export default BlindForm;