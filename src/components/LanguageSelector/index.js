import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Picker, Item } from "@adobe/react-spectrum";
import { changeLocale } from "../../actions/locale";
import { defineMessages, useIntl } from "react-intl";
export const LanguageSelector = () => {
  const intl = useIntl();
  const messages = defineMessages({
    languageSelector: {
      id: "app.languageSelector",
      defaultMessage: "Choose the language",
    },
    spanish: {
      id: "app.languageSelector.spanish",
      defaultMessage: "Spanish",
    },
    english: {
      id: "app.languageSelector.english",
      defaultMessage: "English",
    },
  });

  const dispatch = useDispatch();
  const { locale } = useSelector(({ locale }) => ({
    locale,
  }));
  const onSelectionChange = (id) => {
    dispatch(changeLocale(id));
  };
  return (
    <Picker
      label={intl.formatMessage(messages.languageSelector)}
      onSelectionChange={onSelectionChange}
      selectedKey={locale}
    >
      <Item key="en-US">{intl.formatMessage(messages.english)}</Item>
      <Item key="es-ES">{intl.formatMessage(messages.spanish)}</Item>
    </Picker>
  );
};
