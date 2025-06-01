import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FadeInSection from "./fadeinsection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: 'var(--navy)', // fallback
      display: "flex",
      height: '300',
    },
    tabs: {
      borderRight: `1px solid ${'#0a192f'}`,
    },
    tabPanel: {
      flex: 1, // allows it to fill the rest of the space
      overflowY: "auto", // allows scrolling if content overflows
    },
  }));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    Quanser: {
      jobTitle: "R&D Engineer @",
      duration: "JUL 2024 - PRESENT",
      desc: [
        "Developed multiple Python and MATLAB libraries for a robotic arm used for teaching visual servoing and kinematics, with 2500+ global downloads and adoption in 10+ universities.",
        "Built an internal validation system for a self-driving car that reduced product configuration time by 75% and accelerated the assembly of 50+ products quarterly.",
        "Implemented a cross-platform software installer to streamline product updates, downloads, environment setup, and provide a user interface for product configuration."
      ]
    },
    Salytics: {
      jobTitle: "Technical Consultant  @",
      duration: "FEB 2023 - JUN 2024",
      desc: [
        "Redesigned and led the migration of 50+ Process Builder workflows to Salesforce Flows, reducing execution time by 40% and improving system scalability, which led to increased client profits.",
        "Strengthened system stability and code quality by writing unit tests, debugging with sandbox environments, and managing deployments and automated regression testing in productionenvironments.",
        "Directed a website migration from WordPress to Salesforce Experience Cloud (HTML, CSS), utilizing Lightning Web Components (LWC) to improve site load time by 50% and increase userengagement by 25%."
      ]
    },
    Microsoft: {
      jobTitle: "DevOps Engineer @",
      duration: "AUG 2021 - JAN 2023",
      desc: [
        "Developed an auditing tool using Azure SQL database, ASP.NET (C#), and Telerik Ajax UIRadgrids (C#) to scan Azure Cloud Subscriptions for security policy compliance, enabling quickerdetection of violations and preventing system outages.",
        "Automated access control by creating a script to validate user access and enforce role-based controls with Microsoft Authentication, improving identity management and eliminating 100% ofaccess control security incidents in the team’s systems.",
        "Managed on-call responsibilities and incident resolution by diagnosing and fixing critical system issues to minimize downtime, while collaborating with cross-functional teams to enhancesystem performance and reliability."
      ]
    },
    "University of Toronto": {
      jobTitle: "Software Developer @",
      duration: "SEPT 2020 - APR 2021",
      desc: [
        "Developed a web-based image diagnostic tool using PHP to minimize the time needed for pathologists to annotate and identify up to 32 potential issues found in digitized histo-pathological tissue slides.",
        "Built a workflow using Python, MySQL, and machine learning techniques to aid pathologists in cross-checking their tissue diagnoses with results from a pre-trained convolutional neural network. Prediction accuracy 85%.",
        "Managed on-call responsibilities and incident resolution by diagnosing and fixing critical systemissues to minimize downtime, while collaborating with cross-functional teams to enhancesystem performance and reliability."
      ]
    },
   
    "RIKEN BSI": {
      jobTitle: "Research Assistant @",
      duration: "MAY 2018 - AUG 2019",
      desc: [
        "Conceptualized and designed VRehab, a Unity-based VR/AR health application and gaming technology, using C#, Oculus Rift, and Leap Motion to accelerate stroke victim recovery by 26% through motor skill training.",
        "Researched the motor capabilities of stroke victims using Myo Armband and EMG sensors to visualize muscle groups activated in response to sensory feedback inputs (audio, visual, cognitive, haptic) - identified that 58% of stroke victims learned the best through audio-visual inputs.",
        "Composed and published an academic paper and distributed the VRehab health app across research labs, including Riken Brain Science Institute, Japan and IRI Unit Lab, and UAE University."
      ]
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "scrollable" : "scrollable"}
        scrollButtons={isHorizontal ? "auto" : false}
        allowScrollButtonsMobile
        value={value}
        onChange={handleChange}
        className={classes.tabs}
        TabIndicatorProps={{
          style: isHorizontal
      ? {
          backgroundColor: 'var(--green-bright)',
          height: '2px' // horizontal underline
        }
      : {
          backgroundColor: 'var(--green-bright)',
          width: '2px' // vertical side-line
        }
        }}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;