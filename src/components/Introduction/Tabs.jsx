import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import Experience from "./Experience";
import SkillList from "./SkillList";
import Education from "./Education";

const tabs = [
  { name: "Experience", component: <Experience /> },
  { name: "Skills", component: <SkillList /> },
  { name: "Education", component: <Education /> },
];

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <Container id="intro">
      <TabList>
        {tabs.map((tab, index) => (
          <React.Fragment key={tab.name}>
            <TabButton
              active={tab.name === selectedTab.name}
              onClick={() => setSelectedTab(tab)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {tab.name}
              {tab.name === selectedTab.name && (
                <DynamicLine
                  layoutId="underline"
                  initial={false}
                  animate={{ opacity: 1 }}
                  transition={springTransition}
                />
              )}
            </TabButton>
            {index < tabs.length - 1 && <Separator>|</Separator>}
          </React.Fragment>
        ))}
      </TabList>
      <Content>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.name : "empty"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {selectedTab.component}
          </motion.div>
        </AnimatePresence>
      </Content>
    </Container>
  );
};

const springTransition = {
  type: "spring",
  stiffness: 300,
  damping: 20,
};

const Container = styled.div`
  margin-top: 2rem;
`;

const TabList = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  position: relative;
  margin-bottom: 1rem;
`;

const TabButton = styled(motion.button)`
  background: none;
  border: none;
  color: ${(props) => (props.active ? "#3498db" : "#7f8c8d")};
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  padding: 0.5rem 1rem;
  position: relative;
`;

const Separator = styled.span`
  color: #7f8c8d;
  font-size: 1.5rem;
  line-height: 2.5rem;
`;

const DynamicLine = styled(motion.div)`
  position: absolute;
  bottom: -2px;
  height: 4px;
  background-color: #3498db;
  border-radius: 2px;
  left: 0;
  right: 0;
`;

const Content = styled.div`
  padding: 0 2rem;
`;

export default Tabs;
