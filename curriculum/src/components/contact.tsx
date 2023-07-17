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
let info: String;

switch (contactar) {
	case "E-mail":
		info = "a.ferrari.iaquinta@gmail.com";
		break;
	case "Telefone":
		info = "+55(19) 99960-1705";
		break;
	case "Linkedin":
		info = "https://www.linkedin.com/in/amandafi/"
		break;
	case "GitHub":
		info = "https://github.com/AmandaFI"
		break;
}
	
	
	`;

	return (
		<Box sx={{ bgcolor: "#1d232f", fontSize: 17, fontFamily: "Fira Code, monospace;", lineHeight: 0.5 }}>
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
		</Box>
	);
};

export default Contact;
