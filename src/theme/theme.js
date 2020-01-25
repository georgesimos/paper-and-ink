import { createMuiTheme } from '@material-ui/core';
import makePalette from './palette';
import typography from './typography';

function createTheme(variant) {
  const palette = makePalette(variant);

  return createMuiTheme(
    /**
     * @see https://material-ui.com/customization/themes/#theme-configuration-variables
     */
    {
      palette,
      typography,
      zIndex: {
        appBar: 1200,
        drawer: 1100
      },
      /**
       * @see https://material-ui.com/customization/globals/#default-props
       */ props: {
        // Name of the component ⚛️
        MuiButtonBase: {
          // The properties to apply
          // disableRipple: true // No more ripple, on the whole application 💣!
        },

        // Set default elevation to 1 for popovers.
        MuiPopover: {
          elevation: 1
        }
      },
      overrides: {
        MuiPaper: {
          // Name of the component ⚛️ / style sheet
          elevation0: {
            // Name of the rule
            boxShadow: '0 0 14px 0 rgba(53,64,82,.05)' // Some CSS
          }
        },
        MuiTableCell: {
          root: { borderBottom: '1px solid rgba(224, 224, 224, .5)' }
        }
      }
    }
  );
}

export default createTheme;
