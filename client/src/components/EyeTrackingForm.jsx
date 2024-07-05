import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import '../styles/eye-tracking-form.css'

function EyeTrackingForm({ setComponent }) {

    const [eyeTracker, setEyeTracker] = useState(false)

    const PlotGaze = (GazeData) => {
        console.log('GazeData:', GazeData);
        const gazeDataElement = document.getElementById("GazeData");
        if (gazeDataElement) {
            gazeDataElement.innerHTML = "GazeX: " + GazeData.GazeX + " GazeY: " + GazeData.GazeY;

            const redPoint = document.getElementById("point-rouge");
            if (redPoint) {
                redPoint.style.left = GazeData.GazeX + "px";
                redPoint.style.top = GazeData.GazeY + "px";
            }
        }
    };

    useEffect(() => {
        // Initialisation de GazeCloudAPI
        GazeCloudAPI.OnResult = PlotGaze;
        GazeCloudAPI.OnCalibrationComplete = () => {
            console.log('Étalonnage du regard terminé');
        };
        GazeCloudAPI.OnCamDenied = () => {
            console.log('Accès à la caméra refusé');
        };
        GazeCloudAPI.OnError = (msg) => {
            console.log('Erreur: ' + msg);
        };
        GazeCloudAPI.UseClickRecalibration = true;

    }, []);

    const startEyeTracking = () => {
        GazeCloudAPI.StartEyeTracking();
        setEyeTracker(true)
    };


    const selectHandicap = (e) => {
        setComponent(e.target.value);
    };

    return (
        <main className="container-fluid formpage">
            <hgroup className="row">
                <h1 tabIndex="0">Découvrez la réalité du handicap sur internet</h1>
                <fieldset role="radiogroup" onChange={selectHandicap} className="section-radio">
                    <legend>Selectionnez votre handicap:</legend>
                    <NavLink to="/immersion">
                        <label className="radio" htmlFor="cecite">
                            <input type="radio" id="cecite" name="handicap" value="BlindForm" />
                            <span className="inputRadioName">Cécité</span></label>
                    </NavLink>

                    <NavLink to="/immersion">
                        <label className="radio" htmlFor="daltonisme">
                            <input type="radio" id="daltonisme" name="handicap" value="Daltonien" />
                            <span className="inputRadioName">Daltonisme</span></label>
                    </NavLink>

                    <NavLink to="/immersion">
                        <label className="radio" htmlFor="trouble">
                            <input type="radio" id="trouble" name="handicap" value="Trouble" />
                            <span className="inputRadioName">Trouble de l'attention</span></label>
                    </NavLink>

                    <NavLink to="/immersion">
                        <label className="radio" htmlFor="parkison">
                            <input type="radio" id="parkison" name="handicap" value="Parkison" />
                            <span className="inputRadioName">Parkison</span></label>
                    </NavLink>

                    <label className="radio" htmlFor="tetraplegie">
                        <input checked="checked" type="radio" id="tetraplegie" name="handicap" value="tetraplegie" />
                        <span className="inputRadioName">Tétraplégie</span></label>
                </fieldset >
            </hgroup>
            <section className="row template-form">
                <aside className="text col-md-6">
                    <h2>Tétraplégie</h2>
                    <section className="text-display-eye">
                        <aside>
                            <p style={{color: "black"}}>
                                La <strong>tétraplagie</strong> est un <strong>handicap moteur</strong> qui entraine la paralysie des membres supérieurs et inférieurs. < br />
                                Il existe des solutions numériques alternatives au clavier et souris d'ordinateur classique, lorsque le handicap moteur compromet l'utilisation tactile ou bureautique d'un PC, tablette et smartphone : <br />
                                - La <acronym title='technologie infrarouge qui permet de piloter son ordinateur et tablette avec les yeux.' lang='fr'><strong>commande occulaire</strong></acronym> <br />
                                - La <acronym title='se clipse facilement sur un casque, paire de lunette, oreillette,... et permet le contrôle de son ordinateur par simple mouvement de tête.' lang='fr'><strong>souris gyroscopique</strong></acronym> <br />
                                - La <acronym title='technologie permet de contrôler son ordinateur avec le menton.' lang='fr'><strong>souris Bjoy Chin</strong></acronym> <br />
                            </p>
                            <p className="padding-text-eye" style={{color: "black"}}>
                                Dans l'immersion ci-dessous, nous vous proposons d'expérimenter l'<acronym title="En français suivi de l'oeil" lang='fr'>eye tracker</acronym>, technologie présente dans la commande occulaire.  <br />
                                Pour les besoin de l'expérience, après avoir cliqué sur le bouton "Débuter le test", une calibration de vos yeux par rapport à votre webcam sera réalisée. <br />
                                Nous vous conseillons de vous mettre dans des conditions d'une personne tétraplégique, et de ne pas bouger la tête lors de la calibration du <acronym title="En français suivi de l'oeil" lang='fr'>eye tracker</acronym>. < br />
                            </p></aside>
                    </section>
                    <button className="btn btn-default mt-4" onClick={startEyeTracking}>Débuter le test</button>
                    <div id="GazeData" />
                    <div id="HeadPoseData" />
                    <div id="HeadRotData" />
                </aside>
                <div className="col-md-6">
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
                        <button className="btn btn-default mt-4" type="submit">Valider</button>
                    </form>
                </div>
                <div id="point-rouge" className={eyeTracker ? "red-point" : "not-red-point"}></div>
            </section>
        </main >
    );
}

EyeTrackingForm.propTypes = {
    setComponent: PropTypes.func.isRequired,
};

export default EyeTrackingForm;
