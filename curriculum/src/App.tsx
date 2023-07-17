import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, List, Stack, Tab, Tabs, ThemeProvider, createTheme } from "@mui/material";
import { VscChevronDown, VscGithubAlt, VscRemote, VscSourceControl, VscCheckAll } from "react-icons/vsc";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import Contact from "./components/contact";
import Welcome from "./components/welcome";
import About from "./components/about";
import DevStack from "./components/stack";
import Skills from "./components/skills";
import Projects from "./components/projects";

const theme = createTheme({
	typography: {
		button: {
			textTransform: "none",
			color: "white",
		},
	},
});

const App = () => {
	type tabs = "bemVindo.html" | "sobre.tsx" | "contato.ts" | "devStack.py" | "habilidades.rb" | "projetos.js";
	const [currentTab, setCurrentTab] = React.useState<tabs>("bemVindo.html");

	const handleTabOnChange = (_e: React.SyntheticEvent, newTab: tabs) => {
		setCurrentTab(newTab);
	};

	let displayTab;
	switch (currentTab) {
		case "sobre.tsx":
			displayTab = <About />;
			break;
		case "contato.ts":
			displayTab = <Contact />;
			break;
		case "devStack.py":
			displayTab = <DevStack />;
			break;
		case "habilidades.rb":
			displayTab = <Skills />;
			break;
		case "projetos.js":
			displayTab = <Projects />;
			break;
		default:
			displayTab = <Welcome />;
			break;
	}

	return (
		<>
			<Box
				sx={{
					bgcolor: "#1d232f",
					height: "4vh",
					width: "99vw",
					color: "white",
					textAlign: "center",
					justifyContent: "center",
					pt: 0.5,
					fontFamily: "Arial",
					fontSize: 15,
				}}
			>
				{currentTab} - Amanda F. I. - Currículo
			</Box>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container height={"88vh"}>
					<Grid item xs={0.5} sx={{ bgcolor: "#141820", color: "white" }}>
						<Button color="secondary">
							<AiFillLinkedin size={32} style={{ fill: "#a8b5d1", margin: "6px 13px 6px 8px" }} />
						</Button>
						<Button color="secondary">
							<AiOutlineGithub size={32} style={{ fill: "#a8b5d1", margin: "6px 13px 6px 8px" }} />
						</Button>
						<Button color="secondary">
							<FaEnvelope size={24} style={{ fill: "#a8b5d1", margin: "6px 13px 6px 8px" }} />
						</Button>
						{/* <Button color="secondary">
							<VscGithubAlt size={32} style={{ fill: "#a8b5d1", margin: "6px 13px 6px 8px" }} />
						</Button> */}
					</Grid>
					<Grid item xs={2} sx={{ bgcolor: "#171c26", color: "white" }}>
						<List>
							<ThemeProvider theme={theme}>
								<Button
									size="medium"
									sx={{ color: "white", width: "100%", textAlign: "left", justifyContent: "left", fontSize: 17 }}
								>
									<VscChevronDown /> &nbsp; Curriculum
								</Button>
								{/* <ListItem disablePadding>
									<ListItemText
										primary={
											<>
												<VscChevronDown /> Curriculum
											</>
										}
										sx={{ color: "white", ml: 1, mb: 1 }}
									/>
								</ListItem> */}

								<Button
									size="medium"
									sx={{ color: "white", width: "100%", textAlign: "left", justifyContent: "left", fontSize: 17 }}
									onClick={() => setCurrentTab("sobre.tsx")}
								>
									<i className="devicon-react-original colored" style={{ margin: "3px" }}></i>&nbsp; sobre.tsx
								</Button>
								<Button
									sx={{ color: "white", width: "100%", textAlign: "left", justifyContent: "left", fontSize: 17 }}
									onClick={() => setCurrentTab("contato.ts")}
								>
									<i className="devicon-typescript-plain colored" style={{ margin: "3px" }}></i>&nbsp; contato.ts
								</Button>
								<Button
									sx={{ color: "white", width: "100%", textAlign: "left", justifyContent: "left", fontSize: 17 }}
									onClick={() => setCurrentTab("devStack.py")}
								>
									<i className="devicon-python-plain colored" style={{ margin: "3px" }}></i>&nbsp; devStack.py
								</Button>
								<Button
									sx={{ color: "white", width: "100%", textAlign: "left", justifyContent: "left", fontSize: 17 }}
									onClick={() => setCurrentTab("habilidades.rb")}
								>
									<i className="devicon-ruby-plain colored" style={{ margin: "3px" }}></i>&nbsp; habilidades.rb
								</Button>
								<Button
									sx={{ color: "white", width: "100%", textAlign: "left", justifyContent: "left", fontSize: 17 }}
									onClick={() => setCurrentTab("projetos.js")}
								>
									<i className="devicon-javascript-plain colored" style={{ margin: "3px" }}></i>&nbsp; projetos.ts
								</Button>
							</ThemeProvider>
							{/* <ListItem disablePadding sx={{ pl: 2 }}>
								<i className="devicon-react-original colored"></i>
								<ListItemText primary={"sobre.tsx"} sx={{ color: "white", ml: 1 }} />
							</ListItem> */}
							{/* <ListItem disablePadding sx={{ pl: 2 }}>
								<i className="devicon-typescript-plain colored"></i>
								<ListItemText primary={"contato.ts"} sx={{ color: "white", ml: 1 }} />
							</ListItem> */}

							{/* <ListItem disablePadding sx={{ pl: 2 }}>
								<ListItemButton>
								<i className="devicon-python-plain colored"></i>
								<ListItemText primary={"stack.py"} sx={{ color: "white", ml: 1 }} />
								</ListItemButton>
							</ListItem>
							<ListItem disablePadding sx={{ pl: 2 }}>
								<ListItemButton>
								<i className="devicon-ruby-plain colored"></i>
								<ListItemText primary={"habilidades.rb"} sx={{ color: "white", ml: 1 }} />
								</ListItemButton>
							</ListItem>
							<ListItem disablePadding sx={{ pl: 2 }}>
								<ListItemButton>
								<i className="devicon-javascript-plain colored"></i>
								<ListItemText primary={"projetos.js"} sx={{ color: "white", ml: 1 }} />
								</ListItemButton>
							</ListItem> */}
						</List>
					</Grid>
					<Grid item xs={9.5} sx={{ bgcolor: "#171c26", color: "white" }}>
						<ThemeProvider theme={theme}>
							<Tabs
								value={currentTab}
								onChange={handleTabOnChange}
								textColor="inherit"
								// indicatorColor="primary"
								aria-label="secondary tabs example"
							>
								<Tab
									value="bemVindo.html"
									label={
										<Stack direction="row">
											<i className="devicon-html5-plain colored"></i>
											&nbsp; bemVindo.html
										</Stack>
									}
								/>
								<Tab
									value="sobre.tsx"
									label={
										<Stack direction="row">
											<i className="devicon-react-original colored"></i>
											&nbsp; sobre.tsx
										</Stack>
									}
								/>
								<Tab
									value="contato.ts"
									label={
										<Stack direction="row">
											<i className="devicon-typescript-plain colored"></i>
											&nbsp; contato.ts
										</Stack>
									}
								/>
								<Tab
									value="devStack.py"
									label={
										<Stack direction="row">
											<i className="devicon-python-plain colored"></i>
											&nbsp; devStack.py
										</Stack>
									}
								/>
								<Tab
									value="habilidades.rb"
									label={
										<Stack direction="row">
											<i className="devicon-ruby-plain colored"></i>
											&nbsp; habilidades.rb
										</Stack>
									}
								/>
								<Tab
									value="projetos.js"
									label={
										<Stack direction="row">
											<i className="devicon-javascript-plain colored"></i>
											&nbsp; projetos.js
										</Stack>
									}
								/>
							</Tabs>
						</ThemeProvider>
						{displayTab}
					</Grid>
				</Grid>
			</Box>
			<ThemeProvider theme={theme}>
				<Stack
					direction="row"
					sx={{
						bgcolor: "#171c26",
						height: "4vh",
						width: "99vw",
						color: "white",
						fontFamily: "Arial",
						fontSize: 15,
						justifyContent: "space-evenly",
					}}
				>
					<Stack
						direction="row"
						sx={{
							bgcolor: "#171c26",
							width: "50vw",
							color: "white",
							fontFamily: "Arial",
							fontSize: 15,
						}}
					>
						<Button
							sx={{
								bgcolor: "#457dff",
								color: "white",
							}}
						>
							<VscRemote />
							&nbsp; WSL: Ubuntu
						</Button>
						<Button
							sx={{
								bgcolor: "#171c26",
								color: "white",
							}}
						>
							<VscSourceControl />
							&nbsp; main
						</Button>
					</Stack>
					<Stack
						direction="row"
						sx={{
							bgcolor: "#171c26",
							height: "4vh",
							width: "50vw",
							color: "white",
							fontFamily: "Arial",
							fontSize: 15,
							justifyContent: "end",
							pr: 3,
							// pt: 1,
						}}
					>
						<i className="devicon-react-original"></i> &nbsp;Feito com React &nbsp; &nbsp;
						<VscCheckAll /> &nbsp;Prettier
					</Stack>
				</Stack>
			</ThemeProvider>
		</>
	);
};

export default App;
