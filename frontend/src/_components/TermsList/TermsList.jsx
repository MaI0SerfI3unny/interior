import { mock } from "../../mock/terms.js";
import css from "./TermsList.module.scss";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

export const TermsList = () => {
  const { t } = useTranslation();

  const data = mock(10, "terms");

  return (
    <div className={css.termsList}>
      <h1 className={css.pageTitle}>{t("terms.pageTitle")}</h1>
      {data.map((item, idx) => {
        const translatedText = t(item.text);
        const isHtml = /<\/?[a-z][\s\S]*>/i.test(translatedText);

        return (
          <div
            key={idx}
            className={clsx(css.termsItem, {
              [css.firstItem]: idx === 0,
            })}
          >
            <h3 className={css.itemTitle}>{t(item.title)}</h3>
            {isHtml ? (
              <p dangerouslySetInnerHTML={{ __html: translatedText }} />
            ) : (
              <p>{translatedText}</p>
            )}
          </div>
        );
      })}
    </div>
  );
};
