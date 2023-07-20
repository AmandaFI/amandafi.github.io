import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Box, Stack } from "@mui/material";

const Skills = () => {
	return (
		<>
			<Stack
				direction="row"
				spacing={3}
				sx={{ bgcolor: "#1d232f", display: "flex", height: "92%", alignItems: "center" }}
			>
				<Box sx={{ bgcolor: "blue", display: "flex", flexDirection: "column", height: "95%" }}>aaaaa</Box>
				<Box sx={{ bgcolor: "blue", display: "flex", flexDirection: "column", height: "95%" }}>aaaaa</Box>
				<Box sx={{ bgcolor: "blue", display: "flex", flexDirection: "column", height: "95%" }}>aaaaa</Box>
			</Stack>
			{/* <Box sx={{ bgcolor: "#1d232f", display: "flex", height: "96%" }}>
				<Timeline position="alternate">
					<TimelineItem>
						<TimelineSeparator>
							<TimelineDot />
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent>Eat</TimelineContent>
					</TimelineItem>
					<TimelineItem>
						<TimelineSeparator>
							<TimelineDot />
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent>Code</TimelineContent>
					</TimelineItem>
					<TimelineItem>
						<TimelineSeparator>
							<TimelineDot />
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent>Sleep</TimelineContent>
					</TimelineItem>
					<TimelineItem>
						<TimelineSeparator>
							<TimelineDot />
						</TimelineSeparator>
						<TimelineContent>Repeat</TimelineContent>
					</TimelineItem>
				</Timeline>
			</Box> */}
		</>
	);
};

export default Skills;
