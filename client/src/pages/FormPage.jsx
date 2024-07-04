import React, { useState, useEffect } from "react";
import TemplateForm from "../components/TemplateForm";
import NavForm from "../components/NavForm";
import Aveugle from "../components/Aveugle";
import Daltonien from "../components/Daltonien";
import Trouble from "../components/Trouble";

const data = {
    Aveugle: {
        component: Aveugle,
        name: "Aveugle",
        h2: "mal voyant",
        p: "mal voyant Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod",
    },
    Daltonien: {
        component: Daltonien,
        name: "Daltonien",
        h2: "daltonisme",
        p: "daltonisme Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod",
    },
    Trouble: {
        component: Trouble,
        name: "Trouble",
        h2: "trouble de l'attention",
        p: "trouble de l'attention Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod",
    },
};

function FormPage() {
    const [handicap, setHandicap] = useState(0);
    const [component, setComponent] = useState("Trouble")
    const ComponentToRender = data[component].component;

    return (
        <main className="container">
            <section className="formpage">
                <h1>Découvrez la réalité du handicap sur internet</h1>
                <NavForm setHandicap={setHandicap} setComponent={setComponent} handicap={handicap} />
                <TemplateForm data={data[component]} />
                {ComponentToRender && <ComponentToRender />}
            </section>
        </main>
    );
}

export default FormPage;