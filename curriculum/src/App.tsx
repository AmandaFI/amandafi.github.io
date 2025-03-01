import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  VscChevronDown,
  VscRemote,
  VscSourceControl,
  VscChevronUp,
  VscClose,
  VscLayoutSidebarLeft,
  VscLayoutPanel,
  VscLayoutSidebarRightOff,
  VscLayout,
} from "react-icons/vsc";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Contact from "./components/contact";
import Welcome from "./components/welcome";
import About from "./components/about";
import Skills from "./components/skills";
// import Projects from "./components/projects";
import Stack from "react-bootstrap/Stack";
import "./App.css";

// npm run deploy

type Tabs = "bemVindo.rb" | "sobre.tsx" | "contato.ts" | "habilidades.ipynb";

export type displayIconsTabType = {
  icon: JSX.Element;
  text: string;
  component: JSX.Element;
  tabId: number;
};

const LEFT_COLUMN_ITEMS = [
  { icon: <AiFillLinkedin size={32} className="leftColumnIconStyle" />, url: "https://www.linkedin.com/in/amandafi/" },
  { icon: <AiOutlineGithub size={32} className="leftColumnIconStyle" />, url: "https://github.com/AmandaFI" },
  { icon: <FaEnvelope size={28} className="leftColumnIconStyle" />, url: "mailto:a.ferrari.iaquinta@gmail.com" },
];

const App = () => {
  const [key, setKey] = useState<string | null>("bemVindo.rb");

  const openFile = (selectedFileId: number) => () => {
    if (openTabIds[selectedFileId] === undefined) {
      setOpenTabIds((previousTabs) =>
        previousTabs.map((item, index) => (index === selectedFileId ? selectedFileId : item))
      );
    }
    setKey(TABS[selectedFileId].text);
  };

  const TABS: displayIconsTabType[] = [
    {
      icon: <i className="devicon-ruby-plain colored"></i>,
      text: "bemVindo.rb",
      component: <Welcome openNewTab={openFile} setCurrentTab={setKey} />,
      tabId: 0,
    },
    { icon: <i className="devicon-react-original colored"></i>, text: "sobre.tsx", component: <About />, tabId: 1 },
    {
      icon: <i className="devicon-typescript-plain colored"></i>,
      text: "contato.ts",
      component: <Contact />,
      tabId: 2,
    },
    {
      icon: <i className="devicon-jupyter-plain colored"></i>,
      text: "habilidades.ipynb",
      component: <Skills />,
      tabId: 3,
    },
  ];

  const [displayedFiles, setDisplayedFiles] = useState<displayIconsTabType[]>(TABS);
  const [openTabIds, setOpenTabIds] = useState<Array<number | undefined>>([...Array(TABS.length).keys()]);

  const removeTab = (closedTabId: number) => () => {
    setKey(
      openTabIds.find((el, index) => el !== undefined && index !== closedTabId)
        ? TABS[openTabIds.find((el, index) => el !== undefined && index !== closedTabId)!].text
        : null
    );
    setOpenTabIds((previousTabs) => previousTabs.map((tabId) => (tabId === closedTabId ? undefined : tabId)));
  };

  return (
    <>
      <style type="text/css">
        {`
					.btn {
						text-align: center !important;
					}
					.btn-primary {
						--bs-btn-hover-bg: #1d232f;
						--bs-btn-hover-border-color: #0a58ca;
					}

					.btn-filesBtn {
						background-color: #171c26;
						border: none;
						text-align: left !important;
					}

					.btn-bottomLeft {
						color: "white";
						text-align: "left";
						justify-content: "left";
						font-size: 17;
						display: "flex";
						background-color: "#457dff";
						border: none;
					}

					.btn-leftIconBtn {
						background-color: #141820;
						color: #a8b5d1;
						border: none;
						margin-left: 0.5rem;
					}
	  
  			`}
      </style>
      {/* <div className="gridGeneric"> */}
      <Row className="row topRow gx-0" style={{ color: "white" }}>
        <Col>
          <div style={{ display: "flex", textAlign: "left", justifyContent: "left" }}></div>
        </Col>
        <Col>
          <div
            style={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              fontSize: 13,
              color: "#a8b5d1",
              padding: "0.2%",
            }}
          >
            Currículo - Portifólio - Amanda F. Iaquinta
          </div>
        </Col>
        <Col>
          <div
            style={{
              display: "flex",
              textAlign: "right",
              justifyContent: "right",
              marginRight: "1rem",
              padding: "0.2%",
            }}
          >
            <VscLayoutSidebarLeft style={{ color: "#a8b5d1", marginRight: "0.5rem" }} />
            <VscLayoutPanel style={{ color: "#a8b5d1", marginRight: "0.5rem" }} />
            <VscLayoutSidebarRightOff style={{ color: "#a8b5d1", marginRight: "0.5rem" }} />
            <VscLayout style={{ color: "#a8b5d1", marginRight: "0.5rem" }} />
          </div>
        </Col>
      </Row>
      <Row className="row middleRow gx-0">
        <Col className="col firstCol col-md-auto">
          <Stack>
            {LEFT_COLUMN_ITEMS.map((item) => (
              <a href={item.url}>
                <Button variant="leftIconBtn" className="btn-primary">
                  {" "}
                  {item.icon}{" "}
                </Button>
              </a>
            ))}
          </Stack>
        </Col>
        <Col className="col secondCol" xs={2}>
          <Stack>
            <Button
              variant="filesBtn"
              className="btn-primary"
              onClick={() => setDisplayedFiles((previousState) => (previousState.length > 0 ? [] : TABS))}
            >
              {displayedFiles.length > 0 ? <VscChevronDown /> : <VscChevronUp />}
              &nbsp;{" "}
              <strong>
                <span style={{ fontSize: "1.1rem" }}>Curriculum</span>
              </strong>
            </Button>
          </Stack>
          <Stack>
            {displayedFiles.map((item) => (
              <Button
                variant="filesBtn"
                className="btn-primary text-left"
                onClick={openFile(item.tabId)}
                key={item.tabId}
                style={{ paddingLeft: "1.5rem" }}
              >
                {item.icon}
                &nbsp;
                <span style={{ fontSize: "1.1rem" }}>{item.text}</span>
              </Button>
            ))}
          </Stack>
        </Col>
        <Col className="col thirdCol">
          <Tabs
            id="controlled-tab-example"
            // activeKey={TABS[openTabIds[0]].text}
            activeKey={key ? key : "bemVindo.rb"}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            {openTabIds.map((itemId) =>
              itemId !== undefined ? (
                <Tab
                  eventKey={TABS[itemId].text}
                  title={
                    <>
                      {TABS[itemId].icon} &nbsp;{TABS[itemId].text}
                      {key === TABS[itemId].text ? (
                        <button
                          style={{ backgroundColor: "#1d232f", color: "white", border: "none" }}
                          onClick={removeTab(itemId)}
                        >
                          <VscClose />
                        </button>
                      ) : (
                        false
                      )}
                    </>
                  }
                >
                  {TABS[itemId].component}
                </Tab>
              ) : (
                false
              )
            )}
          </Tabs>
        </Col>
      </Row>
      <Row className="row bottonRow gx-0">
        <Stack direction="horizontal" className="bottonStack">
          <div
            style={{
              paddingLeft: "1.5%",
              paddingRight: "1%",
              paddingTop: "0.4%",
              paddingBottom: "0.4%",
              margin: 0,
              backgroundColor: "#457dff",
            }}
          >
            <VscRemote />
            &nbsp; WSL: Ubuntu
          </div>
          <div style={{ padding: 0, margin: 0, color: "#a8b5d1" }}>
            &nbsp;&nbsp;&nbsp;
            <VscSourceControl />
            &nbsp; main
          </div>
          <div className="p-2 ms-auto" style={{ padding: 0, margin: 0 }}></div>
          <div className="p-2" style={{ padding: 0, margin: 0 }}>
            <Stack direction="horizontal" style={{ color: "#a8b5d1" }}>
              Implementado com: &nbsp;
              <i className="devicon-react-original colored"></i> &nbsp;React&nbsp;&nbsp;
              <i className="devicon-bootstrap-plain colored"></i> &nbsp;Bootstrap
            </Stack>
          </div>
        </Stack>
      </Row>
      {/* </div> */}
    </>
  );
};

export default App;
