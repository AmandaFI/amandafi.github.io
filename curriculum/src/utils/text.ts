type skillDescriptionType = {
	desc: string;
	link?: string;
};

type skillSectionType = {
	[title: string]: Array<skillDescriptionType>;
};

export const skillSectionsPort: skillSectionType = {
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
		{ desc: "Funções puras." },
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
	"Utilização de Banco de Dados relacionais.": [{ desc: "PostgreSQL" }, { desc: "MySQL" }],
	"Git e GitHub.": [
		{ desc: "Conhecimento do funcionamento interno e da utilização dos comandos de porcelain e plumbing." },
		{ desc: "Utilização para versionamento de projetos." },
	],
	"Utilização de diferentes Sistemas Operacionais.": [
		{ desc: "Windows" },
		{ desc: "Linux" },
		{ desc: "WSL Windows" },
		{ desc: "Virtual Box" },
	],
};

export const skillSectionsEng: skillSectionType = {
	"APIs implementation": [
		{
			desc: "API implemented using Ruby on Rails, Active Record ORM layer, REST pattern and Model-View-Controller (MVC) pattern.",
			link: "https://github.com/AmandaFI/MyTopFavorite-Web-Application-Backend",
		},
		{
			desc: "API implemented using NestJS, TypeScript programming language, Prisma ORM layer and e dependency injection.",
			link: "https://github.com/AmandaFI/MyTopFavorite-Web-Application-Backend-2",
		},
		{
			desc: "API implemented using Ruby on Rails and GraphQL.",
			link: "https://github.com/AmandaFI/MyTopFavorite-Web-Application-Backend/tree/graphql-jwt-version",
		},
	],
	"Development of front end applications using React.": [
		{
			desc: "Social media platform created using Vite, React, TypeScript and Material UI.",
			link: "https://github.com/AmandaFI/MyTopFavorite-Web-Application-Frontend",
		},
		{
			desc: "This portfolio, created using Vite, React, TypeScript and Bootstrap.",
			link: "https://github.com/AmandaFI/amandafi.github.io",
		},
	],
	"Implementation of artificial neural networks (ANN), convolutional neural networks (CNN) e LSTMs.": [
		{
			desc: "Identify if a news article was written by ChatGPT or by humans.",
			link: "https://github.com/AmandaFI/Human-Writing-Vs.-GPT-Writing",
		},
		{
			desc: "Identify eye blink artifacts in EEG signals.",
			link: "https://github.com/AmandaFI/EEG_blink_detector",
		},
	],
	"Code structuring following the Functional Programming paradigm.": [
		{ desc: "Closures." },
		{ desc: "Imutability." },
		{ desc: "Higher-order Functions (HOF)." },
		{ desc: "Pure functions, with no side effects." },
		{ desc: "Declarative programming." },
	],
	"Machine learning methods application.": [
		{
			desc: "Interactive Linear Regression model using JavaScript and the p5.js library.",
			link: "https://editor.p5js.org/a.ferrariiaquinta/full/uNtMH1Uzv",
		},
		{
			desc: "Project applying the XGBoost technique.",
			link: "https://github.com/AmandaFI/Human-Writing-Vs.-GPT-Writing",
		},
	],
	"Image processing and GUI development in Python.": [
		{
			desc: "GUI build with the PySide6 library to perform Optical Character Recognition (OCR).",
			link: "https://github.com/AmandaFI/OCR-Text-Detector-Pyside6",
		},
	],
	"Knowledge of TypeScript language concepts.": [
		{ desc: "Typing system." },
		{ desc: "Type guards." },
		{ desc: "Utility types." },
		{ desc: "Inference system (infer)." },
	],
	"Projects built with the p5.js (Processing) library": [
		{
			desc: "Visual and interactive representation of the Fourier series.",
			link: "https://editor.p5js.org/a.ferrariiaquinta/full/WhlweY9Fo",
		},
		{
			desc: "Interactive implementation of the Bézier curve with com N draggable points.",
			link: "https://editor.p5js.org/a.ferrariiaquinta/full/WhlweY9Fo",
		},
	],
	"Regular Expressions.": [{ desc: "Construction and application of regular expressions" }],
	"Relational database usage.": [{ desc: "PostgreSQL" }, { desc: "MySQL" }],
	"Git and GitHub.": [
		{ desc: "Knowledge about Git internals and about the porcelain and plumbing commands." },
		{ desc: "Use for project version control." },
	],
	"Use of different Operational Systems.": [
		{ desc: "Windows" },
		{ desc: "Linux" },
		{ desc: "WSL Windows" },
		{ desc: "Virtual Box" },
	],
};
