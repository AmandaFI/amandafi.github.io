import { Button, Stack, ThemeProvider, Typography, createTheme } from "@mui/material";

const theme = createTheme({
	typography: {
		button: {
			textTransform: "none",
		},
	},
});

type welcomePropsType = {
	// tabs: number[];
	setCurrentTab: React.Dispatch<React.SetStateAction<string | null>>;
};

const Welcome = (props: welcomePropsType) => {
	return (
		<>
			<Stack direction="column" sx={{ bgcolor: "#1d232f", display: "flex", height: "84vh", alignItems: "center" }}>
				<Typography variant="h3" component="h3" sx={{ display: "flex", alignItems: "center", mt: "11rem" }}>
					Amanda Ferrari Iaquinta
				</Typography>
				<Typography
					variant="h5"
					component="h5"
					sx={{ display: "flex", alignItems: "center", color: "#a8b5d1", mb: "2rem" }}
				>
					Desenvolvedora e Estudante de Engenharia de Computação
				</Typography>
				<Stack direction="row" spacing={3}>
					<ThemeProvider theme={theme}>
						<Button
							onClick={() => props.setCurrentTab("projetos.js")}
							sx={{ fontSize: 17, border: 1, color: "#a8b5d1" }}
						>
							Portifólio
						</Button>
						<Button
							onClick={() => props.setCurrentTab("contato.ts")}
							sx={{ fontSize: 17, border: 1, color: "#a8b5d1" }}
						>
							Contato
						</Button>
						<Button sx={{ fontSize: 17, border: 1, color: "#a8b5d1" }}>Currículo</Button>
					</ThemeProvider>
				</Stack>
			</Stack>
		</>
	);
};

export default Welcome;
