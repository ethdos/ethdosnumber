// src/themes/baseTheme.ts
var systemFontStack = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
var fontStacks = {
  rounded: `SFRounded, ui-rounded, "SF Pro Rounded", ${systemFontStack}`,
  system: systemFontStack
};
var radiusScales = {
  large: {
    actionButton: "9999px",
    connectButton: "12px",
    modal: "24px",
    modalMobile: "28px"
  },
  medium: {
    actionButton: "10px",
    connectButton: "8px",
    modal: "16px",
    modalMobile: "18px"
  },
  none: {
    actionButton: "0px",
    connectButton: "0px",
    modal: "0px",
    modalMobile: "0px"
  },
  small: {
    actionButton: "4px",
    connectButton: "4px",
    modal: "8px",
    modalMobile: "8px"
  }
};
var blurs = {
  large: {
    modalOverlay: "blur(20px)"
  },
  none: {
    modalOverlay: "blur(0px)"
  },
  small: {
    modalOverlay: "blur(4px)"
  }
};
var baseTheme = ({
  borderRadius = "large",
  fontStack = "rounded",
  overlayBlur = "none"
}) => ({
  blurs: {
    modalOverlay: blurs[overlayBlur].modalOverlay
  },
  fonts: {
    body: fontStacks[fontStack]
  },
  radii: {
    actionButton: radiusScales[borderRadius].actionButton,
    connectButton: radiusScales[borderRadius].connectButton,
    menuButton: radiusScales[borderRadius].connectButton,
    modal: radiusScales[borderRadius].modal,
    modalMobile: radiusScales[borderRadius].modalMobile
  }
});

export {
  baseTheme
};
