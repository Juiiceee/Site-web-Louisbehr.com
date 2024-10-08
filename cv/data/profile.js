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
			src: "https://linkedin.com/in/louis-behr",
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
		"Rust",
		"Next.js",
		"React.js",
		"React Native",
		"Typescript",
		"JavaScript",
		"SQL",
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
		{
			organization: "Solana",
			title: `Solana Summer Fellowship 2024`,
			date: "22 Jul - 21 sept 2024",
			details: [`<a>https://github.com/Juiiceee/Fellowship_Solana</a>`,
				`The <strong>Solana Summer Fellowship</strong> is designed to be <strong>completed</strong> over a period of <strong>2 months</strong>,
				with a focus on <strong>key concepts</strong> of Solana, ranging from <strong>smart contract development</strong> to <strong>decentralized application</strong> (dApp) <strong>deployment</strong>.
				We had to complete a <strong>series</strong> of <strong>practical exercises</strong> aimed at <strong>immersing</strong> us in the <strong>world</strong> of the <strong>Solana blockchain</strong>, including:
				<ul>
					<li><strong>Key generation</strong> and <strong>SOL airdrop</strong> in <strong>CLI</strong></li>
					<li><strong>Token creation</strong> (<strong>Mint</strong>, <strong>Burn</strong>, <strong>Transfer</strong>, and <strong>Delegate</strong>)</li>
					<li><strong>Creation</strong> of a <strong>token vault</strong> with <strong>Anchor</strong></li>
					<li><strong>Native program</strong> with <strong>withdrawal-limited accounts</strong></li>
					<li><strong>Debugging</strong> a program in <strong>Rust</strong></li>
					<li>Solana <strong>Pay payments</strong></li>
					<li><strong>Mobile app</strong> to <strong>transform photos</strong> into <strong>NFTs</strong></li>
					<li><strong>Minting cNFTs</strong> for the <strong>Fellows</strong> on the <strong>Mainnet</strong></li>
				</ul>`]
			,
		},
	],
	projects: [
		{
			title: "Hackathon Vierzon 2024",
			duration: "04 - 06 Oct 2024",
			link: "https://github.com/Juiiceee/Trusted-Hackathon-Vierzon-2024",
			desc: `<strong>Trusted</strong> est une plateforme qui permet de <strong>financer</strong> directement des projets concrets sans passer par une association.
			Plutôt que de verser des dons à une organisation dont l'<strong>utilisation des fonds reste floue</strong>,
			les donateurs peuvent voir <strong>précisément</strong> comment leur argent sera <strong>utilisé</strong>.
			Prenons l'exemple d'un projet de construction d'un <strong>puits en Afrique</strong>.
			La personne initiant le projet soumet des <strong>devis détaillés</strong> des différentes entreprises qui interviendront.
			Chaque coût est <strong>transparent</strong>, offrant une vue claire des besoins financiers.
			Si le projet <strong>séduit un donateur</strong>, il peut choisir de le financer en <strong>crypto</strong>.
			Une fois que le <strong>montant total</strong> est <strong>atteint</strong>, les <strong>fonds</strong> sont <strong>automatiquement transférés</strong> aux <strong>entreprises concernées</strong>.
			En <strong>récompense</strong>, le donateur reçoit un <strong>NFT</strong> comme preuve de sa <strong>contribution caritative</strong>,
			ouvrant la voie à une possible <strong>exonération fiscale</strong>.
			<strong>Trusted</strong> offre ainsi une nouvelle manière de faire de la charité :
			<strong>transparente</strong>, <strong>directe</strong> et basée sur la <strong>confiance</strong>,
			grâce à la technologie blockchain.`,
		},
		{
			title: "Hackathon ETHGlobal Brussels",
			duration: "12 - 14 Jul 2024",
			link: "https://github.com/Juiiceee/Whippin_Music-EthGlobal-Bru2024",
			desc: `This project was born from a podcast where a <strong>content creator</strong>, who produces <strong>long-form videos</strong>,
		mentioned that he didn't mind if his video got <strong>demonetized</strong> due to the music as long as it was <strong>perfect</strong>.
		The problem lies in <strong>obtaining a license to legally</strong> use music, as contacting <strong>rights holders</strong> and <strong>negotiating a price</strong> can be a <strong>challenging task</strong>.
		Thus, we came up with a <strong>solution</strong> in the form of a <strong>marketplace</strong> that <strong>connects artists</strong> and <strong>content creators</strong>.
		On this <strong>platform</strong>, <strong>artists</strong> can <strong>publish</strong> their <strong>music</strong> and <strong>set a price</strong>. The <strong>uploaded music</strong> is <strong>stored</strong> via <strong>Filecoin</strong>.
		Content creators can listen to the music to see if it suits their needs.
		If they find a piece of music they like, they <strong>can mint an NFT</strong> with the <strong>Filecoin IPFS</strong> link of the music by <strong>paying the set price</strong>.
		The <strong>license</strong> represented by the <strong>NFT is unlimited in duration</strong>. Once the <strong>NFT</strong> is in their <strong>library</strong>,
		the content creator can <strong>link</strong> the NFT to the URL of their video to <strong>authenticate</strong> the use of the music.
		The link is <strong>single-use</strong>, meaning it <strong>cannot be changed or replaced</strong>.`,
		},
		{
			title: "Hackathon Allfeat 2nd",
			duration: "14 - 16 Jun 2024",
			link: "https://github.com/Juiiceee/Sample",
			desc: `I participated in a <strong>Hackathon</strong> organized by <strong>Allfeat</strong>, held from the 14th to the 16th June 2024.</br>
		Allfeat is a blockchain dedicated to the <strong>musical industry</strong>.
		The theme of this Hackathon was the <strong>integration of music</strong> into <strong>blockchain</strong>.
		This blockchain allows to development in <strong>Rust</strong> or <strong>Solidity</strong>, because it’s <strong>EVM compatible</strong>.</br>
		I was in a team with 2 <strong>front-ends</strong> developers, 1 <strong>back-end</strong> developer, 1 <strong>UI/UX</strong> designer and 1 <strong>blockchain</strong> developer (myself).
		Our <strong>Sample</strong> project is designed to enable <strong>all types</strong> of <strong>content creators</strong> to use <strong>music</strong> of <strong>great artists</strong> for <strong>their creations</strong>.</br>
		For instance, an <strong>artist</strong> can put his music over-the-counter with a <strong>set price</strong>, allowing a buyer to <strong>acquire</strong> the <strong>rights</strong> to <strong>use its content</strong>.
		Once the buyer has purchased the right to use said music in its contents, he can <strong>link</strong> it to the <strong>URL</strong> of the content, <strong>getting</strong> the <strong>right to use it</strong>.
		This right to use is represented in a <strong>single use NFT</strong>, once the  <strong>NFT</strong> is linked to a  <strong>URL</strong>, it <strong>cannot</strong> be <strong>modified</strong>.`,
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
