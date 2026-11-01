/*
 * Contenu pédagogique de l'application.
 * Chaque thème contient des leçons. Chaque leçon :
 *   id, title, min (durée : 1, 2 ou 5 minutes),
 *   cards : [titre, texte] (le texte accepte **gras** et *italique*),
 *   deep  : paragraphes facultatifs « Pour aller plus loin »,
 *   quiz  : { q, c: [bonne réponse, ...leurres], e: explication }
 *           La bonne réponse est toujours la première : l'ordre est mélangé à l'affichage.
 */
const THEMES = [
  {
    id: 'histoire', name: 'Histoire', emoji: '🏛️', color: '#E07A5F',
    d: 'Les grands tournants qui ont façonné le monde.',
    lessons: [
      {
        id: 'histoire-berlin', title: 'La chute du mur de Berlin', min: 2,
        cards: [
          ['Un mur en pleine ville', 'Dans la nuit du **13 août 1961**, la RDA (Allemagne de l’Est) commence à ériger un mur autour de Berlin-Ouest pour stopper l’exode de ses habitants : près de 3 millions de personnes avaient fui vers l’Ouest depuis 1949.'],
          ['Le « rideau de fer » en béton', 'Le mur s’étend sur environ **155 km**, doublé d’un « no man’s land » surveillé par des miradors. Au moins 140 personnes y perdent la vie en tentant de le franchir.'],
          ['Une annonce de travers', 'Le **9 novembre 1989**, le porte-parole Günter Schabowski annonce par erreur, en pleine conférence de presse, que les Allemands de l’Est peuvent voyager librement, « immédiatement ». Des milliers de Berlinois se ruent aux postes-frontières, qui finissent par s’ouvrir dans la nuit.'],
          ['Et ensuite ?', 'Moins d’un an plus tard, le **3 octobre 1990**, l’Allemagne est réunifiée. Cette date est aujourd’hui la fête nationale allemande.']
        ],
        deep: [
          '**Un contexte qui bouge.** Arrivé au pouvoir en URSS en 1985, Mikhaïl Gorbatchev lance la *glasnost* (transparence) et la *perestroïka* (restructuration). Surtout, il fait comprendre que Moscou n’interviendra plus militairement pour sauver les régimes communistes d’Europe de l’Est.',
          '**Les premières fissures.** En mai 1989, la Hongrie commence à démanteler les barbelés à sa frontière avec l’Autriche. Le 19 août, lors du « pique-nique paneuropéen », des centaines d’Allemands de l’Est passent à l’Ouest. À l’automne, les « manifestations du lundi » à Leipzig rassemblent des dizaines de milliers de personnes ; le dirigeant Erich Honecker démissionne le 18 octobre.',
          '**La conférence du 9 novembre.** Schabowski lit une note sur un nouveau règlement de voyage qu’il n’a pas eu le temps d’étudier. Quand un journaliste demande à partir de quand il s’applique, il hésite puis répond : « À ma connaissance… immédiatement. » La nouvelle passe à la télévision ouest-allemande, captée à l’Est, et la foule afflue.',
          '**L’onde de choc.** La chute du mur entraîne celle des régimes communistes voisins, puis la dissolution de l’URSS en décembre 1991. Elle symbolise la fin de la guerre froide.'
        ],
        quiz: [
          { q: 'En quelle année le mur de Berlin est-il tombé ?', c: ['1989', '1991', '1985', '1961'], e: 'Le mur est tombé dans la nuit du 9 au 10 novembre 1989, après 28 ans d’existence. 1961 est l’année de sa construction.' },
          { q: 'Qui a annoncé par erreur l’ouverture des frontières ?', c: ['Günter Schabowski', 'Erich Honecker', 'Mikhaïl Gorbatchev', 'Helmut Kohl'], e: 'Schabowski, porte-parole du régime est-allemand, lisait une note qu’il n’avait pas bien étudiée et a répondu « immédiatement » à un journaliste.' },
          { q: 'Quand l’Allemagne a-t-elle été réunifiée ?', c: ['Le 3 octobre 1990', 'Le 9 novembre 1989', 'Le 1er janvier 1992', 'Le 8 mai 1990'], e: 'La réunification a eu lieu le 3 octobre 1990, moins d’un an après la chute du mur. C’est la fête nationale allemande.' }
        ]
      },
      {
        id: 'histoire-revolution', title: 'La Révolution française en 6 dates', min: 5,
        cards: [
          ['Les États généraux', 'Le **5 mai 1789**, Louis XVI réunit à Versailles les États généraux (clergé, noblesse, tiers état) pour résoudre une grave crise financière. Le tiers état, qui représente environ 98 % de la population, se proclame **Assemblée nationale** le 17 juin.'],
          ['Le serment du Jeu de paume', 'Le **20 juin 1789**, les députés réunis dans une salle de jeu de paume jurent de ne pas se séparer avant d’avoir donné une Constitution à la France.'],
          ['La prise de la Bastille', 'Le **14 juillet 1789**, les Parisiens prennent la Bastille, forteresse-prison symbole de l’arbitraire royal. Elle ne contenait alors que **7 prisonniers** !'],
          ['La nuit du 4 août et la Déclaration', 'Le **4 août 1789**, les privilèges sont abolis. Le **26 août**, l’Assemblée adopte la **Déclaration des droits de l’homme et du citoyen** : « Les hommes naissent et demeurent libres et égaux en droits. »'],
          ['De la monarchie à la République', 'La royauté est abolie le **21 septembre 1792** et la Ire République proclamée. Louis XVI est guillotiné le **21 janvier 1793**.'],
          ['La Terreur, puis Bonaparte', 'En 1793-1794, la Terreur fait des dizaines de milliers de victimes. Robespierre est exécuté en juillet 1794. En **1799**, le coup d’État du **18 Brumaire** porte Napoléon Bonaparte au pouvoir.']
        ],
        deep: [
          '**Un nouveau calendrier.** Adopté en 1793, le calendrier républicain fait commencer l’an I le 22 septembre 1792. Les mois portent des noms poétiques inventés par Fabre d’Églantine selon les saisons : vendémiaire (vendanges), brumaire (brumes), thermidor (chaleur)… Il est abandonné au 1er janvier 1806.',
          '**Le mètre et les départements.** La Révolution veut unifier le pays. En 1790, la France est découpée en 83 départements. En 1791, le mètre est défini comme la dix-millionième partie du quart du méridien terrestre : le système métrique est né, il s’imposera dans presque le monde entier.',
          '**Pourquoi le 14 juillet ?** La fête nationale est instituée en 1880. Elle célèbre officiellement autant la prise de la Bastille (1789) que la fête de la Fédération du 14 juillet 1790, grande fête d’unité nationale, moins violente et donc plus consensuelle.'
        ],
        quiz: [
          { q: 'Que commémore la fête nationale du 14 juillet ?', c: ['La prise de la Bastille et la fête de la Fédération', 'L’exécution de Louis XVI', 'La Déclaration des droits de l’homme', 'La proclamation de la République'], e: 'Depuis 1880, le 14 juillet célèbre à la fois la prise de la Bastille (1789) et la fête de la Fédération (14 juillet 1790).' },
          { q: 'Combien de prisonniers se trouvaient à la Bastille le 14 juillet 1789 ?', c: ['7', 'Plus de 300', 'Aucun', '52'], e: 'Seulement 7 prisonniers ! La Bastille était surtout un symbole du pouvoir arbitraire du roi… et un dépôt de poudre.' },
          { q: 'Quel jour les privilèges ont-ils été abolis ?', c: ['Le 4 août 1789', 'Le 14 juillet 1789', 'Le 21 janvier 1793', 'Le 5 mai 1789'], e: 'Lors de la célèbre « nuit du 4 août » 1789, l’Assemblée abolit les privilèges féodaux.' },
          { q: 'Quel événement porte Bonaparte au pouvoir en 1799 ?', c: ['Le coup d’État du 18 Brumaire', 'Le serment du Jeu de paume', 'La bataille d’Austerlitz', 'Le sacre à Notre-Dame'], e: 'Le 18 Brumaire an VIII (9 novembre 1799), Bonaparte renverse le Directoire. Le sacre n’aura lieu qu’en 1804.' }
        ]
      }
    ]
  },
  {
    id: 'sciences', name: 'Sciences', emoji: '🔬', color: '#3D9970',
    d: 'Comprendre le monde qui nous entoure.',
    lessons: [
      {
        id: 'sciences-ciel', title: 'Pourquoi le ciel est-il bleu ?', min: 1,
        cards: [
          ['La lumière blanche est un mélange', 'La lumière du Soleil contient toutes les couleurs. En traversant l’atmosphère, elle rencontre des molécules d’azote et d’oxygène qui la **diffusent** dans toutes les directions.'],
          ['Le bleu est dispersé bien plus que le rouge', 'C’est la **diffusion Rayleigh** : plus la longueur d’onde est courte, plus la lumière est diffusée. Le bleu l’est environ **5 fois plus** que le rouge, et le ciel entier semble éclairé en bleu. Au coucher du soleil, la lumière traverse beaucoup plus d’atmosphère : le bleu est dispersé en chemin, il reste les oranges et les rouges.']
        ],
        deep: [
          '**Et pourquoi pas violet ?** Le violet est encore plus diffusé que le bleu. Mais le Soleil en émet moins, une partie est absorbée en haute atmosphère, et surtout nos yeux y sont peu sensibles. Résultat : notre cerveau perçoit un bleu ciel.',
          '**Les nuages sont blancs** parce que leurs gouttelettes, bien plus grosses que les molécules d’air, diffusent toutes les couleurs à peu près de la même façon (diffusion de Mie). Le mélange de toutes les couleurs donne du blanc.',
          '**Sur Mars, c’est l’inverse !** Les fines poussières en suspension donnent au ciel martien une teinte ocre le jour… et des couchers de soleil bleutés.'
        ],
        quiz: [
          { q: 'Comment s’appelle le phénomène qui rend le ciel bleu ?', c: ['La diffusion Rayleigh', 'L’effet Doppler', 'La réfraction', 'L’effet photoélectrique'], e: 'La diffusion Rayleigh, décrite par Lord Rayleigh au XIXe siècle : les courtes longueurs d’onde (bleu) sont bien plus diffusées par les molécules de l’air.' },
          { q: 'Pourquoi le ciel est-il rouge-orangé au coucher du soleil ?', c: ['La lumière traverse plus d’atmosphère et le bleu est dispersé en chemin', 'Le Soleil refroidit le soir', 'La pollution colore le ciel en rouge', 'La Terre réfléchit la couleur des océans'], e: 'Quand le Soleil est bas, sa lumière parcourt une plus grande épaisseur d’air : le bleu est diffusé avant de nous parvenir, il reste surtout les teintes chaudes.' }
        ]
      },
      {
        id: 'sciences-adn', title: 'L’ADN en 2 minutes', min: 2,
        cards: [
          ['Le mode d’emploi du vivant', 'L’**ADN** (acide désoxyribonucléique) contient les instructions pour fabriquer et faire fonctionner un être vivant. On le trouve dans le noyau de presque chacune de nos cellules.'],
          ['Un alphabet de 4 lettres', 'Son code repose sur 4 bases : **A** (adénine), **T** (thymine), **G** (guanine) et **C** (cytosine). Elles s’apparient toujours de la même façon : A avec T, G avec C.'],
          ['La double hélice', 'Sa structure en double hélice est décrite en **1953** par Watson et Crick, grâce notamment à la « photo 51 » obtenue par **Rosalind Franklin**, longtemps oubliée.'],
          ['Quelques chiffres', 'Le génome humain compte environ **3 milliards** de paires de bases et autour de **20 000 gènes**. Déroulé, l’ADN d’une seule cellule mesurerait près de **2 mètres** !']
        ],
        deep: [
          '**Seule une petite partie code des protéines.** Les gènes qui codent des protéines ne représentent qu’environ 1 à 2 % du génome. Le reste, longtemps qualifié d’« ADN poubelle », joue en réalité souvent un rôle de régulation.',
          '**Tous cousins.** Deux êtres humains partagent environ 99,9 % de leur ADN. Avec le chimpanzé, notre plus proche parent, la similarité est d’environ 98 à 99 %.',
          '**Lire et réécrire.** Le Projet génome humain publie une séquence quasi complète en 2003 (la version vraiment complète arrive en 2022). En 2020, Emmanuelle Charpentier et Jennifer Doudna reçoivent le prix Nobel de chimie pour CRISPR-Cas9, des « ciseaux moléculaires » capables de modifier l’ADN avec précision.'
        ],
        quiz: [
          { q: 'Avec quelle base l’adénine (A) s’apparie-t-elle ?', c: ['La thymine (T)', 'La guanine (G)', 'La cytosine (C)', 'L’uracile (U)'], e: 'A s’apparie avec T, et G avec C. L’uracile remplace la thymine dans l’ARN, pas dans l’ADN.' },
          { q: 'Quelle scientifique a obtenu la célèbre « photo 51 » de l’ADN ?', c: ['Rosalind Franklin', 'Marie Curie', 'Ada Lovelace', 'Barbara McClintock'], e: 'Rosalind Franklin a obtenu ce cliché par diffraction des rayons X. Il a été décisif pour Watson et Crick, mais son rôle a longtemps été minimisé.' },
          { q: 'Combien de gènes environ compte le génome humain ?', c: ['Environ 20 000', 'Environ 200', 'Environ 3 milliards', 'Environ 1 million'], e: 'Environ 20 000 gènes. Les 3 milliards correspondent aux paires de bases, pas aux gènes.' }
        ]
      }
    ]
  },
  {
    id: 'art', name: 'Art', emoji: '🎨', color: '#C44569',
    d: 'Chefs-d’œuvre, artistes et grands mouvements.',
    lessons: [
      {
        id: 'art-joconde', title: 'Les secrets de la Joconde', min: 2,
        cards: [
          ['Un portrait mystérieux', 'Peinte par **Léonard de Vinci** entre 1503 et 1519 environ, la Joconde représenterait **Lisa Gherardini**, épouse du marchand florentin Francesco del Giocondo, d’où son nom.'],
          ['Plus petite qu’on ne le croit', 'Le tableau ne mesure que **77 × 53 cm**. Il est peint à l’huile sur un panneau de bois de **peuplier**, et non sur toile.'],
          ['Le sfumato', 'Léonard utilise le **sfumato** : des couches de glacis très fines qui estompent les contours, comme une fumée. C’est ce flou qui rend le sourire si insaisissable.'],
          ['Le vol de 1911', 'Le **21 août 1911**, la Joconde est volée au Louvre par Vincenzo Peruggia, un vitrier italien. Retrouvée à Florence en **1913**, elle revient au Louvre auréolée d’une célébrité mondiale.']
        ],
        deep: [
          '**Comment est-elle arrivée en France ?** Invité par François Ier, Léonard s’installe en 1516 au Clos Lucé, près d’Amboise, avec quelques tableaux dont la Joconde. Il y meurt en 1519 et le roi acquiert l’œuvre. Elle passe par Fontainebleau et Versailles ; Napoléon l’accroche même un temps dans sa chambre aux Tuileries.',
          '**Un vol qui a tout changé.** Avant 1911, la Joconde était admirée des connaisseurs sans être une star. Le vol fait la une des journaux du monde entier. Le poète Guillaume Apollinaire est brièvement incarcéré, et Picasso interrogé ! Peruggia, qui avait passé une nuit caché au musée, est arrêté en voulant vendre le tableau à Florence.',
          '**Sous haute protection.** Après une attaque à l’acide en 1956, elle est placée derrière une vitre. Elle est aujourd’hui protégée par un verre blindé, dans une vitrine climatisée.'
        ],
        quiz: [
          { q: 'Sur quel support est peinte la Joconde ?', c: ['Un panneau de bois de peuplier', 'Une toile de lin', 'Une fresque murale', 'Une plaque de cuivre'], e: 'Elle est peinte à l’huile sur un panneau de peuplier, un support courant en Italie à la Renaissance.' },
          { q: 'Comment s’appelle la technique de contours estompés utilisée par Léonard ?', c: ['Le sfumato', 'Le clair-obscur', 'Le pointillisme', 'La perspective cavalière'], e: 'Le sfumato (de l’italien *fumo*, fumée) adoucit les transitions entre les zones claires et sombres.' },
          { q: 'En quelle année la Joconde a-t-elle été volée ?', c: ['1911', '1789', '1940', '1968'], e: 'Elle a été volée le 21 août 1911 et retrouvée en 1913 à Florence.' }
        ]
      },
      {
        id: 'art-mouvements', title: 'Les grands mouvements de la peinture', min: 5,
        cards: [
          ['Renaissance (XVe-XVIe s.)', 'Redécouverte de l’Antiquité, perspective, anatomie : l’homme au centre. **Léonard de Vinci, Michel-Ange, Raphaël, Botticelli**.'],
          ['Baroque (XVIIe s.)', 'Mouvement, émotion, contrastes puissants d’ombre et de lumière (clair-obscur). **Caravage, Rubens, Rembrandt**.'],
          ['Romantisme (début XIXe s.)', 'Passion, nature sauvage, exaltation de l’individu. **Delacroix** peint *La Liberté guidant le peuple* en 1830.'],
          ['Impressionnisme (1870-1890)', 'Peindre en plein air, saisir la lumière et l’instant. Le nom vient d’un critique moqueur face à *Impression, soleil levant* de **Monet**. Aussi : Renoir, Degas, Pissarro, Berthe Morisot.'],
          ['Cubisme (1907-1914)', 'On décompose les objets en formes géométriques, vus sous plusieurs angles à la fois. **Picasso** et **Braque** ; *Les Demoiselles d’Avignon* (1907).'],
          ['Surréalisme (années 1920-1930)', 'Le rêve et l’inconscient prennent le pouvoir. André Breton publie le *Manifeste du surréalisme* en 1924. **Dalí, Magritte, Max Ernst**.']
        ],
        deep: [
          '**La naissance d’un nom.** En 1874, un groupe de peintres refusés par le Salon officiel expose dans l’ancien atelier du photographe Nadar. Le critique Louis Leroy, dans *Le Charivari*, titre ironiquement son article « L’exposition des impressionnistes », d’après le tableau de Monet. Le groupe adopte le nom.',
          '**Après l’impressionnisme.** Les postimpressionnistes poussent plus loin : Van Gogh et ses couleurs expressives, Gauguin et ses aplats, Seurat et le pointillisme, Cézanne, souvent considéré comme le père de l’art moderne.',
          '**Les fauves.** Au Salon d’automne de 1905, Matisse et Derain exposent des toiles aux couleurs pures et violentes. Le critique Louis Vauxcelles parle d’une « cage aux fauves » : le fauvisme est né.',
          '**Vers l’abstraction et au-delà.** Vers 1910, Kandinsky peint parmi les premières œuvres abstraites. Dans les années 1950-1960, le pop art d’Andy Warhol s’empare des images de la publicité et de la culture de masse.'
        ],
        quiz: [
          { q: 'Quel tableau a donné son nom à l’impressionnisme ?', c: ['Impression, soleil levant (Monet)', 'Le Déjeuner sur l’herbe (Manet)', 'Les Nymphéas (Monet)', 'Bal du moulin de la Galette (Renoir)'], e: 'C’est *Impression, soleil levant* de Monet (1872), raillé par le critique Louis Leroy en 1874.' },
          { q: 'Quel peintre est associé au baroque et au clair-obscur ?', c: ['Caravage', 'Monet', 'Magritte', 'Botticelli'], e: 'Caravage est le maître du clair-obscur : des personnages surgissant de l’ombre sous une lumière dramatique.' },
          { q: 'Qui a cofondé le cubisme avec Picasso ?', c: ['Georges Braque', 'Salvador Dalí', 'Henri Matisse', 'Claude Monet'], e: 'Picasso et Braque ont inventé le cubisme ensemble à partir de 1907-1908.' },
          { q: 'Qui a peint La Liberté guidant le peuple ?', c: ['Eugène Delacroix', 'Jacques-Louis David', 'Gustave Courbet', 'Édouard Manet'], e: 'Delacroix l’a peinte en 1830, en hommage aux Trois Glorieuses. C’est une icône du romantisme.' }
        ]
      }
    ]
  },
  {
    id: 'cinema', name: 'Cinéma', emoji: '🎬', color: '#2C3E50',
    d: 'Le 7e art, de ses débuts à ses techniques.',
    lessons: [
      {
        id: 'cinema-lumiere', title: 'Les frères Lumière', min: 1,
        cards: [
          ['La première séance', 'Le **28 décembre 1895**, au Salon indien du Grand Café, à Paris, Louis et Auguste Lumière organisent la première projection publique et payante de films. Une trentaine de spectateurs découvrent une dizaine de films de moins d’une minute.'],
          ['Le cinématographe', 'Leur appareil, le **cinématographe**, sert à la fois de caméra, de tireuse et de projecteur. Au programme : *La Sortie de l’usine Lumière à Lyon*. La légende veut que *L’Arrivée d’un train en gare de La Ciotat* ait fait fuir les spectateurs… sans doute très exagérée !']
        ],
        deep: [
          '**Edison avant eux.** Aux États-Unis, Thomas Edison avait mis au point le kinétoscope : une boîte dans laquelle une seule personne à la fois regardait un film. L’idée géniale des Lumière : projeter sur grand écran pour une salle entière.',
          '**Méliès, le magicien.** Georges Méliès, illusionniste, assiste à la séance de 1895. Il devient le pionnier des effets spéciaux et du cinéma de fiction, avec *Le Voyage dans la Lune* (1902) et sa fusée plantée dans l’œil de la Lune.',
          '**Le parlant.** Il faut attendre 1927 et *Le Chanteur de jazz* pour que le cinéma parlant s’impose. Beaucoup de stars du muet, à la voix jugée peu adaptée, voient alors leur carrière s’arrêter.'
        ],
        quiz: [
          { q: 'Quand a eu lieu la première projection publique et payante des frères Lumière ?', c: ['Le 28 décembre 1895', 'Le 14 juillet 1889', 'Le 1er janvier 1900', 'Le 10 mai 1927'], e: 'Le 28 décembre 1895, au Salon indien du Grand Café, boulevard des Capucines à Paris.' },
          { q: 'Comment s’appelait l’appareil des frères Lumière ?', c: ['Le cinématographe', 'Le kinétoscope', 'Le phonographe', 'Le praxinoscope'], e: 'Le cinématographe. Le kinétoscope est l’appareil d’Edison, qui ne permettait qu’à une personne à la fois de regarder.' }
        ]
      },
      {
        id: 'cinema-langage', title: 'Le langage du cinéma', min: 2,
        cards: [
          ['Le plan-séquence', 'Une scène entière filmée en **une seule prise**, sans coupe. Exemples célèbres : l’ouverture de *La Soif du mal* (Orson Welles, 1958) ou *1917* de Sam Mendes, conçu pour paraître tourné d’un seul tenant.'],
          ['Plongée et contre-plongée', 'Filmer de haut (**plongée**) écrase un personnage, le rend vulnérable. Filmer d’en bas (**contre-plongée**) le grandit, le rend puissant ou menaçant.'],
          ['Champ / contrechamp', 'La base d’un dialogue : on alterne la caméra entre deux personnages qui se font face.'],
          ['L’effet Koulechov', 'Dans les années 1920, le cinéaste soviétique **Lev Koulechov** montre qu’un même visage neutre semble exprimer la faim, le chagrin ou le désir selon l’image qui le suit. Le **montage** crée le sens !']
        ],
        quiz: [
          { q: 'Qu’est-ce qu’un plan-séquence ?', c: ['Une scène filmée en une seule prise, sans coupe', 'Une suite de plans très courts', 'Un plan filmé depuis le ciel', 'Le premier plan d’un film'], e: 'Le plan-séquence filme toute une action en continu, sans montage, ce qui demande une chorégraphie très précise.' },
          { q: 'Quel effet produit une contre-plongée ?', c: ['Elle grandit le personnage, le rend puissant', 'Elle écrase le personnage', 'Elle floute l’arrière-plan', 'Elle accélère l’action'], e: 'Filmé d’en bas, un personnage paraît dominant. La plongée (filmé d’en haut) produit l’effet inverse.' },
          { q: 'Que démontre l’effet Koulechov ?', c: ['Le montage donne son sens à une image', 'La couleur influence les émotions', 'Le son compte plus que l’image', 'Les acteurs doivent surjouer'], e: 'Le spectateur interprète une image en fonction de celle qui la précède ou la suit : c’est la puissance du montage.' }
        ]
      }
    ]
  },
  {
    id: 'vocabulaire', name: 'Vocabulaire', emoji: '📖', color: '#8E44AD',
    d: 'Des mots rares, justes et savoureux.',
    lessons: [
      {
        id: 'vocabulaire-rares', title: 'Mots rares pour briller', min: 2,
        cards: [
          ['Sérendipité', 'Le fait de faire une **découverte heureuse par hasard**, en cherchant autre chose. La pénicilline, découverte par Fleming en 1928 sur une culture contaminée, en est l’exemple parfait.'],
          ['Pétrichor', 'L’**odeur de la terre après la pluie**, quand elle tombe sur un sol sec. Mot forgé en 1964 par deux chercheurs australiens.'],
          ['Ultracrépidarianisme', 'Le fait de **donner son avis sur des sujets qu’on ne connaît pas**. Il vient d’une phrase latine attribuée au peintre grec Apelle, lancée à un cordonnier qui critiquait son tableau : « Cordonnier, pas plus haut que la chaussure ! »'],
          ['Atermoyer', '**Remettre à plus tard**, chercher à gagner du temps. Un synonyme élégant de procrastiner.']
        ],
        deep: [
          '**Psittacisme** : répéter des mots ou des idées comme un perroquet, sans les comprendre (du grec *psittakos*, perroquet).',
          '**Thuriféraire** : à l’origine, celui qui porte l’encensoir à l’église. Au figuré, un flatteur, un admirateur zélé : « les thuriféraires du ministre ».',
          '**Logorrhée** : flot de paroles intarissable et souvent désordonné. **Vergogne** : la honte, la pudeur ; on ne l’emploie presque plus que dans « sans vergogne ».',
          '**Sérendipité, l’histoire du mot.** Il vient de l’anglais *serendipity*, inventé en 1754 par l’écrivain Horace Walpole d’après un conte persan, *Les Trois Princes de Serendip* (ancien nom du Sri Lanka), dont les héros font sans cesse des découvertes inattendues.'
        ],
        quiz: [
          { q: 'Que signifie « sérendipité » ?', c: ['Faire une découverte heureuse par hasard', 'Être d’une grande sérénité', 'Avoir une excellente mémoire', 'Savoir garder un secret'], e: 'La sérendipité, c’est trouver par hasard quelque chose qu’on ne cherchait pas, comme Fleming avec la pénicilline.' },
          { q: 'Comment appelle-t-on l’odeur de la terre après la pluie ?', c: ['Le pétrichor', 'Le zéphyr', 'L’embrun', 'Le serein'], e: 'Le pétrichor. Le zéphyr est un vent doux, l’embrun une poussière d’eau de mer et le serein l’humidité du soir.' },
          { q: 'Que fait quelqu’un qui atermoie ?', c: ['Il remet à plus tard', 'Il se met en colère', 'Il exagère', 'Il se plaint sans cesse'], e: 'Atermoyer, c’est différer, chercher des délais, gagner du temps.' }
        ]
      },
      {
        id: 'vocabulaire-pieges', title: 'Mots souvent mal employés', min: 2,
        cards: [
          ['Achalandé', 'Un magasin **bien achalandé** a, au sens strict, beaucoup de **clients** (les chalands), pas forcément beaucoup de marchandises ! Le sens « bien approvisionné » est courant mais critiqué.'],
          ['Compendieusement', 'Signifie « **en abrégé, brièvement** », et non « longuement », comme sa longueur le laisse croire.'],
          ['Véniel ≠ vénal', '**Véniel** : sans gravité (un péché véniel). **Vénal** : qui se laisse acheter, intéressé par l’argent.'],
          ['Émérite', 'Au sens premier, un professeur **émérite** a pris sa retraite tout en gardant son titre honorifique. Le sens « très compétent » est aujourd’hui admis, mais c’est un glissement.']
        ],
        quiz: [
          { q: 'Un magasin « bien achalandé », au sens strict, c’est un magasin…', c: ['Qui a beaucoup de clients', 'Qui a beaucoup de stock', 'Qui est bien éclairé', 'Qui est bien situé'], e: 'Achalandé vient de « chaland », le client. Le sens « bien fourni » est entré dans l’usage mais reste critiqué.' },
          { q: 'Que signifie « compendieusement » ?', c: ['Brièvement, en abrégé', 'Longuement, en détail', 'Avec compassion', 'De façon compliquée'], e: 'Il vient du latin *compendium*, abrégé. Un piège classique, car le mot est très long !' },
          { q: 'Une faute vénielle est une faute…', c: ['Sans gravité', 'Liée à l’argent', 'Impardonnable', 'Commise par vengeance'], e: 'Véniel signifie pardonnable, léger. Ne pas confondre avec vénal (qui se laisse acheter).' }
        ]
      }
    ]
  },
  {
    id: 'funfacts', name: 'Fun facts', emoji: '🤯', color: '#F39C12',
    d: 'Des anecdotes étonnantes à ressortir au dîner.',
    lessons: [
      {
        id: 'funfacts-animaux', title: 'Le règne animal est bizarre', min: 1,
        cards: [
          ['Trois cœurs et du sang bleu', 'La **pieuvre** possède trois cœurs et un sang bleu, grâce à l’hémocyanine, une protéine à base de cuivre (et non de fer comme notre hémoglobine).'],
          ['Des crottes cubiques', 'Le **wombat**, un marsupial australien, produit des excréments en forme de **cubes**, qu’il dépose bien en vue pour marquer son territoire.'],
          ['La banane est une baie… pas la fraise', 'En botanique, la banane, la tomate et même l’aubergine sont des **baies**. La fraise, elle, est un « faux fruit » : les vrais fruits sont les petits grains à sa surface (les akènes).']
        ],
        quiz: [
          { q: 'Combien de cœurs possède une pieuvre ?', c: ['3', '1', '2', '8'], e: 'Trois cœurs : deux pompent le sang vers les branchies, le troisième vers le reste du corps.' },
          { q: 'Lequel de ces fruits est une baie au sens botanique ?', c: ['La banane', 'La fraise', 'La framboise', 'La cerise'], e: 'La banane est une baie. La fraise est un faux fruit, la framboise un assemblage de petites drupes et la cerise une drupe (fruit à noyau).' }
        ]
      },
      {
        id: 'funfacts-idees-recues', title: 'Idées reçues… et fausses', min: 2,
        cards: [
          ['La Grande Muraille visible de l’espace ?', '**Faux.** Elle est très longue mais étroite (quelques mètres) : on ne la distingue pas à l’œil nu depuis l’orbite, et encore moins depuis la Lune.'],
          ['Les Vikings et leurs casques à cornes', '**Faux.** Aucun casque viking à cornes n’a été retrouvé. Cette image vient surtout des costumes des opéras de Wagner, au XIXe siècle.'],
          ['Napoléon était petit', '**Faux.** Il mesurait environ **1,69 m**, dans la moyenne de l’époque. La confusion vient notamment de la différence entre pouces français et anglais… et de la propagande britannique.'],
          ['On n’utilise que 10 % de notre cerveau', '**Faux.** L’imagerie cérébrale montre que toutes les zones du cerveau sont utilisées, même si elles ne sont pas toutes actives en même temps.']
        ],
        deep: [
          '**La mémoire du poisson rouge** ne dure pas 3 secondes : des expériences montrent qu’il peut retenir des informations pendant des semaines, voire des mois, et même être dressé.',
          '**La foudre ne frappe jamais deux fois au même endroit ?** Au contraire : elle frappe volontiers les points élevés. L’Empire State Building est touché une vingtaine de fois par an.',
          '**Le caméléon change de couleur pour se camoufler ?** Pas vraiment : il le fait surtout pour communiquer (séduction, intimidation) et réguler sa température.',
          '**Toucher un oisillon tombé du nid** ne pousse pas ses parents à l’abandonner : la plupart des oiseaux ont un odorat très faible. Mieux vaut quand même le laisser tranquille s’il a des plumes, ses parents veillent souvent tout près.'
        ],
        quiz: [
          { q: 'Pourquoi imagine-t-on les Vikings avec des casques à cornes ?', c: ['À cause des costumes d’opéra du XIXe siècle', 'Parce qu’on en a retrouvé beaucoup', 'À cause des sagas islandaises', 'Parce que les Romains les décrivaient ainsi'], e: 'L’image vient surtout des mises en scène des opéras de Wagner. Aucun casque viking à cornes n’a été découvert.' },
          { q: 'Combien mesurait environ Napoléon ?', c: ['1,69 m', '1,52 m', '1,57 m', '1,80 m'], e: 'Environ 1,69 m. Ses « 5 pieds 2 pouces » français, lus en pouces anglais, donnaient à tort environ 1,57 m.' },
          { q: 'La Grande Muraille de Chine est-elle visible à l’œil nu depuis la Lune ?', c: ['Non, ni depuis la Lune ni vraiment depuis l’orbite', 'Oui, c’est la seule construction visible', 'Oui, mais seulement la nuit', 'Oui, grâce à sa couleur claire'], e: 'Non. Trop étroite et de la couleur du terrain, elle est invisible depuis la Lune et très difficile à distinguer depuis l’orbite.' }
        ]
      }
    ]
  },
  {
    id: 'sports', name: 'Sports', emoji: '🏅', color: '#16A085',
    d: 'Histoires, records et règles du sport.',
    lessons: [
      {
        id: 'sports-jo', title: 'Les Jeux olympiques', min: 2,
        cards: [
          ['Dans la Grèce antique', 'Selon la tradition, les premiers Jeux se tiennent à **Olympie en 776 av. J.-C.**, en l’honneur de Zeus. Une trêve sacrée permet aux athlètes et spectateurs de voyager en sécurité.'],
          ['La renaissance moderne', 'Le Français **Pierre de Coubertin** relance les Jeux : les premiers JO modernes ont lieu à **Athènes en 1896**, avec environ 240 athlètes, tous des hommes.'],
          ['Les anneaux', 'Dessinés par Coubertin en 1913, les **5 anneaux** symbolisent l’union des continents. Leurs couleurs, avec le fond blanc, permettaient de reproduire les drapeaux de toutes les nations de l’époque.'],
          ['Paris, ville olympique', 'Paris a accueilli les JO d’été en **1900, 1924 et 2024**. En 1900, les femmes participent pour la première fois.']
        ],
        deep: [
          '**La devise.** « Citius, Altius, Fortius » (plus vite, plus haut, plus fort) a été proposée par le père dominicain Henri Didon, ami de Coubertin. En 2021, le CIO y ajoute « Communiter » (ensemble).',
          '**« L’important, c’est de participer. »** La formule est souvent attribuée à Coubertin, qui l’a popularisée. Elle vient en fait d’un sermon de l’évêque Ethelbert Talbot pendant les JO de Londres en 1908.',
          '**La flamme.** Elle brûle pour la première fois aux Jeux d’Amsterdam en 1928. Le relais de la flamme depuis Olympie est inauguré en 1936, aux Jeux de Berlin.'
        ],
        quiz: [
          { q: 'Qui a relancé les Jeux olympiques modernes ?', c: ['Pierre de Coubertin', 'Jules Rimet', 'Henri Desgrange', 'Jacques Rogge'], e: 'Pierre de Coubertin fonde le CIO en 1894. Jules Rimet est à l’origine de la Coupe du monde de football.' },
          { q: 'Où ont eu lieu les premiers JO modernes ?', c: ['À Athènes, en 1896', 'À Paris, en 1900', 'À Olympie, en 1896', 'À Londres, en 1908'], e: 'À Athènes en 1896, en hommage aux origines grecques des Jeux.' },
          { q: 'Combien de fois Paris a-t-elle accueilli les JO d’été ?', c: ['3 fois', '1 fois', '2 fois', '4 fois'], e: 'Trois fois : en 1900, 1924 et 2024.' }
        ]
      },
      {
        id: 'sports-anecdotes', title: 'Anecdotes de sport', min: 2,
        cards: [
          ['Pourquoi 42,195 km ?', 'La distance du marathon a été fixée aux **JO de Londres en 1908** : le parcours partait du château de Windsor pour finir devant la loge royale du stade. Elle est devenue officielle en 1921.'],
          ['Le maillot jaune', 'Le Tour de France est créé en **1903** par le journal *L’Auto*. Le maillot jaune apparaît en **1919** : il reprend la couleur du papier du journal.'],
          ['Le comptage au tennis', '15, 30, 40… L’origine est incertaine. Une hypothèse : on comptait les points sur une horloge en quarts (15, 30, 45), et 45 serait devenu 40 pour simplifier.'],
          ['La légende du rugby', 'On raconte qu’en 1823, l’élève **William Webb Ellis** aurait pris le ballon à la main pendant un match de football, à l’école de Rugby, en Angleterre. Une légende… mais le trophée de la Coupe du monde porte son nom.']
        ],
        quiz: [
          { q: 'Pourquoi le maillot jaune est-il jaune ?', c: ['C’était la couleur du papier du journal L’Auto', 'C’était la couleur préférée du premier vainqueur', 'Pour être vu de loin par les voitures', 'En hommage au soleil de l’été'], e: 'Le journal *L’Auto*, organisateur du Tour, était imprimé sur du papier jaune.' },
          { q: 'Lors de quels JO la distance du marathon a-t-elle été fixée à 42,195 km ?', c: ['Londres 1908', 'Athènes 1896', 'Paris 1924', 'Berlin 1936'], e: 'À Londres en 1908, pour relier le château de Windsor à la loge royale.' },
          { q: 'Quel nom porte le trophée de la Coupe du monde de rugby ?', c: ['Le trophée William Webb Ellis', 'La coupe Jules Rimet', 'Le bouclier de Brennus', 'La coupe Davis'], e: 'Le trophée Webb Ellis. Le bouclier de Brennus récompense le champion de France de rugby.' }
        ]
      }
    ]
  },
  {
    id: 'politique', name: 'Politique', emoji: '🗳️', color: '#2E5BBA',
    d: 'Institutions et vie démocratique, sans parti pris.',
    lessons: [
      {
        id: 'politique-5e', title: 'La Ve République en bref', min: 2,
        cards: [
          ['Une Constitution de 1958', 'La Ve République naît avec la Constitution du **4 octobre 1958**, voulue par le **général de Gaulle** pour donner un exécutif fort après l’instabilité de la IVe République.'],
          ['Le président', 'Depuis le référendum de **1962**, il est élu au **suffrage universel direct**. Son mandat est passé de 7 à **5 ans** (quinquennat) après le référendum de 2000.'],
          ['Le Parlement', 'Il comprend l’**Assemblée nationale** (577 députés élus au suffrage direct) et le **Sénat** (348 sénateurs élus au suffrage indirect). Ensemble, ils votent les lois.'],
          ['Le fameux 49.3', 'L’article 49 alinéa 3 permet au gouvernement de faire adopter un texte sans vote, sauf si une **motion de censure** est votée par l’Assemblée, ce qui renverse alors le gouvernement.']
        ],
        deep: [
          '**Le Conseil constitutionnel** vérifie que les lois respectent la Constitution. Il compte 9 membres nommés pour 9 ans, et les anciens présidents de la République en sont membres de droit (même si la plupart n’y siègent pas).',
          '**La cohabitation.** Quand la majorité de l’Assemblée est opposée au président, celui-ci doit nommer un Premier ministre du camp adverse. C’est arrivé trois fois : 1986-1988, 1993-1995 et 1997-2002.',
          '**Des gouvernements renversés.** Une motion de censure n’a abouti que deux fois sous la Ve République : en 1962 contre le gouvernement Pompidou, et en décembre 2024 contre celui de Michel Barnier.',
          '**Des garde-fous ajoutés.** La révision constitutionnelle de 2008 limite le nombre de mandats présidentiels consécutifs à deux, et restreint l’usage du 49.3 à un texte par session (en plus des textes budgétaires).'
        ],
        quiz: [
          { q: 'Combien de députés siègent à l’Assemblée nationale ?', c: ['577', '348', '500', '925'], e: '577 députés. 348 est le nombre de sénateurs, et 925 le total des parlementaires réunis en Congrès.' },
          { q: 'Depuis quand le président est-il élu au suffrage universel direct ?', c: ['1962', '1958', '1981', '2000'], e: 'Depuis le référendum de 1962, voulu par de Gaulle. En 1958, il était élu par un collège de grands électeurs.' },
          { q: 'Que peut faire l’Assemblée en réponse à un 49.3 ?', c: ['Voter une motion de censure', 'Destituer le président', 'Dissoudre le Sénat', 'Organiser un référendum'], e: 'Si une motion de censure obtient la majorité absolue des députés, le gouvernement est renversé et le texte rejeté.' }
        ]
      },
      {
        id: 'politique-ue', title: 'L’Union européenne', min: 2,
        cards: [
          ['Après la guerre, l’union', 'En **1951**, six pays créent la CECA (charbon et acier) pour rendre la guerre « matériellement impossible ». En **1957**, le traité de Rome fonde la CEE. Les six : France, RFA, Italie, Belgique, Pays-Bas, Luxembourg.'],
          ['Maastricht et l’euro', 'Le traité de **Maastricht** (1992) crée l’**Union européenne**. L’euro devient monnaie officielle en 1999, et les pièces et billets arrivent dans les poches le **1er janvier 2002**.'],
          ['27 pays', 'Après le départ du Royaume-Uni (**Brexit**, effectif le 31 janvier 2020), l’UE compte **27 États membres**.'],
          ['Qui fait quoi ?', 'La **Commission** (Bruxelles) propose les lois ; le **Parlement européen**, élu par les citoyens et siégeant à **Strasbourg**, et le **Conseil de l’UE** (les ministres des États) les adoptent.']
        ],
        quiz: [
          { q: 'Quel traité a créé l’Union européenne ?', c: ['Le traité de Maastricht', 'Le traité de Rome', 'Le traité de Lisbonne', 'Le traité de Versailles'], e: 'Le traité de Maastricht, signé en 1992 et entré en vigueur en 1993. Le traité de Rome (1957) avait créé la CEE.' },
          { q: 'Combien d’États membres compte l’UE depuis le Brexit ?', c: ['27', '28', '25', '30'], e: '27 États membres depuis la sortie du Royaume-Uni en 2020.' },
          { q: 'Où le Parlement européen tient-il ses sessions plénières ?', c: ['À Strasbourg', 'Uniquement à Bruxelles', 'À Luxembourg', 'À Genève'], e: 'Son siège officiel est à Strasbourg, où se tiennent la plupart des sessions plénières. Certaines ont lieu à Bruxelles.' }
        ]
      }
    ]
  },
  {
    id: 'francais', name: 'Français', emoji: '✍️', color: '#1F6FB2',
    d: 'Grammaire et orthographe, sans prise de tête.',
    lessons: [
      {
        id: 'francais-participe', title: 'L’accord du participe passé', min: 2,
        cards: [
          ['Avec « être » : accord avec le sujet', '« Elles sont **parties**. » « La lettre est **arrivée**. » Le participe s’accorde en genre et en nombre avec le sujet.'],
          ['Avec « avoir » : jamais avec le sujet', '« Elles ont **mangé**. » Avec l’auxiliaire avoir, on n’accorde jamais avec le sujet.'],
          ['… sauf si le COD est placé avant', '« Les pommes **que** j’ai **mangées** étaient bonnes. » Le COD (*que*, mis pour les pommes) est placé avant le verbe : on accorde. Astuce : posez la question « j’ai mangé quoi ? ». Si la réponse est déjà apparue avant le verbe, on accorde.']
        ],
        deep: [
          '**Les verbes pronominaux.** « Elles se sont **lavées** » : *se* est COD, placé avant, on accorde. Mais « Elles se sont **lavé** les mains » : le COD est « les mains », placé après, pas d’accord.',
          '**Quand « se » n’est pas COD.** « Elles se sont **parlé** » : on parle *à* quelqu’un, *se* est complément indirect, donc pas d’accord. Même chose pour « ils se sont succédé », « elles se sont souri ».',
          '**Suivi d’un infinitif.** « Fait » suivi d’un infinitif reste invariable : « Les robes qu’elle a **fait** faire ». Depuis les rectifications de 1990, c’est aussi le cas de « laissé » : « Les enfants qu’on a **laissé** partir ».'
        ],
        quiz: [
          { q: 'Quelle phrase est correcte ?', c: ['Les fleurs que j’ai cueillies sont fanées.', 'Les fleurs que j’ai cueilli sont fanées.', 'Les fleurs que j’ai cueillis sont fanées.', 'Les fleurs que j’ai cueillie sont fanées.'], e: 'Le COD « que » (mis pour « les fleurs », féminin pluriel) est placé avant : on accorde, « cueillies ».' },
          { q: 'Quelle phrase est correcte ?', c: ['Elles ont chanté toute la soirée.', 'Elles ont chantées toute la soirée.', 'Elles ont chantés toute la soirée.', 'Elles ont chantée toute la soirée.'], e: 'Avec avoir, pas d’accord avec le sujet. Et il n’y a pas de COD placé avant.' },
          { q: 'Quelle phrase est correcte ?', c: ['Elles se sont lavé les mains.', 'Elles se sont lavées les mains.', 'Elles se sont lavés les mains.', 'Elles se sont lavée les mains.'], e: 'Le COD « les mains » est placé après le verbe : pas d’accord. En revanche on écrit « elles se sont lavées » (là, *se* est le COD).' }
        ]
      },
      {
        id: 'francais-pieges', title: 'Trois pièges courants', min: 1,
        cards: [
          ['Pallier un problème', '« Pallier » est transitif direct : on **pallie un manque**, et non « à un manque », même si cette tournure se répand.'],
          ['Se rappeler quelque chose', 'On se **rappelle quelque chose** (sans « de »), mais on se **souvient de** quelque chose. Plutôt que « je m’en rappelle », préférez « je me le rappelle ».'],
          ['Malgré que', 'À l’écrit soigné, on préfère **« bien que »** + subjonctif : « Bien qu’il pleuve », plutôt que « malgré qu’il pleuve ».']
        ],
        quiz: [
          { q: 'Quelle formulation est correcte ?', c: ['Il faut pallier ce manque.', 'Il faut pallier à ce manque.', 'Il faut palier ce manque.', 'Il faut pallier de ce manque.'], e: 'Pallier (avec deux L) se construit sans préposition. Un palier (un L) est l’espace en haut d’un escalier.' },
          { q: 'Quelle phrase est correcte ?', c: ['Je me rappelle cette journée.', 'Je me rappelle de cette journée.', 'Je me souviens cette journée.', 'Je m’en rappelle de cette journée.'], e: 'On se rappelle quelque chose, mais on se souvient de quelque chose.' }
        ]
      }
    ]
  },
  {
    id: 'voyage', name: 'Voyage', emoji: '✈️', color: '#00A8CC',
    d: 'Pays, capitales et merveilles du monde.',
    lessons: [
      {
        id: 'voyage-capitales', title: 'Capitales surprenantes', min: 1,
        cards: [
          ['Ce n’est pas la plus grande ville !', '**Australie** → Canberra (pas Sydney). **Canada** → Ottawa (pas Toronto). **Turquie** → Ankara (pas Istanbul). **Brésil** → Brasília (pas Rio), construite de toutes pièces et inaugurée en 1960.'],
          ['Cas particuliers', 'La **Suisse** n’a officiellement pas de capitale : Berne est la « ville fédérale ». Les **Pays-Bas** ont pour capitale Amsterdam, mais le gouvernement siège à La Haye. La **Bolivie** a deux capitales : Sucre (constitutionnelle) et La Paz (siège du gouvernement).']
        ],
        quiz: [
          { q: 'Quelle est la capitale de l’Australie ?', c: ['Canberra', 'Sydney', 'Melbourne', 'Perth'], e: 'Canberra a été choisie comme compromis entre les deux grandes rivales, Sydney et Melbourne.' },
          { q: 'Où siège le gouvernement des Pays-Bas ?', c: ['À La Haye', 'À Amsterdam', 'À Rotterdam', 'À Utrecht'], e: 'Amsterdam est la capitale officielle, mais le gouvernement, le Parlement et la résidence royale de travail sont à La Haye.' }
        ]
      },
      {
        id: 'voyage-merveilles', title: 'Les merveilles du monde', min: 2,
        cards: [
          ['Les 7 merveilles du monde antique', 'Une liste établie par des auteurs grecs : pyramide de Khéops, jardins suspendus de Babylone, statue de Zeus à Olympie, temple d’Artémis à Éphèse, mausolée d’Halicarnasse, colosse de Rhodes et phare d’Alexandrie.'],
          ['Une seule survivante', 'De ces sept merveilles, seule la **pyramide de Khéops** existe encore. Construite vers 2560 av. J.-C., elle est restée le plus haut monument du monde pendant plus de **3 800 ans**.'],
          ['Les 7 nouvelles merveilles', 'En **2007**, un vote mondial désigne : la Grande Muraille de Chine, Petra (Jordanie), le Christ Rédempteur (Brésil), le Machu Picchu (Pérou), Chichén Itzá (Mexique), le Colisée (Italie) et le Taj Mahal (Inde).']
        ],
        deep: [
          '**Les jardins suspendus ont-ils existé ?** Aucune trace archéologique n’a été retrouvée à Babylone, et aucun texte babylonien ne les mentionne. Certains historiens pensent qu’ils se trouvaient en réalité à Ninive, d’autres qu’ils sont légendaires.',
          '**Le Taj Mahal** est un mausolée construit entre 1632 et 1653 par l’empereur moghol Shah Jahan en mémoire de son épouse Mumtaz Mahal.',
          '**Petra**, taillée dans la roche rose, était la capitale des Nabatéens. **Le Machu Picchu**, cité inca du XVe siècle, a été révélé au monde en 1911 par l’explorateur américain Hiram Bingham.'
        ],
        quiz: [
          { q: 'Quelle merveille du monde antique existe encore ?', c: ['La pyramide de Khéops', 'Le phare d’Alexandrie', 'Le colosse de Rhodes', 'Les jardins suspendus de Babylone'], e: 'La pyramide de Khéops, à Gizeh, est la plus ancienne et la seule encore debout.' },
          { q: 'Dans quel pays se trouve Petra ?', c: ['En Jordanie', 'En Égypte', 'Au Maroc', 'En Turquie'], e: 'Petra se trouve dans le sud de la Jordanie.' },
          { q: 'Lequel de ces sites fait partie des 7 nouvelles merveilles (2007) ?', c: ['Le Machu Picchu', 'La tour Eiffel', 'Angkor Vat', 'La statue de la Liberté'], e: 'Le Machu Picchu. La tour Eiffel, Angkor et la statue de la Liberté étaient parmi les finalistes, sans être retenues.' }
        ]
      }
    ]
  },
  {
    id: 'psychologie', name: 'Psychologie', emoji: '🧠', color: '#E84393',
    d: 'Comprendre comment on pense, mémorise et décide.',
    lessons: [
      {
        id: 'psychologie-biais', title: 'Les biais cognitifs', min: 2,
        cards: [
          ['Le biais de confirmation', 'Nous cherchons et retenons surtout les informations qui **confirment ce que nous pensons déjà**, et ignorons celles qui nous contredisent.'],
          ['L’effet Dunning-Kruger', 'Les personnes peu compétentes dans un domaine ont tendance à **surestimer leur niveau**, alors que les plus compétentes se sous-estiment souvent.'],
          ['Le biais d’ancrage', 'Le premier chiffre entendu sert d’« ancre » à nos jugements. Un prix barré à 200 € rend un article à 120 € soudain « bon marché ».'],
          ['L’effet de halo', 'Une seule qualité (beauté, assurance…) **colore notre jugement global** d’une personne : on la suppose aussi intelligente, honnête ou compétente.']
        ],
        deep: [
          '**Deux vitesses de pensée.** Les psychologues Daniel Kahneman et Amos Tversky ont étudié ces biais dès les années 1970. Kahneman distingue un « système 1 » rapide, intuitif et automatique, et un « système 2 » lent, réfléchi et coûteux en énergie. La plupart des biais viennent des raccourcis du système 1. Kahneman a reçu le prix Nobel d’économie en 2002.',
          '**Le biais du survivant.** Pendant la Seconde Guerre mondiale, on voulait blinder les avions là où les appareils revenus de mission avaient le plus d’impacts. Le statisticien Abraham Wald fit remarquer qu’il fallait faire l’inverse : les avions touchés ailleurs, eux, n’étaient jamais revenus.',
          '**Le biais des coûts irrécupérables.** Continuer un projet (ou un film ennuyeux) parce qu’on y a déjà investi du temps ou de l’argent, alors que ces coûts sont perdus quoi qu’il arrive.',
          '**Comment s’en protéger ?** Chercher activement des arguments contraires, se faire l’avocat du diable, ou imaginer avant une décision qu’elle a échoué et se demander pourquoi (la méthode du « pre-mortem »).'
        ],
        quiz: [
          { q: 'Un prix barré à 200 € rend un prix de 120 € attractif. Quel biais est à l’œuvre ?', c: ['Le biais d’ancrage', 'L’effet de halo', 'Le biais de confirmation', 'L’effet Dunning-Kruger'], e: 'Le premier chiffre (200 €) sert d’ancre : par comparaison, 120 € paraît avantageux.' },
          { q: 'Que décrit l’effet Dunning-Kruger ?', c: ['Les moins compétents surestiment leur niveau', 'On retient mieux le début d’une liste', 'On préfère ce qu’on possède déjà', 'On imite le comportement du groupe'], e: 'Décrit en 1999 par David Dunning et Justin Kruger : moins on maîtrise un sujet, moins on a les outils pour mesurer ses propres lacunes.' },
          { q: 'Ne lire que des articles qui vont dans votre sens relève…', c: ['Du biais de confirmation', 'Du biais d’ancrage', 'De l’effet de halo', 'De l’effet placebo'], e: 'C’est le biais de confirmation, amplifié par les algorithmes qui nous proposent des contenus proches de nos opinions.' }
        ]
      },
      {
        id: 'psychologie-memoire', title: 'Comment fonctionne la mémoire', min: 5,
        cards: [
          ['La courbe de l’oubli', 'En **1885**, le psychologue allemand **Hermann Ebbinghaus** mesure sa propre mémoire en apprenant des syllabes sans signification. Résultat : on oublie très vite, une grande partie dans les heures et les jours qui suivent.'],
          ['La répétition espacée', 'Chaque révision au bon moment **ralentit l’oubli**. Revoir une notion après 1 jour, puis 3, puis 7, puis 14… est bien plus efficace que tout réviser la veille. C’est le principe de l’onglet **Révision** de cette app !'],
          ['L’effet de test', 'Se **tester** (quiz, flashcards) fait mieux retenir que relire. Aller chercher l’information dans sa mémoire renforce le chemin qui y mène.'],
          ['La mémoire de travail', 'Notre « mémoire vive » est limitée : on parlait de **7 ± 2 éléments** (George Miller, 1956), les chercheurs l’estiment aujourd’hui plutôt autour de **4**. D’où l’intérêt des leçons courtes !'],
          ['Le rôle du sommeil', 'Pendant le sommeil, le cerveau **trie et consolide** ce qu’on a appris dans la journée. Réviser un peu avant de dormir est une bonne stratégie.']
        ],
        deep: [
          '**Plusieurs mémoires.** On distingue notamment la mémoire épisodique (nos souvenirs personnels), la mémoire sémantique (les connaissances, comme celles de cette app) et la mémoire procédurale (les savoir-faire, comme faire du vélo).',
          '**Le patient H.M.** En 1953, Henry Molaison subit l’ablation d’une partie de ses hippocampes pour soigner son épilepsie. Il devient incapable de former de nouveaux souvenirs durables, tout en pouvant apprendre de nouveaux gestes. Son cas a révélé le rôle central de l’hippocampe dans la mémoire.',
          '**Nos souvenirs nous trompent.** La psychologue Elizabeth Loftus a montré qu’on peut implanter de faux souvenirs, simplement par la façon de poser une question. La mémoire reconstruit plus qu’elle n’enregistre.',
          '**Le palais de mémoire.** Selon la légende, le poète grec Simonide de Céos a inventé la méthode des lieux : on associe chaque information à un endroit d’un lieu familier, puis on s’y « promène » mentalement pour tout retrouver. Les champions de mémoire l’utilisent encore.'
        ],
        quiz: [
          { q: 'Qui a établi la courbe de l’oubli ?', c: ['Hermann Ebbinghaus', 'Sigmund Freud', 'Ivan Pavlov', 'Jean Piaget'], e: 'Hermann Ebbinghaus, en 1885, en se prenant lui-même comme sujet d’expérience.' },
          { q: 'Quelle méthode permet de mieux retenir ?', c: ['Se tester régulièrement avec des quiz', 'Relire ses notes plusieurs fois', 'Surligner les passages importants', 'Tout réviser la veille'], e: 'L’effet de test : récupérer activement une information en mémoire la consolide bien plus que la relecture passive.' },
          { q: 'Combien d’éléments la mémoire de travail peut-elle retenir, selon les estimations récentes ?', c: ['Environ 4', 'Environ 20', 'Environ 100', 'Un seul'], e: 'Environ 4 éléments. Le fameux « 7 ± 2 » de Miller a été revu à la baisse.' },
          { q: 'Que fait le cerveau pendant le sommeil ?', c: ['Il consolide les apprentissages', 'Il efface la mémoire de la journée', 'Il se met complètement en pause', 'Il ne fait que rêver'], e: 'Le sommeil joue un rôle clé dans la consolidation : le cerveau rejoue et trie les informations de la journée.' }
        ]
      }
    ]
  },
  {
    id: 'education', name: 'Éducation', emoji: '🎓', color: '#6C5CE7',
    d: 'Apprendre à apprendre et grands pédagogues.',
    lessons: [
      {
        id: 'education-apprendre', title: 'Apprendre à apprendre', min: 2,
        cards: [
          ['La méthode Feynman', 'Pour vérifier qu’on a compris, on **explique la notion simplement**, comme à un enfant de 10 ans. Là où l’on bloque, il reste des lacunes. Elle porte le nom du physicien Richard Feynman, prix Nobel 1965.'],
          ['La technique Pomodoro', 'Inventée par Francesco Cirillo à la fin des années 1980 : **25 minutes de concentration**, 5 minutes de pause. Son nom vient d’un minuteur de cuisine en forme de tomate (*pomodoro* en italien).'],
          ['L’entrelacement', 'Alterner différents types d’exercices ou de sujets, plutôt que de faire vingt fois le même, aide à mieux **distinguer et retenir** les notions.'],
          ['Le mythe des « styles d’apprentissage »', 'Être « visuel » ou « auditif » ? Les études n’ont **pas montré** qu’adapter l’enseignement à un style préféré améliore les résultats. Mieux vaut varier les supports.']
        ],
        quiz: [
          { q: 'D’où vient le nom de la technique Pomodoro ?', c: ['D’un minuteur de cuisine en forme de tomate', 'Du nom de son inventeur', 'D’une ville italienne', 'D’un mot latin signifiant concentration'], e: 'Francesco Cirillo utilisait un minuteur en forme de tomate, *pomodoro* en italien.' },
          { q: 'Quel est le principe de la méthode Feynman ?', c: ['Expliquer une notion simplement, comme à un enfant', 'Apprendre en dormant', 'Réviser uniquement la veille', 'Recopier ses cours plusieurs fois'], e: 'Si l’on n’arrive pas à expliquer simplement, c’est qu’on n’a pas encore vraiment compris.' },
          { q: 'Que disent les études sur les « styles d’apprentissage » (visuel, auditif…) ?', c: ['Adapter l’enseignement à un style n’améliore pas les résultats', 'Chacun doit apprendre uniquement selon son style', 'Les visuels apprennent deux fois plus vite', 'Ils sont fixés dès la naissance'], e: 'Malgré sa popularité, cette idée n’est pas confirmée par la recherche. Varier les supports aide tout le monde.' }
        ]
      },
      {
        id: 'education-pedagogues', title: 'Pédagogues célèbres', min: 2,
        cards: [
          ['Jules Ferry', 'Les lois Ferry de **1881-1882** rendent l’école primaire **gratuite, obligatoire et laïque** en France, pour les enfants de 6 à 13 ans.'],
          ['Maria Montessori', 'Médecin italienne, elle ouvre en **1907** à Rome la première *Casa dei Bambini*. Sa pédagogie : laisser l’enfant apprendre par lui-même, à son rythme, avec du matériel adapté.'],
          ['Célestin Freinet', 'Instituteur français, il fait entrer dans sa classe l’**imprimerie**, le journal scolaire et la correspondance entre écoles. L’élève apprend par l’expérience et la coopération.'],
          ['Jean Piaget', 'Psychologue suisse, il décrit les **stades du développement** de l’intelligence chez l’enfant, de la petite enfance à l’adolescence.']
        ],
        deep: [
          '**L’instruction obligatoire s’allonge.** D’abord fixée de 6 à 13 ans (1882), elle passe à 14 ans en 1936, puis à 16 ans en 1959. Depuis 2019, elle commence dès 3 ans.',
          '**Vygotski et la « zone proximale ».** Le psychologue russe Lev Vygotski propose que l’on apprend le mieux dans la zone située juste au-delà de ce qu’on sait faire seul, mais accessible avec un peu d’aide. Un bon exercice n’est ni trop facile, ni trop dur.',
          '**Les quatre stades de Piaget** : sensori-moteur (0-2 ans), préopératoire (2-7 ans), opérations concrètes (7-11 ans) et opérations formelles (à partir de 11-12 ans), où apparaît la pensée abstraite.'
        ],
        quiz: [
          { q: 'Quelles caractéristiques les lois Ferry donnent-elles à l’école primaire ?', c: ['Gratuite, obligatoire et laïque', 'Payante, facultative et religieuse', 'Gratuite, facultative et mixte', 'Obligatoire, payante et laïque'], e: 'Gratuite (1881), puis obligatoire et laïque (1882).' },
          { q: 'Quelle pédagogue a fondé la Casa dei Bambini ?', c: ['Maria Montessori', 'Rosa Agazzi', 'Hélène Lubienska', 'Ellen Key'], e: 'Maria Montessori, en 1907, dans un quartier populaire de Rome.' },
          { q: 'Quel outil Célestin Freinet a-t-il fait entrer dans la classe ?', c: ['L’imprimerie', 'La télévision', 'Le tableau noir', 'L’ordinateur'], e: 'L’imprimerie scolaire permettait aux élèves de composer et publier leurs propres textes.' }
        ]
      }
    ]
  },
  {
    id: 'geographie', name: 'Géographie', emoji: '🌍', color: '#27AE60',
    d: 'Records, pays et paysages de la planète.',
    lessons: [
      {
        id: 'geographie-records', title: 'Records de la planète', min: 1,
        cards: [
          ['Du toit du monde aux abysses', 'L’**Everest** culmine à **8 849 m** (mesure sino-népalaise de 2020). Le point le plus profond des océans, le **Challenger Deep** dans la fosse des Mariannes, descend à près de **11 000 m**.'],
          ['Le plus grand désert… est glacé', 'Un désert se définit par le manque de précipitations, pas par la chaleur. Le plus grand est donc l’**Antarctique** ; le **Sahara** est le plus grand désert chaud.']
        ],
        quiz: [
          { q: 'Quelle est l’altitude de l’Everest ?', c: ['8 849 m', '7 821 m', '9 512 m', '8 091 m'], e: '8 849 m selon la mesure conjointe de la Chine et du Népal publiée en 2020.' },
          { q: 'Quel est le plus grand désert du monde ?', c: ['L’Antarctique', 'Le Sahara', 'Le désert de Gobi', 'Le désert d’Arabie'], e: 'L’Antarctique, où il ne tombe presque pas de précipitations. Le Sahara est le plus grand désert chaud.' }
        ]
      },
      {
        id: 'geographie-pays', title: 'Pays et frontières', min: 2,
        cards: [
          ['Le plus grand, le plus petit', 'La **Russie** est le plus grand pays du monde (environ 17 millions de km², 11 fuseaux horaires). Le **Vatican** est le plus petit : à peine 0,44 km².'],
          ['La France, championne des fuseaux', 'Grâce à ses territoires d’outre-mer, de la Polynésie à La Réunion, la **France** est le pays qui compte le plus de **fuseaux horaires** : 12.'],
          ['La plus longue frontière', 'Celle entre le **Canada et les États-Unis** : environ **8 900 km**, Alaska compris.'],
          ['Le plus peuplé', 'En **2023**, l’**Inde** a dépassé la Chine pour devenir le pays le plus peuplé du monde, avec plus de 1,4 milliard d’habitants.']
        ],
        quiz: [
          { q: 'Quel pays compte le plus de fuseaux horaires ?', c: ['La France', 'La Russie', 'Les États-Unis', 'La Chine'], e: 'La France, avec 12 fuseaux grâce à ses territoires d’outre-mer. La Russie et les États-Unis en comptent 11. La Chine, elle, n’en utilise qu’un seul !' },
          { q: 'Quel est le plus petit pays du monde ?', c: ['Le Vatican', 'Monaco', 'Saint-Marin', 'Le Liechtenstein'], e: 'Le Vatican, avec 0,44 km². Monaco arrive deuxième avec environ 2 km².' },
          { q: 'Quel pays est le plus peuplé du monde depuis 2023 ?', c: ['L’Inde', 'La Chine', 'Les États-Unis', 'L’Indonésie'], e: 'L’Inde a dépassé la Chine en 2023, selon les estimations de l’ONU.' }
        ]
      }
    ]
  },
  {
    id: 'litterature', name: 'Littérature', emoji: '📚', color: '#A0522D',
    d: 'Grands auteurs, œuvres et courants.',
    lessons: [
      {
        id: 'litterature-incipits', title: 'Premières phrases célèbres', min: 2,
        cards: [
          ['« Longtemps, je me suis couché de bonne heure. »', 'Première phrase de *Du côté de chez Swann* (1913), premier tome d’*À la recherche du temps perdu* de **Marcel Proust**, une œuvre de plus de 3 000 pages en sept volumes.'],
          ['« Aujourd’hui, maman est morte. »', 'Ouverture de *L’Étranger* (1942) d’**Albert Camus**. La sécheresse de la phrase annonce l’indifférence apparente du narrateur, Meursault.'],
          ['« Call me Ishmael. »', '« Appelez-moi Ismaël » : l’un des débuts les plus célèbres de la littérature anglophone, dans *Moby Dick* (1851) d’**Herman Melville**.'],
          ['« Il était une fois… »', 'La formule d’ouverture des contes, popularisée en France par **Charles Perrault** et ses *Histoires ou contes du temps passé* (1697) : *Cendrillon*, *Le Petit Chaperon rouge*, *La Belle au bois dormant*…']
        ],
        quiz: [
          { q: 'Qui a écrit « Longtemps, je me suis couché de bonne heure » ?', c: ['Marcel Proust', 'Gustave Flaubert', 'Victor Hugo', 'Émile Zola'], e: 'Marcel Proust, en ouverture d’*À la recherche du temps perdu*.' },
          { q: 'Comment s’appelle le narrateur de L’Étranger ?', c: ['Meursault', 'Rieux', 'Sisyphe', 'Rastignac'], e: 'Meursault. Rieux est le médecin de *La Peste* (Camus) et Rastignac un personnage de Balzac.' },
          { q: 'Quel auteur a popularisé Cendrillon et Le Petit Chaperon rouge en France ?', c: ['Charles Perrault', 'Jean de La Fontaine', 'Les frères Grimm', 'Hans Christian Andersen'], e: 'Charles Perrault, en 1697. Les frères Grimm en ont publié leurs propres versions en Allemagne au XIXe siècle.' }
        ]
      },
      {
        id: 'litterature-courants', title: 'Les grands courants littéraires', min: 5,
        cards: [
          ['L’Humanisme (XVIe s.)', 'On redécouvre les textes antiques et on place l’homme au cœur de la réflexion. **Rabelais** (*Gargantua*), **Montaigne** (*Essais*), **Ronsard** et la Pléiade.'],
          ['Le Classicisme (XVIIe s.)', 'Ordre, raison, mesure, et au théâtre la **règle des trois unités** (temps, lieu, action). **Molière, Racine, Corneille, La Fontaine**.'],
          ['Les Lumières (XVIIIe s.)', 'La raison contre l’obscurantisme et l’injustice. **Voltaire** (*Candide*), **Montesquieu**, **Rousseau**, et **Diderot** qui dirige l’*Encyclopédie*.'],
          ['Le Romantisme (début XIXe s.)', 'Le moi, les passions, la nature, l’histoire. **Victor Hugo** en est le chef de file ; la « bataille d’*Hernani* » (1830) marque sa victoire au théâtre. Aussi : Lamartine, Musset, Chateaubriand.'],
          ['Réalisme et Naturalisme (XIXe s.)', 'Peindre la société telle qu’elle est. **Balzac** (*La Comédie humaine*), **Flaubert** (*Madame Bovary*), puis **Zola** et les 20 romans des *Rougon-Macquart*, à la manière d’une enquête scientifique.'],
          ['Le Surréalisme (XXe s.)', 'Libérer l’inconscient par l’écriture automatique et le rêve. **André Breton**, **Louis Aragon**, **Paul Éluard**.']
        ],
        deep: [
          '**Le Symbolisme.** En 1857, *Les Fleurs du mal* de Baudelaire valent à leur auteur un procès pour outrage à la morale publique. Il ouvre la voie à Verlaine, Rimbaud et Mallarmé, qui cherchent à suggérer plutôt qu’à décrire.',
          '**L’existentialisme et l’absurde.** Après 1945, Sartre affirme que « l’existence précède l’essence » : l’homme se définit par ses actes. Camus explore l’absurde, ce divorce entre notre soif de sens et le silence du monde (*Le Mythe de Sisyphe*).',
          '**Le Nouveau Roman.** Dans les années 1950, Alain Robbe-Grillet, Nathalie Sarraute ou Michel Butor bousculent l’intrigue et le personnage traditionnels.',
          '**L’Oulipo.** Fondé en 1960 par Raymond Queneau et François Le Lionnais, l’Ouvroir de littérature potentielle invente des contraintes d’écriture. Georges Perec écrit ainsi *La Disparition* (1969), un roman entier sans la lettre « e » !'
        ],
        quiz: [
          { q: 'Quel auteur a dirigé l’Encyclopédie ?', c: ['Denis Diderot', 'Voltaire', 'Montesquieu', 'Jean-Jacques Rousseau'], e: 'Diderot, avec d’Alembert au début. Voltaire, Montesquieu et Rousseau y ont contribué.' },
          { q: 'Quelle règle caractérise le théâtre classique ?', c: ['La règle des trois unités', 'L’écriture automatique', 'Le mélange des genres', 'Le vers libre'], e: 'Unité de temps (une journée), de lieu (un seul endroit) et d’action (une intrigue principale).' },
          { q: 'Combien de romans compte le cycle des Rougon-Macquart de Zola ?', c: ['20', '7', '12', '95'], e: '20 romans, publiés de 1871 à 1893, qui suivent une famille sous le Second Empire.' },
          { q: 'Quelle pièce de Victor Hugo a provoqué une « bataille » en 1830 ?', c: ['Hernani', 'Ruy Blas', 'Les Misérables', 'Notre-Dame de Paris'], e: '*Hernani* opposa les classiques aux jeunes romantiques lors de chaque représentation.' }
        ]
      }
    ]
  },
  {
    id: 'musique', name: 'Musique', emoji: '🎵', color: '#D35400',
    d: 'Instruments, compositeurs et grandes œuvres.',
    lessons: [
      {
        id: 'musique-familles', title: 'Les familles d’instruments', min: 1,
        cards: [
          ['Les quatre familles de l’orchestre', 'Les **cordes** (violon, alto, violoncelle, contrebasse), les **bois** (flûte, hautbois, clarinette, basson), les **cuivres** (trompette, cor, trombone, tuba) et les **percussions**.'],
          ['Le piège du saxophone', 'Bien qu’en métal, le **saxophone est un bois** : le son est produit par une anche en roseau, comme la clarinette. Il a été inventé par le Belge **Adolphe Sax** et breveté en 1846. La flûte traversière, souvent en métal, est elle aussi un bois !']
        ],
        quiz: [
          { q: 'À quelle famille appartient le saxophone ?', c: ['Les bois', 'Les cuivres', 'Les cordes', 'Les percussions'], e: 'C’est la façon de produire le son qui compte : le saxophone utilise une anche, comme les bois.' },
          { q: 'Qui a inventé le saxophone ?', c: ['Adolphe Sax', 'Antonio Stradivari', 'Jean-Sébastien Bach', 'Theobald Böhm'], e: 'Le Belge Adolphe Sax, dans les années 1840. Stradivari était un luthier célèbre pour ses violons.' }
        ]
      },
      {
        id: 'musique-compositeurs', title: 'Quatre grands compositeurs', min: 2,
        cards: [
          ['Jean-Sébastien Bach (1685-1750)', 'Maître du **baroque** et du contrepoint : *Toccata et fugue en ré mineur*, *Concertos brandebourgeois*. Il a eu 20 enfants !'],
          ['Wolfgang Amadeus Mozart (1756-1791)', 'Enfant prodige, il compose dès 5 ans et laisse plus de **600 œuvres** avant de mourir à 35 ans : *La Flûte enchantée*, le *Requiem* (inachevé).'],
          ['Ludwig van Beethoven (1770-1827)', 'Il devient progressivement **sourd**, mais compose ses chefs-d’œuvre, dont la **9e symphonie**. Son *Ode à la joie* est devenue l’hymne européen.'],
          ['Claude Debussy (1862-1918)', 'Associé à l’impressionnisme musical, il bouscule l’harmonie classique : *Clair de lune*, *Prélude à l’après-midi d’un faune*.']
        ],
        deep: [
          '**Les grandes périodes.** Baroque (vers 1600-1750 : Bach, Vivaldi, Haendel), classique (vers 1750-1820 : Haydn, Mozart, le jeune Beethoven), romantique (XIXe siècle : Chopin, Liszt, Wagner, Tchaïkovski), puis la musique moderne du XXe siècle.',
          '**Un scandale historique.** Le 29 mai 1913, la création du *Sacre du printemps* de Stravinsky, au Théâtre des Champs-Élysées, déclenche des huées, des cris et presque une émeute dans la salle.',
          '**Le Boléro de Ravel** (1928) répète la même mélodie pendant environ un quart d’heure, en ne faisant que grossir l’orchestre. Ravel le voyait comme une expérience d’orchestration ; c’est devenu l’une des œuvres les plus jouées au monde.'
        ],
        quiz: [
          { q: 'Quelle œuvre de Beethoven est devenue l’hymne européen ?', c: ['L’Ode à la joie (9e symphonie)', 'La Lettre à Élise', 'La Symphonie pastorale', 'La Sonate au clair de lune'], e: 'Le dernier mouvement de la 9e symphonie, sur un poème de Schiller, a été adopté comme hymne européen.' },
          { q: 'À quel âge Mozart est-il mort ?', c: ['35 ans', '52 ans', '27 ans', '70 ans'], e: 'Mozart est mort à 35 ans, en 1791, en laissant son *Requiem* inachevé.' },
          { q: 'Quel compositeur est associé à l’impressionnisme musical ?', c: ['Claude Debussy', 'Jean-Sébastien Bach', 'Richard Wagner', 'Antonio Vivaldi'], e: 'Debussy, même s’il n’aimait pas ce terme. Sa musique joue sur les couleurs sonores et les atmosphères.' }
        ]
      }
    ]
  },
  {
    id: 'philosophie', name: 'Philosophie', emoji: '🤔', color: '#5D6D7E',
    d: 'Les grandes idées, expliquées simplement.',
    lessons: [
      {
        id: 'philosophie-citations', title: 'Quatre citations expliquées', min: 2,
        cards: [
          ['« Je pense, donc je suis »', '**Descartes**, *Discours de la méthode* (1637). En doutant de tout, il trouve une certitude : si je doute, je pense ; et si je pense, j’existe.'],
          ['« Connais-toi toi-même »', 'Inscription du temple d’Apollon à **Delphes**, reprise par **Socrate** : la sagesse commence par la connaissance de soi et de ses propres limites.'],
          ['« L’enfer, c’est les autres »', '**Sartre**, *Huis clos* (1944). Souvent mal compris : il ne dit pas que les autres sont méchants, mais que nous dépendons de leur **regard** pour nous juger nous-mêmes.'],
          ['« Dieu est mort »', '**Nietzsche**, *Le Gai Savoir* (1882). Un constat, pas une célébration : les valeurs traditionnelles s’effondrent, et c’est à l’homme d’en créer de nouvelles.']
        ],
        quiz: [
          { q: 'Dans quelle œuvre trouve-t-on « Je pense, donc je suis » ?', c: ['Le Discours de la méthode', 'Le Gai Savoir', 'La République', 'Les Pensées'], e: 'Dans le *Discours de la méthode* de Descartes (1637). *Les Pensées* sont de Pascal.' },
          { q: 'Que veut dire Sartre par « L’enfer, c’est les autres » ?', c: ['Nous dépendons du regard des autres pour nous juger', 'Les autres sont toujours malveillants', 'Il faut vivre seul', 'L’enfer existe vraiment'], e: 'Sartre lui-même a précisé que si nos rapports avec autrui sont faussés, alors l’autre devient un enfer, parce que nous nous voyons à travers lui.' },
          { q: 'Où était inscrit « Connais-toi toi-même » ?', c: ['Au temple d’Apollon à Delphes', 'Sur l’Acropole d’Athènes', 'À l’entrée de l’Académie de Platon', 'Sur la tombe de Socrate'], e: 'Sur le fronton du temple d’Apollon à Delphes, où l’on venait consulter l’oracle.' }
        ]
      },
      {
        id: 'philosophie-caverne', title: 'L’allégorie de la caverne', min: 5,
        cards: [
          ['Le décor', 'Dans *La République* (livre VII), **Platon** imagine des prisonniers enchaînés depuis l’enfance au fond d’une caverne, face à un mur. Ils ne voient que des **ombres** projetées par un feu situé derrière eux.'],
          ['Les ombres, seule réalité', 'Pour eux, ces ombres sont le monde réel. Ils n’ont jamais rien connu d’autre et donnent des noms à ces silhouettes.'],
          ['La libération', 'Un prisonnier est détaché et forcé de sortir. D’abord **ébloui** et souffrant, il découvre peu à peu les objets réels, puis le **Soleil** lui-même.'],
          ['Le retour', 'Redescendu pour libérer ses compagnons, il ne voit plus rien dans l’obscurité. Les autres se **moquent** de lui… et seraient prêts à tuer celui qui voudrait les faire sortir.'],
          ['Ce que cela signifie', 'La caverne, c’est le **monde sensible** (les apparences) ; l’extérieur, le **monde intelligible** (les Idées) ; le Soleil, l’**Idée du Bien**. Sortir de la caverne, c’est l’**éducation** philosophique : douloureuse, mais libératrice.']
        ],
        deep: [
          '**Une allusion à Socrate.** La menace qui pèse sur le prisonnier revenu évoque le sort de Socrate, maître de Platon, condamné à mort en 399 av. J.-C. pour « corruption de la jeunesse » et contraint de boire la ciguë.',
          '**Un dialogue.** Comme presque toute l’œuvre de Platon, l’allégorie est racontée sous forme de dialogue : Socrate l’expose à Glaucon, le frère de Platon. Platon fonde vers 387 av. J.-C. l’Académie, l’une des premières écoles de philosophie.',
          '**Toujours d’actualité.** Des films comme *Matrix* (1999) ou *The Truman Show* (1998) reprennent l’idée d’un monde d’illusions dont il faut s’échapper. On peut aussi y penser à propos des écrans et des « bulles de filtre » des réseaux sociaux : ne voyons-nous pas parfois que des ombres de la réalité ?'
        ],
        quiz: [
          { q: 'Dans quelle œuvre Platon raconte-t-il l’allégorie de la caverne ?', c: ['La République', 'Le Banquet', 'Le Phédon', 'L’Apologie de Socrate'], e: 'Au livre VII de *La République*.' },
          { q: 'Que voient les prisonniers au fond de la caverne ?', c: ['Des ombres projetées sur un mur', 'Le Soleil', 'Des reflets dans l’eau', 'Des peintures rupestres'], e: 'Des ombres d’objets que l’on fait passer devant un feu, derrière eux.' },
          { q: 'Que symbolise le Soleil dans l’allégorie ?', c: ['L’Idée du Bien', 'Le pouvoir politique', 'Les dieux de l’Olympe', 'La mort'], e: 'Le Soleil représente l’Idée du Bien, source de toute vérité et de toute connaissance.' },
          { q: 'Le prisonnier qui redescend parmi les siens est…', c: ['Moqué, voire menacé', 'Accueilli en héros', 'Nommé chef de la caverne', 'Suivi par tous les prisonniers'], e: 'Aveuglé par l’obscurité, il paraît ridicule. Ses compagnons refusent de le croire et pourraient même le tuer.' }
        ]
      }
    ]
  },
  {
    id: 'economie', name: 'Économie', emoji: '💶', color: '#B7950B',
    d: 'Les notions clés pour comprendre l’actualité.',
    lessons: [
      {
        id: 'economie-inflation', title: 'L’inflation expliquée', min: 2,
        cards: [
          ['Une hausse générale des prix', 'L’**inflation** est la hausse **générale et durable** des prix. Avec la même somme, on achète moins : le **pouvoir d’achat** de la monnaie baisse.'],
          ['Comment la mesure-t-on ?', 'En France, l’**INSEE** calcule l’**indice des prix à la consommation** (IPC) à partir d’un « panier » représentatif de biens et services : alimentation, loyers, énergie, transports…'],
          ['L’objectif des 2 %', 'La **Banque centrale européenne** vise une inflation proche de **2 %** par an. Pour la freiner, elle relève ses **taux d’intérêt** : le crédit devient plus cher, la demande ralentit.'],
          ['Quand ça s’emballe', 'C’est l’**hyperinflation**. En Allemagne en **1923**, un dollar finit par valoir plus de 4 000 milliards de marks ; au Zimbabwe en 2008, les prix doublaient en quelques jours.']
        ],
        deep: [
          '**Gagnants et perdants.** L’inflation pénalise les épargnants et ceux dont les revenus ne suivent pas les prix. Elle avantage en revanche les emprunteurs à taux fixe : leur dette « fond » en valeur réelle.',
          '**La déflation, pire encore ?** Une baisse durable des prix peut sembler une bonne nouvelle, mais elle pousse à reporter ses achats, ce qui freine l’économie. Le Japon s’est longtemps débattu avec ce problème à partir des années 1990.',
          '**La stagflation** combine inflation élevée et croissance faible, avec du chômage. C’est ce qu’ont connu les pays occidentaux après les chocs pétroliers de 1973 et 1979.',
          '**Le retour de l’inflation.** Après des années d’inflation très basse, la sortie de la crise du Covid et la guerre en Ukraine font flamber les prix de l’énergie : l’inflation dans la zone euro dépasse 10 % sur un an à l’automne 2022.'
        ],
        quiz: [
          { q: 'Quel organisme calcule l’indice des prix en France ?', c: ['L’INSEE', 'La Banque de France', 'Le FMI', 'L’Assemblée nationale'], e: 'L’INSEE (Institut national de la statistique et des études économiques) publie l’IPC chaque mois.' },
          { q: 'Quel taux d’inflation vise la BCE ?', c: ['Environ 2 %', '0 %', '5 %', '10 %'], e: 'Une inflation proche de 2 % à moyen terme, jugée compatible avec la stabilité des prix.' },
          { q: 'Que fait une banque centrale pour freiner l’inflation ?', c: ['Elle relève ses taux d’intérêt', 'Elle imprime plus de billets', 'Elle baisse les impôts', 'Elle bloque tous les salaires'], e: 'En relevant ses taux, elle renchérit le crédit, ce qui modère la consommation et l’investissement.' }
        ]
      },
      {
        id: 'economie-pib', title: 'Le PIB en une minute', min: 1,
        cards: [
          ['Le PIB, c’est quoi ?', 'Le **produit intérieur brut** mesure la richesse produite sur un territoire en un an : la somme des **valeurs ajoutées** de toutes les entreprises et administrations.'],
          ['Ses limites', 'Le PIB ne compte ni le **bénévolat**, ni les tâches domestiques, ni les dégâts sur l’**environnement**. Un accident de voiture, qui entraîne réparations et soins, le fait même augmenter !']
        ],
        quiz: [
          { q: 'Que mesure le PIB ?', c: ['La richesse produite sur un territoire en un an', 'La fortune totale des habitants', 'Le montant de la dette publique', 'Les exportations d’un pays'], e: 'Le PIB mesure une production (un flux annuel), pas un patrimoine accumulé.' },
          { q: 'Lequel de ces éléments n’est PAS pris en compte dans le PIB ?', c: ['Le bénévolat', 'Les salaires', 'La production des usines', 'Les repas servis au restaurant'], e: 'Le bénévolat, comme les tâches domestiques, n’a pas de prix de marché : il échappe au PIB.' }
        ]
      }
    ]
  },
  {
    id: 'astronomie', name: 'Astronomie', emoji: '🪐', color: '#34495E',
    d: 'Planètes, étoiles et mystères de l’Univers.',
    lessons: [
      {
        id: 'astronomie-systeme', title: 'Le système solaire', min: 2,
        cards: [
          ['8 planètes, pas 9', 'Mercure, Vénus, la Terre, Mars, Jupiter, Saturne, Uranus, Neptune. **Pluton** a été reclassée **planète naine** en **2006** par l’Union astronomique internationale.'],
          ['Vénus, l’enfer', 'Ce n’est pas Mercure, la plus proche du Soleil, qui est la plus chaude, mais **Vénus** : environ **460 °C** en surface, à cause d’un effet de serre extrême.'],
          ['Un jour plus long qu’une année', 'Vénus tourne si lentement sur elle-même qu’un **jour vénusien** (243 jours terrestres) dure plus longtemps que son **année** (225 jours). Et elle tourne à l’envers !'],
          ['Jupiter, le géant', '**Jupiter** pourrait contenir plus de **1 300 Terres**. Sa Grande Tache rouge est une tempête plus large que notre planète, observée depuis plus de 150 ans.']
        ],
        deep: [
          '**Pourquoi Pluton a-t-elle été déclassée ?** Pour l’UAI, une planète doit tourner autour du Soleil, être assez massive pour être ronde, et avoir « fait le ménage » sur son orbite. Pluton échoue au troisième critère : elle partage la sienne avec de nombreux objets de la ceinture de Kuiper. La découverte en 2005 d’Éris, presque aussi grosse, a précipité la décision.',
          '**Un moyen mnémotechnique** pour retenir l’ordre des planètes : « **M**e **V**oici **T**oute **M**ignonne, **J**e **S**uis **U**ne **N**ébuleuse. »',
          '**Saturne flotterait.** Sa densité moyenne est inférieure à celle de l’eau : dans une baignoire assez grande, elle flotterait !'
        ],
        quiz: [
          { q: 'Quelle est la planète la plus chaude du système solaire ?', c: ['Vénus', 'Mercure', 'Mars', 'Jupiter'], e: 'Vénus, grâce à son atmosphère très épaisse de CO₂ qui piège la chaleur. Mercure, sans atmosphère, se refroidit fortement la nuit.' },
          { q: 'En quelle année Pluton a-t-elle perdu son statut de planète ?', c: ['2006', '1930', '1999', '2015'], e: 'En 2006. Elle avait été découverte en 1930 ; en 2015, la sonde New Horizons l’a survolée.' },
          { q: 'Combien de planètes compte le système solaire ?', c: ['8', '9', '7', '10'], e: 'Huit planètes depuis le reclassement de Pluton en planète naine.' }
        ]
      },
      {
        id: 'astronomie-lumiere', title: 'Voyager dans le temps en regardant le ciel', min: 2,
        cards: [
          ['L’année-lumière, une distance', 'Malgré son nom, c’est une **distance** : celle que parcourt la lumière en un an, soit environ **9 460 milliards de km**.'],
          ['8 minutes dans le passé', 'La lumière du Soleil met environ **8 minutes et 20 secondes** pour nous parvenir. Si le Soleil s’éteignait, nous ne le saurions pas tout de suite !'],
          ['Des étoiles venues du passé', 'L’étoile la plus proche après le Soleil, **Proxima du Centaure**, est à 4,2 années-lumière : on la voit telle qu’elle était il y a plus de 4 ans. La galaxie d’Andromède nous apparaît telle qu’elle était il y a **2,5 millions d’années**.']
        ],
        quiz: [
          { q: 'Qu’est-ce qu’une année-lumière ?', c: ['Une distance', 'Une durée', 'Une vitesse', 'Une unité de luminosité'], e: 'C’est la distance parcourue par la lumière en un an, environ 9 460 milliards de kilomètres.' },
          { q: 'Combien de temps met la lumière du Soleil pour atteindre la Terre ?', c: ['Environ 8 minutes', 'Environ 1 seconde', 'Environ 1 heure', 'Environ 1 jour'], e: 'Environ 8 minutes et 20 secondes, pour parcourir 150 millions de kilomètres.' },
          { q: 'Quelle est l’étoile la plus proche de nous après le Soleil ?', c: ['Proxima du Centaure', 'Sirius', 'L’étoile polaire', 'Bételgeuse'], e: 'Proxima du Centaure, à environ 4,2 années-lumière. Sirius est l’étoile la plus brillante du ciel nocturne.' }
        ]
      }
    ]
  },
  {
    id: 'corps', name: 'Corps humain', emoji: '🫀', color: '#C0392B',
    d: 'La machine incroyable qu’est notre corps.',
    lessons: [
      {
        id: 'corps-chiffres', title: 'Le corps en chiffres', min: 1,
        cards: [
          ['Une charpente qui évolue', 'Un adulte compte **206 os**, mais un bébé en a environ **300** : certains fusionnent en grandissant. Le plus petit, l’**étrier**, se trouve dans l’oreille et mesure environ 3 mm.'],
          ['Des chiffres vertigineux', 'La **peau** est notre plus grand organe (près de 2 m²). Le cœur bat environ **100 000 fois par jour**, et nos vaisseaux sanguins mis bout à bout feraient plus de deux fois le tour de la Terre.']
        ],
        quiz: [
          { q: 'Combien d’os compte le squelette d’un adulte ?', c: ['206', '300', '150', '412'], e: '206 os chez l’adulte. Le nouveau-né en a environ 300, dont certains fusionnent avec la croissance.' },
          { q: 'Où se trouve le plus petit os du corps humain ?', c: ['Dans l’oreille', 'Dans le petit doigt', 'Dans le nez', 'Dans le pied'], e: 'L’étrier, dans l’oreille moyenne, transmet les vibrations sonores vers l’oreille interne.' }
        ]
      },
      {
        id: 'corps-sommeil', title: 'Les secrets du sommeil', min: 2,
        cards: [
          ['Des cycles de 90 minutes', 'Une nuit se compose de **4 à 6 cycles** d’environ 90 minutes, alternant sommeil léger, sommeil **lent profond** (récupération physique) et sommeil **paradoxal** (les rêves les plus vifs).'],
          ['Pourquoi « paradoxal » ?', 'Pendant cette phase, le cerveau est presque aussi actif qu’éveillé, les yeux bougent rapidement… mais les muscles sont **paralysés**. Heureusement, sinon nous mimerions nos rêves !'],
          ['Combien d’heures ?', 'Pour un adulte, les recommandations tournent autour de **7 à 9 heures** par nuit. Les adolescents ont besoin de 8 à 10 heures.'],
          ['Les écrans et la mélatonine', 'La **mélatonine**, l’hormone du sommeil, est sécrétée quand la lumière baisse. La lumière des écrans le soir peut **retarder** sa production et l’endormissement.']
        ],
        deep: [
          '**Un nom français.** C’est le neurobiologiste lyonnais Michel Jouvet qui, en 1959, décrit et baptise le « sommeil paradoxal », en observant chez le chat ce mélange d’activité cérébrale intense et de paralysie musculaire.',
          '**Le record de veille.** En 1964, le lycéen américain Randy Gardner reste éveillé 11 jours d’affilée pour une expérience scolaire. Il souffre de troubles de la concentration, de la mémoire et d’hallucinations. Le Livre Guinness a depuis cessé d’homologuer ce type de record, jugé dangereux.',
          '**Les dauphins dorment à moitié** : un hémisphère cérébral se repose pendant que l’autre reste éveillé, ce qui leur permet de continuer à remonter respirer.',
          '**La sieste idéale** dure 10 à 20 minutes : assez pour récupérer, pas assez pour tomber dans le sommeil profond et se réveiller groggy.'
        ],
        quiz: [
          { q: 'Combien de temps dure environ un cycle de sommeil ?', c: ['90 minutes', '20 minutes', '4 heures', '30 secondes'], e: 'Environ 90 minutes, avec des variations selon les personnes et l’heure de la nuit.' },
          { q: 'Pendant quel sommeil fait-on les rêves les plus vifs ?', c: ['Le sommeil paradoxal', 'Le sommeil lent profond', 'L’endormissement', 'Le sommeil léger'], e: 'Le sommeil paradoxal, aussi appelé REM (pour *Rapid Eye Movement*, mouvements oculaires rapides).' },
          { q: 'Quelle hormone favorise l’endormissement ?', c: ['La mélatonine', 'L’adrénaline', 'L’insuline', 'Le cortisol'], e: 'La mélatonine est sécrétée par la glande pinéale quand la lumière diminue.' }
        ]
      }
    ]
  },
  {
    id: 'mythologie', name: 'Mythologie', emoji: '⚡', color: '#7D5BA6',
    d: 'Dieux, héros et légendes de l’Antiquité.',
    lessons: [
      {
        id: 'mythologie-olympe', title: 'Les dieux de l’Olympe', min: 2,
        cards: [
          ['Zeus, le roi des dieux', 'Maître du ciel et de la foudre, il règne sur l’Olympe. Les Romains l’appellent **Jupiter**. Son épouse, **Héra** (Junon), protège le mariage.'],
          ['Poséidon et Hadès', 'Ses frères se partagent le reste du monde : **Poséidon** (Neptune) règne sur les mers, **Hadès** (Pluton) sur les Enfers. Vivant sous terre, Hadès n’est généralement pas compté parmi les Olympiens.'],
          ['Athéna, Arès, Aphrodite', '**Athéna** (Minerve), déesse de la sagesse et de la stratégie, née tout armée du crâne de Zeus. **Arès** (Mars), dieu de la guerre brutale. **Aphrodite** (Vénus), déesse de l’amour, née de l’écume.'],
          ['Des planètes divines', 'Nos planètes portent les noms romains de ces dieux : Mercure (Hermès, le messager), Vénus, Mars, Jupiter, Saturne (Cronos, père de Zeus)…']
        ],
        quiz: [
          { q: 'Quel est le nom romain de Zeus ?', c: ['Jupiter', 'Mars', 'Neptune', 'Saturne'], e: 'Jupiter. Mars correspond à Arès, Neptune à Poséidon et Saturne à Cronos.' },
          { q: 'De quoi Athéna est-elle née ?', c: ['Du crâne de Zeus', 'De l’écume de la mer', 'D’un œuf', 'D’un rocher'], e: 'Elle jaillit tout armée du crâne de Zeus, fendu d’un coup de hache par Héphaïstos. L’écume, c’est la naissance d’Aphrodite.' },
          { q: 'Quel dieu est le messager des dieux ?', c: ['Hermès', 'Apollon', 'Héphaïstos', 'Dionysos'], e: 'Hermès (Mercure chez les Romains), reconnaissable à ses sandales ailées.' }
        ]
      },
      {
        id: 'mythologie-expressions', title: 'Expressions nées des mythes', min: 2,
        cards: [
          ['Le talon d’Achille', 'Plongé bébé dans le Styx pour le rendre invulnérable, **Achille** fut tenu par le talon, qui resta son seul point faible. Pâris l’y tua d’une flèche.'],
          ['La boîte de Pandore', '**Pandore** ouvre le récipient confié par Zeus et libère tous les maux de l’humanité. Seule l’**espérance** reste au fond. À l’origine, c’était une jarre (*pithos*), pas une boîte !'],
          ['Le supplice de Tantale', 'Puni par les dieux, **Tantale** est plongé dans l’eau sous des arbres fruitiers… mais l’eau et les fruits s’éloignent dès qu’il veut les atteindre.'],
          ['Le fil d’Ariane', '**Ariane** donne à Thésée une pelote de fil pour qu’il retrouve la sortie du Labyrinthe après avoir tué le Minotaure.']
        ],
        deep: [
          '**Le rocher de Sisyphe.** Condamné à pousser éternellement un rocher jusqu’au sommet d’une colline, d’où il retombe toujours. Un « travail de Sisyphe » est une tâche sans fin. Camus en a fait le symbole de l’absurde : « Il faut imaginer Sisyphe heureux. »',
          '**Des mots du quotidien.** La *panique* vient du dieu Pan, dont les cris semaient l’effroi. L’*écho* vient de la nymphe Écho, condamnée à répéter les derniers mots des autres. Le *musée* était le temple des Muses. Être *médusé*, c’est être pétrifié comme par le regard de Méduse.',
          '**Jouer les Cassandre.** Cassandre, princesse troyenne, avait reçu le don de prophétie… et la malédiction de n’être jamais crue. On dit d’une personne qui prédit des malheurs qu’elle « joue les Cassandre ».',
          '**Le cheval de Troie.** Imaginé par Ulysse, ce cheval de bois géant cache des soldats grecs que les Troyens font entrer eux-mêmes dans leur ville. Aujourd’hui, c’est aussi le nom d’un logiciel malveillant déguisé en programme inoffensif.'
        ],
        quiz: [
          { q: 'Que reste-t-il au fond de la boîte de Pandore ?', c: ['L’espérance', 'La sagesse', 'L’amour', 'La vérité'], e: 'L’espérance (*Elpis*), seule à ne pas s’être échappée.' },
          { q: 'Qui a aidé Thésée à sortir du Labyrinthe ?', c: ['Ariane', 'Pénélope', 'Médée', 'Antigone'], e: 'Ariane, fille du roi Minos, grâce à sa pelote de fil.' },
          { q: 'Un « supplice de Tantale » désigne…', c: ['Le fait de voir ce qu’on désire sans pouvoir l’atteindre', 'Un travail répétitif et sans fin', 'Une trahison par un proche', 'Une douleur au talon'], e: 'C’est la frustration de convoiter ce qui est à portée de main sans jamais l’obtenir. Le travail sans fin, c’est le rocher de Sisyphe.' }
        ]
      }
    ]
  },
  {
    id: 'technologie', name: 'Technologie', emoji: '💻', color: '#0984E3',
    d: 'Internet, IA et inventions qui changent tout.',
    lessons: [
      {
        id: 'technologie-internet', title: 'La naissance d’Internet', min: 2,
        cards: [
          ['ARPANET, l’ancêtre', 'En **1969**, l’agence de recherche du ministère américain de la Défense finance ARPANET. Le 29 octobre, le premier message est envoyé entre deux universités californiennes : il devait dire « LOGIN »… mais le système plante après « LO ».'],
          ['Internet ≠ Web', '**Internet** est le réseau mondial d’ordinateurs. Le **Web** n’est qu’un service qui l’utilise, comme l’e-mail. Il a été inventé en **1989** au CERN, près de Genève, par **Tim Berners-Lee**.'],
          ['Le Minitel, exception française', 'Dès **1982**, la France déploie le **Minitel** : annuaire, messageries, réservations… Des millions de foyers sont connectés bien avant le Web. Le service ferme en 2012.']
        ],
        deep: [
          '**Le langage commun.** En 1974, Vint Cerf et Bob Kahn décrivent le protocole TCP/IP, qui permet à des réseaux différents de communiquer. ARPANET l’adopte le 1er janvier 1983 : beaucoup y voient la vraie date de naissance d’Internet.',
          '**Une inspiration française.** Le réseau français Cyclades, conçu par Louis Pouzin au début des années 1970, a introduit le principe des « datagrammes », des paquets de données circulant indépendamment, qui a influencé TCP/IP.',
          '**Le @.** En 1971, l’ingénieur Ray Tomlinson envoie le premier e-mail entre deux ordinateurs et choisit le symbole @ pour séparer le nom de l’utilisateur de celui de la machine.',
          '**Le Web s’ouvre au monde.** Le premier site web, info.cern.ch, est mis en ligne en 1991. En 1993, le CERN place la technologie du Web dans le domaine public : n’importe qui peut l’utiliser librement, ce qui explique son explosion.'
        ],
        quiz: [
          { q: 'Qui a inventé le Web ?', c: ['Tim Berners-Lee', 'Bill Gates', 'Steve Jobs', 'Vint Cerf'], e: 'Tim Berners-Lee, au CERN, en 1989. Vint Cerf est l’un des pères du protocole TCP/IP d’Internet.' },
          { q: 'Quel était le premier message envoyé sur ARPANET ?', c: ['« LO » (LOGIN interrompu)', '« HELLO »', '« TEST »', '« WWW »'], e: 'Le système a planté après les deux premières lettres de « LOGIN ».' },
          { q: 'Internet et le Web, c’est…', c: ['Deux choses différentes : le Web est un service d’Internet', 'Exactement la même chose', 'Le Web est plus ancien qu’Internet', 'Internet est un service du Web'], e: 'Internet est l’infrastructure (le réseau) ; le Web, l’ensemble des pages reliées par des liens, n’est qu’un des services qui l’utilisent.' }
        ]
      },
      {
        id: 'technologie-ia', title: 'L’intelligence artificielle', min: 2,
        cards: [
          ['Le test de Turing (1950)', 'Le mathématicien **Alan Turing** propose un test : une machine est « intelligente » si, en conversant par écrit, on ne peut pas la distinguer d’un humain.'],
          ['Naissance d’un nom', 'L’expression **« intelligence artificielle »** naît en **1956** lors d’une conférence au Dartmouth College, aux États-Unis.'],
          ['Les machines battent les champions', 'En **1997**, l’ordinateur **Deep Blue** d’IBM bat le champion du monde d’échecs Garry Kasparov. En **2016**, **AlphaGo** bat Lee Sedol au jeu de go, réputé bien plus complexe.'],
          ['Comment fonctionnent les chatbots ?', 'Les grands modèles de langage apprennent sur d’immenses quantités de textes à **prédire la suite la plus probable** d’un texte, morceau par morceau. Impressionnants… mais ils peuvent se tromper avec assurance : vérifiez toujours !']
        ],
        quiz: [
          { q: 'Quel ordinateur a battu Garry Kasparov aux échecs en 1997 ?', c: ['Deep Blue', 'AlphaGo', 'Watson', 'HAL 9000'], e: 'Deep Blue, développé par IBM. HAL 9000 est l’ordinateur fictif de *2001, l’Odyssée de l’espace*.' },
          { q: 'Lors de quel événement l’expression « intelligence artificielle » est-elle née ?', c: ['Une conférence à Dartmouth en 1956', 'La Seconde Guerre mondiale', 'L’invention du Web en 1989', 'Le lancement d’Apollo 11'], e: 'À la conférence de Dartmouth, à l’été 1956, organisée notamment par John McCarthy.' },
          { q: 'Que propose le test de Turing ?', c: ['Distinguer une machine d’un humain par la conversation', 'Mesurer la vitesse d’un ordinateur', 'Battre un humain aux échecs', 'Calculer plus vite qu’un humain'], e: 'Si un juge ne sait pas dire, à l’écrit, s’il parle à une machine ou à un humain, la machine « réussit » le test.' }
        ]
      }
    ]
  },
  {
    id: 'gastronomie', name: 'Gastronomie', emoji: '🥐', color: '#E67E22',
    d: 'Histoires savoureuses de nos assiettes.',
    lessons: [
      {
        id: 'gastronomie-origines', title: 'Des origines surprenantes', min: 1,
        cards: [
          ['Le croissant… autrichien ?', 'Il descend du **kipferl** viennois. Il se popularise à Paris vers 1840, notamment grâce à une boulangerie viennoise ouverte par l’Autrichien August Zang. La version feuilletée au beurre, elle, est bien française.'],
          ['La tomate, venue d’Amérique', 'Pas de tomate en Europe avant le **XVIe siècle** : elle arrive d’Amérique après les voyages de Christophe Colomb. Longtemps jugée suspecte, elle ne s’impose vraiment dans la cuisine italienne qu’aux XVIIIe-XIXe siècles. Même chose pour la pomme de terre, le maïs ou le chocolat !']
        ],
        quiz: [
          { q: 'De quelle viennoiserie autrichienne descend le croissant ?', c: ['Le kipferl', 'Le strudel', 'La brioche', 'Le kouglof'], e: 'Le kipferl, un petit pain viennois en forme de croissant, qui n’était pas feuilleté.' },
          { q: 'D’où vient la tomate ?', c: ['D’Amérique', 'D’Italie', 'D’Inde', 'D’Égypte'], e: 'D’Amérique du Sud et centrale. Elle arrive en Europe au XVIe siècle.' }
        ]
      },
      {
        id: 'gastronomie-patrimoine', title: 'Un patrimoine gourmand', min: 2,
        cards: [
          ['Le repas gastronomique des Français', 'En **2010**, il est inscrit au **patrimoine culturel immatériel de l’UNESCO** : pas un plat en particulier, mais un rituel (apéritif, entrée, plat, fromage, dessert, accords mets-vins).'],
          ['La baguette', 'En **2022**, c’est au tour du savoir-faire artisanal et de la culture de la **baguette** de rejoindre la liste de l’UNESCO. Il s’en vend environ 6 milliards par an en France.'],
          ['Le roquefort, pionnier', 'La France compte plus de **1 000 fromages**. Le **roquefort** est le premier à obtenir une appellation d’origine, dès **1925** ; il doit être affiné dans les caves de Roquefort-sur-Soulzon.'],
          ['Le Guide Michelin', 'Créé en **1900** par les frères Michelin pour inciter les automobilistes à rouler… et donc à user leurs pneus ! Les étoiles apparaissent en 1926.']
        ],
        quiz: [
          { q: 'Quel fromage a obtenu la première appellation d’origine, en 1925 ?', c: ['Le roquefort', 'Le camembert', 'Le comté', 'Le brie de Meaux'], e: 'Le roquefort, protégé par une loi de 1925.' },
          { q: 'Pourquoi les frères Michelin ont-ils créé leur guide ?', c: ['Pour inciter à rouler et donc à user des pneus', 'Pour promouvoir leurs restaurants', 'Pour répondre à une demande du gouvernement', 'Pour concurrencer le Guide du routard'], e: 'Le guide, d’abord gratuit, donnait des adresses utiles aux automobilistes : plus ils roulaient, plus ils achetaient de pneus.' },
          { q: 'Qu’a inscrit l’UNESCO en 2022 ?', c: ['Le savoir-faire et la culture de la baguette', 'Le croissant', 'Le repas gastronomique des Français', 'La cuisine lyonnaise'], e: 'La baguette, en 2022. Le repas gastronomique des Français avait été inscrit en 2010.' }
        ]
      }
    ]
  }
];

/*
 * Extensions : les fichiers content-*.js ajoutent du contenu sans modifier ce fichier.
 *   addLessons('histoire', [ ...leçons ])   ajoute des leçons à un thème existant
 *   addDeep('histoire-berlin', [ ...paragraphes ])   ajoute un « Pour aller plus loin »
 *   addTheme({ id, name, emoji, color, d, lessons })   ajoute un nouveau thème
 */
function addLessons(themeId, lessons) {
  const theme = THEMES.find(t => t.id === themeId);
  if (!theme) throw new Error('Thème inconnu : ' + themeId);
  theme.lessons.push(...lessons);
}
function addDeep(lessonId, paragraphs) {
  for (const t of THEMES) {
    const lesson = t.lessons.find(l => l.id === lessonId);
    if (lesson) { lesson.deep = paragraphs; return; }
  }
  throw new Error('Leçon inconnue : ' + lessonId);
}
function addTheme(theme) {
  THEMES.push(theme);
}
