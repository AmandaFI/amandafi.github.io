import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { List, ListItem, ListItemButton, ListItemText, Tab, Tabs } from "@mui/material";
import { VscChevronDown } from "react-icons/vsc";
import Contact from "./components/contact";

const App = () => {
	let currentTab = "draft";
	let abc = (
		<Contact />
		// <Box sx={{ bgcolor: "#1d232f", display: "flex", height: "93%" }}>
		// 	<Typography variant="h1" component="h2">
		// 		h1. Heading
		// 	</Typography>
		// 	;
		// </Box>
	);

	type tabs = "published" | "draft";

	const handleTabOnChange = (_e: React.SyntheticEvent, _newTab: tabs) => {};

	return (
		<>
			{/* <AppBar sx={{ bgcolor: "#1d232f", height: "4vh" }}>aaaaaaaaa</AppBar> */}
			<Box sx={{ bgcolor: "#1d232f", height: "4vh", width: "100vw", color: "white" }}>aaaaaaaaa</Box>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container height={"91vh"}>
					<Grid item xs={0.5} sx={{ bgcolor: "#141820", color: "white" }}>
						aaaaa
					</Grid>
					<Grid item xs={2} sx={{ bgcolor: "#171c26", color: "white" }}>
						<List>
							<ListItem disablePadding>
								<VscChevronDown />
								<ListItemText primary={"Curriculum"} sx={{ color: "white", ml: 1 }} />
							</ListItem>
							<ListItem disablePadding>
								<ListItemButton>
									<i className="devicon-react-original colored"></i>
									<ListItemText primary={"sobre.tsx"} sx={{ color: "white", ml: 1 }} />
								</ListItemButton>
							</ListItem>
							<ListItem disablePadding>
								<ListItemButton>
									<i className="devicon-typescript-plain colored"></i>
									<ListItemText primary={"contato.ts"} sx={{ color: "white", ml: 1 }} />
								</ListItemButton>
							</ListItem>

							<ListItem disablePadding>
								<ListItemButton>
									<i className="devicon-python-plain colored"></i>
									<ListItemText primary={"stack.ipynb"} sx={{ color: "white", ml: 1 }} />
								</ListItemButton>
							</ListItem>
							<ListItem disablePadding>
								<ListItemButton>
									<i className="devicon-ruby-plain colored"></i>
									<ListItemText primary={"habilidades.rb"} sx={{ color: "white", ml: 1 }} />
								</ListItemButton>
							</ListItem>
							<ListItem disablePadding>
								<ListItemButton>
									<i className="devicon-javascript-plain colored"></i>
									<ListItemText primary={"projetos.js"} sx={{ color: "white", ml: 1 }} />
								</ListItemButton>
							</ListItem>
						</List>
					</Grid>
					<Grid item xs={9.5} sx={{ bgcolor: "#171c26", color: "white" }}>
						<Tabs
							value={currentTab}
							onChange={handleTabOnChange}
							textColor="inherit"
							// indicatorColor="primary"
							aria-label="secondary tabs example"
						>
							<Tab value="published" label="Publicadas" />
							<Tab value="draft" label="Não Publicadas" />
						</Tabs>
						{abc}
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default App;
