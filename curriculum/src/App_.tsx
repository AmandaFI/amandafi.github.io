// import * as React from "react";
// import { useState } from "react";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import { Button, List, Stack, Tab, Tabs, ThemeProvider, createTheme } from "@mui/material";
// import { VscChevronDown, VscRemote, VscSourceControl, VscCheckAll } from "react-icons/vsc";
// import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
// import { FaEnvelope } from "react-icons/fa";
// import Contact from "./components/contact";
// import Welcome from "./components/welcome";
// import About from "./components/about";
// import DevStack from "./components/stack";
// import Skills from "./components/skills";
// import Projects from "./components/projects";

// const theme = createTheme({
// 	typography: {
// 		button: {
// 			textTransform: "none",
// 			color: "white",
// 		},
// 	},
// });

// const leftColumnIconStyle = {
// 	fill: "#a8b5d1",
// 	margin: "6px 13px 6px 8px",
// };

// const filesColumnStye = {
// 	color: "white",
// 	width: "100%",
// 	textAlign: "left",
// 	justifyContent: "left",
// 	fontSize: 17,
// };

// type Tabs = "bemVindo.html" | "sobre.tsx" | "contato.ts" | "devStack.py" | "habilidades.rb" | "projetos.js";

// const LEFT_COLUMN_ITEMS = [
// 	<AiFillLinkedin size={32} style={leftColumnIconStyle} />,
// 	<AiOutlineGithub size={32} style={leftColumnIconStyle} />,
// 	<FaEnvelope size={24} style={leftColumnIconStyle} />,
// ];

// type displayIconsType = {
// 	icon: JSX.Element;
// 	text: string;
// };

// const FILES_COLUMN_ITEMS: displayIconsType[] = [
// 	{ icon: <i className="devicon-react-original colored" style={{ margin: "3px" }}></i>, text: "sobre.tsx" },
// 	{ icon: <i className="devicon-typescript-plain colored" style={{ margin: "3px" }}></i>, text: "contato.ts" },
// 	{ icon: <i className="devicon-python-plain colored" style={{ margin: "3px" }}></i>, text: "devStack.py" },
// 	{ icon: <i className="devicon-ruby-plain colored" style={{ margin: "3px" }}></i>, text: "habilidades.rb" },
// 	{ icon: <i className="devicon-javascript-plain colored" style={{ margin: "3px" }}></i>, text: "projetos.js" },
// ];

// const INITIAL_OPEN_TABS: displayIconsType[] = [
// 	{ icon: <i className="devicon-html5-plain colored"></i>, text: "bemVindo.html" },
// 	{ icon: <i className="devicon-react-original colored"></i>, text: "sobre.tsx" },
// 	{ icon: <i className="devicon-typescript-plain colored"></i>, text: "contato.ts" },
// 	{ icon: <i className="devicon-python-plain colored"></i>, text: "devStack.py" },
// 	{ icon: <i className="devicon-ruby-plain colored"></i>, text: "habilidades.rb" },
// 	{ icon: <i className="devicon-javascript-plain colored"></i>, text: "projetos.js" },
// ];

// const App = () => {
// 	const [currentTab, setCurrentTab] = useState<displayIconsType>(INITIAL_OPEN_TABS[0]);
// 	const [openTabs, setOpenTabs] = useState<displayIconsType[]>(INITIAL_OPEN_TABS);

// 	const handleTabOnChange = (_e: React.SyntheticEvent, newTab: displayIconsType) => {
// 		setCurrentTab(newTab);
// 	};

// 	let selectedTab;
// 	switch (currentTab.text) {
// 		case "sobre.tsx":
// 			selectedTab = <About />;
// 			break;
// 		case "contato.ts":
// 			selectedTab = <Contact />;
// 			break;
// 		case "devStack.py":
// 			selectedTab = <DevStack />;
// 			break;
// 		case "habilidades.rb":
// 			selectedTab = <Skills />;
// 			break;
// 		case "projetos.js":
// 			selectedTab = <Projects />;
// 			break;
// 		default:
// 			selectedTab = <Welcome />;
// 			break;
// 	}

// 	return (
// 		<>
// 			<ThemeProvider theme={theme}>
// 				<Stack
// 					direction="column"
// 					sx={{
// 						height: "97vh",
// 						display: "flex",
// 						flexDirection: "column",
// 						bgcolor: "yellow",
// 					}}
// 				>
// 					<Box
// 						sx={{
// 							bgcolor: "#1d232f",
// 							height: "4vh",
// 							// width: "99vw",
// 							color: "white",
// 							textAlign: "center",
// 							justifyContent: "center",
// 							pt: 0.5,
// 							fontFamily: "Arial",
// 							fontSize: 15,
// 							display: "flex",
// 						}}
// 					>
// 						{currentTab.text} - Amanda F. I. - Currículo
// 					</Box>

// 					<Grid container sx={{ height: "100%", overflow: "auto" }}>
// 						<Grid item xs={0.5} sx={{ bgcolor: "#141820", color: "white" }}>
// 							{LEFT_COLUMN_ITEMS.map((icon) => (
// 								<Button color="secondary"> {icon} </Button>
// 							))}
// 						</Grid>

// 						<Grid item xs={2} sx={{ bgcolor: "#171c26", color: "white", display: "flex", flexDirection: "row" }}>
// 							<List sx={{ display: "flex", flexDirection: "column" }}>
// 								<Button
// 									size="medium"
// 									sx={{
// 										color: "white",
// 										width: "100%",
// 										textAlign: "left",
// 										justifyContent: "left",
// 										fontSize: 17,
// 										display: "flex",
// 									}}
// 								>
// 									<VscChevronDown /> &nbsp; Curriculum
// 								</Button>

// 								{FILES_COLUMN_ITEMS.map((item, index) => (
// 									<Button sx={filesColumnStye} onClick={() => setCurrentTab(openTabs[index])}>
// 										{item.icon}
// 										&nbsp;
// 										{item.text}
// 									</Button>
// 								))}
// 							</List>
// 						</Grid>
// 						<Grid item xs={9.5} sx={{ bgcolor: "#171c26", color: "white" }}>
// 							<Tabs
// 								value={currentTab}
// 								onChange={handleTabOnChange}
// 								textColor="inherit"
// 								aria-label="secondary tabs example"
// 							>
// 								{openTabs.map((item) => (
// 									<Tab
// 										value={item}
// 										label={
// 											<Stack direction="row">
// 												{item.icon}
// 												&nbsp;
// 												{item.text}
// 											</Stack>
// 										}
// 									/>
// 								))}
// 							</Tabs>
// 							{selectedTab}
// 						</Grid>
// 					</Grid>

// 					<Stack
// 						direction="row"
// 						sx={{
// 							bgcolor: "#171c26",
// 							height: "4vh",
// 							width: "99vw",
// 							color: "white",
// 							fontFamily: "Arial",
// 							fontSize: 15,
// 							justifyContent: "space-evenly",
// 						}}
// 					>
// 						<Stack
// 							direction="row"
// 							sx={{
// 								bgcolor: "#171c26",
// 								width: "100%",
// 								color: "white",
// 								fontFamily: "Arial",
// 								fontSize: 15,
// 							}}
// 						>
// 							<Stack
// 								direction="row"
// 								sx={{
// 									bgcolor: "#171c26",
// 									width: "50vw",
// 									color: "white",
// 									fontFamily: "Arial",
// 									fontSize: 15,
// 								}}
// 							>
// 								<Button
// 									sx={{
// 										bgcolor: "#457dff",
// 										color: "white",
// 									}}
// 								>
// 									<VscRemote />
// 									&nbsp; WSL: Ubuntu
// 								</Button>
// 								<Button
// 									sx={{
// 										bgcolor: "#171c26",
// 										color: "white",
// 									}}
// 								>
// 									<VscSourceControl />
// 									&nbsp; main
// 								</Button>
// 							</Stack>
// 							<Stack
// 								direction="row"
// 								sx={{
// 									bgcolor: "#171c26",
// 									height: "4vh",
// 									width: "50vw",
// 									color: "white",
// 									fontFamily: "Arial",
// 									fontSize: 15,
// 									justifyContent: "end",
// 									pr: 3,
// 									// pt: 1,
// 								}}
// 							>
// 								<i className="devicon-react-original"></i> &nbsp;Feito com React &nbsp; &nbsp;
// 								<VscCheckAll /> &nbsp;Prettier
// 							</Stack>
// 						</Stack>
// 					</Stack>
// 				</Stack>
// 			</ThemeProvider>
// 		</>
// 	);
// };

// export default App;
