import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { styles }from "../style";
import { fadeIn } from "../utils/motion";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Technologies Known :</h2>
    </motion.div>

    <motion.p
       variants={fadeIn("","",0.1,1)}
       className="mt-4 text-secondary text-[17px] max-w-6xl leading-[30px]">
        As a frontend developer, I have gained expertise in a range of cutting-edge technologies.
        I am well-versed in HTML, CSS3, and JavaScript.
        Additionally, I have extensive knowledge of TypeScript,
        that enables robust type-checking and enhances code maintainability. React.js,
        a popular JavaScript library, Tailwind CSS, a utility-first CSS framework that streamlines responsive and scalable web design. I am confident in my ability to create 
        visually appealing and performant web applications.
      </motion.p>
    </>
  )
}

export default SectionWrapper(Experience,"")