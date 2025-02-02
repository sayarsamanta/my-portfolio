import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "../components/WorkIcon";
import { styles } from "./styles";
import { useTheme } from "../context/ThemeProvider";
function Experience() {
  const { darkMode } = useTheme();

  return (
    <div
      className="h-full dark:bg-darkBodyPrimary"
      style={{ paddingTop: "20px" }}
    >
      <VerticalTimeline
        lineColor={!darkMode ? "white" : "black"}
        className="dark:bg-darkBodyPrimary"
      >
        <VerticalTimelineElement
          className="vertical-timeline-element--work text-left"
          contentStyle={styles.contentStyle}
          iconStyle={styles.iconStyle}
          icon={<WorkIcon type={"work"} />}
        >
          <strong className="text-lg text-black dark:text-grey">
            Astria Digital
          </strong>
          <h3 className="vertical-timeline-element-title text-black text-sm">
            Senior Frontend Developer
          </h3>

          <ul>
            <li className="text-xs sm:text-sm text-wrap text-black px-5">
              Led the effort to upgrade outdated apps to a more contemporary
              React-based framework, which improved application speed and
              reduced load times by 30%.
            </li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work text-left"
          //date="2022 - 2024"
          contentStyle={styles.contentStyle}
          iconStyle={styles.iconStyle}
          icon={<WorkIcon />}
        >
          <strong className="text-lg text-black dark:text-grey">
            Iksula & Kamal Osman Jamjoom
          </strong>
          <h3 className="vertical-timeline-element-title text-black">
            System Analyst
          </h3>

          <ul>
            <li className="text-xs sm:text-sm text-wrap text-black px-5">
              Led a project to switch to React, resulting in a 25% smaller
              codebase and a 35% faster loading time for webpages. Conducted
              thorough system audits, identifying inefficiencies and
              recommending enhancements to improve performance.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work text-left"
          //date="2021 - 2022"
          contentStyle={styles.contentStyle}
          iconStyle={styles.iconStyle}
          icon={<WorkIcon />}
        >
          <strong className="text-lg text-black dark:text-grey">
            Knowlarity Cloud Communication
          </strong>
          <h3 className="vertical-timeline-element-title text-black">
            Software Engineer
          </h3>
          {/* <h4 className="vertical-timeline-element-subtitle">Gurgaon, India</h4> */}
          <ul>
            <li className="text-xs sm:text-sm text-wrap text-black px-5">
              Worked with stakeholders to include improvements and new features
              for overall product success. Coordinated with product managers to
              define clear project scopes, ensuring alignment with business
              goals and objectives.
            </li>
            <li className="text-xs sm:text-sm text-wrap text-black px-5"></li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work text-left"
          //date="2019 - 2021"
          contentStyle={styles.contentStyle}
          iconStyle={styles.iconStyle}
          icon={<WorkIcon />}
        >
          <strong className="text-lg text-black dark:text-grey">
            Lecturenotes Technology Private Limited
          </strong>
          <h3 className="vertical-timeline-element-title text-black">
            Senior Software Engineer
          </h3>
          {/* <h4 className="vertical-timeline-element-subtitle">
            Bhubaneswar, India
          </h4> */}
          <ul>
            <li className="text-xs sm:text-sm text-wrap text-black px-5">
              Analyzed user feedback to make informed decisions on software
              enhancements, leading to a 25% increase in customer satisfaction
              for overall product. Implemented security protocols and encryption
              techniques, safeguarding sensitive data and complying with
              industry regulations.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education text-left"
          //date="2017 2019"
          contentStyle={styles.contentStyle}
          iconStyle={styles.iconStyle}
          icon={<WorkIcon />}
        >
          <strong className="text-lg text-black dark:text-grey">
            Ladybird Web Solution
          </strong>
          <h3 className="vertical-timeline-element-title text-black">
            Android Developer
          </h3>
          {/* <h4 className="vertical-timeline-element-subtitle">
            Bengaluru, India
          </h4> */}
          <ul>
            <li className="text-xs sm:text-sm text-wrap text-black px-5">
              Implemented industry standards to produce reliable, user-friendly
              apps. Managed application updates on Google Play Store, including
              version control and release notes documentation.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education text-left"
          //date="2016 2017"
          contentStyle={styles.contentStyle}
          iconStyle={styles.iconStyle}
          icon={<WorkIcon type={"training"} />}
        >
          <strong className="text-lg text-black dark:text-grey">
            Palle Technology
          </strong>
          <h3 className="vertical-timeline-element-title text-black">
            Android Developer Trainee
          </h3>
          {/* <h4 className="vertical-timeline-element-subtitle">
            Bengaluru, India
          </h4> */}
          <ul>
            <li className="text-xs sm:text-sm text-wrap text-black px-5">
              Completed Android training and organized new hires' training
              programs
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education text-left"
          //date="2002 - 2006"
          contentStyle={styles.contentStyle}
          iconStyle={styles.iconStyle}
          icon={<WorkIcon type={"school"} />}
        >
          <strong className="text-lg text-black dark:text-grey">
            West Bengal University Of Technology
          </strong>
          <h3 className="vertical-timeline-element-title text-black">
            Bachelor of Technology in Information Technology
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-black">
            Kolkata, India
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
