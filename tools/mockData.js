const articles = [
  {
    id: 1,
    slug: "Posada-Lune-de-Miel",
    title: "Posada Lune de Miel",
    shortArticle: {
      subTitle: "Posada Lune de Miel – best value Punta del Diablo hotel",
      resume:
        "These impeccable, colourful cabins are the best value hotel you’ll find in Punta del Diablo. Just minutes from the beach with a lovely central pool.",
    },
    text:
      '<h3>The prettiest red cabins clustered around a small swimming pool in a bougainvillea and palm-filled garden. Lune de Miel is the best value hotel you’ll find in hippie-chic Punta del Diablo</h3><p class="western" lang="en-GB"><span>At Posada Lune de Miel, each impeccably-maintained, cheerful cabin has its own living room and spotless bathroom and kitchenette. Their very efficient design means that even though the square footage is small, they function very well. An opt-in breakfast is brought to you on a tray at a time you specify and is fresh and ample. </span></p><p class="western" lang="en-GB"><span>French owner Jean previously ran a Michelin-recommended hotel in the Pyrenees. His partner Natalia is Uruguayan and lived for years in the USA. Between them they speak five languages including <strong>English, French, Spanish, German and Italian</strong>. The team goes out of their way to make you feel at home.&nbsp;</span></p><p class="western" lang="en-GB"><span>The cabins are on the side of a<strong> gentle forested hill minutes walk from the beach</strong> and just around the block from an outstanding restaurant. You’re not too far from the town centre but far enough from the hubbub of high season. Optional maid service and breakfast keep prices excellent value especially off season.</span></p>',
    photoMain:
      "https://i2.wp.com/guruguay.com/wp-content/uploads/2019/05/Posada-Lune-De-Miel-Punta-Del-Diablo-Uruguay-13.jpg?w=1080&ssl=1",
    photos: "",
    video: "",
  },
  {
    id: 2,
    slug: "Salon-No-3",
    title: "Salon No. 3",
    shortArticle: {
      subTitle: "Salon No. 3 – La Barra cuisine",
      resume:
        "New La Barra restaurant in a vintage furniture store. Pull up a chair in the kitchen as the chef preps just-caught fish & his home-grown organic veggies.",
    },
    text:
      '<h3>Welcome to La Barra, Uruguay and a new restaurant out back of a vintage furniture store.</h3><p class="western"><strong>Pull up a chair in the kitchen and chat to the chef who grows his own vegetables and sources fish one by one from hobbyists</strong></p><p><span style="font-size: 16px;"><br>In Salon No. 3<strong> it’s all about the ingredients</strong> – and Uruguay has got GREAT ingredients. Cooked with a minimum of intervention, Salon No. 3 showcases local <strong>meat, seafood, fish</strong>–caught by hobbyists who’ll call up to offer what they just hooked–, <strong>locally-milled grains and organic vegetables and olive oil</strong> from the nearby sierras.</span></p>',
    photoMain:
      "https://i0.wp.com/guruguay.com/wp-content/uploads/2020/02/salon-n3-26.jpg?w=1080&ssl=1",
    photos: "",
    video: "",
  },
  {
    id: 3,
    slug: "Hotel-Solis",
    title: "Hotel Solis",
    shortArticle: {
      subTitle: "Hotel Solis – historic, coastal B&B",
      resume:
        "Be a part of history. Once the best hotel in Uruguay-and British spy HQ in WW2!-, nestling by beaches, wineries and trekking, and being lovingly restored.",
    },
    text:
      "<h3><strong>Live a piece of history in what may become one of the best hotels in Uruguay</strong></h3><p><strong>Minutes from iconic beaches and nestling in the most picturesque landscapes and trekking in Uruguay, soak up the serenity at this truely vintage hotel.</strong></p><p>All my Uruguayan friends were so happy when, after years of abandonment, the Hotel Solis, once one of the best hotels in Uruguay, reopened in January 2020 as a <strong>delightful B&amp;B and tea-room</strong> with the kindest, most attentive owners.</p>",
    photoMain:
      "https://i2.wp.com/guruguay.com/wp-content/uploads/2020/02/fullsizeoutput_1d2a-scaled.jpeg?w=1080&ssl=1",
    photos: "",
    video: "",
  },
  {
    id: 4,
    slug: "Haras-Las-Tordillas",
    title: "Haras Las Tordillas",
    shortArticle: {
      subTitle: "Haras Las Tordillas – A horse-riding paradise",
      resume:
        "A luxury lodge nestling in the hills of Eden. A secret spot for horse-riding in Uruguay. For horse lovers, wine lovers & lovers of peace & tranquility.",
    },
    text:
      '<h3>This luxury hotel and horse ranch nestles in the hills of Eden, a secret spot for horse-riding in Uruguay&nbsp;</h3><p><span style="font-size: 16px;"><strong>It’s perfect for horse lovers, wine lovers, and lovers of peace and tranquility.</strong></span></p><p>Haras Las Tordillas was opened in 2018 by riding enthusiast Cris Glenz. Whether you choose the Haras as <strong>your base for horse-riding in Uruguay</strong> or <strong>detoxing from the modern world</strong>, you’ll be one of a handful of guests at this luxury lodge.</p><p>The Haras lodge has <strong>just four rooms</strong>. Each cabin faces the <strong>unspoiled rolling hills</strong> typical of this part of Uruguay and is <strong>beautifully decorated</strong> in a South American country style. The morning sunrise from your <strong>private deck</strong> is something else. Relax in the sumptuous <strong>clubhouse</strong> next to the open fireplace or sip a cold white wine by the <strong>swimming pool</strong>. Wherever you look, the views are exceptional.</p>',
    photoMain:
      "https://i0.wp.com/guruguay.com/wp-content/uploads/2020/02/MG_7995-4.jpg?w=1080&ssl=1",
    photos: "",
    video: "https://www.youtube.com/embed/uuFMFvQPwJk?feature=oembed",
  },
];

const newArticle = {
  id: null,
  title: "",
  shortArticle: {
    subTitle: "",
    resume: "",
  },
  text: "",
  photoMain: "",
  photos: "",
  video: "",
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  articles,
  newArticle,
};
