import { Box } from "@mui/system";
import { CopyBlock, dracula, hybrid, anOldHope, CodeBlock, ocean, zenburn } from "react-code-blocks";
import { CodeSection } from "react-code-section-lib";

// type Contato = "E-mail" | "Telefone" | "Linkedin" | "GitHub"

// 	let contactar: Contato = "E-mail"
// 	let info: String;

// 	switch (comunicacao) {
// 		case "E-mail":
// 			info = "";
// 			break;
// 		case "Telefone":
// 			info = "";
// 			break;
// 		case "Linkedin":
// 			info = ""
// 			break;
// 		case "GitHub":
// 			infor = ""
// 			break;
// 	}

const Contact = () => {
	const value = `type Contato = "E-mail" | "Telefone" | "Linkedin" | "GitHub"
let contactar: Contato = "E-mail"

switch (contactar) {
	case "E-mail":
		console.log("a.ferrari.iaquinta@gmail.com");
		break;
	case "Telefone":
		console.log("+55(19) 99960-1705");
		break;
	case "Linkedin":
		console.log("https://www.linkedin.com/in/amandafi/")
		break;
	case "GitHub":
		console.log("https://github.com/AmandaFI");
		break;
	default: 
		console.log("")
		break;
}
	`;

	return (
		<div
			style={{
				backgroundColor: "#282a36",
				fontSize: 20,
				fontFamily: "Fira Code, monospace;",
				lineHeight: 0.5,
				display: "flex",
				flexDirection: "column",
				height: "84vh",
			}}
		>
			{/* <CodeSection showLineNumbers={true} theme={"dark"} lang={"typescript"}>
				{value}
			</CodeSection> */}
			<CopyBlock
				text={value}
				language={"typescript"}
				showLineNumbers={true}
				startingLineNumber={1}
				wrapLongLines={true}
				theme={dracula}
				codeBlock={false}
				copied={false}
				onCopy={() => {}}
			/>
		</div>
	);
};

export default Contact;
