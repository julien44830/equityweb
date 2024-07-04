import BlindForm from "../components/BlindForm";
import TemplateForm from "../components/TemplateForm";
// import EyeTrackingForm from "../components/EyeTrackingForm";

function FormPage (){
    return (
        <main className="formpage">
        <h1 tabIndex="0">Découvrez la réalité du handicap sur internet</h1>
        {/* <TemplateForm /> */}
        {/* <EyeTrackingForm/> */}
        <BlindForm />
        </main>
        )
}

export default FormPage;