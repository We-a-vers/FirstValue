/* eslint-disable react/prop-types */
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const TimeLine = ({ data }) => {
  const renderCSS = (index) => {
    if (index % 2 === 1) return 'desktop:mr-36';
    else return 'desktop:ml-32';
  };

  return (
    <>
      <Timeline position="alternate-reverse">
        {data.map((x, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot
                sx={{
                  backgroundColor: 'white',
                  border: 7,
                  borderColor: '#023e73',
                }}
              />
              <TimelineConnector
                sx={{
                  backgroundColor: '#b1c3d4',
                }}
              />
            </TimelineSeparator>
            <TimelineContent>
              <div className="desktop:pt-18 text-foundation-blue-normal desktop:text-4xl text-xl font-medium font-chi-serif">
                {x.year}
              </div>
              <div
                className={`${renderCSS(
                  index,
                )} desktop: pb-40 desktop:w-10/12 text-natural-color-black desktop:text-[22px] text-[13px] font-normal font-chi-sans`}
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
