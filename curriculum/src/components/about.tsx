import { Box } from "@mui/material";
import pic from "../assets/about.jpg";

const About = () => {
	return (
		<>
			<Box
				sx={{
					display: "flex",
					flex: 8,
					p: 5,
					pt: 2,
					justifyContent: "center",
					flexWrap: "wrap",
					bgcolor: "#1d232f",
					height: "82%",
				}}
			>
				<img src={pic} style={{ height: "93%", width: "93%", display: "flex" }}></img>
			</Box>
		</>
	);
};

export default About;
