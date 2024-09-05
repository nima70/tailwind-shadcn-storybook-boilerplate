import { ModeDecorator } from "./modeDecorator";
import "../src/styles/globals.css";
export const decorators = [ModeDecorator];
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
