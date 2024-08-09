import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global/globalStyles";
import theme from "./styles/theme/theme";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { Provider } from "react-redux";
import store from "./store/store";
import { router } from "./router/routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <RouterProvider router={router} />
        </ThemeProvider>
      </I18nextProvider>
    </Provider>
  );
}

export default App;
