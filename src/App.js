import React from "react";
import "./App.css";
import { Provider as ReduxProvider } from "react-redux";
import {
  Provider as SpectrumProvider,
  SSRProvider,
  defaultTheme,
  Flex,
} from "@adobe/react-spectrum";
import { SchemaRenderer, ScoreTable } from "./components";
import { ConnectedIntlProvider } from "./components/ConnectedIntlProvider";
import { LanguageSelector } from "./components/LanguageSelector";

/**
 * Main component, it uses Adobe react-spectrum for simple components,
 * it also consumes a redux store
 * @param {ReduxStore} store - Store generated by redux and to be available to the entire app via context provider
 */
function App({ store }) {
  return (
    <SSRProvider>
      <SpectrumProvider theme={defaultTheme} colorScheme="light">
        <ReduxProvider store={store}>
          <ConnectedIntlProvider>
            <Flex direction="column" gap="size-1200">
              <LanguageSelector />
              <SchemaRenderer />
              <ScoreTable />
            </Flex>
          </ConnectedIntlProvider>
        </ReduxProvider>
      </SpectrumProvider>
    </SSRProvider>
  );
}

export default App;
