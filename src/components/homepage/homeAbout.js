import React, { useState } from "react"

// Styled Components
import { Flex, Container } from "../../styles/globalStyles"
import { motion } from 'framer-motion';
import {
  HomeAboutSection,
  About,
  Services,
  AccordionHeader,
  AccordionIcon,
  AccordionContent,
} from "../../styles/homeStyles"

import { accordionIds } from "../../data.js"

const HomeAbout = () => {
  const [expanded, setExpanded] = useState(0)

  return (
    <HomeAboutSection>
      <Container>
        <Flex alignTop>
          <About>
            <h2>
              Furrow is an integrated, full service creative studio offering
              video production, creative development, and post-production
              services
            </h2>
            <p>
              Everybody's got a story. And we don't stop until we've uncovered
              what makes you worth telling. Whether it's working directly with
              you, an agency partner or putting the finishing touches on
              something special. We are ready to dig in and get our hands
              dirty-are you?
            </p>
          </About>
          <Services>
            <h3>Services</h3>
            {accordionIds.map((details, index) => (
              <Accordion
                key={index}
                details={details}
                expanded={expanded}
                setExpanded={setExpanded}
              />
            ))}
          </Services>
        </Flex>
      </Container>
    </HomeAboutSection>
  )
}

const Accordion = ({ details, expanded, setExpanded }) => {
  const isOpen = details.key === expanded
  return (
    <>
      <AccordionHeader onClick={() => setExpanded(isOpen ? false : details.id)}>
        <AccordionIcon>
          <motion.span
            animate={{ rotate: isOpen ? 0 : 45, x: 3 }}
          ></motion.span>
          <motion.span
            animate={{ rotate: isOpen ? 0 : -45, x: -3 }}
          ></motion.span>
        </AccordionIcon>
        {details.title}
      </AccordionHeader>
      <AccordionContent key="content" animate={{ height: isOpen ? "100%" : '0' }}>
        {details.results.map(result => (
          <span key={details.id}>result</span>
        ))}
      </AccordionContent>
    </>
  )
}

export default HomeAbout
