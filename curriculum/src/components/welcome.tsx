import { Button, Stack, ThemeProvider, Typography, createTheme } from "@mui/material";
import Curriculo from "../curriculo.pdf";

const theme = createTheme({
	typography: {
		button: {
			textTransform: "none",
		},
	},
});

type welcomePropsType = {
	openNewTab: (selectedFileId: number) => () => void;
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
						<Button onClick={props.openNewTab(3)} sx={{ fontSize: 17, border: 1, color: "#a8b5d1" }}>
							Projetos
						</Button>
						<Button onClick={props.openNewTab(2)} sx={{ fontSize: 17, border: 1, color: "#a8b5d1" }}>
							Contato
						</Button>
						<a href={Curriculo} download="Amanda_Iaquinta-Currículo" target="_blank" rel="noopener noreferrer">
							<Button sx={{ fontSize: 17, border: 1, color: "#a8b5d1" }}>Currículo</Button>
						</a>
					</ThemeProvider>
				</Stack>
			</Stack>
		</>
	);
};

export default Welcome;
