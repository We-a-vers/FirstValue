import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const TimeLine = (data) => {
  const renderCSS = (index) => {
    if (index % 2 === 0) return "text-left";
    else return "text-right";
  };

  return (
    <>
      <Timeline position="alternate-reverse">
        {data.map((x, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot
                sx={{
                  backgroundColor: "white",
                  border: 7,
                  borderColor: "#023e73",
                }}
              />
              <TimelineConnector
                sx={{
                  backgroundColor: "#b1c3d4",
                }}
              />
            </TimelineSeparator>
            <TimelineContent>
              <div className="desktop:pt-18 text-sky-900 desktop:text-4xl text-xl font-medium font-['Noto Serif TC']">
                {x. year}
              </div>
              <div
                className={`${renderCSS(
                  index
                )} desktop:w-100 text-zinc-800 desktop:text-[22px] text-[13px] font-normal font-['Noto Sans TC']`}
              >
                {x.description}
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </>
  );
};

export default TimeLine;
