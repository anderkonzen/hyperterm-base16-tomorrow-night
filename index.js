// base16 color values
const base00 = '#1d1f21';
const base01 = '#282a2e';
const base02 = '#373b41';
const base03 = '#969896';
const base04 = '#b4b7b4';
const base05 = '#c5c8c6';
const base06 = '#e0e0e0';
const base07 = '#ffffff';
const base08 = '#cc6666';
const base09 = '#de935f';
const base0A = '#f0c674';
const base0B = '#b5bd68';
const base0C = '#8abeb7';
const base0D = '#81a2be';
const base0E = '#b294bb';
const base0F = '#a3685a';

// Override hyperterm colors with base16 ones
const colors = {
  black: base00,
  red: base08,
  green: base0B,
  yellow: base0A,
  blue: base0D,
  magenta: base0E,
  cyan: base0C,
  white: base06,
  lightBlack: base01,
  lightRed: base08,
  lightGreen: base0B,
  lightYellow: base0A,
  lightBlue: base0D,
  lightMagenta: base0E,
  lightCyan: base0C,
  lightWhite: base06
};

// Theme hook
exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    backgroundColor: base00,
    foregroundColor: base05,
    cursorColor: base05,
    borderColor: base01,
    colors: colors,
    css: `
      ${config.css || ''}

      .header_header {
        background-color: ${base01} !important;
      }

      .tabs_title {
        color: ${base04};
      }

      .tab_active {
        font-weight: 500;
        background-color: ${base02};
      }
    `
  });
}
