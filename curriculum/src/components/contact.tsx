import { Box } from "@mui/system";
import { CopyBlock, atomOneDark, dracula, a11yDark } from "react-code-blocks";
import { CodeSection } from "react-code-section-lib";
import ReactMarkdown from "react-markdown";

const Contact = () => {
	const value = `class Contato {
	    E-mail: "a.ferrari.iaquinta@gmail.com",
        Telefone: +55(19) 99960-1705,
        GitHub: "https://github.com/AmandaFI"
        Linkedin: "https://www.linkedin.com/in/amandafi/"
	}
    
    
    
    
    
    
    
    `;

	return (
		<Box sx={{ bgcolor: "#1d232f" }}>
			<CodeSection showLineNumbers={true} theme={"dark"} lang={"typescript"}>
				{value}
			</CodeSection>
			<CopyBlock
				text={value}
				language={"typescript"}
				showLineNumbers={true}
				startingLineNumber={1}
				theme={dracula}
				codeBlock
			/>
			<code> const x = 1; const a = 1</code>
		</Box>
	);
};

export default Contact;
