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
    <div className="h-full dark:bg-darkBodyPrimary">
      <VerticalTimeline
        lineColor={darkMode ? "white" : "grey"}
        className="dark:bg-darkBodyPrimary"
      >
        <VerticalTimelineElement
          className="vertical-timeline-element--work text-wrap"
          contentStyle={styles.contentStyle}
          iconStyle={styles.iconStyle}
          icon={<WorkIcon type={"work"} />}
        >
          <strong className="text-lg dark:text-grey">Astria Digital</strong>
          <h3 className="vertical-timeline-element-title text-sm">
            Senior Frontend Developer
          </h3>

          <ul>
            <li className="text-sm">
              Led the effort to upgrade outdated apps to a more contemporary
              React-based framework, which improved application speed and
              reduced load times by 30%.
            </li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work text-wrap"
          //date="2022 - 2024"
          contentStyle={styles.contentStyle}
          iconStyle={styles.iconStyle}
          icon={<WorkIcon />}
        >
          <strong className="text-lg dark:text-grey">
            Iksula & Kamal Osman Jamjoom
          </strong>
          <h3 className="vertical-timeline-element-title">System Analyst</h3>

          <ul>
            <li className="text-sm">
              Led a project to switch to React, resulting in a 25% smaller
              codebase and a 35% faster loading time for webpages.
            </li>
            <li className="text-sm">
              Conducted thorough system audits, identifying inefficiencies and
              recommending enhancements to improve performance.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          //date="2021 - 2022"
          contentStyle={styles.contentStyle}
          iconStyle={styles.iconStyle}
          icon={<WorkIcon />}
        >
          <strong className="text-lg dark:text-grey">
            Knowlarity Cloud Communication
          </strong>
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
          {/* <h4 className="vertical-timeline-element-subtitle">Gurgaon, India</h4> */}
          <ul>
            <li className="text-sm">
              Worked with stakeholders to include improvements and new features
              for overall product success.
            </li>
            <li className="text-sm">
              Coordinated with product managers to define clear project scopes,
              ensuring alignment with business goals and objectives.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          //date="2019 - 2021"
          contentStyle={styles.contentStyle}
          iconStyle={styles.iconStyle}
          icon={<WorkIcon />}
        >
          <strong className="text-lg dark:text-grey">
            Lecturenotes Technology Private Limited
          </strong>
          <h3 className="vertical-timeline-element-title">
            Senior Software Engineer
          </h3>
          {/* <h4 className="vertical-timeline-element-subtitle">
            Bhubaneswar, India
          </h4> */}
          <ul>
            <li className="text-sm">
              Analyzed user feedback to make informed decisions on software
              enhancements, leading to a 25% increase in customer satisfaction
              for overall product.
            </li>
            <li className="text-sm">
              Implemented security protocols and encryption techniques,
              safeguarding sensitive data and complying with industry
              regulations.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          //date="2017 2019"
          contentStyle={styles.contentStyle}
          iconStyle={styles.iconStyle}
          icon={<WorkIcon />}
        >
          <strong className="text-lg dark:text-grey">
            Ladybird Web Solution
          </strong>
          <h3 className="vertical-timeline-element-title">Android Developer</h3>
          {/* <h4 className="vertical-timeline-element-subtitle">
            Bengaluru, India
          </h4> */}
          <ul>
            <li className="text-sm">
              Implemented industry standards to produce reliable, user-friendly
              apps
            </li>
            <li className="text-sm">
              Managed application updates on Google Play Store, including
              version control and release notes documentation.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          //date="2016 2017"
          contentStyle={styles.contentStyle}
          iconStyle={styles.iconStyle}
          icon={<WorkIcon type={"training"} />}
        >
          <strong className="text-lg dark:text-grey">Palle Technology</strong>
          <h3 className="vertical-timeline-element-title">
            Android Developer Trainee
          </h3>
          {/* <h4 className="vertical-timeline-element-subtitle">
            Bengaluru, India
          </h4> */}
          <ul>
            <li className="text-sm">
              Completed Android training and organized new hires' training
              programs
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          //date="2002 - 2006"
          contentStyle={styles.contentStyle}
          iconStyle={styles.iconStyle}
          icon={<WorkIcon type={"school"} />}
        >
          <strong className="text-lg dark:text-grey">
            West Bengal University Of Technology
          </strong>
          <h3 className="vertical-timeline-element-title">
            Bachelor of Technology in Information Technology
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Kolkata, India</h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
