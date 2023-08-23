import { VscAdd } from "react-icons/vsc";
import { skillSectionsPort } from "../utils/text";
import { CSSProperties, useState } from "react";

const sections = skillSectionsPort;

const skillDescriptionDiv: CSSProperties = {
	backgroundColor: "#171c26",
	color: "white",
	marginLeft: 22,
	marginRight: 22,
	marginTop: 10,
	padding: 5,
	paddingLeft: 8,
	width: "100%",
	display: "flex",
	flexDirection: "column",
};

const selectedDescriptionSkillDiv: CSSProperties = {
	...skillDescriptionDiv,
	borderStyle: "solid",
	borderColor: "#123456",
};

const skillDiv: CSSProperties = {
	display: "flex",
};

const selectedSkillDiv: CSSProperties = {
	...skillDiv,
	borderLeftStyle: "solid",
	borderLeftColor: "#AAAAAA",
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
	const [selectedDiv, setSelectedDiv] = useState(0);

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
				{Object.entries(sections).map(([section, projects], index) => (
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
							onClick={() => setSelectedDiv(index)}
						>
							{section}
						</div>
						<div style={index === selectedDiv ? { ...selectedSkillDiv } : { ...skillDiv }}>
							{/* aaaa */}

							<div
								style={index === selectedDiv ? { ...selectedDescriptionSkillDiv } : { ...skillDescriptionDiv }}
								onClick={() => setSelectedDiv(index)}
							>
								{projects.map((project) => (
									<ul>
										{
											<li>
												{project.desc}{" "}
												{project.link ? (
													<a href={project.link} style={{ color: "#E5E5E5" }}>
														Ver mais.
													</a>
												) : (
													false
												)}
											</li>
										}
									</ul>
								))}
							</div>
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
