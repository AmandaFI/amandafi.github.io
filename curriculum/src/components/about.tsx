import { Box } from "@mui/material";
import pic from "../assets/about.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Arrow from "@elsdoerfer/react-arrow";
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";
import { RefObject, useEffect, useRef, useState } from "react";

// https://eliav2.github.io/react-xarrows/#customsvgs
// https://dev.to/jmalvarez/check-if-an-element-is-visible-with-react-hooks-27h8

// Deixar tabelas Draggable ?

export function useIsVisible(ref: RefObject<HTMLDivElement>) {
	const [isIntersecting, setIntersecting] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));

		observer.observe(ref.current!);
		return () => {
			observer.disconnect();
		};
	}, [ref]);

	return isIntersecting;
}

const About = () => {
	const updateXarrow = useXarrow();

	const expRef = useRef<HTMLDivElement>(null);
	const amandaRef = useRef<HTMLDivElement>(null);

	const mainDivRef = useRef<HTMLDivElement>(null);
	const isVisible = useIsVisible(mainDivRef);

	useEffect(() => {
		updateXarrow();
	}, [isVisible]);

	return (
		<>
			<style type="text/css">
				{`
    .basicCol {
        height: 100%
        
    }
    `}
			</style>
			<Xwrapper>
				<div
					style={{
						backgroundColor: "#1d232f",
						height: "84vh",
						overflow: "auto",
						padding: 15,
						paddingLeft: 30,
						paddingRight: 30,
					}}
					onScroll={updateXarrow}
					onMouseMove={updateXarrow}
					ref={mainDivRef}
				>
					<Row>
						<Col className="basicCol">
							<Card id="exp_box" style={{ width: "19rem", borderBlockColor: "#a8b5d1" }} ref={expRef}>
								<Card.Body style={{ backgroundColor: "#a8b5d1", textAlign: "center", padding: 3 }}>
									<Card.Title>Experiência</Card.Title>
								</Card.Body>
								<ListGroup className="list-group-flush">
									<ListGroup.Item style={{ backgroundColor: "#1d232f", color: "white" }}>
										<Card.Title>Programadora Júnior - Quickium</Card.Title>
										<Card.Text>
											jun 2021 - Atual | Desenvolvimento de soluções empresariais utilizando Inteligência Artificial
											(Redes Neurais Artificiais e Convolucionais) e Visão Computacional.
										</Card.Text>
									</ListGroup.Item>
								</ListGroup>
							</Card>
						</Col>
						<Col className="basicCol">
							<div style={{ height: "2rem" }}>
								<Xarrow start={amandaRef} end={expRef} color="#a8b5d1" strokeWidth={3} curveness={1} />
							</div>
						</Col>
						<Col>
							<Stack>
								<div>
									<Card id="lang_box" style={{ width: "17rem", borderBlockColor: "#a8b5d1" }}>
										<Card.Body style={{ backgroundColor: "#a8b5d1", textAlign: "center", padding: 3 }}>
											<Card.Title>Idiomas</Card.Title>
										</Card.Body>
										<ListGroup className="list-group-flush">
											<ListGroup.Item style={{ backgroundColor: "#1d232f", color: "white" }}>
												Português: Língua Nativa
											</ListGroup.Item>
											<ListGroup.Item style={{ backgroundColor: "#1d232f", color: "white" }}>
												Inglês: Fluente
											</ListGroup.Item>
										</ListGroup>
									</Card>
								</div>
								<div style={{ height: "2rem" }}>
									<Xarrow start="amanda_box" end="lang_box" color="#a8b5d1" strokeWidth={3} curveness={1} />
								</div>
								<div>
									<Card id="amanda_box" style={{ width: "17rem", borderBlockColor: "#a8b5d1" }} ref={amandaRef}>
										<Card.Body style={{ backgroundColor: "#a8b5d1", textAlign: "center", padding: 3 }}>
											<Card.Title>Amanda</Card.Title>
										</Card.Body>
										<ListGroup className="list-group-flush">
											<ListGroup.Item style={{ backgroundColor: "#1d232f", color: "white" }}>
												Amanda Ferrari Iaquinta
											</ListGroup.Item>
											<ListGroup.Item style={{ backgroundColor: "#1d232f", color: "white" }}>
												Limeira - SP - Brasil
											</ListGroup.Item>
										</ListGroup>
									</Card>
								</div>
								<div style={{ height: "2rem" }}>
									<Xarrow start="amanda_box" end="post_box" color="#a8b5d1" strokeWidth={3} curveness={1} />
								</div>
								<div>
									<Card id="post_box" style={{ width: "17rem", borderBlockColor: "#a8b5d1" }}>
										<Card.Body style={{ backgroundColor: "#a8b5d1", textAlign: "center", padding: 3 }}>
											<Card.Title>Publicações</Card.Title>
										</Card.Body>
										<ListGroup className="list-group-flush">
											<ListGroup.Item style={{ backgroundColor: "#1d232f", color: "white" }}>
												<Card.Title>EEG Multipurpose Eye Blink Detector using convolutional neural network</Card.Title>
												<Card.Text>
													nov 2021 - Research, Society and Development, DOI: 10.33448/rsd-v10i15.22712.
												</Card.Text>
											</ListGroup.Item>
										</ListGroup>
									</Card>
								</div>
							</Stack>
						</Col>
						<Col className="basicCol">
							<div style={{ height: "2rem" }}>
								<Xarrow start="amanda_box" end="edu_box" color="#a8b5d1" strokeWidth={3} curveness={1} />
							</div>
						</Col>
						<Col className="basicCol">
							<Card id="edu_box" style={{ width: "19rem", borderBlockColor: "#a8b5d1" }}>
								<Card.Body style={{ backgroundColor: "#a8b5d1", textAlign: "center", padding: 3 }}>
									<Card.Title>Formação</Card.Title>
								</Card.Body>
								<ListGroup className="list-group-flush">
									<ListGroup.Item style={{ backgroundColor: "#1d232f", color: "white" }}>
										<Card.Title>IFSP - Instituto Federal de Ciência e Tecnologia de São Paulo - Piracicaba</Card.Title>
										<Card.Text>2019 - Atual | Engenharia de Computação</Card.Text>
									</ListGroup.Item>
									<ListGroup.Item style={{ backgroundColor: "#1d232f", color: "white" }}>
										<Card.Title>Iniciação Científica</Card.Title>
										<Card.Text>
											ago 2019 - jul 2020 | Desenvolvimento de uma rede neural convolucional (CNN) capaz de detectar
											artefatos de piscadas em sinais de eletroencefalograma (EEG).
										</Card.Text>
									</ListGroup.Item>
									<ListGroup.Item style={{ backgroundColor: "#1d232f", color: "white" }}>
										<Card.Title>Iternational Journey of Science and Tecnology - Kennedy Space Center</Card.Title>
										<Card.Text>
											set 2016 | Curso sobre ciência, tecnologia, engenharia e matemática (STEM) realizado no Kennedy
											Space Center - Flórida - EUA.
										</Card.Text>
									</ListGroup.Item>
								</ListGroup>
							</Card>
						</Col>
					</Row>
				</div>
			</Xwrapper>
		</>
	);
};

export default About;

{
	/* <>
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
		</> */
}
