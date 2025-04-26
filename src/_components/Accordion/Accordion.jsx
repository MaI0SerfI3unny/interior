import * as React from "react";
import { Accordion } from "radix-ui";
import classNames from "classnames";

import { PlusIcon } from "@radix-ui/react-icons";
import { MinusIcon } from "@radix-ui/react-icons";
import styles from "./Accordion.module.scss";

const AccordionDemo = () => {
  // const [openItem, setOpenItem] = React.useState(null);

  return (
    <Accordion.Root className={styles.Root} type="multiple" collapsible>
      <Accordion.Item className={styles.Item} value="item-1">
        <AccordionTrigger>
          <div className={styles.itemBox}>
            <p className={styles.itemNumber}>01/</p>Як працює генератор дизайну
            інтер'єрів?
          </div>
        </AccordionTrigger>
        <AccordionContent>
          Наш генератор використовує потужні алгоритми штучного інтелекту для
          створення унікальних дизайнів інтер'єрів на основі ваших побажань.
          Виберіть стиль, вид кімнати, завантажте фото своєї кімнати і система
          автоматично згенерує візуалізацію вашого простору.
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className={styles.Item} value="item-2">
        <AccordionTrigger>
          <div className={styles.itemBox}>
            <p className={styles.itemNumber}>02/</p>Що таке promt і як його
            писати?
          </div>
        </AccordionTrigger>
        <AccordionContent>
          Промт — це ваше завдання або запит до генератору дизайна (наприклад,
          щоб створити зображення, текст чи щось пояснити). Щоб отримати хороший
          результат, варто чітко та зрозуміло описати, що ви хочете. Ось кілька
          порад, як написати вдалий промт:
          <ol className={styles.list}>
            <li key="1">
              Пишіть просто та конкретно.Замість “намалюй щось гарне” краще:
              “створи зображення затишної кімнати з дерев’яною підлогою,
              світлими стінами та великим вікном”.
            </li>
            <li key="2">
              Додайте деталі. Чим більше деталей (кольори, стиль, емоції, час
              доби тощо) — тим точніше результат.
            </li>
            <li key="3">
              Не бійтеся пробувати!Якщо з першого разу результат не влаштовує —
              змініть або уточніть свій запит. Це нормально.
            </li>
          </ol>
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className={styles.Item} value="item-3">
        <AccordionTrigger>
          <div className={styles.itemBox}>
            <p className={styles.itemNumber}>03/</p>
            Чи можу я використовувати платформу без реєстрації?
          </div>
        </AccordionTrigger>
        <AccordionContent>
          Ні, для доступу до всіх функцій платформи необхідно зареєструватися.
          Реєстрація дозволяє зберігати ваші дизайни, отримувати доступ до
          персоналізованих налаштувань. Ви можете зареєструватися через
          електронну пошту або соціальні мережі.
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className={styles.Item} value="item-4">
        <AccordionTrigger>
          <div className={styles.itemBox}>
            <p className={styles.itemNumber}>04/</p>Де зберігаються мої
            згенеровані картинки?
          </div>
        </AccordionTrigger>
        <AccordionContent>
          Всі згенеровані дизайни зберігаються на нашій платформі у вашому
          особистому профілі. Ви можете отримати доступ до своїх картинок у
          будь-який час і завантажити їх на свій пристрій.
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className={styles.Item} value="item-5">
        <AccordionTrigger>
          <div className={styles.itemBox}>
            <p className={styles.itemNumber}>05/</p>
            Чи є обмеження на кількість створених дизайнів?
          </div>
        </AccordionTrigger>
        <AccordionContent>
          Кількість створених дизайнів залежить від обраного тарифного плану.
          Для безкоштовного плану є обмеження на кількість генерованих картинок,
          тоді як для платних планів доступно більше можливостей. Ви можете
          перевірити подробиці тарифів на нашій сторінці з тарифами.
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className={styles.Item} value="item-6">
        <AccordionTrigger>
          <div className={styles.itemBox}>
            <p className={styles.itemNumber}>06/</p>Як можна змінити тарифний
            план?
          </div>
        </AccordionTrigger>
        <AccordionContent>
          Ви можете змінити свій тарифний план у будь-який час, перейшовши в
          розділ "Мій акаунт" і вибравши відповідний варіант. Зміна тарифу буде
          миттєво застосована без перерв у використанні платформи.
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className={styles.Item} value="item-7">
        <AccordionTrigger>
          <div className={styles.itemBox}>
            <p className={styles.itemNumber}>07/</p>
            Чи можу я змінювати дизайн після того, як він був створений?
          </div>
        </AccordionTrigger>
        <AccordionContent>
          Так, ви можете редагувати створений дизайн в будь-який час, змінюючи
          стиль або інші параметри, щоб досягти бажаного результату.
        </AccordionContent>
      </Accordion.Item>
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
