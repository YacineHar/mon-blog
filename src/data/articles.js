const articles = [
  {
    id: 1,
    title: "Festival Paris",
    img: {
      src: "https://cdn.pixabay.com/photo/2018/05/10/11/34/concert-3387324_1280.jpg",
      alt: "Festival Paris"
    },
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam facere sequi a illum quam minima dignissimos, molestiae, cum enim reiciendis quod. Vel veniam ratione provident repudiandae praesentium iste ducimus animi. Corporis nobis quidem beatae. Quis sed cumque quibusdam. Et qui animi cupiditate fuga beatae dolores, ut iusto eligendi ex ratione tenetur. Explicabo nulla distinctio voluptas, alias cum earum dolor necessitatibus?",
    categories: ["Concert", "Festival", "Musique"],
    tags: [
      { id: 1, name: "été", slug: "ete" },
      { id: 2, name: "2 jours", slug: "2_jours" },
      { id: 3, name: "Paris", slug: "paris" }
    ]
  },
  {
    id: 2,
    title: "Escapade en mer",
    img: {
      src: "https://cdn.pixabay.com/photo/2023/10/11/13/41/ship-8308680_1280.jpg",
      alt: "Escapade en mer"
    },
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam facere sequi a illum quam minima dignissimos, molestiae, cum enim reiciendis quod. Vel veniam ratione provident repudiandae praesentium iste ducimus animi. Corporis nobis quidem beatae. Quis sed cumque quibusdam. Et qui animi cupiditate fuga beatae dolores, ut iusto eligendi ex ratione tenetur. Explicabo nulla distinctio voluptas, alias cum earum dolor necessitatibus?",
    categories: ["Mer", "Bateau", "Vacances"],
    tags: [
      { id: 1, name: "Escapade", slug: "escapade" },
      { id: 2, name: "Tourisme", slug: "tourisme" },
      { id: 3, name: "Méditerranée", slug: "mediterranee" }
    ]
  },
  {
    id: 3,
    title: "Festival Electro",
    img: {
      src: "https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg",
      alt: "Festival Electro"
    },
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam facere sequi a illum quam minima dignissimos, molestiae, cum enim reiciendis quod. Vel veniam ratione provident repudiandae praesentium iste ducimus animi. Corporis nobis quidem beatae. Quis sed cumque quibusdam. Et qui animi cupiditate fuga beatae dolores, ut iusto eligendi ex ratione tenetur. Explicabo nulla distinctio voluptas, alias cum earum dolor necessitatibus?",
    categories: ["Concert", "Festival", "Musique"],
    tags: [
      { id: 1, name: "Electro", slug: "electro" },
      { id: 2, name: "Montpellier", slug: "montpellier" },
      { id: 3, name: "Dj", slug: "dj" }
    ]
  },
  {
    id: 4,
    title: "Randonnée en montagne",
    img: {
      src: "https://cdn.pixabay.com/photo/2021/02/07/05/15/road-5990128_1280.jpg",
      alt: "Randonnée en montagne"
    },
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam facere sequi a illum quam minima dignissimos, molestiae, cum enim reiciendis quod. Vel veniam ratione provident repudiandae praesentium iste ducimus animi. Corporis nobis quidem beatae. Quis sed cumque quibusdam. Et qui animi cupiditate fuga beatae dolores, ut iusto eligendi ex ratione tenetur. Explicabo nulla distinctio voluptas, alias cum earum dolor necessitatibus?",
    categories: ["Randonnée", "Montagne", "Loisir"],
    tags: [
      { id: 1, name: "Escapade", slug: "escapade" },
      { id: 2, name: "Tourisme", slug: "tourisme" },
      { id: 3, name: "Sud", slug: "sud" }
    ]
  },
  {
    id: 5,
    title: "Concert de jazz au Sunset",
    img: {
      src: "https://cdn.pixabay.com/photo/2018/05/10/11/34/concert-3387324_1280.jpg",
      alt: "Concert en plein air"
    },
    text: "Une soirée jazz dans un club parisien, avec un quartet qui joue des standards et quelques compositions. La salle est petite, on est vraiment proche des musiciens. Le concert dure environ deux heures avec une pause au milieu.",
    categories: ["Concert", "Musique", "Jazz"],
    tags: [
      { id: 1, name: "Jazz", slug: "jazz" },
      { id: 2, name: "Paris", slug: "paris" },
      { id: 3, name: "Soirée", slug: "soiree" }
    ]
  },
  {
    id: 6,
    title: "Week-end à Marseille",
    img: {
      src: "https://cdn.pixabay.com/photo/2023/10/11/13/41/ship-8308680_1280.jpg",
      alt: "Bateau en mer"
    },
    text: "Deux jours à Marseille entre le Vieux Port et les calanques. On peut faire la randonnée jusqu'à Sugiton le matin et redescendre se baigner. Prévoir de l'eau et de bonnes chaussures, le sentier monte bien.",
    categories: ["Voyage", "Mer", "Vacances"],
    tags: [
      { id: 1, name: "Marseille", slug: "marseille" },
      { id: 2, name: "Calanques", slug: "calanques" },
      { id: 3, name: "2 jours", slug: "2_jours" }
    ]
  },
  {
    id: 7,
    title: "Les Vieilles Charrues",
    img: {
      src: "https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg",
      alt: "Public d'un festival"
    },
    text: "Le plus gros festival de Bretagne, quatre jours de concerts avec du rock, du rap et de l'électro. Le camping est juste à côté du site. Les billets partent vite, il faut s'y prendre dès l'ouverture de la billetterie.",
    categories: ["Festival", "Musique", "Concert"],
    tags: [
      { id: 1, name: "Bretagne", slug: "bretagne" },
      { id: 2, name: "4 jours", slug: "4_jours" },
      { id: 3, name: "Camping", slug: "camping" }
    ]
  },
  {
    id: 8,
    title: "Tour du Mont Blanc",
    img: {
      src: "https://cdn.pixabay.com/photo/2021/02/07/05/15/road-5990128_1280.jpg",
      alt: "Route de montagne"
    },
    text: "Une semaine de marche autour du massif, en passant par la France, l'Italie et la Suisse. On dort en refuge et il faut réserver plusieurs mois avant. Les étapes font entre cinq et sept heures de marche par jour.",
    categories: ["Randonnée", "Montagne", "Sport"],
    tags: [
      { id: 1, name: "Alpes", slug: "alpes" },
      { id: 2, name: "7 jours", slug: "7_jours" },
      { id: 3, name: "Refuge", slug: "refuge" }
    ]
  },
  {
    id: 9,
    title: "Festival de rue à Aurillac",
    img: {
      src: "https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg",
      alt: "Public d'un festival"
    },
    text: "Pendant quatre jours toute la ville se transforme en scène. Les compagnies jouent dans la rue, sur les places et dans les cours. La plupart des spectacles sont gratuits, il suffit de se promener pour tomber dessus.",
    categories: ["Festival", "Théâtre", "Spectacle"],
    tags: [
      { id: 1, name: "Cantal", slug: "cantal" },
      { id: 2, name: "Gratuit", slug: "gratuit" },
      { id: 3, name: "Été", slug: "ete" }
    ]
  },
  {
    id: 10,
    title: "Balade en voilier sur l'Atlantique",
    img: {
      src: "https://cdn.pixabay.com/photo/2023/10/11/13/41/ship-8308680_1280.jpg",
      alt: "Bateau en mer"
    },
    text: "Une sortie à la journée au départ de La Trinité sur Mer. Le skipper explique les manoeuvres et on peut tenir la barre. Même sans expérience ça se fait très bien, mais il vaut mieux vérifier la météo avant de réserver.",
    categories: ["Mer", "Bateau", "Loisir"],
    tags: [
      { id: 1, name: "Bretagne", slug: "bretagne" },
      { id: 2, name: "Voile", slug: "voile" },
      { id: 3, name: "Journée", slug: "journee" }
    ]
  },
  {
    id: 11,
    title: "Nuit électro à Montpellier",
    img: {
      src: "https://cdn.pixabay.com/photo/2018/05/10/11/34/concert-3387324_1280.jpg",
      alt: "Concert en plein air"
    },
    text: "Une nuit entière avec plusieurs dj qui se relaient jusqu'au petit matin. La salle est immense et le son est très bon. Pensez aux bouchons d'oreilles, ça sauve les oreilles pour le lendemain.",
    categories: ["Concert", "Musique", "Festival"],
    tags: [
      { id: 1, name: "Electro", slug: "electro" },
      { id: 2, name: "Montpellier", slug: "montpellier" },
      { id: 3, name: "Dj", slug: "dj" }
    ]
  },
  {
    id: 12,
    title: "Via ferrata dans le Vercors",
    img: {
      src: "https://cdn.pixabay.com/photo/2021/02/07/05/15/road-5990128_1280.jpg",
      alt: "Route de montagne"
    },
    text: "Un parcours accroché à la falaise, avec un câble et des barreaux en métal. Le matériel se loue sur place et un guide accompagne les débutants. Il ne faut pas avoir le vertige mais aucune technique d'escalade n'est demandée.",
    categories: ["Montagne", "Sport", "Loisir"],
    tags: [
      { id: 1, name: "Vercors", slug: "vercors" },
      { id: 2, name: "Escalade", slug: "escalade" },
      { id: 3, name: "Demi-journée", slug: "demi_journee" }
    ]
  }
]

export default articles
