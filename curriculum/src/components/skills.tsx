import { VscAdd } from "react-icons/vsc";

type skillDescriptionType = {
	desc: string;
	link?: string;
};

type skillSectionType = {
	[title: string]: Array<skillDescriptionType>;
};
const sections: skillSectionType = {
	"Implementação de APIs": [
		{
			desc: "API implementada em Ruby on Rails, utilizando camada ORM Active Record, padrão REST e padrão Model-View-Controller (MVC).",
			link: "https://github.com/AmandaFI/MyTopFavorite-Web-Application-Backend",
		},
		{
			desc: "API implementada em NestJS, utilizando linguagem TypeScript, camada ORM Prisma e injeção de dependências.",
			link: "https://github.com/AmandaFI/MyTopFavorite-Web-Application-Backend-2",
		},
		{
			desc: "API implementada em Ruby on Rails e utilizando GraphQL.",
			link: "https://github.com/AmandaFI/MyTopFavorite-Web-Application-Backend/tree/graphql-jwt-version",
		},
	],
	"Desenvolvimento de aplicações front end em React.": [
		{
			desc: "Plataforma de mídia social criada uilizando Vite, React, TypeScript e Material UI.",
			link: "https://github.com/AmandaFI/MyTopFavorite-Web-Application-Frontend",
		},
		{
			desc: "Este portifólio, criado uilizando Vite, React, TypeScript e Bootstrap.",
			link: "https://github.com/AmandaFI/amandafi.github.io",
		},
	],
	"Criação de redes neurais artificiais (ANN), convolucionais (CNN) e LSTMs.": [
		{
			desc: "Diferenciar notícias escritas pelo ChatGPT de nóticias escritos por humanos.",
			link: "https://github.com/AmandaFI/Human-Writing-Vs.-GPT-Writing",
		},
		{
			desc: "Identificar artefatos de piscadas em sinais de eletroencefalograma.",
			link: "https://github.com/AmandaFI/EEG_blink_detector",
		},
	],
	"Utilização do paradigma Programação Funcional.": [
		{ desc: "Closures." },
		{ desc: "Imutabilidade." },
		{ desc: "Higher-order Functions (HOF)." },
		{ desc: "Funções puras, sem efeitos colaterais." },
		{ desc: "Programação declarativa." },
	],
	"Aplicação de métodos de Machine Learning.": [
		{
			desc: "Regressão Linear interativa utilizando JavaScript e a biblioteca p5.js.",
			link: "https://editor.p5js.org/a.ferrariiaquinta/full/uNtMH1Uzv",
		},
		{
			desc: "Projeto utilizando a técnica XGBoost.",
			link: "https://github.com/AmandaFI/Human-Writing-Vs.-GPT-Writing",
		},
	],
	"Processamento de imagens e criação de GUIs em Python.": [
		{
			desc: "Interface utilizando PySide6 e a técnica de detecção de caracteres OCR.",
			link: "https://github.com/AmandaFI/OCR-Text-Detector-Pyside6",
		},
	],
	"Conhecimentos de conceitos da linguagem TypeScript.": [
		{ desc: "Sistema de tipagem." },
		{ desc: "Type guards." },
		{ desc: "Utility types." },
		{ desc: "Sistema de inferência (infer)." },
	],
	"Projetos utilizando a biblioteca p5.js (Processing)": [
		{
			desc: "Representação visual e interativa da série de Fourier.",
			link: "https://editor.p5js.org/a.ferrariiaquinta/full/WhlweY9Fo",
		},
		{
			desc: "Implementação interativa da curva de Bézier com N pontos arrastáveis.",
			link: "https://editor.p5js.org/a.ferrariiaquinta/full/WhlweY9Fo",
		},
	],
	"Expressões Regulares.": [{ desc: "Construção e aplicação de RegExp" }],
};

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
				{Object.entries(sections).map(([section, projects]) => (
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
							{section}
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
							{projects.map((project) => (
								<>
									{
										<p>
											{project.desc} {project.link ? <a href={project.link}>Ver mais.</a> : false}
										</p>
									}
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
