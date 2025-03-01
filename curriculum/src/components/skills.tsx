import { VscAdd, VscPlay } from "react-icons/vsc";
import { skillSectionsPort } from "../utils/text";
import { CSSProperties, useState } from "react";
import { Button, Stack } from "react-bootstrap";
import "../App.css";

const sections = skillSectionsPort;

const skillDescriptionDiv: CSSProperties = {
  backgroundColor: "#171c26",
  color: "white",
  marginLeft: 22,
  marginRight: 22,
  marginTop: 10,
  padding: 5,
  paddingLeft: 8,
  width: "100%",
  display: "flex",
  flexDirection: "column",
};

const selectedDescriptionSkillDiv: CSSProperties = {
  ...skillDescriptionDiv,
  borderStyle: "solid",
  borderColor: "#457dff",
  borderWidth: "1px",
};

const skillDiv: CSSProperties = {
  display: "flex",
};

const selectedSkillDiv: CSSProperties = {
  ...skillDiv,
  borderLeftStyle: "solid",
  borderLeftColor: "#457dff",
};

const Skills = () => {
  //const [clickedCell, setClickedCell] = useState<number | null>(null);
  const [selectedDiv, setSelectedDiv] = useState(0);

  const changeSelectedDiv = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.key);
  };

  const changeSelectedDivOnClick = (index: number) => () => {
    setSelectedDiv(index === Object.keys(sections).length - 1 ? 0 : index + 1);
  };

  return (
    <>
      <style type="text/css">
        {`
			grid-container {
				display: grid;
				grid-template-columns: 1fr 1fr;
				grid-gap: 20px;
			}
			
			`}
        .
      </style>
      <div
        style={{
          backgroundColor: "#1d232f",
          height: "84vh",
          overflow: "auto",
          width: "100%",
        }}
        onKeyDown={changeSelectedDiv}
      >
        <div
          style={{
            backgroundColor: "#1d232f",
            color: "white",
            margin: 5,
            fontSize: 17,
          }}
        >
          &nbsp;
          <VscAdd />
          &nbsp; Code&nbsp;&nbsp;&nbsp; <VscAdd />
          &nbsp; Markdown
        </div>
        {Object.entries(sections).map(([section, projects], index) => (
          <>
            <div
              style={{
                backgroundColor: "#1d232f",
                fontSize: "2rem",
                color: "white",
                marginLeft: "57px",
                marginRight: 22,
                marginTop: 10,
              }}
              onClick={() => setSelectedDiv(index)}
            >
              {section}
            </div>
            <div style={index === selectedDiv ? { ...selectedSkillDiv } : { ...skillDiv }}>
              <Stack direction="vertical" style={{ marginTop: "1%", marginLeft: "1%", marginRight: 0 }}>
                <Stack direction="horizontal" style={{}}>
                  <Button
                    style={{ backgroundColor: "#1d232f", border: "none", color: "white", padding: 0 }}
                    onClick={changeSelectedDivOnClick(index)}
                  >
                    <VscPlay size={23} />
                  </Button>
                  {/* <Button
										style={{
											backgroundColor: "#1d232f",
											border: "none",
											color: "white",
											padding: 0,
											paddingLeft: "6%",
										}}
										onClick={changeSelectedDivOnClick(index)}
									>
										<VscChevronDown size={18} />
									</Button> */}
                </Stack>
                <div style={{ display: "flex" }}></div>
                {/* <div style={{ marginBottom: 0 }}>{`[${index}]`}</div> */}
              </Stack>

              <div
                style={index === selectedDiv ? { ...selectedDescriptionSkillDiv } : { ...skillDescriptionDiv }}
                onClick={() => setSelectedDiv(index)}
              >
                {projects.map((project) => (
                  <ul>
                    {
                      <li style={{ fontSize: "1.1rem" }}>
                        {project.desc}{" "}
                        {project.link ? (
                          <a href={project.link} style={{ color: "#a8b5d1" }}>
                            Ver mais.
                          </a>
                        ) : (
                          false
                        )}
                      </li>
                    }
                  </ul>
                ))}
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Skills;
