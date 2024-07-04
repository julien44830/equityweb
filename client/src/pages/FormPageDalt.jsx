import { useState } from "react";
import TemplateForm from "../components/TemplateForm";
import NavForm from "../components/NavForm";


function FormPageDalt (){

    const [handicap, setHandicap] = useState("0")
    console.log('%c⧭', 'color: #0088cc', handicap);

    return (
        <>
        <NavForm setHandicap={setHandicap} handicap={handicap}/>
        <section className="formpage">
        <h1>Découvrez la réalité du handicap sur internet</h1>
        <TemplateForm />
        </section>
        </>
        )
}

export default FormPageDalt;