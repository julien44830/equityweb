import { useEffect, useState } from "react";

import '../styles/eye-tracking-form.css'

const EyeTrackingForm = () => {

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

    return (
        <section className="template-form">
            <div className="text">
                <h2>Tétraplégie</h2>
                <p>
                    La <strong>tétraplagie</strong> est un <strong>handicap moteur</strong> qui entraine la paralysie des membres supérieurs et inférieurs. < br />
                    Il existe des solutions numériques alternatives au clavier et souris d'ordinateur classique, lorsque le handicap moteur compromet l'utilisation tactile ou bureautique d'un PC, tablette et smartphone : <br />
                    - La <acronym title='technologie infrarouge qui permet de piloter son ordinateur et tablette avec les yeux.' lang='fr'><strong>commande occulaire</strong></acronym> <br />
                    - La <acronym title='se clipse facilement sur un casque, paire de lunette, oreillette,... et permet le contrôle de son ordinateur par simple mouvement de tête.' lang='fr'><strong>souris gyroscopique</strong></acronym> <br />
                    - La <acronym title='technologie permet de contrôler son ordinateur avec le menton.' lang='fr'><strong>souris Bjoy Chin</strong></acronym> <br />
                </p>
                <p>
                    Dans l'immersion ci-dessous, nous vous proposons d'expérimenter l'<acronym title="En français suivi de l'oeil" lang='fr'>eye tracker</acronym>, technologie présente dans la commande occulaire.  <br />
                    Pour les besoin de l'expérience, après avoir cliqué sur le bouton "Débuter le test", une calibration de vos yeux par rapport à votre webcam sera réalisée. <br />
                    Nous vous conseillons de vous mettre dans des conditions d'une personne tétraplégique, et de ne pas bouger la tête lors de la calibration du <acronym title="En français suivi de l'oeil" lang='fr'>eye tracker</acronym>. < br />
                </p>
                <button className="btn btn-default btn-contour" onClick={startEyeTracking}>Débuter le test</button>
                <div id="GazeData" />
                <div id="HeadPoseData" />
                <div id="HeadRotData" />
            </div>
            <form className="form">
                <input type="text" id="firstname" name="firstname" placeholder=" Prénom " />
                <input type="text" id="lastname" name="lastname" placeholder=" Nom " />
                <input type="email" id="email" name="email" placeholder=" Email " />
                <input type="password" id="password" name="password" placeholder=" Mot de passe" />
                <input type="password" id="password-confirmation" name="password-confirmation" placeholder=" Confirmation mot de passe" />
                <button type="submit">Valider</button>
            </form>

            <div id="point-rouge" className={eyeTracker ? "red-point" : "not-red-point"}></div>
        </section>
    );
}

export default EyeTrackingForm;
