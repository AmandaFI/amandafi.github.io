import { Box, Button, Stack, ThemeProvider, Typography, createTheme } from "@mui/material";

const theme = createTheme({
	typography: {
		button: {
			textTransform: "none",
		},
	},
});

const Welcome = () => {
	return (
		<>
			<Stack direction="column" sx={{ bgcolor: "#1d232f", display: "flex", height: "96%", alignItems: "center" }}>
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
						<Button sx={{ fontSize: 17, border: 1, color: "#a8b5d1" }}>Portifólio</Button>
						<Button sx={{ fontSize: 17, border: 1, color: "#a8b5d1" }}>Contato</Button>
						<Button sx={{ fontSize: 17, border: 1, color: "#a8b5d1" }}>Currículo</Button>
					</ThemeProvider>
				</Stack>
			</Stack>
		</>
	);
};

export default Welcome;
