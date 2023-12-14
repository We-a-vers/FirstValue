import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const TimeLine = () => {
  return (
    <>
      <Timeline position="alternate-reverse">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="h-22 pt-14 text-sky-900 text-xl font-medium font-['Noto Serif TC'] leading-normal">
              2012
            </div>
            <div className="text-right pb-4 text-zinc-800 text-[13px] font-normal font-['Noto Sans TC'] leading-[16.90px]">
              與美國合作銅薄膜真空
              <br />
              蝕刻Sputter製程
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="h-22 pt-10 text-sky-900 text-xl font-medium font-['Noto Serif TC'] leading-normal">
              2013
            </div>
            <div className="text-left pb-3 text-zinc-800 text-[13px] font-normal font-['Noto Sans TC'] leading-[16.90px]">
              與烏克蘭合作在中國現
              <br />
              地化自製藍寶石長晶爐
              <br />
              銷售及相關藍寶石材料
              <br />
              銷售
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="h-22 pt-16 text-sky-900 text-xl font-medium font-['Noto Serif TC'] leading-normal">
              2014
            </div>
            <div className="text-right pb-4 text-zinc-800 text-[13px] font-normal font-['Noto Sans TC'] leading-[16.90px]">
              成立大陸辦事處,開發測
              <br />
              試治具及探針應用
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="h-22 pt-14 text-sky-900 text-xl font-medium font-['Noto Serif TC'] leading-normal">
              2015
            </div>
            <div className="text-left pb-3 text-zinc-800 text-[13px] font-normal font-['Noto Sans TC'] leading-[16.90px]">
              成功開發銷售UV固化燈
              <br />
              及高亮度檢查燈等零件
              <br />
              維修服務
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="h-22 pt-14 text-sky-900 text-xl font-medium font-['Noto Serif TC'] leading-normal">
              2014
            </div>
            <div className="text-right pb-4 text-zinc-800 text-[13px] font-normal font-['Noto Sans TC'] leading-[16.90px]">
              ITO靶材燒結爐 with 日<br />本 ；3D貼合治具改善
              <br />
              0.1mmt玻璃吸附問題
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="h-22 pt-16 text-sky-900 text-xl font-medium font-['Noto Serif TC'] leading-normal">
              2018
            </div>
            <div className="text-left pb-3 text-zinc-800 text-[13px] font-normal font-['Noto Sans TC'] leading-[16.90px]">
              開發切割精度檢查機及
              <br />
              超高亮度面光源、Micro
              <br /> Led貼合治具
            </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      <div className="pt-10">
        <div className="text-center pb-1 text-sky-950 text-xl font-medium font-['Noto Serif TC'] leading-normal">
          2020 ~ 2022
        </div>
        <div className="text-center text-sky-950 text-[13px] font-normal font-['Noto Sans TC'] leading-[16.90px]">
          將提升機械手臂視覺的系統規劃及自動化設<br />備開發
        </div>
      </div>
    </>
  );
};

export default TimeLine;
