/* Nouvelles leçons — thèmes Éducation à Gastronomie. */

addLessons('education', [
  {
    id: 'education-monde', title: 'L’école dans le monde', min: 1,
    cards: [
      ['La Finlande prend son temps', 'En **Finlande**, souvent citée pour la qualité de son système éducatif, l’école obligatoire ne commence qu’à **7 ans**, avec peu de devoirs et des enseignants très qualifiés.'],
      ['Au Japon, on nettoie sa classe', 'Au **Japon**, les élèves nettoient eux-mêmes leur salle de classe et les couloirs chaque jour (*o-sōji*). Une façon d’apprendre le respect des lieux et le sens du collectif.']
    ],
    quiz: [
      { q: 'À quel âge commence l’école obligatoire en Finlande ?', c: ['7 ans', '3 ans', '5 ans', '10 ans'], e: 'À 7 ans. En France, l’instruction est obligatoire dès 3 ans depuis 2019.' },
      { q: 'Que font les élèves japonais chaque jour ?', c: ['Ils nettoient leur classe', 'Ils cuisinent la cantine', 'Ils chantent l’hymne national', 'Ils font une heure de sieste'], e: 'Le nettoyage quotidien de l’école (*o-sōji*) fait partie de l’éducation japonaise.' }
    ]
  },
  {
    id: 'education-neurosciences', title: 'Ce que le cerveau aime pour apprendre', min: 5,
    cards: [
      ['Un cerveau qui se transforme', 'Le cerveau n’est pas figé : à chaque apprentissage, des connexions entre neurones se créent ou se renforcent. C’est la **plasticité cérébrale**, active à tout âge.'],
      ['Pilier 1 : l’attention', 'Selon le neuroscientifique **Stanislas Dehaene**, l’apprentissage repose sur quatre piliers. Le premier : l’**attention**. Sans concentration, l’information ne s’imprime pas. Le multitâche est l’ennemi de la mémoire.'],
      ['Pilier 2 : l’engagement actif', 'Un cerveau passif apprend peu. Se poser des questions, tester, prédire, chercher : l’**engagement actif** rend l’apprentissage bien plus efficace.'],
      ['Pilier 3 : le retour sur erreur', 'Se tromper n’est pas un échec : c’est un signal qui permet au cerveau d’ajuster. Ce qui compte, c’est de recevoir un **retour rapide** sur ses erreurs, comme dans les quiz de cette app.'],
      ['Pilier 4 : la consolidation', 'La répétition espacée et le **sommeil** transforment un apprentissage laborieux en automatisme. Ce qui demandait un effort devient fluide.']
    ],
    deep: [
      '**Le cerveau bayésien.** Selon certaines théories, le cerveau fonctionne comme une machine à prédire : il fait des hypothèses sur le monde et les corrige quand la réalité le surprend. L’erreur est donc au cœur même de l’apprentissage.',
      '**Le recyclage neuronal.** Lire est une invention récente : notre cerveau n’a pas évolué pour cela. Pour apprendre à lire, il « recycle » une zone dédiée à la reconnaissance des objets et des visages, que Stanislas Dehaene appelle la « boîte aux lettres du cerveau ».',
      '**Sport et apprentissage.** L’activité physique favorise la production de molécules qui soutiennent la croissance des neurones, notamment dans l’hippocampe, une zone clé de la mémoire.'
    ],
    quiz: [
      { q: 'Comment appelle-t-on la capacité du cerveau à se transformer ?', c: ['La plasticité cérébrale', 'La neurogenèse', 'L’intelligence fluide', 'La synesthésie'], e: 'La plasticité cérébrale : les connexions entre neurones se modifient avec l’expérience, à tout âge.' },
      { q: 'Quel est le premier pilier de l’apprentissage selon Stanislas Dehaene ?', c: ['L’attention', 'La récompense', 'La répétition', 'La motivation'], e: 'L’attention, puis l’engagement actif, le retour sur erreur et la consolidation.' },
      { q: 'Quel rôle joue l’erreur dans l’apprentissage ?', c: ['C’est un signal qui aide le cerveau à s’ajuster', 'Elle bloque l’apprentissage', 'Elle doit être évitée à tout prix', 'Elle n’a aucun effet'], e: 'Avec un retour rapide, l’erreur permet de corriger ses représentations : elle est indispensable.' },
      { q: 'Qu’est-ce qui aide à consolider les apprentissages ?', c: ['Le sommeil et la répétition espacée', 'Le multitâche', 'La relecture passive', 'Le stress'], e: 'Le sommeil et les révisions espacées transforment les connaissances fragiles en savoirs durables.' }
    ]
  }
]);

addLessons('geographie', [
  {
    id: 'geographie-eau', title: 'Fleuves, lacs et océans', min: 5,
    cards: [
      ['Cinq océans', 'Pacifique, Atlantique, Indien, Austral et Arctique. Le **Pacifique** est si vaste qu’il couvre plus de surface que toutes les terres émergées réunies.'],
      ['Nil ou Amazone ?', 'Le **Nil** (environ 6 650 km) est traditionnellement présenté comme le plus long fleuve du monde, mais selon la façon de mesurer sa source, l’**Amazone** pourrait le dépasser. Le débat n’est pas tranché.'],
      ['L’Amazone, le géant', 'Sans conteste, l’Amazone a le plus grand **débit** du monde : il déverse à lui seul environ un cinquième de toute l’eau douce que les fleuves rejettent dans les océans.'],
      ['Le lac Baïkal', 'En Sibérie, le **Baïkal** est le lac le plus profond (environ 1 640 m) et le plus ancien du monde. Il contient environ 20 % de l’eau douce liquide de surface de la planète.'],
      ['Le point le plus bas des terres', 'Les rives de la **mer Morte**, entre Israël, la Cisjordanie et la Jordanie, sont à plus de 400 m sous le niveau de la mer. Son eau est si salée qu’on y flotte sans effort.'],
      ['Et en France ?', 'La **Loire** est le plus long fleuve entièrement français, avec environ 1 000 km. On la surnomme le « dernier fleuve sauvage d’Europe ».']
    ],
    deep: [
      '**Fleuve ou rivière ?** En français, un fleuve se jette dans la mer ou l’océan ; une rivière se jette dans un autre cours d’eau. La Seine est un fleuve, la Marne une rivière.',
      '**La mer Caspienne** est le plus grand lac du monde par sa superficie : malgré son nom, elle n’est reliée à aucun océan. Le lac Supérieur, en Amérique du Nord, est le plus grand lac d’eau douce par sa surface.',
      '**Un océan sous nos pieds ?** Les océans couvrent environ 71 % de la surface de la Terre, et leur fond reste moins bien cartographié en détail que la surface de Mars ou de la Lune.'
    ],
    quiz: [
      { q: 'Quel est le plus grand océan du monde ?', c: ['Le Pacifique', 'L’Atlantique', 'L’océan Indien', 'L’océan Austral'], e: 'Le Pacifique, plus vaste que l’ensemble des terres émergées.' },
      { q: 'Quel fleuve a le plus grand débit au monde ?', c: ['L’Amazone', 'Le Nil', 'Le Mississippi', 'Le Yangzi Jiang'], e: 'L’Amazone, de très loin : environ un cinquième de l’eau douce rejetée dans les océans.' },
      { q: 'Quel est le lac le plus profond du monde ?', c: ['Le lac Baïkal', 'Le lac Supérieur', 'Le lac Victoria', 'Le lac Léman'], e: 'Le Baïkal, en Sibérie, profond d’environ 1 640 m.' },
      { q: 'Quel est le plus long fleuve entièrement français ?', c: ['La Loire', 'La Seine', 'Le Rhône', 'La Garonne'], e: 'La Loire, environ 1 000 km. Le Rhône est plus long mais prend sa source en Suisse.' }
    ]
  },
  {
    id: 'geographie-france', title: 'La France en chiffres', min: 2,
    cards: [
      ['Régions et départements', 'La France compte **18 régions** (13 en métropole et 5 en outre-mer) et **101 départements**.'],
      ['Le toit de l’Europe de l’Ouest', 'Le **mont Blanc** culmine à environ **4 805 m**. Sa hauteur varie de quelques mètres selon l’épaisseur de la glace à son sommet.'],
      ['Des communes à foison', 'La France compte près de **35 000 communes**, un record en Europe. Beaucoup ont moins de 500 habitants.'],
      ['L’Hexagone… et le reste', 'Avec ses territoires d’outre-mer, la France est présente sur tous les océans, ce qui lui donne le deuxième plus grand espace maritime du monde, juste derrière les États-Unis.']
    ],
    quiz: [
      { q: 'Combien de régions compte la France (outre-mer compris) ?', c: ['18', '13', '22', '27'], e: '18 régions : 13 en métropole et 5 en outre-mer. Il y en avait 27 avant la réforme de 2016.' },
      { q: 'Quelle est l’altitude approximative du mont Blanc ?', c: ['4 805 m', '3 776 m', '5 642 m', '4 478 m'], e: 'Environ 4 805 m. 4 478 m est l’altitude du Cervin.' },
      { q: 'Combien de communes compte la France ?', c: ['Près de 35 000', 'Environ 3 500', 'Environ 350 000', 'Environ 10 000'], e: 'Près de 35 000 communes, bien plus que dans les autres pays européens.' }
    ]
  }
]);

addLessons('litterature', [
  {
    id: 'litterature-miserables', title: 'Les Misérables en bref', min: 1,
    cards: [
      ['Un roman monument', 'Publié en **1862** par **Victor Hugo**, *Les Misérables* suit **Jean Valjean**, ancien bagnard condamné pour avoir volé un pain, traqué par l’inspecteur **Javert**.'],
      ['Des personnages inoubliables', 'Fantine, sa fille **Cosette**, les Thénardier, le petit **Gavroche** qui meurt sur les barricades de l’insurrection parisienne de **1832** : le roman est une fresque de la misère et de l’espoir.']
    ],
    quiz: [
      { q: 'Pourquoi Jean Valjean a-t-il été envoyé au bagne ?', c: ['Pour avoir volé un pain', 'Pour avoir tué un homme', 'Pour avoir trahi le roi', 'Pour une dette impayée'], e: 'Il vole un pain pour nourrir les enfants de sa sœur ; ses tentatives d’évasion allongent sa peine à 19 ans.' },
      { q: 'Quel personnage poursuit Jean Valjean ?', c: ['L’inspecteur Javert', 'Thénardier', 'Marius', 'Monseigneur Myriel'], e: 'Javert, policier inflexible. Monseigneur Myriel est l’évêque qui offre une seconde chance à Valjean.' }
    ]
  },
  {
    id: 'litterature-fontaine', title: 'Les Fables de La Fontaine', min: 2,
    cards: [
      ['Un fabuliste de génie', 'Jean de **La Fontaine** (1621-1695) publie 243 fables en 12 livres, à partir de **1668**. Il s’inspire d’auteurs antiques comme le Grec **Ésope** et le Latin Phèdre.'],
      ['Des animaux pour parler des hommes', '« Je me sers d’animaux pour instruire les hommes », écrit-il. Derrière le lion, le renard ou le loup, on reconnaît le roi, les courtisans, les puissants de la cour de Louis XIV.'],
      ['Des morales devenues proverbes', '« La raison du plus fort est toujours la meilleure » (*Le Loup et l’Agneau*). « Rien ne sert de courir ; il faut partir à point » (*Le Lièvre et la Tortue*).'],
      ['Et encore…', '« On a souvent besoin d’un plus petit que soi » (*Le Lion et le Rat*). « Tout flatteur vit aux dépens de celui qui l’écoute » (*Le Corbeau et le Renard*).']
    ],
    quiz: [
      { q: 'De quel auteur grec La Fontaine s’est-il inspiré ?', c: ['Ésope', 'Homère', 'Platon', 'Sophocle'], e: 'Ésope, fabuliste grec du VIe siècle av. J.-C.' },
      { q: 'Dans quelle fable lit-on « La raison du plus fort est toujours la meilleure » ?', c: ['Le Loup et l’Agneau', 'Le Corbeau et le Renard', 'La Cigale et la Fourmi', 'Le Lion et le Rat'], e: 'Dans *Le Loup et l’Agneau*, dont c’est le tout premier vers : la morale est donnée d’emblée.' },
      { q: 'Qui vit « aux dépens de celui qui l’écoute » ?', c: ['Le flatteur', 'Le menteur', 'Le paresseux', 'Le voleur'], e: '« Tout flatteur vit aux dépens de celui qui l’écoute », morale du *Corbeau et le Renard*.' }
    ]
  }
]);

addLessons('musique', [
  {
    id: 'musique-populaires', title: 'Du blues au hip-hop', min: 5,
    cards: [
      ['Le blues', 'Né à la fin du XIXe siècle dans le sud des **États-Unis**, au sein des communautés afro-américaines, le blues exprime la peine et l’espoir. Il est à la racine de presque toutes les musiques populaires modernes.'],
      ['Le jazz', 'Au début du XXe siècle, à **La Nouvelle-Orléans**, naît le jazz, fondé sur l’improvisation. **Louis Armstrong**, trompettiste et chanteur, en devient l’une des grandes figures.'],
      ['Le rock’n’roll', 'Dans les années **1950**, Chuck Berry, Little Richard et **Elvis Presley** électrisent la jeunesse. Dans les années 1960, les **Beatles** et les **Rolling Stones** déferlent depuis l’Angleterre.'],
      ['Le hip-hop', 'Il naît dans le **Bronx**, à New York, au début des années **1970**. Le DJ Kool Herc isole et prolonge les passages rythmés des disques pour faire danser : les MC se mettent à rapper dessus.'],
      ['L’électro', 'La house naît à **Chicago** et la techno à **Détroit** dans les années 1980. La France y brille avec la « French Touch » des années 1990, portée par **Daft Punk**.']
    ],
    deep: [
      '**La note bleue.** Le blues repose souvent sur une grille de douze mesures et sur des « blue notes », des notes légèrement abaissées qui donnent cette couleur mélancolique si reconnaissable.',
      '**Le rap français** s’impose dans les années 1990 avec MC Solaar, IAM ou NTM. La France est aujourd’hui l’un des plus grands marchés du rap au monde.',
      '**Le reggae**, né en Jamaïque à la fin des années 1960, est popularisé dans le monde entier par Bob Marley. Il est inscrit au patrimoine immatériel de l’UNESCO depuis 2018.'
    ],
    quiz: [
      { q: 'Dans quelle ville le jazz est-il né ?', c: ['La Nouvelle-Orléans', 'New York', 'Chicago', 'Paris'], e: 'À La Nouvelle-Orléans, au début du XXe siècle.' },
      { q: 'Dans quel quartier de New York le hip-hop est-il né ?', c: ['Le Bronx', 'Manhattan', 'Brooklyn', 'Harlem'], e: 'Dans le Bronx, au début des années 1970, lors de fêtes de quartier.' },
      { q: 'Quel duo français incarne la « French Touch » ?', c: ['Daft Punk', 'Air Supply', 'Les Rita Mitsouko', 'Justice League'], e: 'Daft Punk, formé à Paris en 1993 par Thomas Bangalter et Guy-Manuel de Homem-Christo.' },
      { q: 'Quelle musique est à la racine de la plupart des musiques populaires modernes ?', c: ['Le blues', 'La valse', 'Le flamenco', 'La musique baroque'], e: 'Le blues a influencé le jazz, le rock, la soul, le R’n’B et le hip-hop.' }
    ]
  },
  {
    id: 'musique-chanson', title: 'La chanson française', min: 2,
    cards: [
      ['Édith Piaf', 'La « môme » à la voix bouleversante chante *La Vie en rose* (1947) et *Non, je ne regrette rien* (1960). Elle reste l’une des voix françaises les plus connues au monde.'],
      ['Jacques Brel', 'Le chanteur **belge** marque la chanson francophone avec des textes intenses : *Ne me quitte pas* (1959), *Amsterdam*, *Quand on n’a que l’amour*.'],
      ['Charles Aznavour', 'Plus de 1 000 chansons, des tournées jusqu’à plus de 90 ans : *La Bohème*, *Emmenez-moi*. Il a chanté en de nombreuses langues sur tous les continents.'],
      ['La Fête de la musique', 'Créée en **1982** par le ministre de la Culture Jack Lang, elle a lieu chaque **21 juin**, jour du solstice d’été. Elle est aujourd’hui célébrée dans plus de 120 pays.']
    ],
    quiz: [
      { q: 'Qui a chanté La Vie en rose ?', c: ['Édith Piaf', 'Dalida', 'Barbara', 'Juliette Gréco'], e: 'Édith Piaf, qui en a aussi écrit les paroles.' },
      { q: 'De quelle nationalité était Jacques Brel ?', c: ['Belge', 'Française', 'Suisse', 'Canadienne'], e: 'Belge, né à Schaerbeek, près de Bruxelles, en 1929.' },
      { q: 'Quel jour a lieu la Fête de la musique ?', c: ['Le 21 juin', 'Le 14 juillet', 'Le 1er mai', 'Le 21 mars'], e: 'Le 21 juin, jour du solstice d’été, depuis 1982.' }
    ]
  }
]);

addLessons('philosophie', [
  {
    id: 'philosophie-stoicisme', title: 'Le stoïcisme', min: 1,
    cards: [
      ['Ce qui dépend de nous', 'Pour les stoïciens comme **Épictète**, ancien esclave devenu philosophe, la sagesse consiste à distinguer **ce qui dépend de nous** (nos jugements, nos actions) de ce qui n’en dépend pas (la météo, l’avis des autres), et à ne pas s’inquiéter du second.'],
      ['Un empereur philosophe', 'L’empereur romain **Marc Aurèle** (IIe siècle) consignait ses réflexions stoïciennes dans un carnet personnel, publié sous le titre *Pensées pour moi-même*. Il est encore très lu aujourd’hui.']
    ],
    quiz: [
      { q: 'Quelle distinction est au cœur du stoïcisme ?', c: ['Ce qui dépend de nous et ce qui n’en dépend pas', 'Le bien et le mal', 'Le corps et l’âme', 'Le riche et le pauvre'], e: 'Épictète enseigne de concentrer ses efforts sur ce qui dépend de nous.' },
      { q: 'Quel empereur romain a écrit Pensées pour moi-même ?', c: ['Marc Aurèle', 'Jules César', 'Néron', 'Auguste'], e: 'Marc Aurèle, empereur de 161 à 180. Néron avait, lui, le stoïcien Sénèque pour précepteur.' }
    ]
  },
  {
    id: 'philosophie-questions', title: 'Grandes questions, grands philosophes', min: 2,
    cards: [
      ['Qu’est-ce que le bonheur ?', 'Pour **Épicure**, le bonheur est l’absence de troubles (l’ataraxie). Contrairement à sa réputation, il prône des plaisirs **simples et modérés** : un peu de pain, d’eau et des amis.'],
      ['Sommes-nous libres ?', 'Pour **Spinoza**, les hommes se croient libres parce qu’ils sont conscients de leurs désirs mais **ignorent les causes** qui les déterminent.'],
      ['Comment bien agir ?', 'Pour **Kant**, il faut agir de telle sorte que la règle de notre action puisse devenir une **loi universelle**. Mentir ne passe pas le test : si tout le monde mentait, plus personne ne croirait personne.'],
      ['Faut-il croire en Dieu ?', 'Selon le **pari de Pascal**, si Dieu existe, croire fait tout gagner ; s’il n’existe pas, on ne perd presque rien. Il serait donc raisonnable de parier sur son existence.']
    ],
    quiz: [
      { q: 'Quels plaisirs Épicure recommande-t-il ?', c: ['Des plaisirs simples et modérés', 'Tous les plaisirs, sans limite', 'Aucun plaisir', 'Uniquement les plaisirs intellectuels'], e: 'Épicure prône la modération : les plaisirs simples évitent les souffrances qui suivent les excès.' },
      { q: 'Selon Spinoza, pourquoi nous croyons-nous libres ?', c: ['Nous ignorons les causes qui nous déterminent', 'Nous avons une âme immortelle', 'La société nous l’impose', 'Nous sommes vraiment libres'], e: 'Nous sommes conscients de nos désirs mais pas de ce qui les cause.' },
      { q: 'Quel philosophe est associé à l’impératif catégorique ?', c: ['Kant', 'Pascal', 'Épicure', 'Descartes'], e: 'Emmanuel Kant : agir selon une règle qu’on pourrait vouloir voir appliquée par tous.' }
    ]
  }
]);

addLessons('economie', [
  {
    id: 'economie-bourse', title: 'La Bourse expliquée simplement', min: 5,
    cards: [
      ['Une action, c’est quoi ?', 'Une **action** est une petite part du capital d’une entreprise. Son détenteur, l’actionnaire, peut toucher une partie des bénéfices (les **dividendes**) et voter en assemblée générale.'],
      ['La Bourse, un marché', 'La **Bourse** est le marché où s’échangent ces actions. Leur prix monte ou baisse selon l’offre et la demande, qui reflètent les perspectives de l’entreprise et le moral des investisseurs.'],
      ['Les indices', 'Un **indice** suit l’évolution d’un panier d’actions. Le **CAC 40**, créé en 1987, regroupe 40 grandes entreprises cotées à Paris ; le **Dow Jones**, aux États-Unis, existe depuis 1896.'],
      ['Le krach de 1929', 'Le **jeudi 24 octobre 1929**, « jeudi noir », la Bourse de New York s’effondre. Ce krach ouvre la **Grande Dépression**, une crise mondiale qui dure des années.'],
      ['Des bulles qui éclatent', 'En 2000, la bulle des entreprises Internet éclate. En **2008**, la faillite de la banque **Lehman Brothers** déclenche une crise financière mondiale, partie des prêts immobiliers risqués américains.']
    ],
    deep: [
      '**Risque et diversification.** Le prix d’une action peut fortement baisser : on peut perdre une partie de sa mise. C’est pourquoi on parle souvent de diversifier, c’est-à-dire de répartir son argent entre plusieurs placements. (Ceci est une explication générale, pas un conseil d’investissement.)',
      '**Les obligations.** En plus des actions, les entreprises et les États empruntent en émettant des obligations : l’acheteur prête de l’argent et reçoit des intérêts, sans devenir propriétaire.',
      '**La première Bourse moderne** est souvent située à Amsterdam au début du XVIIe siècle, avec les actions de la Compagnie néerlandaise des Indes orientales. Le mot « bourse » viendrait de la famille Van der Beurse, à Bruges, devant la maison de laquelle se réunissaient des marchands.'
    ],
    quiz: [
      { q: 'Qu’est-ce qu’une action ?', c: ['Une part du capital d’une entreprise', 'Un prêt à l’État', 'Un billet de banque', 'Un contrat d’assurance'], e: 'Une action fait de son détenteur un copropriétaire de l’entreprise. Un prêt à l’État, c’est une obligation.' },
      { q: 'Combien d’entreprises compte le CAC 40 ?', c: ['40', '100', '400', '4'], e: '40 grandes entreprises cotées à la Bourse de Paris.' },
      { q: 'Quel événement a déclenché la Grande Dépression ?', c: ['Le krach boursier de 1929', 'La faillite de Lehman Brothers', 'Le choc pétrolier de 1973', 'L’éclatement de la bulle Internet'], e: 'Le krach d’octobre 1929 à Wall Street.' },
      { q: 'Comment appelle-t-on la part des bénéfices versée aux actionnaires ?', c: ['Le dividende', 'L’intérêt', 'La TVA', 'Le salaire'], e: 'Le dividende, décidé chaque année par l’assemblée générale des actionnaires.' }
    ]
  },
  {
    id: 'economie-monnaie', title: 'Petite histoire de la monnaie', min: 2,
    cards: [
      ['Avant la monnaie, le troc', 'Échanger directement un bien contre un autre est vite compliqué : il faut trouver quelqu’un qui veut ce que l’on a et possède ce que l’on veut. Des coquillages, du sel ou du bétail ont servi de monnaie.'],
      ['Les premières pièces', 'Les premières pièces apparaissent au **VIIe siècle av. J.-C.** en **Lydie** (dans l’actuelle Turquie). Le roi Crésus, célèbre pour sa richesse, régnait sur ce royaume.'],
      ['Le papier-monnaie', 'La **Chine** utilise des billets dès le **XIe siècle**. Marco Polo s’étonnait de voir les Chinois payer avec du papier.'],
      ['L’argent invisible', 'Aujourd’hui, l’essentiel de la monnaie n’existe pas sous forme de pièces ou de billets, mais d’écritures sur des comptes bancaires : c’est la **monnaie scripturale**.']
    ],
    quiz: [
      { q: 'Où sont apparues les premières pièces de monnaie ?', c: ['En Lydie', 'En Égypte', 'À Rome', 'En Chine'], e: 'En Lydie, dans l’actuelle Turquie, au VIIe siècle av. J.-C.' },
      { q: 'Quel pays a utilisé des billets dès le XIe siècle ?', c: ['La Chine', 'La France', 'L’Angleterre', 'L’Inde'], e: 'La Chine, plusieurs siècles avant l’Europe.' },
      { q: 'Comment appelle-t-on l’argent qui existe sur les comptes bancaires ?', c: ['La monnaie scripturale', 'La monnaie fiduciaire', 'La monnaie divisionnaire', 'La monnaie métallique'], e: 'La monnaie scripturale (des écritures). Les billets et pièces forment la monnaie fiduciaire.' }
    ]
  }
]);

addLessons('astronomie', [
  {
    id: 'astronomie-lune', title: 'La Lune', min: 1,
    cards: [
      ['Née d’une collision', 'Selon l’hypothèse la plus admise, la Lune s’est formée il y a environ **4,5 milliards d’années**, après la collision entre la jeune Terre et une planète de la taille de Mars, baptisée Théia.'],
      ['Une face cachée', 'La Lune tourne sur elle-même dans le même temps qu’elle tourne autour de la Terre : elle nous montre donc toujours la **même face**. Elle s’éloigne de nous d’environ **3,8 cm par an**.']
    ],
    quiz: [
      { q: 'Pourquoi voit-on toujours la même face de la Lune ?', c: ['Elle tourne sur elle-même aussi vite qu’autour de la Terre', 'Elle ne tourne pas sur elle-même', 'La Terre la cache', 'L’autre face est toujours dans l’ombre'], e: 'C’est la rotation synchrone : un tour sur elle-même par tour autour de la Terre.' },
      { q: 'Comment la Lune se serait-elle formée ?', c: ['Après une collision entre la Terre et une autre planète', 'En étant capturée par la Terre', 'En même temps que le Soleil', 'À partir d’un morceau de Mars'], e: 'L’hypothèse de l’impact géant avec Théia est la plus admise.' }
    ]
  },
  {
    id: 'astronomie-etoiles', title: 'La vie d’une étoile', min: 5,
    cards: [
      ['La naissance', 'Une étoile naît dans une **nébuleuse**, un nuage de gaz et de poussières qui s’effondre sur lui-même. Au centre, la température grimpe jusqu’à déclencher la **fusion nucléaire**.'],
      ['Une centrale nucléaire céleste', 'Au cœur de l’étoile, l’hydrogène fusionne en hélium en libérant une énergie colossale. Notre **Soleil** fait cela depuis environ **4,6 milliards d’années**, et il lui reste à peu près autant de carburant.'],
      ['La fin des étoiles moyennes', 'Dans environ 5 milliards d’années, le Soleil gonflera en **géante rouge**, puis il expulsera ses couches externes et deviendra une **naine blanche**, petite et très dense.'],
      ['La fin des géantes', 'Les étoiles bien plus massives finissent en **supernova**, une explosion qui peut briller plus qu’une galaxie entière. Il reste une **étoile à neutrons** ou un **trou noir**.'],
      ['Photographier un trou noir', 'En **2019**, la collaboration Event Horizon Telescope publie la première image d’un trou noir, au cœur de la galaxie M87. En 2022 suit celle de **Sagittarius A***, le trou noir au centre de notre Galaxie.']
    ],
    deep: [
      '**Une cuillère d’étoile à neutrons** pèserait des centaines de millions de tonnes sur Terre : toute la masse d’un soleil est comprimée dans une sphère d’une vingtaine de kilomètres.',
      '**Un trou noir** est une région si dense que rien, pas même la lumière, ne peut s’en échapper une fois franchie sa limite, l’« horizon des événements ». Ce que montrent les images de 2019 et 2022, c’est l’ombre du trou noir, entourée de gaz brûlant.',
      '**La supernova de 1054.** Des astronomes chinois ont noté l’apparition d’une « étoile invitée » visible en plein jour pendant plusieurs semaines. Ses restes forment aujourd’hui la nébuleuse du Crabe.'
    ],
    quiz: [
      { q: 'Quelle réaction fait briller les étoiles ?', c: ['La fusion nucléaire', 'La combustion du charbon', 'La fission nucléaire', 'Les réactions chimiques'], e: 'La fusion de l’hydrogène en hélium, qui libère d’énormes quantités d’énergie.' },
      { q: 'Que deviendra le Soleil à la fin de sa vie ?', c: ['Une naine blanche', 'Un trou noir', 'Une étoile à neutrons', 'Une supernova'], e: 'Il n’est pas assez massif pour exploser : après sa phase de géante rouge, il deviendra une naine blanche.' },
      { q: 'En quelle année a été publiée la première image d’un trou noir ?', c: ['2019', '1969', '2001', '2023'], e: 'En 2019, celle du trou noir au centre de la galaxie M87.' },
      { q: 'Où naissent les étoiles ?', c: ['Dans des nébuleuses de gaz et de poussières', 'Dans les trous noirs', 'Près des planètes', 'Dans les comètes'], e: 'Les nébuleuses sont de véritables pouponnières d’étoiles.' }
    ]
  }
]);

addLessons('corps', [
  {
    id: 'corps-cerveau', title: 'Le cerveau, ce champion', min: 5,
    cards: [
      ['86 milliards de neurones', 'Notre cerveau compte environ **86 milliards de neurones**, chacun connecté à des milliers d’autres. Le nombre de connexions se compte en centaines de milliers de milliards.'],
      ['Un gros consommateur', 'Il ne représente qu’environ **2 % de notre masse**, mais consomme près de **20 % de notre énergie** au repos.'],
      ['Deux hémisphères', 'L’hémisphère gauche commande la partie droite du corps, et inversement. Le langage dépend surtout de l’hémisphère gauche chez la plupart des gens, mais l’idée de personnes « cerveau gauche » ou « cerveau droit » est un mythe.'],
      ['Indolore', 'Le cerveau ne possède pas de récepteurs de la douleur. C’est pourquoi certaines opérations se font sur des patients **éveillés**, pour vérifier en direct qu’on ne touche pas aux zones du langage.'],
      ['Toujours en chantier', 'Le cerveau n’atteint sa pleine maturité que vers **25 ans** : le cortex préfrontal, siège de la planification et du contrôle de soi, est le dernier à se développer.']
    ],
    deep: [
      '**Le cas Phineas Gage.** En 1848, ce contremaître américain a le crâne transpercé par une barre de fer. Il survit, mais sa personnalité change profondément. Son cas a révélé le rôle du lobe frontal dans le comportement.',
      '**La découverte de Broca.** En 1861, le médecin français Paul Broca étudie un patient qui ne pouvait prononcer qu’une syllabe. Après sa mort, il découvre une lésion dans une zone précise de l’hémisphère gauche, aujourd’hui appelée l’aire de Broca.',
      '**Le cerveau se nettoie la nuit.** Pendant le sommeil, un système d’évacuation élimine certains déchets produits par l’activité des neurones, une raison de plus de bien dormir.'
    ],
    quiz: [
      { q: 'Combien de neurones compte environ le cerveau humain ?', c: ['86 milliards', '1 million', '100 000', '7 milliards'], e: 'Environ 86 milliards, selon une estimation de 2009.' },
      { q: 'Quelle part de notre énergie le cerveau consomme-t-il au repos ?', c: ['Environ 20 %', 'Environ 2 %', 'Environ 50 %', 'Environ 80 %'], e: 'Près de 20 % alors qu’il ne pèse qu’environ 2 % de notre masse.' },
      { q: 'Pourquoi peut-on opérer certains patients éveillés ?', c: ['Le cerveau n’a pas de récepteurs de la douleur', 'Ils sont hypnotisés', 'Le crâne est insensible', 'C’est interdit en réalité'], e: 'Le cerveau lui-même est insensible à la douleur ; seule une anesthésie locale du cuir chevelu est nécessaire.' },
      { q: 'Vers quel âge le cerveau atteint-il sa pleine maturité ?', c: ['Vers 25 ans', 'Vers 7 ans', 'Vers 12 ans', 'Vers 50 ans'], e: 'Vers 25 ans, avec la maturation du cortex préfrontal.' }
    ]
  },
  {
    id: 'corps-vaccins', title: 'Immunité et vaccins', min: 2,
    cards: [
      ['Une armée intérieure', 'Notre **système immunitaire** combat les microbes grâce à différents globules blancs. Certains produisent des **anticorps**, qui reconnaissent un intrus précis.'],
      ['La mémoire immunitaire', 'Après une infection, le corps garde des cellules « mémoire ». S’il rencontre à nouveau le même microbe, il réagit beaucoup plus vite et plus fort.'],
      ['Jenner et la vache', 'En **1796**, le médecin anglais Edward **Jenner** protège un enfant de la variole en lui inoculant la « vaccine », une maladie bénigne de la vache. Le mot **vaccin** vient du latin *vacca*, la vache.'],
      ['Pasteur et la rage', 'En **1885**, Louis **Pasteur** vaccine le jeune Joseph Meister, mordu par un chien enragé : il survit. Grâce à la vaccination, la **variole** a été déclarée éradiquée en **1980**.']
    ],
    quiz: [
      { q: 'D’où vient le mot « vaccin » ?', c: ['Du latin *vacca*, la vache', 'Du nom d’un médecin', 'Du grec *vakkos*, protection', 'D’une ville d’Italie'], e: 'Jenner utilisait la vaccine, maladie de la vache, pour protéger de la variole.' },
      { q: 'Contre quelle maladie Pasteur a-t-il vacciné Joseph Meister ?', c: ['La rage', 'La variole', 'La tuberculose', 'La grippe'], e: 'La rage, en 1885. Joseph Meister avait été mordu par un chien enragé.' },
      { q: 'Quelle maladie a été éradiquée grâce à la vaccination ?', c: ['La variole', 'La grippe', 'La rougeole', 'Le paludisme'], e: 'La variole, déclarée éradiquée par l’OMS en 1980.' }
    ]
  }
]);

addLessons('mythologie', [
  {
    id: 'mythologie-heracles', title: 'Les travaux d’Héraclès', min: 1,
    cards: [
      ['Un héros puni', 'Rendu fou par la déesse Héra, **Héraclès** (Hercule chez les Romains) tue sa propre famille. Pour expier, il doit accomplir **douze travaux** réputés impossibles.'],
      ['Quelques exploits', 'Il étouffe le **lion de Némée**, invulnérable aux armes, tranche les têtes de l’**hydre de Lerne**, qui repoussaient sans cesse, et nettoie les **écuries d’Augias** en détournant deux fleuves.']
    ],
    quiz: [
      { q: 'Combien de travaux Héraclès a-t-il dû accomplir ?', c: ['12', '7', '9', '3'], e: 'Douze travaux, imposés par le roi Eurysthée.' },
      { q: 'Comment Héraclès a-t-il nettoyé les écuries d’Augias ?', c: ['En détournant deux fleuves', 'Avec l’aide des dieux', 'En y mettant le feu', 'En une nuit, à la main'], e: 'Il détourne les fleuves Alphée et Pénée pour les faire passer dans les écuries. On parle encore de « nettoyer les écuries d’Augias ».' }
    ]
  },
  {
    id: 'mythologie-nordique', title: 'La mythologie nordique', min: 5,
    cards: [
      ['Odin, le dieu borgne', 'Chef des dieux nordiques, **Odin** a sacrifié un œil pour boire à la source de la sagesse. Il est accompagné de deux corbeaux qui parcourent le monde pour l’informer.'],
      ['Thor et son marteau', 'Dieu du tonnerre, **Thor** protège les dieux et les hommes avec son marteau **Mjöllnir**, qui revient toujours dans sa main après avoir été lancé.'],
      ['Loki, le farceur', '**Loki** est un dieu rusé et changeant, tantôt allié, tantôt ennemi des dieux. Ses tours finissent par provoquer la mort de Baldr, le plus aimé des dieux.'],
      ['Yggdrasil', 'Les neuf mondes de la mythologie nordique sont reliés par **Yggdrasil**, un frêne gigantesque dont les racines et les branches traversent tout l’univers.'],
      ['Le Valhalla', 'Les guerriers morts au combat sont conduits par les **Valkyries** au **Valhalla**, la grande salle d’Odin, où ils festoient en attendant la bataille finale.'],
      ['Le Ragnarök', 'La fin du monde : dieux et géants s’affrontent, Odin est dévoré par le loup Fenrir, Thor meurt en tuant le serpent de Midgard… Puis un monde nouveau renaît.']
    ],
    deep: [
      '**Les dieux dans notre semaine.** En anglais, *Wednesday* est le jour de Woden (Odin), *Thursday* celui de Thor et *Friday* celui de Frigg, l’épouse d’Odin.',
      '**Où connaît-on ces mythes ?** Surtout par deux textes islandais du XIIIe siècle : l’*Edda poétique* et l’*Edda* de Snorri Sturluson, écrits après la christianisation de la Scandinavie.',
      '**Pas de casque à cornes !** Les représentations modernes des dieux et des Vikings doivent beaucoup au XIXe siècle et, aujourd’hui, aux films de super-héros, qui prennent de grandes libertés avec les mythes.'
    ],
    quiz: [
      { q: 'Qu’a sacrifié Odin pour obtenir la sagesse ?', c: ['Un œil', 'Sa main', 'Son marteau', 'Ses corbeaux'], e: 'Un œil, pour boire à la source de Mímir.' },
      { q: 'Comment s’appelle le marteau de Thor ?', c: ['Mjöllnir', 'Excalibur', 'Gungnir', 'Durandal'], e: 'Mjöllnir. Gungnir est la lance d’Odin, Excalibur l’épée du roi Arthur et Durandal celle de Roland.' },
      { q: 'Qu’est-ce qu’Yggdrasil ?', c: ['L’arbre qui relie les neuf mondes', 'La demeure d’Odin', 'Le loup géant', 'Le serpent de Midgard'], e: 'Un frêne cosmique qui relie les neuf mondes.' },
      { q: 'Quel jour de la semaine anglais doit son nom à Thor ?', c: ['Thursday', 'Tuesday', 'Wednesday', 'Saturday'], e: '*Thursday*, le jour de Thor. *Wednesday* est celui d’Odin (Woden).' }
    ]
  }
]);

addLessons('technologie', [
  {
    id: 'technologie-smartphone', title: 'Le smartphone', min: 1,
    cards: [
      ['2007, la révolution', 'Le **9 janvier 2007**, Steve Jobs présente le premier **iPhone** : un téléphone, un baladeur et un navigateur Internet dans un seul appareil à écran tactile.'],
      ['Plus puissant qu’Apollo', 'Le premier **SMS** a été envoyé en **1992** : « Merry Christmas ». Aujourd’hui, un smartphone ordinaire est des millions de fois plus puissant que l’ordinateur de bord qui a guidé Apollo 11 vers la Lune.']
    ],
    quiz: [
      { q: 'En quelle année le premier iPhone a-t-il été présenté ?', c: ['2007', '1999', '2010', '2003'], e: 'Le 9 janvier 2007, par Steve Jobs.' },
      { q: 'Que disait le premier SMS, en 1992 ?', c: ['Merry Christmas', 'Hello World', 'Happy New Year', 'Test'], e: '« Merry Christmas », envoyé depuis un ordinateur vers un téléphone au Royaume-Uni.' }
    ]
  },
  {
    id: 'technologie-ordinateur', title: 'Comment marche un ordinateur ?', min: 5,
    cards: [
      ['Tout est 0 et 1', 'Un ordinateur ne comprend que deux états : le courant passe ou ne passe pas, **1 ou 0**. C’est le **binaire**. Un chiffre binaire s’appelle un **bit**, et 8 bits forment un **octet**.'],
      ['Le processeur, le cerveau', 'Le **processeur** exécute les instructions des programmes, des milliards de fois par seconde. Il contient des milliards de **transistors**, de minuscules interrupteurs.'],
      ['Mémoire vive et stockage', 'La **mémoire vive** (RAM) garde les données en cours d’utilisation, mais s’efface quand on éteint. Le **stockage** (disque dur, SSD) conserve fichiers et programmes durablement.'],
      ['La loi de Moore', 'En **1965**, Gordon Moore, cofondateur d’Intel, prédit que le nombre de transistors sur une puce doublera environ tous les deux ans. Cette tendance a tenu pendant des décennies.'],
      ['La première programmeuse', 'En **1843**, la mathématicienne **Ada Lovelace** écrit ce qu’on considère comme le premier programme informatique, pour la machine analytique de Charles Babbage, qui ne fut jamais construite.'],
      ['Le premier « bug »', 'En **1947**, l’équipe de **Grace Hopper** trouve un papillon de nuit coincé dans un ordinateur. Elle le colle dans son carnet : « premier cas réel de *bug* trouvé ». Le mot existait déjà, mais l’anecdote l’a rendu célèbre.']
    ],
    deep: [
      '**Alan Turing**, en 1936, décrit une machine abstraite capable d’exécuter n’importe quel calcul décrit par un algorithme : la « machine de Turing », fondement théorique de l’informatique. Pendant la guerre, il contribue à casser le code Enigma des nazis.',
      '**L’ENIAC**, achevé en 1945 aux États-Unis, est l’un des premiers ordinateurs électroniques : il pesait près de 30 tonnes et occupait une grande salle. Il a été programmé notamment par six femmes, longtemps oubliées.',
      '**Le mot « ordinateur »** a été proposé en 1955 par le philologue Jacques Perret, à la demande d’IBM France, qui cherchait une traduction de *computer*. Il désignait à l’origine « Dieu qui met de l’ordre dans le monde ».'
    ],
    quiz: [
      { q: 'Combien de bits forment un octet ?', c: ['8', '2', '10', '16'], e: '8 bits = 1 octet. Un kilooctet vaut environ mille octets.' },
      { q: 'Que se passe-t-il quand on éteint l’ordinateur ?', c: ['La mémoire vive s’efface', 'Le disque dur s’efface', 'Le processeur se vide de ses transistors', 'Rien ne change'], e: 'La RAM est volatile : son contenu disparaît sans courant, contrairement au stockage.' },
      { q: 'Qui a écrit le premier programme informatique ?', c: ['Ada Lovelace', 'Alan Turing', 'Grace Hopper', 'Bill Gates'], e: 'Ada Lovelace, en 1843, pour la machine analytique de Charles Babbage.' },
      { q: 'Que prédit la loi de Moore ?', c: ['Le doublement des transistors sur une puce environ tous les deux ans', 'La fin d’Internet', 'Que les ordinateurs deviendront conscients', 'La baisse du prix de l’électricité'], e: 'Formulée en 1965 par Gordon Moore, elle a guidé l’industrie pendant des décennies.' }
    ]
  }
]);

addLessons('gastronomie', [
  {
    id: 'gastronomie-histoire', title: 'Grands chefs et naissance du restaurant', min: 5,
    cards: [
      ['Vatel', 'Maître d’hôtel du prince de Condé, **Vatel** organise en 1671 une fête pour Louis XIV. Selon la marquise de Sévigné, croyant que la marée (le poisson) n’arriverait pas à temps, il se donne la mort.'],
      ['La naissance du restaurant', 'Au XVIIIe siècle, un « restaurant » est d’abord un **bouillon** qui restaure les forces. Des établissements parisiens en servent dès les années 1760. Après la Révolution, les cuisiniers des nobles émigrés ouvrent leurs propres restaurants.'],
      ['Carême, le roi des chefs', 'Au début du XIXe siècle, **Antonin Carême** cuisine pour Talleyrand et des souverains. Il est célèbre pour ses pièces montées architecturales et pose les bases de la grande cuisine française.'],
      ['Escoffier, l’organisateur', 'À la fin du XIXe siècle, **Auguste Escoffier** organise la cuisine en **brigade** (chef, sous-chef, saucier, pâtissier…), un modèle encore utilisé partout. On lui doit la **pêche Melba**.'],
      ['La nouvelle cuisine', 'Dans les années 1970, des chefs comme **Paul Bocuse** prônent des cuissons courtes, des sauces légères et des produits frais. Le Bocuse d’Or, créé en 1987, est l’un des concours de cuisine les plus prestigieux.']
    ],
    deep: [
      '**La pêche Melba** a été créée par Escoffier en hommage à la cantatrice australienne Nellie Melba : des pêches pochées, de la glace à la vanille et un coulis de framboise.',
      '**Le premier guide gastronomique** est souvent attribué à Grimod de La Reynière, qui publie à partir de 1803 l’*Almanach des gourmands*, ancêtre de la critique gastronomique.',
      '**La toque du chef** : sa hauteur indiquait autrefois le rang dans la brigade. On raconte que ses plis devaient rappeler les nombreuses façons de préparer un œuf.'
    ],
    quiz: [
      { q: 'Qu’était un « restaurant » à l’origine ?', c: ['Un bouillon qui restaure les forces', 'Une auberge pour voyageurs', 'Une boulangerie', 'Une salle de bal'], e: 'Un bouillon reconstituant. Le mot a ensuite désigné les établissements qui le servaient.' },
      { q: 'Quelle organisation de la cuisine doit-on à Escoffier ?', c: ['La brigade de cuisine', 'Le service à la française', 'Le menu dégustation', 'Le libre-service'], e: 'La brigade, qui répartit les tâches entre chef, sous-chef, saucier, pâtissier, etc.' },
      { q: 'Quel chef est associé à la nouvelle cuisine ?', c: ['Paul Bocuse', 'Antonin Carême', 'François Vatel', 'Auguste Escoffier'], e: 'Paul Bocuse, figure de la nouvelle cuisine des années 1970.' },
      { q: 'Quel dessert Escoffier a-t-il créé ?', c: ['La pêche Melba', 'La tarte Tatin', 'Le Paris-Brest', 'La crème brûlée'], e: 'La pêche Melba, en hommage à la cantatrice Nellie Melba.' }
    ]
  },
  {
    id: 'gastronomie-chocolat', title: 'Les secrets du chocolat', min: 2,
    cards: [
      ['Une boisson des Aztèques', 'En Mésoamérique, Mayas et Aztèques consommaient le cacao sous forme de **boisson amère** et épicée. Les fèves servaient même de **monnaie**.'],
      ['L’arrivée en Europe', 'Les Espagnols rapportent le cacao au **XVIe siècle**. En France, il est popularisé à la cour après le mariage d’**Anne d’Autriche**, infante d’Espagne, avec Louis XIII en 1615.'],
      ['Bayonne, berceau français', 'Au XVIIe siècle, des Juifs chassés d’Espagne et du Portugal apportent leur savoir-faire chocolatier à **Bayonne**, qui devient la première ville du chocolat en France.'],
      ['Faux chocolat et vrai danger', 'Le **chocolat blanc** ne contient pas de cacao solide, seulement du beurre de cacao. Et le chocolat est **toxique pour les chiens** à cause de la théobromine.']
    ],
    quiz: [
      { q: 'Sous quelle forme les Aztèques consommaient-ils le cacao ?', c: ['En boisson amère', 'En tablettes sucrées', 'En pâtisserie', 'En poudre sur les fruits'], e: 'En boisson amère et épicée. Le chocolat sucré est une invention européenne.' },
      { q: 'Quelle ville a été la première capitale du chocolat en France ?', c: ['Bayonne', 'Lyon', 'Paris', 'Strasbourg'], e: 'Bayonne, grâce à des chocolatiers juifs venus de la péninsule Ibérique au XVIIe siècle.' },
      { q: 'Pourquoi le chocolat est-il dangereux pour les chiens ?', c: ['À cause de la théobromine', 'À cause du sucre', 'À cause du lait', 'Il ne l’est pas'], e: 'Les chiens éliminent très lentement la théobromine, toxique pour eux.' }
    ]
  }
]);
