import { render } from '@testing-library/react';
import { ReactElement, ComponentType } from 'react';
// import { ThemeProvider } from "my-ui-lib"
// import { TranslationProvider } from "my-i18n-lib"
// import defaultStrings from "i18n/en-x-default"

const Providers: ComponentType<{ children: ReactElement }> = ({ children }) =>
  children;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const customRender = (ui: ReactElement, options = {}) =>
  render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
