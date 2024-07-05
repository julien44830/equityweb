const data = [
  {
    "NumQuestion": "q46",
    "Question": "Que signifie \"adaptation culturelle\" dans un contexte professionnel ?",
    "Proposition1": "Changer complètement sa culture d'origine",
    "Proposition2": "Ignorer sa propre culture pour s'intégrer",
    "Proposition3": "Adopter des comportements respectueux et appropriés dans une culture différente",
    "reponse": "Proposition3"
  },
  {
    "NumQuestion": "q19",
    "Question": "Comment réagir si vous entendez une remarque discriminatoire au travail ?",
    "Proposition1": "Ignorer la remarque",
    "Proposition2": "Aborder la situation calmement et exprimer pourquoi la remarque est inappropriée",
    "Proposition3": "Réagir de manière agressive",
    "reponse": "Proposition2"
  },
  {
    "NumQuestion": "q43",
    "Question": "Comment peut-on montrer du respect pour les pratiques culturelles différentes au travail ?",
    "Proposition1": "En ignorant ces pratiques",
    "Proposition2": "En s'informant et en participant aux célébrations culturelles",
    "Proposition3": "En demandant aux autres de s'adapter à votre culture",
    "reponse": "Proposition2"
  },
  {
    "NumQuestion": "q37",
    "Question": "Comment peut-on reconnaître une organisation inclusive ?",
    "Proposition1": "Elle a une politique de diversité et inclusion bien définie",
    "Proposition2": "Elle organise régulièrement des fêtes pour ses employés",
    "Proposition3": "Elle suit toutes les lois locales sur l'emploi",
    "reponse": "Proposition1"
  },
  {
    "NumQuestion": "q21",
    "Question": "Combien y a-t-il de personnes reconnues en situation de handicap en France ?",
    "Proposition1": "2M",
    "Proposition2": "5M",
    "Proposition3": "12M",
    "reponse": "Proposition3"
  },
  {
    "NumQuestion": "q15",
    "Question": "Comment peut-on soutenir un collègue ayant un trouble de l'apprentissage ?",
    "Proposition1": "En fournissant des instructions claires et structurées",
    "Proposition2": "En évitant de lui donner des tâches complexes",
    "Proposition3": "En faisant son travail à sa place",
    "reponse": "Proposition1"
  },
  {
    "NumQuestion": "q68",
    "Question": "Comment peut-on rendre les formations accessibles à tous les employés ?",
    "Proposition1": "En fournissant uniquement des manuels écrits",
    "Proposition2": "En réduisant la durée des formations",
    "Proposition3": "En utilisant des formats multimédias, des sous-titres et des transcriptions",
    "reponse": "Proposition3"
  },
  {
    "NumQuestion": "q16",
    "Question": "Quelle est une pratique de communication inclusive ?",
    "Proposition1": "Parler rapidement pour gagner du temps",
    "Proposition2": "Utiliser un langage clair et simple",
    "Proposition3": "Éviter les interactions verbales",
    "reponse": "Proposition2"
  },
  {
    "NumQuestion": "q54",
    "Question": "Quel est un exemple de politique inclusive en matière de recrutement ?",
    "Proposition1": "Embaucher uniquement des personnes issues des mêmes écoles",
    "Proposition2": "Recruter uniquement sur recommandation interne",
    "Proposition3": "Utiliser des pratiques de recrutement qui éliminent les biais inconscients",
    "reponse": "Proposition3"
  },
  {
    "NumQuestion": "q105",
    "Question": "Une réunion est prévue pendant une fête religieuse importante pour certains membres de l'équipe. Que devriez-vous faire ?",
    "Proposition1": "Maintenir la réunion telle quelle",
    "Proposition2": "Reprogrammer la réunion pour une autre date afin que tout le monde puisse y assister",
    "Proposition3": "Demander aux membres concernés de rattraper la réunion plus tard",
    "reponse": "Proposition2"
  },
  {
    "NumQuestion": "q61",
    "Question": "Quel est un exemple d'aménagement raisonnable pour un employé en fauteuil roulant ?",
    "Proposition1": "Fournir une chaise ergonomique",
    "Proposition2": "Offrir des horaires de travail flexibles",
    "Proposition3": "Installer des rampes et des ascenseurs",
    "reponse": "Proposition3"
  },
  {
    "NumQuestion": "q59",
    "Question": "Comment peut-on encourager l'inclusion lors des réunions d'équipe ?",
    "Proposition1": "En permettant uniquement aux membres les plus anciens de parler",
    "Proposition2": "En limitant les discussions pour gagner du temps",
    "Proposition3": "En veillant à ce que chacun ait l'occasion de s'exprimer et en valorisant toutes les contributions",
    "reponse": "Proposition3"
  },
  {
    "NumQuestion": "q66",
    "Question": "Pourquoi est-il important d'avoir des options de transport accessibles pour les employés ?",
    "Proposition1": "Pour réduire les retards",
    "Proposition2": "Pour s'assurer que les employés ayant des besoins spécifiques puissent se rendre au travail sans difficulté",
    "Proposition3": "Pour augmenter le nombre de parkings",
    "reponse": "Proposition2"
  },
  {
    "NumQuestion": "q35",
    "Question": "Pourquoi les entreprises devraient-elles former leurs employés à la diversité et à l'inclusion ?",
    "Proposition1": "Pour éviter des amendes",
    "Proposition2": "Pour suivre les tendances du marché",
    "Proposition3": "Pour créer un environnement de travail plus harmonieux et productif",
    "reponse": "Proposition3"
  },
  {
    "NumQuestion": "q36",
    "Question": "Quel est le rôle des Affinity Groups (groupes d'affinité) dans une organisation ?",
    "Proposition1": "Organiser des activités sociales pour les employés",
    "Proposition2": "Soutenir les employés de groupes sous-représentés et promouvoir l'inclusion",
    "Proposition3": "Recruter de nouveaux employés",
    "reponse": "Proposition2"
  },
  {
    "NumQuestion": "q63",
    "Question": "Pourquoi est-il important d'avoir des documents accessibles pour tous les employés ?",
    "Proposition1": "Pour s'assurer que les informations sont disponibles pour tous, y compris ceux ayant des déficiences visuelles ou auditives",
    "Proposition2": "Pour réduire les coûts d'impression",
    "Proposition3": "Pour améliorer la rapidité de lecture",
    "reponse": "Proposition1"
  },
  {
    "NumQuestion": "q26",
    "Question": "Qu'est-ce qu'une SIAE ?",
    "Proposition1": "Une Société à Impact par l'Activité Economique",
    "Proposition2": " Une nouvelle forme d'entreprise qui emploie des personnes en situation de handicap",
    "Proposition3": " Une Structure d'Insertion par l'Activité Economique",
    "reponse": "Proposition3"
  },
  {
    "NumQuestion": "q60",
    "Question": "Pourquoi est-il important d'assurer l'accessibilité des lieux de travail pour les personnes en situation de handicap ?",
    "Proposition1": "Pour se conformer aux lois",
    "Proposition2": "Pour garantir que tous les employés puissent travailler de manière efficace et sécurisée",
    "Proposition3": "Pour attirer plus de clients",
    "reponse": "Proposition2"
  },
  {
    "NumQuestion": "q29",
    "Question": "Que signifie RGAA ?",
    "Proposition1": "Régime Général de l'Accessibilité Amplifiée",
    "Proposition2": "Référentiel Général d'Amélioration de l'Accessibilité",
    "Proposition3": "Rapport Générique sur l'Amélioration des Achats inclusifs",
    "reponse": "Proposition2"
  },
  {
    "NumQuestion": "q74",
    "Question": "Quel outil peut aider les personnes ayant des déficiences visuelles à utiliser un ordinateur ?",
    "Proposition1": "Un logiciel de traitement de texte",
    "Proposition2": "Un antivirus",
    "Proposition3": "Un lecteur d'écran",
    "reponse": "Proposition3"
  }
]

export default data;