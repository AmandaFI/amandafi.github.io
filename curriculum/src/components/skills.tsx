import { VscAdd } from "react-icons/vsc";

const porjectsSec1 = [
	<ul>
		<li>
			<a href="https://github.com/AmandaFI/MyTopFavorite-Web-Application-Backend">
				Aplicação em Ruby on Rails utilizando o banco de PostgreSQL, a camada ORM Active Record e seguindo o padrão
				Model-ViewController (MVC)
			</a>
		</li>
		<li>
			<a href="https://github.com/AmandaFI/MyTopFavorite-Web-Application-Backend-2">
				Aplicação em NestJS utilizando TypeScript, banco de dados SQLite e a camada ORM Prisma.
			</a>
		</li>
	</ul>,
	<ul>
		<li>
			<a href="https://github.com/AmandaFI/MyTopFavorite-Web-Application-Backend/tree/graphql-jwt-version">
				Aplicação em Ruby on Rails utilizando a GraphQL.
			</a>
		</li>
	</ul>,
	<ul>
		<li>
			<a href="https://github.com/AmandaFI/MyTopFavorite-Web-Application-Frontend">
				Front end de uma plataforma de mídia social implementado com TypeScript, Vite, React e Material UI.
			</a>
		</li>
		<li>
			<a href="https://github.com/AmandaFI/amandafi.github.io">
				Currículo e portifólio implementado com TypeScript, Vite, React e Bootstrap.
			</a>
		</li>
	</ul>,
];

const sec1Text = [
	"Implementação de APIs seguindo o padrão REST:",
	"Implementação de APIs utilizando GraphQL: ",
	"Desenvolvimento de aplicações front end com React:",
];

const sec2Text = [
	"Implementação de Redes Neurais Convolucionais (CNN):",
	"Implementação Redes Neurais Artificiais (ANN): ",
	"Implementação de Redes Neurias Long Short Term Memory (LSTM):",
	"Utilização de Métodos de Machine Learning:",
];

const sec4Text = ["Processamento de imagens:", "Aplicação da técnica de Detecção de Carácteres OCR:"];

const sec3Text = ["Programação Funcional:", "Injeção e Inversão de Dependência", "Memoization", "Expressões Regulares"];
const porjectsSec3 = [
	<ul>
		<li>Closures</li>
		<li>Higher Order Functions (HOF)</li>
		<li>Imutabilidade</li>
		<li>Funções Puras</li>
		<li>Programação Declarativa</li>
	</ul>,
];

const sec5Text = [
	<i className="devicon-typescript-plain colored"></i>,
	<i className="devicon-javascript-plain colored"></i>,
	<i className="devicon-python-plain colored"></i>,
	<i className="devicon-nestjs-plain-wordmark colored"></i>,
	<i className="devicon-react-original-wordmark colored"></i>,
	<i className="devicon-ruby-plain colored"></i>,
	<i className="devicon-rails-plain-wordmark colored"></i>,
	<i className="devicon-postgresql-plain-wordmark colored"></i>,
	<i className="devicon-sqlite-plain-wordmark colored"></i>,
	<i className="devicon-github-original-wordmark colored"></i>,
	<i className="devicon-linux-plain colored"></i>,

	"Prisma, Vite, Windows, WSL Windows, Virtual Box",
];

{
	/* const sec1Text: = <>Implementação de APIs seguindo o padrão REST. <br><a href="https://github.com/AmandaFI/MyTopFavorite-Web-Application-Backend">Aplicação em Ruby on Rails utilizando a camada ORM Active Record e seguindo o padrão Model-ViewController (MVC)</a></> */
}

const TEXT = [
	{
		id: 1,
		sectionTitle: "Desenvolvimento Web",
		sectionText: sec1Text,
		sectionProjects: porjectsSec1,
	},
	{ id: 2, sectionTitle: "IA - Machine Learning e Deep Learning", sectionText: sec2Text, sectionProjects: [<></>] },
	{ id: 3, sectionTitle: "Paradigmas e Conceitos", sectionText: sec3Text, sectionProjects: porjectsSec3 },
	{ id: 4, sectionTitle: "Visão Computacional", sectionText: sec4Text, sectionProjects: [<></>] },
	{ id: 5, sectionTitle: "Tecnologias", sectionText: sec5Text, sectionProjects: [<></>] },
];

const Skills = () => {
	//const [clickedCell, setClickedCell] = useState<number | null>(null);

	return (
		<>
			<style type="text/css">
				{`
			grid-container {
				display: grid;
				grid-template-columns: 1fr 1fr;
				grid-gap: 20px;
			}
			`}
				.
			</style>
			<div
				style={{
					backgroundColor: "#1d232f",
					height: "84vh",
					overflow: "auto",
					width: "100%",
				}}
			>
				<div
					style={{
						backgroundColor: "#1d232f",
						color: "white",
						margin: 5,
						fontSize: 17,
					}}
				>
					&nbsp;
					<VscAdd />
					&nbsp; Code&nbsp;&nbsp;&nbsp; <VscAdd />
					&nbsp; Markdown
				</div>
				{TEXT.map((item) => (
					<>
						<div
							style={{
								backgroundColor: "#1d232f",
								fontSize: 29,
								color: "white",
								marginLeft: 22,
								marginRight: 22,
								marginTop: 10,
							}}
						>
							{item.sectionTitle}
						</div>
						<div
							style={{
								backgroundColor: "#171c26",
								// height: "20vh",
								color: "white",
								marginLeft: 22,
								marginRight: 22,
								marginTop: 10,
								padding: 5,
								paddingLeft: 8,

								display: "flex",
								flexDirection: "column",
							}}
						>
							{item.sectionText.map((text, index) => (
								<>
									{text} <br /> {item.sectionProjects[index] ? item.sectionProjects[index] : false}
								</>
							))}
						</div>
					</>
				))}
				{/* <div>
					<Stack
						direction="horizontal"
						style={{
							backgroundColor: "#1d232f",
							display: "flex",
							width: "100%",
						}}
					>
						<button>a</button>
						<div
							style={{
								backgroundColor: "#171c26",
								height: "10vh",
								color: "white",
								margin: 3,
								display: "flex",
							}}
						>
							aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
						</div>
					</Stack>
				</div> */}
			</div>
		</>
	);
};

export default Skills;
