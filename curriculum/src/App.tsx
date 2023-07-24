import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { VscChevronDown, VscGithubAlt, VscRemote, VscSourceControl, VscCheckAll, VscChevronUp } from "react-icons/vsc";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Contact from "./components/contact";
import Welcome from "./components/welcome";
import About from "./components/about";
import DevStack from "./components/stack";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Stack from "react-bootstrap/Stack";

import "./App.css";
import { Xwrapper, useXarrow } from "react-xarrows";

type Tabs = "bemVindo.rb" | "sobre.tsx" | "contato.ts" | "habilidades.ipynb" | "projetos.js";

type displayIconsType = {
	icon: JSX.Element;
	text: string;
};

type displayIconsTabType = {
	icon: JSX.Element;
	text: string;
	component: JSX.Element;
};

const LEFT_COLUMN_ITEMS = [
	<AiFillLinkedin size={32} className="leftColumnIconStyle" />,
	<AiOutlineGithub size={32} className="leftColumnIconStyle" />,
	<FaEnvelope size={24} className="leftColumnIconStyle" />,
];

const FILES_COLUMN_ITEMS: displayIconsType[] = [
	{
		icon: <i className="devicon-ruby-plain colored"></i>,
		text: "bemVindo.rb",
	},
	{
		icon: <i className="devicon-react-original colored"></i>,
		text: "sobre.tsx",
	},
	{
		icon: <i className="devicon-typescript-plain colored"></i>,
		text: "contato.ts",
	},
	// {
	// 	icon: <i className="devicon-python-plain colored"></i>,
	// 	text: "devStack.py",
	// },
	{
		icon: <i className="devicon-jupyter-plain colored"></i>,
		text: "habilidades.ipynb",
	},
	{
		icon: <i className="devicon-javascript-plain colored"></i>,
		text: "projetos.js",
	},
];

const App = () => {
	const [key, setKey] = useState("bemVindo.rb");
	const [showFiles, setShowFiles] = useState(true);

	const INITIAL_OPEN_TABS: displayIconsTabType[] = [
		{
			icon: <i className="devicon-ruby-plain colored"></i>,
			text: "bemVindo.rb",
			component: <Welcome setCurrentTab={setKey} />,
		},
		{ icon: <i className="devicon-react-original colored"></i>, text: "sobre.tsx", component: <About /> },
		{ icon: <i className="devicon-typescript-plain colored"></i>, text: "contato.ts", component: <Contact /> },
		// { icon: <i className="devicon-python-plain colored"></i>, text: "devStack.py", component: <DevStack /> },
		{ icon: <i className="devicon-jupyter-plain colored"></i>, text: "habilidades.ipynb", component: <Skills /> },
		{ icon: <i className="devicon-javascript-plain colored"></i>, text: "projetos.js", component: <Projects /> },
	];

	const [openTabs, setOpenTabs] = useState<displayIconsTabType[]>(INITIAL_OPEN_TABS);

	return (
		<>
			<style type="text/css">
				{`
    .btn-filesBtn {
       
		
        background-color: #171c26;
        border: none;
    }

    .btn-bottomLeft {
        color: "white";
        text-align: "left";
        justify-content: "left";
        font-size: 17;
        display: "flex";
        background-color: "#457dff";
        border: none;
        
        
    }

	.btn-leftIconBtn {
		background-color: #141820;
		border: none;
	}

    .div-bottomLeft {
        padding: 0;
        
        
    }

	.nav {
		border-bottom:0px !important;
		
		margin: 0 !important;
	}

	.nav-tabs .nav-link {
		background-color: transparent !important;
		color: #FFFFFF !important;
		border-top: none !important;
		border-left: none !important;
		border-right: none !important;
		
		--bs-nav-tabs-link-hover-border-color: transparent !important;
		--bs-nav-tabs-border-color:  transparent !important;
	  }
	  
	  .nav-tabs .nav-link.active {
		background-color: #1d232f !important;
		
		border-bottom:0px !important;
	  }

	  .row>* {
		paddding-right: 0 !important;
		paddding-left: 0 !important;
		margin-top: 0 !important;

	  }

	  .btn-primary {
		--bs-btn-hover-bg: #1d232f;
    	--bs-btn-hover-border-color: #0a58ca;
	  }

	  .btn {
		text-align: center; !important;
	  }
	  
    `}
			</style>
			<div className="gridGeneric">
				<Row className="row topRow">
					<Col>1</Col>
				</Row>
				<Row className="row middleRow">
					<Col className="col firstCol" xs={1}>
						<Stack>
							{LEFT_COLUMN_ITEMS.map((icon) => (
								<Button variant="leftIconBtn" className="btn-primary">
									{" "}
									{icon}{" "}
								</Button>
							))}
						</Stack>
					</Col>
					<Col className="col secondCol" xs={2}>
						<Button
							variant="filesBtn"
							className="btn-primary"
							onClick={(previousState) => setShowFiles(!previousState)}
						>
							{showFiles ? <VscChevronDown /> : <VscChevronUp />}
							&nbsp; Curriculum
						</Button>
						<Stack>
							{FILES_COLUMN_ITEMS.map((item) => (
								<Button variant="filesBtn" className="btn-primary">
									{item.icon}
									&nbsp;
									{item.text}
								</Button>
							))}
						</Stack>
					</Col>
					<Col className="col thirdCol">
						<Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
							{openTabs.map((item) => (
								<Tab
									eventKey={item.text}
									title={
										<>
											{item.icon} &nbsp;{item.text}
										</>
									}
								>
									{item.component}
								</Tab>
							))}
						</Tabs>
					</Col>
				</Row>
				<Row className="row bottonRow">
					<Stack direction="horizontal" className="bottonStack">
						<div>
							<span className="wslButton">
								<VscRemote />
								&nbsp; WSL: Ubuntu
							</span>
							&nbsp;&nbsp;&nbsp;
							<span className="bottomLeft">
								<VscSourceControl />
								&nbsp; main
							</span>
						</div>
						<div className="p-2 ms-auto"></div>
						<div className="p-2">
							<Stack direction="horizontal">
								Feito com: &nbsp;
								<i className="devicon-react-original colored"></i> &nbsp;React&nbsp;&nbsp;
								<i className="devicon-bootstrap-plain colored"></i> &nbsp;Bootstrap
							</Stack>
						</div>
					</Stack>
				</Row>
			</div>
		</>
	);
};

export default App;
