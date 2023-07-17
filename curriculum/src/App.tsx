import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
	Button,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Stack,
	Tab,
	Tabs,
	ThemeProvider,
	createTheme,
} from "@mui/material";
import { VscChevronDown, VscGithubAlt, VscAccount, VscRemote, VscSourceControl, VscCheckAll } from "react-icons/vsc";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import Contact from "./components/contact";
import Welcome from "./components/welcome";

const theme = createTheme({
	typography: {
		button: {
			textTransform: "none",
			color: "white",
		},
	},
});

const App = () => {
	type tabs = "bemVindo.html" | "sobre.tsx" | "contato.ts" | "stack.py" | "habilidades.rb" | "projetos.js";
	const [currentTab, setCurrentTab] = React.useState<tabs>("bemVindo.html");

	const handleTabOnChange = (_e: React.SyntheticEvent, newTab: tabs) => {
		setCurrentTab(newTab);
	};

	let displayTab;
	switch (currentTab) {
		case "sobre.tsx":
			displayTab = <Contact />;
			break;
		case "contato.ts":
			displayTab = <Contact />;
			break;
		case "stack.py":
			displayTab = <Contact />;
			break;
		case "habilidades.rb":
			displayTab = <Contact />;
			break;
		case "projetos.js":
			displayTab = <Contact />;
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
					width: "100vw",
					color: "white",
					textAlign: "center",
					justifyContent: "center",
					pt: 0.5,
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
						<Button color="secondary">
							<VscGithubAlt size={32} style={{ fill: "#a8b5d1", margin: "6px 13px 6px 8px" }} />
						</Button>
					</Grid>
					<Grid item xs={2} sx={{ bgcolor: "#171c26", color: "white" }}>
						<List>
							<ThemeProvider theme={theme}>
								<Button size="medium" sx={{ color: "white", width: "100%", textAlign: "left", justifyContent: "left" }}>
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
									sx={{ color: "white", width: "100%", textAlign: "left", justifyContent: "left" }}
									onClick={() => setCurrentTab("sobre.tsx")}
								>
									<i className="devicon-react-original colored" style={{ margin: "3px" }}></i>&nbsp; sobre.tsx
								</Button>
								<Button
									sx={{ color: "white", width: "100%", textAlign: "left", justifyContent: "left" }}
									onClick={() => setCurrentTab("contato.ts")}
								>
									<i className="devicon-typescript-plain colored" style={{ margin: "3px" }}></i>&nbsp; contato.ts
								</Button>
								<Button
									sx={{ color: "white", width: "100%", textAlign: "left", justifyContent: "left" }}
									onClick={() => setCurrentTab("stack.py")}
								>
									<i className="devicon-python-plain colored" style={{ margin: "3px" }}></i>&nbsp; stack.py
								</Button>
								<Button
									sx={{ color: "white", width: "100%", textAlign: "left", justifyContent: "left" }}
									onClick={() => setCurrentTab("habilidades.rb")}
								>
									<i className="devicon-ruby-plain colored" style={{ margin: "3px" }}></i>&nbsp; habilidades.rb
								</Button>
								<Button
									sx={{ color: "white", width: "100%", textAlign: "left", justifyContent: "left" }}
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
											<i className="devicon-javascript-plain colored"></i>
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
									value="stack.py"
									label={
										<Stack direction="row">
											<i className="devicon-python-plain colored"></i>
											&nbsp; stack.py
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
				<Box
					sx={{
						bgcolor: "#1d232f",
						height: "4vh",
						width: "100vw",
						color: "white",
					}}
				>
					<Button
						sx={{
							bgcolor: "#457dff",
							color: "white",
							height: "4vh",
						}}
					>
						<VscRemote />
						&nbsp; WSL: Ubuntu
					</Button>
					<Button
						sx={{
							bgcolor: "#1d232f",
							color: "white",
							height: "4vh",
						}}
					>
						<VscSourceControl />
						&nbsp; main
					</Button>
					&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;{" "}
					<i className="devicon-react-original"></i> &nbsp;Feito com React &nbsp; &nbsp; &nbsp; &nbsp;
					<VscCheckAll /> &nbsp;Prettier
				</Box>
			</ThemeProvider>
		</>
	);
};

export default App;
