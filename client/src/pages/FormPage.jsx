import { useState } from "react";
import TemplateForm from "../components/TemplateForm";
import NavForm from "../components/NavForm";
import BlindForm from "../components/BlindForm";
import Daltonien from "../components/Daltonien";
import AnimateForm from '../components/AnimateForm'

const data = {
  BlindForm: {
    component: BlindForm,
    name: "Cécité",
    h2: "Cécité",
    p: "Nous vous proposons d'expérimenter le remplissage du formulaire caché à droite en se mettant à la place d'une personne aveugle. Pour cette immersion, télécharger le lecteur d'écran NVDA.",
  },
  Daltonien: {
    component: Daltonien,
    name: "Daltonien",
    h2: "Daltonisme",
    p: "Le daltonisme est une altération génétique de la vision des couleurs, principalement affectant la distinction entre le rouge et le vert. Cela est dû à des anomalies des cônes rétiniens responsables de la perception des couleurs. Bien que généralement sans impact sur la santé physique, cette condition peut poser des défis dans des contextes nécessitant une perception précise des couleurs, comme dans les métiers artistiques ou la signalisation.",
  },
  Trouble: {
    component: AnimateForm,
    name: "Trouble",
    h2: "Trouble de l'attention",
    p: "Le trouble de l'attention, ou TDA (Trouble Déficitaire de l'Attention), est une condition neurologique caractérisée par des difficultés à maintenir l'attention, à contrôler les impulsions et à réguler son comportement. Les personnes atteintes peuvent être facilement distraites, avoir du mal à terminer les tâches et être impulsives. Ce trouble peut interférer significativement avec la vie quotidienne, notamment à l'école et au travail, nécessitant souvent une gestion adaptative et un soutien spécialisé.",
  },
  Parkison: {
    component: "",
    name: "parkison",
    h2: "Parkison",
    p: "La maladie de Parkinson est une affection neurodégénérative chronique qui affecte le système nerveux central. Elle se caractérise par la diminution progressive de la production de dopamine, un neurotransmetteur crucial pour le contrôle des mouvements et d'autres fonctions cognitives. Les symptômes incluent tremblements, raideur musculaire, lenteur des mouvements et problèmes d'équilibre. Bien qu'il n'existe pas de remède, divers traitements peuvent atténuer les symptômes et améliorer la qualité de vie des patients.",
  },
};



function FormPage() {
  const [handicap, setHandicap] = useState(0);
  const [component, setComponent] = useState("BlindForm")
  const ComponentToRender = data[component].component;





  return (
    <main className="container-fluid formpage">
      <hgroup className="row">
        <h1 tabIndex="0">Découvrez la réalité du handicap sur internet</h1>
        <NavForm setHandicap={setHandicap} setComponent={setComponent} handicap={handicap} />
      </hgroup>
      {component !== "BlindForm" ?
        <TemplateForm data={data[component]} component={component} /> : null}
      {ComponentToRender && <ComponentToRender />}
    </main>
  );
}

export default FormPage;