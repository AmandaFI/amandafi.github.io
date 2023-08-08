import { Card, Container } from "react-bootstrap";

const Projects = () => {
	return (
		<>
			<Container
				style={{
					backgroundColor: "#1d232f",
					height: "84vh",
					overflow: "auto",
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
				}}
			>
				<Card style={{ minWidth: "3rem", maxWidth: "18rem", margin: "10px", maxHeight: "14rem" }}>
					<Card.Body>
						<Card.Title>Card Title</Card.Title>

						<Card.Text>
							Some quick example text to build on the card title and make up the bulk of the card's content.
						</Card.Text>
						<Card.Link href="#">Card Link</Card.Link>
						<Card.Link href="#">Another Link</Card.Link>
					</Card.Body>
				</Card>
				<Card style={{ width: "18rem", margin: "10px", maxHeight: "14rem" }}>
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk of the card's content.
						</Card.Text>
						<Card.Link href="#">Card Link</Card.Link>
						<Card.Link href="#">Another Link</Card.Link>
					</Card.Body>
				</Card>
				<Card style={{ width: "18rem", margin: "10px", maxHeight: "14rem" }}>
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk of the card's content.
						</Card.Text>
						<Card.Link href="#">Card Link</Card.Link>
						<Card.Link href="#">Another Link</Card.Link>
					</Card.Body>
				</Card>
				<Card style={{ width: "18rem", margin: "10px", maxHeight: "14rem" }}>
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk of the card's content.
						</Card.Text>
						<Card.Link href="#">Card Link</Card.Link>
						<Card.Link href="#">Another Link</Card.Link>
					</Card.Body>
				</Card>
			</Container>
		</>
	);
};

export default Projects;
