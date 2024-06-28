const profileData = {
  title: "Resume",
  name: "Behr Louis",
  sub_title: "Student Developpeur",
  logoURL: "assets/images/lbehr.jpg",
  about: {
    intro: `I am an entreprener and a passionate developper, I love hardware, create `,
    contact: {
      email: "lbehr@student.42.fr",
      phone: "+33769916266",
      address: "Paris, FR",
    },
  },
  links: [
    {
      title: "LinkedIn",
      src: "www.linkedin.com/in/louis-behr-011b45208",
      iconClass: "fa-brands fa-linkedin-in",
    },
    {
      title: "Github",
      src: "https://github.com/Juiiceee",
      iconClass: "fa-brands fa-github",
    },
	{
		title: "Instagram",
		src: "https://instagram.com/Louisbehr_",
		iconClass: "fa-brands fa-instagram",
	  },
  ],
  skills: [
	  "C",
	  "C++",
	  "Python",
	  "Solidity",
	  "SQL",
	  "JavaScript",
	  "CSS3",
	  "HTML5",
  ],
  experiences: [
    {
      organization: "Efluid",
      title: `Software tester / SQL developpeur`,
      date: "Nov 2022 - Jul 2023",
      details: [
        `Creation of <strong> SQL </strong> prestation, <strong>sofware tester</strong>, <strong>project management</strong>.`,
        `<strong>API REST</strong>, <strong>SOAP UI</strong>.`,
      ],
    },
    {
      organization: "CFAI LORRAINE-API",
      title: `IT service apprentices`,
      date: "Sept 2020 - Jul 2022",
      details: [
        `HelpDesk, Installation of computer rooms, Security of server room (<strong>camera, biometric system, NAS</strong>)`,
        `<strong>3D Modeling</strong>, <strong>video montage</strong>, <strong>Dev C and Web</strong>`,
      ],
    },
  ],
  projects: [
	{
		title: "Hackathon Allfeat 2nd",
		duration: "14 - 16 Jun 2024",
		desc: `J'ai participé à l'Hackathon organisé par Allfeat, qui s'est tenu du 14 au 16 juin 2024.
		Allfeat est une blockchain dédiée à l'industrie musicale.
		Le thème de cet Hackathon était l'intégration de la musique dans la blockchain.
		Cette blockchain permet de développer en Rust ou en Solidity, car elle est compatible avec l'EVM.
		J'étais en équipe avec deux développeurs front-end, un développeur back-end, une designeuse UI/UX, et moi-même, développeur blockchain.
		Notre projet, nommé Sample, vise à permettre aux petits comme aux grands créateurs de contenu d'utiliser les musiques de grands artistes pour leurs créations.
		Par exemple, un artiste peut mettre sa musique en vente libre avec un prix défini, permettant à un acheteur d'acquérir le droit de l'utiliser dans son contenu.
		Une fois que l'acheteur a acheté le droit d'utiliser la musique, il peut lier la musique à l'URL de son contenu, obtenant ainsi le droit de l'utiliser.
		Ce droit d'utilisation est représenté par un NFT à usage unique. Une fois que le NFT est lié à une URL, il ne peut plus être modifié.`,
	  },
	{
		title: "Excel generator to know the value of my shoe collection",
		duration: "Jul - sept 2022",
		link: "<a href='https://github.com/Juiiceee/BotPyListingPrice'>BotPyListingPrice</a>",
		desc: `I love <strong>sneakers</strong> and I have a lot of them,
		but I don't know the <strong>price</strong> of my entire <strong>collection</strong>.
		So, I developed a little software in <strong>Python</strong> that uses a <strong>request API</strong> on <strong>StockX</strong>.
		I <strong>scraped</strong> the returned <strong>JSON file</strong> to extract the prices in my <strong>size</strong>,
		and it puts <strong>all the values</strong> in an <strong>.xls file</strong>.
		It also <strong>sends me an email</strong> with a <strong>graph showing the increases and decreases each week</strong>.`,
	},
    {
      title: "Ethereum mining",
      duration: "Jan 2021 - Jul 2022",
      desc: `When I started to become interested in the <strong>Blockchain Ecosystem</strong>,
	  I always liked hardware, which led me to <strong>mining</strong>.
	  I started with an <strong>RTX 3070 no LHR</strong>, and five months later,
	  I added another one.
	  It was really cool to set it up,
	  managing both the <strong>hardware</strong> and <strong>software installation</strong>,
	  and realizing that we can <strong>generate money </strong>with our <strong>graphics cards</strong>.
	  I also had to manage <strong>power consumption</strong>, <strong>overclocking</strong>,
	  the <strong>price of Ethereum</strong>,
	  as well as the <strong>wear and tear</strong> of the cards due to heat.`,
    },
  ],
  education: [
    {
      alma: "42 Paris, Paris",
      duration: "2023 - present",
      std: "Student Developper",
      score: "in progress...",
    },
    {
      alma: "POLE FORMATION UIMM, Maxeville",
      duration: "2020 - 2022",
      std: "BTS Systeme Numerique option Reseaux et Informatique (SNIR)",
      score: "Bien",
    },
    {
      alma: "Lycee Louis Vincent, Metz",
      duration: "2017 - 2020",
      std: "Bac STI2D spécialité Innovation Technologique et Eco-Conception (ITEC)",
      score: "Assez bien",
    },
  ],
  /*certifications: [
    {
      desc: `<strong>Mobile Web Specialist Nanodegree</strong> by <strong>Udacity</strong>.
      (<a target='_blank' rel='noreferrer' href='https://confirm.udacity.com/RLMHXAWZ'>https://goo.gl/RGRzVn</a>)`,
      date: "May - Nov 2018",
    },
    {
      desc: `<strong>Introduction to Modern Application Development</strong>, a MOOC by <em> NPTEL (IIT Madras)
      and Hasura</em>. Ranked at <strong> top 10 percentile </strong> among more than 2500 candidates.
       (<a target='_blank' rel='noreferrer' href='https://nptel.ac.in/noc/E_Certificate/linkedin/noc17-cs06/NPTEL17CS0626270067AN.jpg'>
       https://goo.gl/X3HEdR</a>)`,
      date: "Jan - Mar 2017",
    },
  ],*/
  events: [],
};
