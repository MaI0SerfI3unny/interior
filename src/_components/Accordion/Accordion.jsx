import * as React from "react";
import { Accordion } from "radix-ui";
import classNames from "classnames";
import { faq } from "@/mock/faq"
import { PlusIcon } from "@radix-ui/react-icons";
import { MinusIcon } from "@radix-ui/react-icons";
import styles from "./Accordion.module.scss";
import { useTranslation } from "react-i18next";

const AccordionDemo = () => {
  const { t } = useTranslation();
  // const [openItem, setOpenItem] = React.useState(null);
  return (
    <Accordion.Root className={styles.Root} type="multiple" collapsible>
      {faq.map(({ id, number, question, answer, isHtml }) => (
        <Accordion.Item className={styles.Item} value={id} key={id}>
          <AccordionTrigger>
            <div className={styles.itemBox}>
              <p className={styles.itemNumber}>{number}</p>
              {t(question)}
            </div>
          </AccordionTrigger>
          <AccordionContent>
            {isHtml ? (
              <div dangerouslySetInnerHTML={{ __html: t(answer) }} />
            ) : (
              t(answer)
            )}
          </AccordionContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className={styles.Header}>
      <Accordion.Trigger
        className={classNames(styles.Trigger, className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <PlusIcon className={styles.Chevron} aria-hidden />
        <MinusIcon className={styles.Minus} aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames(styles.Content, className)}
      {...props}
      ref={forwardedRef}
    >
      <div className={styles.ContentText}>{children}</div>
    </Accordion.Content>
  )
);

export default AccordionDemo;
