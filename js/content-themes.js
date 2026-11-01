/* Nouveaux thèmes. */

addTheme({
  id: 'nature', name: 'Nature et animaux', emoji: '🦁', color: '#6AB04C',
  d: 'Les merveilles du vivant, des forêts aux océans.',
  lessons: [
    {
      id: 'nature-records', title: 'Les champions du règne animal', min: 1,
      cards: [
        ['Les plus rapides', 'Sur terre, le **guépard** atteint environ 100 km/h en pointe, sur de courtes distances. Dans les airs, le **faucon pèlerin** dépasse les **300 km/h** en piqué : c’est l’animal le plus rapide du monde.'],
        ['Le plus grand de tous les temps', 'La **baleine bleue** peut dépasser 30 m de long. C’est le plus grand animal ayant jamais vécu sur Terre, dinosaures compris.']
      ],
      quiz: [
        { q: 'Quel est l’animal le plus rapide du monde ?', c: ['Le faucon pèlerin', 'Le guépard', 'L’espadon', 'L’antilope'], e: 'Le faucon pèlerin, qui dépasse 300 km/h en piqué. Le guépard est le plus rapide sur terre.' },
        { q: 'Quel est le plus grand animal ayant jamais existé ?', c: ['La baleine bleue', 'Le diplodocus', 'Le mégalodon', 'L’éléphant d’Afrique'], e: 'La baleine bleue, plus longue et bien plus lourde que les plus grands dinosaures connus.' }
      ]
    },
    {
      id: 'nature-arbres', title: 'Des arbres extraordinaires', min: 2,
      cards: [
        ['Des arbres qui communiquent', 'Sous terre, les racines de nombreux arbres sont reliées par des réseaux de **champignons** (les mycorhizes). Ces réseaux échangent de l’eau, des nutriments et peut-être des signaux d’alerte : certains parlent de « wood wide web ».'],
        ['Le plus haut', '**Hyperion**, un séquoia à feuilles d’if de Californie, mesure environ **116 m**. Sa localisation exacte est tenue secrète pour le protéger.'],
        ['Le plus volumineux', 'Le **General Sherman**, un séquoia géant de Californie, est l’arbre le plus volumineux du monde : environ 1 500 m³ de bois.'],
        ['Le doyen', 'Un pin de Bristlecone surnommé **Mathusalem**, en Californie, aurait environ **4 800 ans**. Il était déjà vieux quand les pyramides d’Égypte ont été construites.']
      ],
      quiz: [
        { q: 'Par quoi les racines des arbres sont-elles souvent reliées ?', c: ['Des réseaux de champignons', 'Des vers de terre', 'Des nappes d’eau', 'Des fourmis'], e: 'Les mycorhizes, associations entre racines et champignons, relient les arbres entre eux.' },
        { q: 'Combien mesure environ Hyperion, l’arbre le plus haut du monde ?', c: ['116 m', '45 m', '300 m', '75 m'], e: 'Environ 116 m, l’équivalent d’un immeuble de plus de 35 étages.' },
        { q: 'Quel âge aurait le pin surnommé Mathusalem ?', c: ['Environ 4 800 ans', 'Environ 500 ans', 'Environ 1 200 ans', 'Environ 20 000 ans'], e: 'Environ 4 800 ans, ce qui en fait l’un des plus vieux arbres connus.' }
      ]
    },
    {
      id: 'nature-migrations', title: 'Les grandes migrations', min: 5,
      cards: [
        ['La sterne arctique', 'Ce petit oiseau voyage chaque année de l’Arctique à l’Antarctique, et retour : jusqu’à **70 000 km par an**, la plus longue migration connue. Elle voit plus de lumière du jour que n’importe quel autre animal.'],
        ['Le papillon monarque', 'Chaque automne, des millions de monarques quittent le Canada et les États-Unis pour hiverner dans les forêts du **Mexique**. Le voyage aller-retour s’étale sur **plusieurs générations** : aucun papillon ne le fait en entier.'],
        ['Le saumon', 'Après des années en mer, le saumon remonte jusqu’à la rivière où il est né pour s’y reproduire. Il la retrouve grâce à son **odorat**, capable de reconnaître l’odeur de son cours d’eau natal.'],
        ['Les gnous du Serengeti', 'En Afrique de l’Est, environ **1,5 million de gnous**, accompagnés de zèbres et de gazelles, suivent les pluies entre la Tanzanie et le Kenya, en traversant des rivières infestées de crocodiles.'],
        ['L’anguille, un mystère', 'L’anguille européenne grandit dans nos rivières, mais naît et se reproduit dans la **mer des Sargasses**, près des Bermudes, à des milliers de kilomètres. Personne n’a encore observé sa reproduction dans la nature.'],
        ['Comment s’orientent-ils ?', 'Selon les espèces : le **Soleil**, les **étoiles**, le **champ magnétique** terrestre, les odeurs, les repères du paysage… Souvent, plusieurs boussoles se combinent.']
      ],
      deep: [
        '**Une boussole quantique ?** Certains oiseaux migrateurs perçoivent le champ magnétique terrestre grâce à une protéine de leur rétine, le cryptochrome. Ils « verraient » ainsi le nord.',
        '**Des records d’endurance.** La barge rousse, un oiseau limicole, a été suivie en vol sans escale de l’Alaska à la Nouvelle-Zélande : plus de 12 000 km en une dizaine de jours, sans manger ni se poser.',
        '**Des migrations menacées.** Les barrages bloquent les poissons migrateurs, la destruction des haltes (zones humides, forêts) épuise les oiseaux, et la pollution lumineuse désoriente ceux qui volent la nuit.'
      ],
      quiz: [
        { q: 'Quel animal effectue la plus longue migration connue ?', c: ['La sterne arctique', 'La baleine à bosse', 'Le gnou', 'L’hirondelle'], e: 'La sterne arctique, qui parcourt jusqu’à 70 000 km par an entre les deux pôles.' },
        { q: 'Combien de générations faut-il au papillon monarque pour boucler sa migration ?', c: ['Plusieurs', 'Une seule', 'Aucune, il ne migre pas', 'Une génération tous les dix ans'], e: 'Le voyage aller-retour s’étale sur plusieurs générations successives.' },
        { q: 'Comment le saumon retrouve-t-il sa rivière natale ?', c: ['Grâce à son odorat', 'En suivant les étoiles', 'Par hasard', 'En suivant les bateaux'], e: 'Il reconnaît l’odeur chimique propre à son cours d’eau d’origine.' },
        { q: 'Où naît l’anguille européenne ?', c: ['Dans la mer des Sargasses', 'Dans les rivières françaises', 'En Méditerranée', 'Dans la mer du Nord'], e: 'Dans la mer des Sargasses, au large des Bermudes, à des milliers de kilomètres de l’Europe.' }
      ]
    }
  ]
});

addTheme({
  id: 'ecologie', name: 'Écologie', emoji: '🌱', color: '#1ABC9C',
  d: 'Climat, biodiversité et défis de la planète.',
  lessons: [
    {
      id: 'ecologie-serre', title: 'L’effet de serre', min: 1,
      cards: [
        ['Un phénomène naturel et vital', 'Certains gaz de l’atmosphère (vapeur d’eau, CO₂, méthane…) retiennent une partie de la chaleur émise par la Terre. Sans cet **effet de serre naturel**, la température moyenne serait d’environ **–18 °C** au lieu de 15 °C.'],
        ['Un effet renforcé', 'En brûlant charbon, pétrole et gaz, et en déboisant, les activités humaines augmentent la concentration de ces gaz. L’effet de serre se renforce et le climat se réchauffe.']
      ],
      quiz: [
        { q: 'Quelle serait la température moyenne de la Terre sans effet de serre ?', c: ['Environ –18 °C', 'Environ 0 °C', 'Environ 30 °C', 'Environ –100 °C'], e: 'Environ –18 °C : l’effet de serre naturel rend la planète habitable.' },
        { q: 'Lequel de ces gaz est un gaz à effet de serre ?', c: ['Le méthane', 'L’azote', 'L’oxygène', 'L’argon'], e: 'Le méthane, comme le CO₂ et la vapeur d’eau. L’azote et l’oxygène, majoritaires dans l’air, ne le sont pas.' }
      ]
    },
    {
      id: 'ecologie-climat', title: 'Le climat en chiffres', min: 2,
      cards: [
        ['Le GIEC', 'Créé en **1988**, le **GIEC** (Groupe d’experts intergouvernemental sur l’évolution du climat) fait la synthèse des travaux scientifiques sur le climat. Il a reçu le prix Nobel de la paix en 2007.'],
        ['Déjà plus d’un degré', 'Selon le GIEC, la température moyenne mondiale a augmenté d’environ **1,1 °C** entre la fin du XIXe siècle et la décennie 2011-2020, principalement à cause des activités humaines.'],
        ['Le CO₂ grimpe', 'La concentration de CO₂ dans l’atmosphère est passée d’environ **280 ppm** avant l’ère industrielle à plus de **420 ppm** aujourd’hui, un niveau inédit depuis des centaines de milliers d’années.'],
        ['L’accord de Paris', 'Adopté lors de la **COP21** en **2015**, il vise à contenir le réchauffement « nettement en dessous de 2 °C » et à poursuivre les efforts pour le limiter à **1,5 °C**.']
      ],
      quiz: [
        { q: 'Quel organisme fait la synthèse des connaissances scientifiques sur le climat ?', c: ['Le GIEC', 'L’OMS', 'L’UNESCO', 'Le FMI'], e: 'Le GIEC, créé en 1988 sous l’égide de l’ONU.' },
        { q: 'Quel objectif fixe l’accord de Paris ?', c: ['Rester nettement sous 2 °C, et viser 1,5 °C', 'Stopper toute émission dès 2020', 'Limiter le réchauffement à 4 °C', 'Refroidir la planète de 1 °C'], e: 'Contenir le réchauffement nettement en dessous de 2 °C par rapport à l’ère préindustrielle, et viser 1,5 °C.' },
        { q: 'Quelle était la concentration de CO₂ avant l’ère industrielle ?', c: ['Environ 280 ppm', 'Environ 420 ppm', 'Environ 1 000 ppm', 'Environ 50 ppm'], e: 'Environ 280 ppm, contre plus de 420 ppm aujourd’hui.' }
      ]
    },
    {
      id: 'ecologie-biodiversite', title: 'La biodiversité en danger', min: 5,
      cards: [
        ['Qu’est-ce que la biodiversité ?', 'C’est la diversité du vivant sous toutes ses formes : les **espèces**, les **gènes** au sein d’une espèce, et les **écosystèmes** (forêts, récifs, prairies…).'],
        ['Cinq grandes extinctions', 'La Terre a connu **cinq extinctions de masse**. La plus connue, il y a **66 millions d’années**, a fait disparaître les dinosaures non aviaires après la chute d’un astéroïde au Mexique.'],
        ['Une sixième en cours ?', 'Selon le rapport de l’**IPBES** (2019), environ **un million d’espèces** animales et végétales sont menacées d’extinction. De nombreux scientifiques parlent d’une sixième extinction, cette fois causée par l’humanité.'],
        ['Cinq causes principales', 'Par ordre d’importance selon l’IPBES : la **destruction des habitats** (changement d’usage des terres et des mers), l’**exploitation directe** (pêche, chasse), le **changement climatique**, la **pollution** et les **espèces exotiques envahissantes**.'],
        ['Les pollinisateurs', 'Environ **trois quarts** des principales cultures alimentaires dépendent au moins en partie des pollinisateurs (abeilles, papillons, bourdons…), dont beaucoup déclinent.'],
        ['Des raisons d’espérer', 'Les aires protégées et les programmes de réintroduction fonctionnent : le **bouquetin des Alpes**, le **gypaète barbu** ou le **castor** ont fait leur retour dans des régions où ils avaient disparu.']
      ],
      deep: [
        '**Le dodo**, oiseau incapable de voler de l’île Maurice, a disparu à la fin du XVIIe siècle, moins d’un siècle après l’arrivée des humains et des animaux qu’ils ont introduits. Il est devenu le symbole des extinctions causées par l’homme.',
        '**Les récifs coralliens** couvrent une infime partie des océans mais abritent environ un quart des espèces marines connues. Le réchauffement de l’eau provoque leur blanchissement, qui peut mener à leur mort.',
        '**La liste rouge de l’UICN** évalue le risque d’extinction de dizaines de milliers d’espèces, classées de « préoccupation mineure » à « éteinte ». Elle sert de baromètre de l’état de la biodiversité mondiale.'
      ],
      quiz: [
        { q: 'Combien d’extinctions de masse la Terre a-t-elle connues ?', c: ['Cinq', 'Deux', 'Dix', 'Une seule'], e: 'Cinq extinctions de masse, la dernière il y a 66 millions d’années.' },
        { q: 'Combien d’espèces seraient menacées d’extinction selon l’IPBES (2019) ?', c: ['Environ un million', 'Environ mille', 'Environ cent', 'Toutes'], e: 'Environ un million d’espèces animales et végétales.' },
        { q: 'Quelle est la première cause de perte de biodiversité selon l’IPBES ?', c: ['La destruction des habitats', 'Le changement climatique', 'La pollution', 'Les volcans'], e: 'Le changement d’usage des terres et des mers (déforestation, urbanisation, agriculture intensive…).' },
        { q: 'Quelle part des grandes cultures alimentaires dépend des pollinisateurs ?', c: ['Environ trois quarts', 'Environ 5 %', 'Aucune', 'Toutes'], e: 'Environ 75 % des principales cultures en dépendent au moins partiellement.' }
      ]
    }
  ]
});

addTheme({
  id: 'jeuxvideo', name: 'Jeux vidéo', emoji: '🎮', color: '#9B59B6',
  d: 'Histoire et légendes du 10e art.',
  lessons: [
    {
      id: 'jeuxvideo-pong', title: 'Les tout premiers jeux', min: 1,
      cards: [
        ['Les précurseurs', 'En **1958**, le physicien William Higinbotham crée *Tennis for Two* sur un oscilloscope pour amuser les visiteurs de son laboratoire. En **1962**, des étudiants du MIT programment *Spacewar!*.'],
        ['Pong lance l’industrie', 'En **1972**, la société **Atari** sort *Pong*, une simple partie de ping-pong électronique. Le succès est immédiat dans les bars : l’industrie du jeu vidéo est née.']
      ],
      quiz: [
        { q: 'Quelle société a lancé Pong en 1972 ?', c: ['Atari', 'Nintendo', 'Sega', 'Sony'], e: 'Atari, fondée par Nolan Bushnell et Ted Dabney.' },
        { q: 'Sur quel appareil fonctionnait Tennis for Two en 1958 ?', c: ['Un oscilloscope', 'Une télévision', 'Un ordinateur personnel', 'Une console portable'], e: 'Un oscilloscope, un appareil de mesure électronique.' }
      ]
    },
    {
      id: 'jeuxvideo-legendes', title: 'Mario, Zelda, Pokémon et Tetris', min: 2,
      cards: [
        ['Mario', 'Il apparaît en **1981** dans *Donkey Kong* sous le nom de « Jumpman », et il est alors charpentier ! Son créateur, **Shigeru Miyamoto**, inventera aussi *The Legend of Zelda* (1986).'],
        ['Pokémon', 'Créé par **Satoshi Tajiri**, passionné de collection d’insectes dans son enfance, Pokémon sort en **1996** sur Game Boy au Japon. C’est aujourd’hui la franchise de divertissement la plus rentable au monde.'],
        ['Tetris', 'Inventé en **1984** par **Alexeï Pajitnov**, chercheur à Moscou, en pleine guerre froide. Son nom mêle « tétramino » (les pièces à quatre carrés) et « tennis », son sport préféré.'],
        ['Les consoles cultes', 'La **Game Boy** (1989), la **PlayStation** (1994), la **Wii** (2006) ou la **Switch** (2017) ont marqué des générations de joueurs.']
      ],
      quiz: [
        { q: 'Dans quel jeu Mario est-il apparu pour la première fois ?', c: ['Donkey Kong', 'Super Mario Bros.', 'Mario Kart', 'Pac-Man'], e: 'Dans *Donkey Kong* en 1981, sous le nom de Jumpman.' },
        { q: 'D’où vient l’idée de Pokémon ?', c: ['De la passion de son créateur pour la collection d’insectes', 'D’un dessin animé américain', 'D’un jeu de cartes européen', 'D’un livre pour enfants'], e: 'Satoshi Tajiri collectionnait les insectes enfant, d’où l’idée de capturer et collectionner des créatures.' },
        { q: 'Dans quel pays Tetris a-t-il été inventé ?', c: ['En URSS', 'Au Japon', 'Aux États-Unis', 'En France'], e: 'En URSS, à Moscou, par Alexeï Pajitnov en 1984.' }
      ]
    },
    {
      id: 'jeuxvideo-industrie', title: 'Le jeu vidéo, une industrie géante', min: 5,
      cards: [
        ['Plus gros que le cinéma', 'En chiffre d’affaires, l’industrie du jeu vidéo pèse aujourd’hui **plus que le cinéma et la musique enregistrée réunis**. Plus de 3 milliards de personnes jouent dans le monde.'],
        ['Minecraft, le record', 'Avec plus de **300 millions d’exemplaires** vendus, *Minecraft* (2011), créé par le Suédois Markus Persson, est le jeu vidéo le plus vendu de l’histoire.'],
        ['La France, une place forte', '**Ubisoft**, fondé en 1986 par les cinq frères Guillemot, en Bretagne, est l’un des grands éditeurs mondiaux (*Rayman*, *Assassin’s Creed*). La France compte de nombreux studios reconnus.'],
        ['L’e-sport', 'Les compétitions de jeux vidéo remplissent des stades. Les finales du championnat du monde de *League of Legends* sont suivies par des millions de spectateurs en ligne.'],
        ['Un art reconnu', 'Des musées exposent des jeux vidéo, et des créateurs comme Shigeru Miyamoto ou Michel Ancel (*Rayman*) ont été décorés en France comme chevaliers des Arts et des Lettres.']
      ],
      deep: [
        '**Le krach de 1983.** Après l’euphorie des débuts, le marché américain s’effondre, inondé de jeux de mauvaise qualité. La légende raconte qu’Atari a enterré des milliers de cartouches du jeu *E.T.* dans le désert du Nouveau-Mexique : en 2014, des fouilles l’ont confirmé.',
        '**La renaissance par Nintendo.** En 1985, la NES et *Super Mario Bros.* relancent le marché en Amérique, avec un sceau de qualité qui rassure les familles.',
        '**Jeux vidéo et cerveau.** Des études suggèrent que certains jeux d’action améliorent l’attention visuelle et la rapidité de réaction. Comme pour tout écran, tout est question d’équilibre.'
      ],
      quiz: [
        { q: 'Quel est le jeu vidéo le plus vendu de l’histoire ?', c: ['Minecraft', 'Tetris', 'Super Mario Bros.', 'Grand Theft Auto V'], e: '*Minecraft*, avec plus de 300 millions d’exemplaires vendus.' },
        { q: 'Quel grand éditeur de jeux vidéo est français ?', c: ['Ubisoft', 'Electronic Arts', 'Activision', 'Capcom'], e: 'Ubisoft, fondé en 1986 par les frères Guillemot.' },
        { q: 'L’industrie du jeu vidéo pèse plus lourd que…', c: ['Le cinéma et la musique réunis', 'Le cinéma seulement', 'La musique seulement', 'Aucune autre industrie culturelle'], e: 'Son chiffre d’affaires dépasse celui du cinéma et de la musique enregistrée réunis.' },
        { q: 'Comment appelle-t-on les compétitions de jeux vidéo ?', c: ['L’e-sport', 'Le gaming tour', 'Les jeux pixels', 'Le cybertennis'], e: 'L’e-sport, avec des joueurs professionnels et des tournois suivis par des millions de personnes.' }
      ]
    }
  ]
});

addTheme({
  id: 'architecture', name: 'Architecture', emoji: '🏰', color: '#9A7552',
  d: 'Monuments, styles et grands bâtisseurs.',
  lessons: [
    {
      id: 'architecture-roman-gothique', title: 'Roman ou gothique ?', min: 1,
      cards: [
        ['L’art roman (XIe-XIIe s.)', 'Murs **épais**, petites fenêtres, arcs en **plein cintre** (en demi-cercle) : les églises romanes sont massives et sombres, comme des forteresses de la foi.'],
        ['L’art gothique (XIIe-XVIe s.)', 'Grâce à l’**arc brisé**, à la voûte sur **croisée d’ogives** et aux **arcs-boutants**, les murs s’allègent et s’ouvrent à de grands **vitraux**. La basilique de Saint-Denis, rebâtie vers 1140, en est le berceau.']
      ],
      quiz: [
        { q: 'Quelle forme d’arc caractérise l’art roman ?', c: ['L’arc en plein cintre', 'L’arc brisé', 'L’arc outrepassé', 'L’arc en accolade'], e: 'L’arc en plein cintre, en demi-cercle. L’arc brisé est typique du gothique.' },
        { q: 'Quel élément permet aux cathédrales gothiques d’avoir de grands vitraux ?', c: ['Les arcs-boutants', 'Les murs épais', 'Les colonnes doriques', 'Les coupoles'], e: 'Les arcs-boutants reportent le poids des voûtes à l’extérieur, ce qui permet d’ouvrir les murs.' }
      ]
    },
    {
      id: 'architecture-eiffel', title: 'La tour Eiffel', min: 2,
      cards: [
        ['Pour l’Exposition de 1889', 'La tour est construite pour l’**Exposition universelle de 1889**, qui célèbre le centenaire de la Révolution. Elle est bâtie en un peu plus de deux ans.'],
        ['Qui l’a conçue ?', 'Elle porte le nom de **Gustave Eiffel**, dont l’entreprise la construit, mais l’idée première vient de deux de ses ingénieurs, Maurice Koechlin et Émile Nouguier.'],
        ['Détestée puis adorée', 'En 1887, des artistes publient une protestation contre cette « tour inutile et monstrueuse ». Elle ne devait rester que **20 ans** : elle est sauvée grâce à son utilité pour la **radio**.'],
        ['Quelques chiffres', 'Elle mesure environ **330 m** avec ses antennes et compte environ 18 000 pièces métalliques. Elle est repeinte environ tous les 7 ans, ce qui demande une soixantaine de tonnes de peinture.']
      ],
      quiz: [
        { q: 'Pour quel événement la tour Eiffel a-t-elle été construite ?', c: ['L’Exposition universelle de 1889', 'Les Jeux olympiques de 1900', 'Le couronnement de Napoléon III', 'La fin de la Première Guerre mondiale'], e: 'L’Exposition universelle de 1889, pour le centenaire de la Révolution française.' },
        { q: 'Combien de temps la tour devait-elle rester debout à l’origine ?', c: ['20 ans', '1 an', '100 ans', 'Pour toujours'], e: '20 ans. Son rôle d’antenne pour la radio et les transmissions militaires l’a sauvée.' },
        { q: 'À qui doit-on l’idée première de la tour ?', c: ['Aux ingénieurs Koechlin et Nouguier', 'À Napoléon III', 'Au baron Haussmann', 'À Victor Hugo'], e: 'Maurice Koechlin et Émile Nouguier, ingénieurs de l’entreprise Eiffel.' }
      ]
    },
    {
      id: 'architecture-architectes', title: 'Les grands architectes', min: 5,
      cards: [
        ['Vauban', 'Ingénieur militaire de Louis XIV, **Vauban** (1633-1707) fortifie les frontières françaises avec des citadelles en étoile. Douze de ses sites sont inscrits au patrimoine mondial de l’UNESCO.'],
        ['Haussmann', 'Préfet sous **Napoléon III**, le baron **Haussmann** transforme Paris entre 1853 et 1870 : larges boulevards, immeubles en pierre de taille alignés, parcs, égouts. Le Paris d’aujourd’hui lui doit beaucoup.'],
        ['Gaudí', 'À Barcelone, **Antoni Gaudí** imagine des bâtiments aux formes inspirées de la nature. Commencée en 1882, la **Sagrada Família** est toujours en construction.'],
        ['Le Corbusier', 'Pionnier de l’architecture moderne, **Le Corbusier** défend le béton, les pilotis et les toits-terrasses. Sa **Cité radieuse** de Marseille (1952) est un immeuble conçu comme un village vertical.'],
        ['Pei et la pyramide', 'En **1989**, l’architecte sino-américain **Ieoh Ming Pei** inaugure la **pyramide du Louvre**. D’abord très critiquée, elle est devenue un symbole de Paris.'],
        ['Zaha Hadid', 'L’architecte irako-britannique **Zaha Hadid**, célèbre pour ses courbes audacieuses, devient en **2004** la première femme à recevoir le prix **Pritzker**, considéré comme le « Nobel de l’architecture ».']
      ],
      deep: [
        '**Les « cinq points » de Le Corbusier** : pilotis, toit-terrasse, plan libre, fenêtre en bandeau et façade libre. Ils résument l’architecture moderne qu’il défendait, rendue possible par le béton armé.',
        '**Les grands travaux parisiens.** Après Haussmann, d’autres présidents ont marqué Paris : le Centre Pompidou (Renzo Piano et Richard Rogers, 1977), la Grande Arche de la Défense (1989) ou la Bibliothèque nationale de France (Dominique Perrault, 1996).',
        '**Le plus haut gratte-ciel**, la Burj Khalifa à Dubaï, culmine à 828 m depuis 2010. Le premier gratte-ciel est souvent situé à Chicago, avec le Home Insurance Building (1885), et ses… 10 étages.'
      ],
      quiz: [
        { q: 'Quel architecte a transformé Paris sous Napoléon III ?', c: ['Le baron Haussmann', 'Vauban', 'Le Corbusier', 'Gustave Eiffel'], e: 'Le baron Haussmann, préfet de la Seine de 1853 à 1870.' },
        { q: 'Quel monument de Gaudí est toujours en construction ?', c: ['La Sagrada Família', 'La Casa Batlló', 'Le parc Güell', 'La Pedrera'], e: 'La Sagrada Família, à Barcelone, commencée en 1882.' },
        { q: 'Qui a conçu la pyramide du Louvre ?', c: ['Ieoh Ming Pei', 'Jean Nouvel', 'Renzo Piano', 'Frank Gehry'], e: 'Ieoh Ming Pei, architecte sino-américain, en 1989.' },
        { q: 'Qui a été la première femme à recevoir le prix Pritzker ?', c: ['Zaha Hadid', 'Charlotte Perriand', 'Odile Decq', 'Kazuyo Sejima'], e: 'Zaha Hadid, en 2004. Kazuyo Sejima l’a reçu en 2010, avec Ryue Nishizawa.' }
      ]
    }
  ]
});
