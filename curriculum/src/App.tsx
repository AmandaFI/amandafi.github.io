import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { VscChevronDown, VscRemote, VscSourceControl, VscChevronUp, VscClose } from "react-icons/vsc";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Contact from "./components/contact";
import Welcome from "./components/welcome";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Stack from "react-bootstrap/Stack";
import "./App.css";

// npm run deploy

type Tabs = "bemVindo.rb" | "sobre.tsx" | "contato.ts" | "habilidades.ipynb" | "projetos.js";

export type displayIconsTabType = {
	icon: JSX.Element;
	text: string;
	component: JSX.Element;
	tabId: number;
};

const LEFT_COLUMN_ITEMS = [
	{ icon: <AiFillLinkedin size={32} className="leftColumnIconStyle" />, url: "https://www.linkedin.com/in/amandafi/" },
	{ icon: <AiOutlineGithub size={32} className="leftColumnIconStyle" />, url: "https://github.com/AmandaFI" },
	{ icon: <FaEnvelope size={28} className="leftColumnIconStyle" />, url: "" },
];

const App = () => {
	const [key, setKey] = useState<string | null>("bemVindo.rb");

	const TABS: displayIconsTabType[] = [
		{
			icon: <i className="devicon-ruby-plain colored"></i>,
			text: "bemVindo.rb",
			component: <Welcome setCurrentTab={setKey} />,
			tabId: 0,
		},
		{ icon: <i className="devicon-react-original colored"></i>, text: "sobre.tsx", component: <About />, tabId: 1 },
		{
			icon: <i className="devicon-typescript-plain colored"></i>,
			text: "contato.ts",
			component: <Contact />,
			tabId: 2,
		},
		{
			icon: <i className="devicon-jupyter-plain colored"></i>,
			text: "habilidades.ipynb",
			component: <Skills />,
			tabId: 3,
		},
		{
			icon: <i className="devicon-javascript-plain colored"></i>,
			text: "projetos.js",
			component: <Projects />,
			tabId: 4,
		},
	];

	const [displayedFiles, setDisplayedFiles] = useState<displayIconsTabType[]>(TABS);
	const [openTabIds, setOpenTabIds] = useState<Array<number | undefined>>([...Array(TABS.length).keys()]);

	const removeTab = (closedTabId: number) => () => {
		setOpenTabIds((previousTabs) => previousTabs.map((tabId) => (tabId === closedTabId ? undefined : tabId)));
	};

	useEffect(() => {
		setKey(openTabIds.every((el) => el === undefined) ? null : TABS[openTabIds.find((el) => el !== undefined)!].text);
	}, openTabIds);

	const openFile = (selectedFileId: number) => () => {
		if (openTabIds[selectedFileId] === undefined) {
			setOpenTabIds((previousTabs) =>
				previousTabs.map((item, index) => (index === selectedFileId ? selectedFileId : item))
			);
		}
		// setKey(TABS[selectedFileId].text);
	};

	return (
		<>
			<style type="text/css">
				{`
    .btn-filesBtn {
        background-color: #171c26;
        border: none;
		text-align: left !important;
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

		.nav-tabs {
			background-color: #171c26 !important;
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
			{/* <div className="gridGeneric"> */}
			<Row className="row topRow">
				<Col>1</Col>
			</Row>
			<Row className="row middleRow">
				<Col className="col firstCol col-md-auto">
					<Stack>
						{LEFT_COLUMN_ITEMS.map((item) => (
							<a href={item.url}>
								<Button variant="leftIconBtn" className="btn-primary">
									{" "}
									{item.icon}{" "}
								</Button>
							</a>
						))}
					</Stack>
				</Col>
				<Col className="col secondCol" xs={2}>
					<Button
						variant="filesBtn"
						className="btn-primary"
						onClick={() => setDisplayedFiles((previousState) => (previousState.length > 0 ? [] : TABS))}
					>
						{displayedFiles.length > 0 ? <VscChevronDown /> : <VscChevronUp />}
						&nbsp; <strong>Curriculum</strong>
					</Button>
					<Stack>
						{displayedFiles.map((item) => (
							<Button
								variant="filesBtn"
								className="btn-primary text-left"
								onClick={openFile(item.tabId)}
								key={item.tabId}
							>
								{item.icon}
								&nbsp;
								{item.text}
							</Button>
						))}
					</Stack>
				</Col>
				<Col className="col thirdCol">
					<Tabs
						id="controlled-tab-example"
						// activeKey={TABS[openTabIds[0]].text}
						activeKey={key ? key : "bemVindo.rb"}
						onSelect={(k) => setKey(k)}
						className="mb-3"
					>
						{openTabIds.map((itemId) =>
							itemId !== undefined ? (
								<Tab
									style={{ backgroundColor: "#171c26" }}
									eventKey={TABS[itemId].text}
									title={
										<>
											{TABS[itemId].icon} &nbsp;{TABS[itemId].text}
											{key === TABS[itemId].text ? (
												<button
													style={{ backgroundColor: "#1d232f", color: "white", border: "none" }}
													onClick={removeTab(itemId)}
												>
													<VscClose />
												</button>
											) : (
												false
											)}
										</>
									}
								>
									{TABS[itemId].component}
								</Tab>
							) : (
								false
							)
						)}
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
			{/* </div> */}
		</>
	);
};

export default App;
