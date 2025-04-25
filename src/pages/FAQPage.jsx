import AccordionDemo from "@Components/Accordion/Accordion.jsx";

import { FAQPageContainer } from "../_components/FAQPageContainer/FAQPageContainer.jsx";
import { FAQPageTitle } from "../_components/FAQPageTitle/FAQPageTitle.jsx";

export const FAQPage = () => {
  return (
    <FAQPageContainer>
      <FAQPageTitle />
      <AccordionDemo />
    </FAQPageContainer>
  );
};
