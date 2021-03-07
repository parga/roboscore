const changeLocale = (locale) => {
  return {
    type: "CHANGE_LOCALE",
    payload: { locale },
  };
};

export { changeLocale };
