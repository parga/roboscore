import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "../configure-store";

export const renderConnected = (
  ui,
  { initialState = {}, store = configureStore(), ...renderOptions } = {}
) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );
  return render(ui, { wrapper: Wrapper, ...renderOptions });
};
