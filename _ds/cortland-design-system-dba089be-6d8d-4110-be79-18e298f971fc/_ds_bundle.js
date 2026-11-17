/* @ds-bundle: {"format":4,"namespace":"CortlandDesignSystem_dba089","components":[{"name":"BrandLockup","sourcePath":"components/brand/BrandLockup.jsx"},{"name":"ColorDot","sourcePath":"components/brand/ColorDot.jsx"},{"name":"TriangleMark","sourcePath":"components/brand/TriangleMark.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"SectionRule","sourcePath":"components/core/SectionRule.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Accordion","sourcePath":"components/feedback/Accordion.jsx"},{"name":"Callout","sourcePath":"components/feedback/Callout.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/BrandLockup.jsx":"f314a71e6074","components/brand/ColorDot.jsx":"66fb34a83f7b","components/brand/TriangleMark.jsx":"ec99ad7dd703","components/core/Badge.jsx":"772dd281468c","components/core/Button.jsx":"50a8845a839c","components/core/Card.jsx":"53242afe34f9","components/core/IconButton.jsx":"5b2154facc9e","components/core/SectionRule.jsx":"8484c21a9ef9","components/core/Tag.jsx":"e811ecc99d51","components/feedback/Accordion.jsx":"7dc10184efa4","components/feedback/Callout.jsx":"1d582f2d462c","components/feedback/Dialog.jsx":"e1f04c79bd5c","components/feedback/Tooltip.jsx":"e3f83f3e543f","components/forms/Checkbox.jsx":"cd4b327ef5f6","components/forms/Input.jsx":"0c9369941def","components/forms/Select.jsx":"45f5451934a1","components/forms/Switch.jsx":"542e3a34ec16","components/navigation/Tabs.jsx":"2783a8c56274","ui_kits/learning_materials/ReferenceKeySheet.jsx":"1cf7d50d3661","ui_kits/leasing_hub/DashboardChrome.jsx":"0030a3d182ff","ui_kits/leasing_hub/DressPanel.jsx":"59f250b78b49","ui_kits/leasing_hub/GoalsPanel.jsx":"0e01fc844782"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CortlandDesignSystem_dba089 = window.CortlandDesignSystem_dba089 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/BrandLockup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function BrandLockup({
  src,
  reverse = false,
  height = 40,
  showClearSpace = false,
  alt = "Cortland",
  style,
  ...rest
}) {
  const file = src || (reverse ? "assets/cortland-logo-horizontal-white.png" : "assets/cortland-logo-horizontal-alpha.png");
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-block",
      padding: "var(--logo-clear-space)",
      outline: showClearSpace ? "1px dashed var(--brand-stone)" : "none",
      fontSize: height,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: file,
    alt: alt,
    style: {
      height: Math.max(height, 24),
      width: "auto",
      display: "block"
    }
  }));
}
Object.assign(__ds_scope, { BrandLockup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/BrandLockup.jsx", error: String((e && e.message) || e) }); }

// components/brand/ColorDot.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ColorDot({
  color,
  label,
  size = 72,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-grid",
      justifyItems: "center",
      gap: "var(--space-3)",
      width: size + 40,
      textAlign: "center",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: size,
      height: size,
      borderRadius: "var(--radius-circle)",
      background: color,
      display: "block"
    }
  }), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-primary)",
      lineHeight: "var(--leading-snug)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { ColorDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ColorDot.jsx", error: String((e && e.message) || e) }); }

// components/brand/TriangleMark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TriangleMark({
  size = 12,
  color = "var(--hub-gold)",
  direction = "up",
  style,
  ...rest
}) {
  const rotate = {
    up: 0,
    right: 90,
    down: 180,
    left: 270
  }[direction] || 0;
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    style: {
      display: "inline-block",
      width: size,
      height: Math.round(size * 0.86),
      background: color,
      clipPath: "var(--triangle-clip)",
      transform: rotate ? "rotate(" + rotate + "deg)" : "none",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { TriangleMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/TriangleMark.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  navy: {
    bg: "var(--brand-navy)",
    fg: "var(--white)"
  },
  green: {
    bg: "var(--brand-green)",
    fg: "var(--brand-navy)"
  },
  teal: {
    bg: "var(--brand-teal)",
    fg: "var(--white)"
  },
  gold: {
    bg: "var(--hub-gold)",
    fg: "var(--brand-navy)"
  },
  raspberry: {
    bg: "var(--brand-raspberry)",
    fg: "var(--white)"
  },
  neutral: {
    bg: "var(--brand-stone)",
    fg: "var(--brand-navy)"
  }
};
function Badge({
  tone = "navy",
  children,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.navy;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-block",
      background: t.bg,
      color: t.fg,
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-3xs)",
      fontWeight: "var(--weight-bold)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-caps)",
      padding: "4px 9px",
      borderRadius: "var(--radius-sm)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PALETTE = {
  primary: {
    bg: "var(--brand-navy)",
    bgHover: "#001C4C",
    bgActive: "#001433",
    fg: "var(--white)",
    border: "transparent"
  },
  accent: {
    bg: "var(--brand-green)",
    bgHover: "var(--brand-green-dark)",
    bgActive: "#7B9610",
    fg: "var(--brand-navy)",
    border: "transparent"
  },
  secondary: {
    bg: "transparent",
    bgHover: "var(--hover-tint)",
    bgActive: "rgba(0,45,114,.12)",
    fg: "var(--brand-navy)",
    border: "var(--brand-navy)"
  },
  ghost: {
    bg: "transparent",
    bgHover: "var(--hover-tint)",
    bgActive: "rgba(0,45,114,.12)",
    fg: "var(--brand-navy)",
    border: "transparent"
  }
};
const SIZES = {
  sm: {
    padding: "8px 16px",
    fontSize: "var(--text-xs)"
  },
  md: {
    padding: "11px 22px",
    fontSize: "var(--text-sm)"
  },
  lg: {
    padding: "15px 30px",
    fontSize: "var(--text-base)"
  }
};
function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  type = "button",
  iconLeft,
  iconRight,
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const p = PALETTE[variant] || PALETTE.primary;
  const s = SIZES[size] || SIZES.md;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "var(--space-2)",
      width: fullWidth ? "100%" : "auto",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-medium)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      padding: s.padding,
      fontSize: s.fontSize,
      lineHeight: 1.1,
      color: p.fg,
      background: disabled ? p.bg : press ? p.bgActive : hover ? p.bgHover : p.bg,
      border: "1px solid " + p.border,
      borderRadius: "var(--radius-sm)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? "var(--disabled-opacity)" : 1,
      transform: press && !disabled ? "scale(var(--press-scale))" : "none",
      transition: "background var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)",
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  accent,
  elevation = "sm",
  padding = "var(--space-6)",
  eyebrow,
  title,
  footer,
  as: Tag = "div",
  children,
  style,
  ...rest
}) {
  const shadow = {
    none: "var(--shadow-none)",
    sm: "var(--shadow-sm)",
    md: "var(--shadow-md)",
    lg: "var(--shadow-lg)"
  }[elevation] || "var(--shadow-sm)";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderTop: accent ? "var(--border-width-accent) solid " + accent : "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-md)",
      boxShadow: shadow,
      padding,
      ...style
    }
  }, rest), eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-3xs)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-eyebrow)",
      color: "var(--text-secondary)",
      marginBottom: "var(--space-2)"
    }
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--text-lg)",
      lineHeight: "var(--leading-snug)",
      marginBottom: "var(--space-3)"
    }
  }, title) : null, children, footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-5)",
      paddingTop: "var(--space-4)",
      borderTop: "1px solid var(--border-subtle)",
      fontSize: "var(--text-sm)",
      color: "var(--text-secondary)"
    }
  }, footer) : null);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  label,
  size = "md",
  variant = "ghost",
  disabled = false,
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const dim = size === "sm" ? 30 : size === "lg" ? 46 : 38;
  const solid = variant === "solid";
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: dim,
      height: dim,
      display: "inline-grid",
      placeItems: "center",
      borderRadius: "var(--radius-sm)",
      border: variant === "outline" ? "1px solid var(--brand-navy)" : "1px solid transparent",
      background: solid ? hover ? "#001C4C" : "var(--brand-navy)" : hover ? "var(--hover-tint)" : "transparent",
      color: solid ? "var(--white)" : "var(--brand-navy)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? "var(--disabled-opacity)" : 1,
      transition: "background var(--duration-fast) var(--ease-standard)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionRule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionRule({
  label,
  weight = "rule",
  color = "var(--border-rule)",
  style,
  ...rest
}) {
  const w = weight === "hairline" ? "1px" : weight === "accent" ? "var(--border-width-accent)" : "var(--border-width-rule)";
  if (!label) return /*#__PURE__*/React.createElement("hr", _extends({
    style: {
      border: 0,
      borderTop: w + " solid " + color,
      margin: "var(--space-6) 0",
      ...style
    }
  }, rest));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      margin: "var(--space-6) 0",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-3xs)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-eyebrow)",
      color: "var(--text-secondary)",
      whiteSpace: "nowrap"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      borderTop: w + " solid " + color
    }
  }));
}
Object.assign(__ds_scope, { SectionRule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionRule.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  color = "var(--brand-navy)",
  onRemove,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      border: "1px solid " + color,
      color,
      background: "transparent",
      fontSize: "var(--text-2xs)",
      fontWeight: "var(--weight-medium)",
      padding: "4px 12px",
      borderRadius: "var(--radius-pill)",
      ...style
    }
  }, rest), children, onRemove ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onRemove,
    "aria-label": "Remove",
    style: {
      border: 0,
      background: "transparent",
      color: "inherit",
      cursor: "pointer",
      padding: 0,
      lineHeight: 1,
      fontSize: "var(--text-sm)"
    }
  }, "\xD7") : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Accordion({
  items = [],
  allowMultiple = false,
  defaultOpen = [],
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  const toggle = i => setOpen(prev => prev.includes(i) ? prev.filter(x => x !== i) : allowMultiple ? [...prev, i] : [i]);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "grid",
      gap: "var(--space-3)",
      ...style
    }
  }, rest), items.map((it, i) => {
    const on = open.includes(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: "var(--surface-card)",
        border: "1px solid var(--border-subtle)",
        borderTop: it.accent ? "var(--border-width-accent) solid " + it.accent : "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-md)",
        boxShadow: "var(--shadow-sm)",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-expanded": on,
      onClick: () => toggle(i),
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: "var(--space-4)",
        textAlign: "left",
        border: 0,
        background: "transparent",
        cursor: "pointer",
        padding: "var(--space-5) var(--space-6)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        width: 11,
        height: 10,
        background: "var(--hub-gold)",
        clipPath: "var(--triangle-clip)",
        flex: "0 0 11px",
        transform: on ? "rotate(180deg)" : "none",
        transition: "transform var(--duration-base) var(--ease-standard)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontFamily: "var(--font-display)",
        fontWeight: "var(--weight-bold)",
        fontSize: "var(--text-md)",
        color: "var(--brand-navy)"
      }
    }, it.title), it.meta ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-2xs)",
        color: "var(--text-secondary)",
        textTransform: "uppercase",
        letterSpacing: "var(--tracking-caps)"
      }
    }, it.meta) : null), on ? /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 var(--space-6) var(--space-6) calc(var(--space-6) + 11px + var(--space-4))",
        fontSize: "var(--text-sm)",
        lineHeight: "var(--leading-normal)"
      }
    }, it.content) : null);
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  tint: {
    bg: "var(--surface-tint)",
    fg: "var(--brand-navy)",
    bar: "var(--brand-navy)"
  },
  navy: {
    bg: "var(--brand-navy)",
    fg: "var(--white)",
    bar: "var(--hub-gold)"
  },
  subtle: {
    bg: "var(--surface-subtle)",
    fg: "var(--brand-navy)",
    bar: "var(--brand-green)"
  },
  accent: {
    bg: "var(--brand-green)",
    fg: "var(--brand-navy)",
    bar: "var(--brand-navy)"
  }
};
function Callout({
  tone = "tint",
  title,
  children,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.tint;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: t.bg,
      color: t.fg,
      borderTop: "var(--border-width-accent) solid " + t.bar,
      borderRadius: "var(--radius-md)",
      padding: "var(--space-6) var(--space-8)",
      ...style
    }
  }, rest), title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--text-lg)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-caps)",
      marginBottom: "var(--space-3)"
    }
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-base)",
      lineHeight: "var(--leading-normal)"
    }
  }, children));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Callout.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open,
  title,
  onClose,
  footer,
  width = 520,
  children,
  style,
  ...rest
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === "Escape" && onClose) onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "presentation",
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,45,114,.55)",
      display: "grid",
      placeItems: "center",
      padding: "var(--space-6)",
      zIndex: 100,
      animation: "none"
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    "aria-label": typeof title === "string" ? title : undefined,
    onClick: e => e.stopPropagation(),
    style: {
      width: "100%",
      maxWidth: width,
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-lg)",
      borderTop: "var(--border-width-accent) solid var(--brand-navy)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--space-4)",
      padding: "var(--space-6) var(--space-8) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--text-xl)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-caps)"
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: onClose,
    style: {
      border: 0,
      background: "transparent",
      cursor: "pointer",
      color: "var(--brand-navy)",
      padding: 4,
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-4) var(--space-8) var(--space-6)",
      fontSize: "var(--text-sm)",
      lineHeight: "var(--leading-normal)"
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "var(--space-3)",
      padding: "var(--space-5) var(--space-8)",
      borderTop: "1px solid var(--border-subtle)"
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  label,
  placement = "top",
  children,
  style,
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const pos = placement === "bottom" ? {
    top: "calc(100% + 8px)",
    left: "50%",
    transform: "translateX(-50%)"
  } : {
    bottom: "calc(100% + 8px)",
    left: "50%",
    transform: "translateX(-50%)"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, rest), children, show ? /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      ...pos,
      whiteSpace: "nowrap",
      zIndex: 50,
      background: "var(--brand-navy)",
      color: "var(--white)",
      fontSize: "var(--text-2xs)",
      padding: "6px 10px",
      borderRadius: "var(--radius-sm)",
      boxShadow: "var(--shadow-md)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  defaultChecked,
  disabled,
  onChange,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = checked === undefined ? internal : checked;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "flex-start",
      gap: "var(--space-3)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? "var(--disabled-opacity)" : 1,
      fontSize: "var(--text-sm)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: e => {
      if (checked === undefined) setInternal(e.target.checked);
      if (onChange) onChange(e);
    },
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 18,
      height: 18,
      flex: "0 0 18px",
      marginTop: 2,
      borderRadius: "var(--radius-sm)",
      border: "1px solid " + (on ? "var(--brand-navy)" : "var(--border-field)"),
      background: on ? "var(--brand-navy)" : "var(--white)",
      display: "grid",
      placeItems: "center",
      transition: "background var(--duration-fast) var(--ease-standard)"
    }
  }, on ? /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--white)",
    strokeWidth: "3"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })) : null), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  id,
  type = "text",
  value,
  defaultValue,
  placeholder,
  disabled,
  onChange,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useMemo(() => "in-" + Math.random().toString(36).slice(2, 8), []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-2)",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      fontSize: "var(--text-2xs)",
      fontWeight: "var(--weight-medium)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-caps)",
      color: "var(--text-secondary)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: type,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      font: "inherit",
      fontSize: "var(--text-sm)",
      color: "var(--text-primary)",
      padding: "10px 12px",
      background: disabled ? "var(--surface-subtle)" : "var(--white)",
      border: "1px solid " + (error ? "var(--brand-raspberry)" : focus ? "var(--focus-ring)" : "var(--border-field)"),
      borderRadius: "var(--radius-sm)",
      boxShadow: focus ? "var(--shadow-focus)" : "var(--shadow-inset)",
      outline: "none",
      transition: "border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)"
    }
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-2xs)",
      color: "var(--brand-raspberry)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-2xs)",
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  id,
  options = [],
  value,
  defaultValue,
  disabled,
  onChange,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useMemo(() => "se-" + Math.random().toString(36).slice(2, 8), []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-2)",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      fontSize: "var(--text-2xs)",
      fontWeight: "var(--weight-medium)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-caps)",
      color: "var(--text-secondary)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("select", _extends({
    id: uid,
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      font: "inherit",
      fontSize: "var(--text-sm)",
      color: "var(--text-primary)",
      padding: "10px 34px 10px 12px",
      background: "var(--white)",
      border: "1px solid " + (focus ? "var(--focus-ring)" : "var(--border-field)"),
      borderRadius: "var(--radius-sm)",
      boxShadow: focus ? "var(--shadow-focus)" : "none",
      outline: "none",
      appearance: "none",
      backgroundImage: "linear-gradient(45deg,transparent 50%,var(--brand-navy) 50%),linear-gradient(135deg,var(--brand-navy) 50%,transparent 50%)",
      backgroundPosition: "calc(100% - 18px) 50%,calc(100% - 13px) 50%",
      backgroundSize: "5px 5px,5px 5px",
      backgroundRepeat: "no-repeat"
    }
  }, rest), options.map(o => {
    const val = typeof o === "string" ? o : o.value;
    const lab = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  })), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-2xs)",
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked,
  defaultChecked,
  disabled,
  onChange,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = checked === undefined ? internal : checked;
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setInternal(!on);
    if (onChange) onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? "var(--disabled-opacity)" : 1,
      fontSize: "var(--text-sm)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": on,
    onClick: toggle,
    disabled: disabled,
    style: {
      width: 40,
      height: 22,
      padding: 2,
      border: 0,
      borderRadius: "var(--radius-pill)",
      background: on ? "var(--brand-green)" : "var(--brand-stone)",
      cursor: "inherit",
      display: "flex",
      justifyContent: on ? "flex-end" : "flex-start",
      alignItems: "center",
      transition: "background var(--duration-base) var(--ease-standard)"
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: "50%",
      background: "var(--white)",
      boxShadow: "var(--shadow-sm)",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  children,
  style,
  ...rest
}) {
  const ids = tabs.map(t => typeof t === "string" ? t : t.id);
  const [internal, setInternal] = React.useState(defaultValue || ids[0]);
  const active = value === undefined ? internal : value;
  const select = id => {
    if (value === undefined) setInternal(id);
    if (onChange) onChange(id);
  };
  const refs = React.useRef([]);
  const onKey = (e, i) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (i + (e.key === "ArrowRight" ? 1 : -1) + ids.length) % ids.length;
    select(ids[next]);
    if (refs.current[next]) refs.current[next].focus();
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      gap: "var(--space-8)",
      borderBottom: "var(--border-width-rule) solid var(--border-rule)"
    }
  }, tabs.map((t, i) => {
    const id = typeof t === "string" ? t : t.id;
    const label = typeof t === "string" ? t : t.label;
    const on = id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      role: "tab",
      "aria-selected": on,
      "aria-controls": "panel-" + id,
      id: "tab-" + id,
      ref: el => {
        refs.current[i] = el;
      },
      onClick: () => select(id),
      onKeyDown: e => onKey(e, i),
      style: {
        position: "relative",
        border: 0,
        background: "transparent",
        cursor: "pointer",
        padding: "0 0 var(--space-4)",
        fontFamily: "var(--font-display)",
        fontSize: "var(--text-sm)",
        fontWeight: on ? "var(--weight-bold)" : "var(--weight-medium)",
        textTransform: "uppercase",
        letterSpacing: "var(--tracking-caps)",
        color: on ? "var(--brand-navy)" : "var(--text-secondary)",
        transition: "color var(--duration-fast) var(--ease-standard)"
      }
    }, label, on ? /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        left: "50%",
        bottom: -2,
        transform: "translateX(-50%)",
        width: 14,
        height: 9,
        background: "var(--hub-gold)",
        clipPath: "var(--triangle-clip)"
      }
    }) : null);
  })), typeof children === "function" ? children(active) : children);
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/learning_materials/ReferenceKeySheet.jsx
try { (() => {
const {
  ColorDot,
  BrandLockup
} = window.CortlandDesignSystem_dba089;
const ROW_ONE = [{
  color: "var(--coe-leasing-hub)",
  label: "The Leasing Hub"
}, {
  color: "var(--coe-screening)",
  label: "Screening & Applications"
}, {
  color: "var(--coe-community-relations)",
  label: "Community Relations"
}, {
  color: "var(--coe-resident-services)",
  label: "Resident Services"
}];
const ROW_TWO = [{
  color: "var(--coe-onesite)",
  label: "OneSite"
}, {
  color: "var(--coe-funnel)",
  label: "Funnel"
}];
const RULE = {
  borderTop: "3px solid var(--brand-navy)"
};
function DotRow({
  items,
  columns
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(" + columns + ",1fr)",
      padding: "44px 0 34px",
      justifyItems: "center"
    }
  }, items.map(d => /*#__PURE__*/React.createElement("div", {
    key: d.label,
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 168,
      height: 168,
      borderRadius: "50%",
      background: d.color,
      margin: "0 auto"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26,
      fontSize: 20,
      color: "var(--brand-navy)"
    }
  }, d.label))));
}
function ReferenceKeySheet() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1280,
      background: "var(--white)",
      padding: "58px 62px 44px",
      fontFamily: "var(--font-body)",
      color: "var(--brand-navy)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.15fr",
      gap: 64,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 5,
      background: "var(--brand-green)",
      marginBottom: 18,
      marginLeft: 4
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 54,
      lineHeight: 1.02,
      letterSpacing: "-0.01em",
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--brand-navy)"
    }
  }, "Color-Coding"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--brand-green)"
    }
  }, "Reference Key")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontStyle: "italic",
      fontSize: 15,
      lineHeight: 1.55,
      textAlign: "center",
      maxWidth: 360,
      margin: "24px auto 0"
    }
  }, "This guide supports the interpretation of learning materials developed by the Talent Development team.", /*#__PURE__*/React.createElement("br", null), "All official content is created and maintained by the Talent Development team.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 26,
      lineHeight: 2.0,
      textAlign: "center",
      margin: "12px 0 0"
    }
  }, "Intentional color use creates clear distinctions in content, helping learners quickly interpret information and navigate their experience with ease.")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...RULE,
      marginTop: 40
    }
  }), /*#__PURE__*/React.createElement(DotRow, {
    items: ROW_ONE,
    columns: 4
  }), /*#__PURE__*/React.createElement("div", {
    style: RULE
  }), /*#__PURE__*/React.createElement(DotRow, {
    items: ROW_TWO,
    columns: 2
  }), /*#__PURE__*/React.createElement("div", {
    style: RULE
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 32,
      paddingTop: 26
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, "Color-Code Reference Key Talent & Developments June 2026"), /*#__PURE__*/React.createElement(BrandLockup, {
    src: "../../assets/cortland-logo-horizontal-alpha.png",
    height: 38
  })));
}
Object.assign(window, {
  ReferenceKeySheet
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/learning_materials/ReferenceKeySheet.jsx", error: String((e && e.message) || e) }); }

// ui_kits/leasing_hub/DashboardChrome.jsx
try { (() => {
const {
  BrandLockup,
  TriangleMark
} = window.CortlandDesignSystem_dba089;
function HubHeader({
  eyebrow,
  title,
  lede
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: "var(--hub-navy)",
      color: "var(--white)",
      padding: "34px 48px 30px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 40,
      maxWidth: 1180,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(TriangleMark, {
    size: 16,
    color: "var(--hub-gold)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-eyebrow)",
      color: "var(--hub-sky)"
    }
  }, eyebrow)), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 44,
      lineHeight: 1.02,
      textTransform: "uppercase",
      letterSpacing: "0.01em",
      margin: 0
    }
  }, title), lede ? /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 620,
      marginTop: 16,
      marginBottom: 0,
      fontSize: 16,
      color: "rgba(255,255,255,.88)"
    }
  }, lede) : null), /*#__PURE__*/React.createElement(BrandLockup, {
    src: "../../assets/cortland-logo-horizontal-white.png",
    height: 34
  })));
}
function HubFooter({
  caption
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: "var(--border-width-rule) solid var(--border-rule)",
      marginTop: 56,
      padding: "22px 48px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--text-secondary)"
    }
  }, caption), /*#__PURE__*/React.createElement(BrandLockup, {
    src: "../../assets/cortland-logo-horizontal-alpha.png",
    height: 26
  })));
}
function FieldRow({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "128px 1fr",
      gap: 18,
      padding: "10px 0",
      borderTop: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-caps)",
      color: "var(--text-secondary)",
      paddingTop: 2
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.5
    }
  }, children));
}
function TriangleList({
  items
}) {
  return /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "grid",
      gap: 8
    }
  }, items.map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      gap: 11,
      alignItems: "baseline",
      fontSize: 14,
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement(TriangleMark, {
    size: 9,
    color: "var(--hub-gold)",
    style: {
      flex: "0 0 9px",
      position: "relative",
      top: -1
    }
  }), /*#__PURE__*/React.createElement("span", null, t))));
}
function SourceNote({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px dashed var(--brand-stone)",
      borderRadius: "var(--radius-md)",
      padding: "14px 18px",
      fontSize: 13,
      color: "var(--text-secondary)",
      background: "var(--gray-100)"
    }
  }, children);
}
Object.assign(window, {
  HubHeader,
  HubFooter,
  FieldRow,
  TriangleList,
  SourceNote
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/leasing_hub/DashboardChrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/leasing_hub/DressPanel.jsx
try { (() => {
const {
  Card,
  Callout,
  SectionRule
} = window.CortlandDesignSystem_dba089;
function SpecSheet({
  title,
  rows
}) {
  return /*#__PURE__*/React.createElement(Card, {
    title: title,
    accent: "var(--hub-navy)",
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement("div", null, rows.map(r => /*#__PURE__*/React.createElement(FieldRow, {
    key: r,
    label: r
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)"
    }
  }, "\u2014")))));
}
const COMMUNITY_ROWS = ["Tops", "Bottoms", "Outerwear", "Footwear", "Accessories", "Grooming"];
const SERVICE_ROWS = ["Uniform", "Bottoms", "Footwear", "PPE", "Accessories", "Grooming"];
function DressPanel() {
  return /*#__PURE__*/React.createElement("div", {
    id: "panel-dress",
    role: "tabpanel",
    "aria-labelledby": "tab-dress",
    style: {
      display: "grid",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(SourceNote, null, /*#__PURE__*/React.createElement("strong", null, "Layout only."), " Dress code rules come from Talent Development's", /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: "ui-monospace,monospace",
      margin: "0 4px"
    }
  }, "dress-to-impress-content.md"), "and are not reproduced here. Each row takes one verbatim rule; the source's illustrated figures are deliberately replaced by spec-sheet rows."), /*#__PURE__*/React.createElement(SectionRule, {
    label: "Community & CSC associates"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(SpecSheet, {
    title: "Women's guide",
    rows: COMMUNITY_ROWS
  }), /*#__PURE__*/React.createElement(SpecSheet, {
    title: "Men's guide",
    rows: COMMUNITY_ROWS
  })), /*#__PURE__*/React.createElement(SectionRule, {
    label: "Service / maintenance associates"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(SpecSheet, {
    title: "Women's guide",
    rows: SERVICE_ROWS
  }), /*#__PURE__*/React.createElement(SpecSheet, {
    title: "Men's guide",
    rows: SERVICE_ROWS
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement(Callout, {
    tone: "navy",
    title: "Why dress code matters"
  }, "You are the first impression of the community. ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--hub-sky)"
    }
  }, "Supporting copy pending from the source document."))));
}
Object.assign(window, {
  DressPanel
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/leasing_hub/DressPanel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/leasing_hub/GoalsPanel.jsx
try { (() => {
const {
  Card,
  Badge,
  Tag,
  Accordion
} = window.CortlandDesignSystem_dba089;
const GOAL_FIELDS = ["Pillar", "Buckets", "What", "Impact", "Net result"];
function GoalCard({
  index,
  pillar,
  buckets,
  accent
}) {
  return /*#__PURE__*/React.createElement(Card, {
    accent: accent,
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 18,
      textTransform: "uppercase",
      letterSpacing: "0.02em"
    }
  }, "Goal ", index), /*#__PURE__*/React.createElement(Badge, {
    tone: "navy"
  }, pillar)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      marginBottom: 16
    }
  }, buckets.map(b => /*#__PURE__*/React.createElement(Tag, {
    key: b,
    color: "var(--hub-navy)"
  }, b))), /*#__PURE__*/React.createElement("div", null, GOAL_FIELDS.slice(2).map(f => /*#__PURE__*/React.createElement(FieldRow, {
    key: f,
    label: f
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)"
    }
  }, "\u2014")))));
}
function GoalsPanel() {
  return /*#__PURE__*/React.createElement("div", {
    id: "panel-goals",
    role: "tabpanel",
    "aria-labelledby": "tab-goals",
    style: {
      display: "grid",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(SourceNote, null, /*#__PURE__*/React.createElement("strong", null, "Layout only."), " The five 2026 Developmental Goals \u2014 pillar, buckets, what, impact and net result \u2014 live in Talent Development's", /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: "ui-monospace,monospace",
      margin: "0 4px"
    }
  }, "leasing-hub-goals-content.md"), "and are not reproduced here. Drop the verbatim content into these fields; do not paraphrase or invent goal metrics."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(GoalCard, {
    index: 1,
    pillar: "Pillar",
    buckets: ["Bucket", "Bucket"],
    accent: "var(--hub-navy)"
  }), /*#__PURE__*/React.createElement(GoalCard, {
    index: 2,
    pillar: "Pillar",
    buckets: ["Bucket"],
    accent: "var(--hub-gold)"
  })), /*#__PURE__*/React.createElement(Accordion, {
    allowMultiple: true,
    items: [3, 4, 5].map(n => ({
      title: "Goal " + n,
      meta: "Pillar",
      accent: n === 3 ? "var(--hub-sky)" : n === 4 ? "var(--brand-green)" : "var(--brand-teal)",
      content: /*#__PURE__*/React.createElement("div", null, ["What", "Impact"].map(f => /*#__PURE__*/React.createElement(FieldRow, {
        key: f,
        label: f
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          color: "var(--text-muted)"
        }
      }, "\u2014"))), /*#__PURE__*/React.createElement(FieldRow, {
        label: "Net result"
      }, /*#__PURE__*/React.createElement(TriangleList, {
        items: ["—", "—"]
      })))
    }))
  }));
}
Object.assign(window, {
  GoalsPanel
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/leasing_hub/GoalsPanel.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BrandLockup = __ds_scope.BrandLockup;

__ds_ns.ColorDot = __ds_scope.ColorDot;

__ds_ns.TriangleMark = __ds_scope.TriangleMark;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.SectionRule = __ds_scope.SectionRule;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
