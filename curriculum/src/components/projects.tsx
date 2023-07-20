import { Box, Card, CardActions, CardContent, Container, Paper, Stack, Typography } from "@mui/material";

const Projects = () => {
	return (
		<>
			{/* <Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					"& > :not(style)": {
						m: 4,
						width: 300,
						height: 350,
					},
					justifyContent: "center",
					bgcolor: "#1d232f",
				}}
			>
				<Paper elevation={0} />
				aaaaa
				<Paper />
				<Paper elevation={3} />
				<Paper elevation={0} />
				<Paper />
				<Paper elevation={3} />
				<Paper elevation={0} />
				<Paper />
				<Paper elevation={3} />
				<Paper elevation={0} />
				<Paper />
				<Paper elevation={3} />
			</Box> */}
			<Box
				sx={{
					display: "flex",
					flex: 8,
					p: 5,
					pt: 2,
					justifyContent: "center",
					flexWrap: "wrap",
					bgcolor: "#1d232f",
				}}
			>
				<Card
					sx={{
						minWidth: 275,
						maxWidth: 200,
						mr: 3,
						ml: 3,
						mt: 5,
						minHeight: 250,
						maxHeight: "25%",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<CardContent>
						<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
							{"aaa"}
						</Typography>
						<Typography variant="h5" component="div">
							{"aaaa"}
						</Typography>
						<Typography sx={{ mb: 1 }} color="text.secondary">
							{"aaa"}
						</Typography>
						<Typography sx={{ mb: 1 }} color="text.secondary">
							{"aaaa"}
						</Typography>
					</CardContent>
					<CardActions disableSpacing sx={{ mt: "auto", display: "flex" }}>
						<Stack direction="row" display="flex" justifyContent="end"></Stack>
					</CardActions>
				</Card>
				<Card
					sx={{
						minWidth: 275,
						maxWidth: 200,
						mr: 3,
						ml: 3,
						mt: 5,
						minHeight: 250,
						maxHeight: "25%",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<CardContent>
						<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
							{"aaa"}
						</Typography>
						<Typography variant="h5" component="div">
							{"aaaa"}
						</Typography>
						<Typography sx={{ mb: 1 }} color="text.secondary">
							{"aaa"}
						</Typography>
						<Typography sx={{ mb: 1 }} color="text.secondary">
							{"aaaa"}
						</Typography>
					</CardContent>
					<CardActions disableSpacing sx={{ mt: "auto", display: "flex" }}>
						<Stack direction="row" display="flex" justifyContent="end"></Stack>
					</CardActions>
				</Card>
				<Card
					sx={{
						minWidth: 275,
						maxWidth: 200,
						mr: 3,
						ml: 3,
						mt: 5,
						minHeight: 250,
						maxHeight: "25%",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<CardContent>
						<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
							{"aaa"}
						</Typography>
						<Typography variant="h5" component="div">
							{"aaaa"}
						</Typography>
						<Typography sx={{ mb: 1 }} color="text.secondary">
							{"aaa"}
						</Typography>
						<Typography sx={{ mb: 1 }} color="text.secondary">
							{"aaaa"}
						</Typography>
					</CardContent>
					<CardActions disableSpacing sx={{ mt: "auto", display: "flex" }}>
						<Stack direction="row" display="flex" justifyContent="end"></Stack>
					</CardActions>
				</Card>
				<Card
					sx={{
						minWidth: 275,
						maxWidth: 200,
						mr: 3,
						ml: 3,
						mt: 5,
						minHeight: 250,
						maxHeight: "25%",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<CardContent>
						<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
							{"aaa"}
						</Typography>
						<Typography variant="h5" component="div">
							{"aaaa"}
						</Typography>
						<Typography sx={{ mb: 1 }} color="text.secondary">
							{"aaa"}
						</Typography>
						<Typography sx={{ mb: 1 }} color="text.secondary">
							{"aaaa"}
						</Typography>
					</CardContent>
					<CardActions disableSpacing sx={{ mt: "auto", display: "flex" }}>
						<Stack direction="row" display="flex" justifyContent="end"></Stack>
					</CardActions>
				</Card>
				<Card
					sx={{
						minWidth: 275,
						maxWidth: 200,
						mr: 3,
						ml: 3,
						mt: 5,
						minHeight: 250,
						maxHeight: "25%",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<CardContent>
						<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
							{"aaa"}
						</Typography>
						<Typography variant="h5" component="div">
							{"aaaa"}
						</Typography>
						<Typography sx={{ mb: 1 }} color="text.secondary">
							{"aaa"}
						</Typography>
						<Typography sx={{ mb: 1 }} color="text.secondary">
							{"aaaa"}
						</Typography>
					</CardContent>
					<CardActions disableSpacing sx={{ mt: "auto", display: "flex" }}>
						<Stack direction="row" display="flex" justifyContent="end"></Stack>
					</CardActions>
				</Card>
				<Card
					sx={{
						minWidth: 275,
						maxWidth: 200,
						mr: 3,
						ml: 3,
						mt: 5,
						minHeight: 250,
						maxHeight: "25%",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<CardContent>
						<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
							{"aaa"}
						</Typography>
						<Typography variant="h5" component="div">
							{"aaaa"}
						</Typography>
						<Typography sx={{ mb: 1 }} color="text.secondary">
							{"aaa"}
						</Typography>
						<Typography sx={{ mb: 1 }} color="text.secondary">
							{"aaaa"}
						</Typography>
					</CardContent>
					<CardActions disableSpacing sx={{ mt: "auto", display: "flex" }}>
						<Stack direction="row" display="flex" justifyContent="end"></Stack>
					</CardActions>
				</Card>
				<Card
					sx={{
						minWidth: 275,
						maxWidth: 200,
						mr: 3,
						ml: 3,
						mt: 5,
						minHeight: 250,
						maxHeight: "25%",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<CardContent>
						<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
							{"aaa"}
						</Typography>
						<Typography variant="h5" component="div">
							{"aaaa"}
						</Typography>
						<Typography sx={{ mb: 1 }} color="text.secondary">
							{"aaa"}
						</Typography>
						<Typography sx={{ mb: 1 }} color="text.secondary">
							{"aaaa"}
						</Typography>
					</CardContent>
					<CardActions disableSpacing sx={{ mt: "auto", display: "flex" }}>
						<Stack direction="row" display="flex" justifyContent="end"></Stack>
					</CardActions>
				</Card>
				<Card
					sx={{
						minWidth: 275,
						maxWidth: 200,
						mr: 3,
						ml: 3,
						mt: 5,
						minHeight: 250,
						maxHeight: "25%",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<CardContent>
						<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
							{"aaa"}
						</Typography>
						<Typography variant="h5" component="div">
							{"aaaa"}
						</Typography>
						<Typography sx={{ mb: 1 }} color="text.secondary">
							{"aaa"}
						</Typography>
						<Typography sx={{ mb: 1 }} color="text.secondary">
							{"aaaa"}
						</Typography>
					</CardContent>
					<CardActions disableSpacing sx={{ mt: "auto", display: "flex" }}>
						<Stack direction="row" display="flex" justifyContent="end"></Stack>
					</CardActions>
				</Card>
				<Card
					sx={{
						minWidth: 275,
						maxWidth: 200,
						mr: 3,
						ml: 3,
						mt: 5,
						minHeight: 250,
						maxHeight: "25%",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<CardContent>
						<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
							{"aaa"}
						</Typography>
						<Typography variant="h5" component="div">
							{"aaaa"}
						</Typography>
						<Typography sx={{ mb: 1 }} color="text.secondary">
							{"aaa"}
						</Typography>
						<Typography sx={{ mb: 1 }} color="text.secondary">
							{"aaaa"}
						</Typography>
					</CardContent>
					<CardActions disableSpacing sx={{ mt: "auto", display: "flex" }}>
						<Stack direction="row" display="flex" justifyContent="end"></Stack>
					</CardActions>
				</Card>
			</Box>
		</>
	);
};

export default Projects;
