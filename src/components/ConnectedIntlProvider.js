import React, { useMemo } from "react";
import { IntlProvider } from "react-intl";
import { messagesByLocale } from "../__locales__";
import { useSelector } from "react-redux";

export const ConnectedIntlProvider = ({ children }) => {
  const { locale } = useSelector(({ locale }) => ({
    locale,
  }));

  const getMessagesByLocale = (actualLocale) => {
    const messages = messagesByLocale[actualLocale];
    if (messages) {
      return messages;
    }
    const baseLocale =
      Object.keys(messagesByLocale).find((property) =>
        property.startsWith(actualLocale)
      ) || "";
    return messagesByLocale[baseLocale];
  };

  const nestedMessages = useMemo(
    () => ({
      ...(getMessagesByLocale(locale) || messagesByLocale["en-US"]),
    }),
    [locale]
  );

  return (
    <IntlProvider locale={locale} messages={nestedMessages}>
      {children}
    </IntlProvider>
  );
};
