import type { Config } from "tailwindcss";

/* Helper to generate 0–9 scale from CSS vars */
const colorScale = (name: string) =>
  Object.fromEntries(
    Array.from({ length: 11 }, (_, i) => [i, `hsl(var(--${name}-${i}))`])
  );

const momoScale = Object.fromEntries(
  Array.from({ length: 3 }, (_, i) => [i, `hsl(var(--momo-${i}))`])
);

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        sans: ["'Noto Sans'", "'Noto Sans TC'", "sans-serif", "'.PingFangTC'", "'Microsoft JhengHei'"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: { ...colorScale("primary"), DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        warning: colorScale("warning"),
        success: colorScale("success"),
        danger: colorScale("danger"),
        neutral: colorScale("neutral"),
        indigo: colorScale("indigo"),
        momo: momoScale,
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      spacing: {
        "0.5": "2px",
        "1": "4px",
        "1.5": "6px",
        "2": "8px",
        "2.5": "10px",
        "3": "12px",
        "3.5": "14px",
        "4": "16px",
        "4.5": "18px",
        "5": "20px",
        "5.5": "22px",
        "6": "24px",
        "7": "28px",
        "7.5": "30px",
        "8": "32px",
        "9": "36px",
        "10": "40px",
        "11": "44px",
        "12": "48px",
        "13": "52px",
        "14": "56px",
        "15": "60px",
        "16": "64px",
        "18": "72px",
        "20": "80px",
      },
      borderRadius: {
        "0": "4px",
        "1": "8px",
        "2": "16px",
        sm: "16px",
        md: "20px",
        lg: "24px",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        raised: "var(--shadow-raised)",
        dropdown: "var(--shadow-dropdown)",
        navigation: "var(--shadow-navigation)",
        header: "var(--shadow-header)",
        bulletin: "var(--shadow-bulletin)",
        "flash-notice": "var(--shadow-flash-notice)",
        modal: "var(--shadow-modal)",
        dialog: "var(--shadow-dialog)",
      },
      zIndex: {
        dropdown: "1000",
        navigation: "1010",
        header: "1020",
        bulletin: "1030",
        "flash-notice": "1040",
        mask: "1050",
        modal: "1060",
        dialog: "1070",
      },
      fontSize: {
        "ds-0": ["12px", { lineHeight: "16px" }],
        "ds-1": ["14px", { lineHeight: "20px" }],
        "ds-2": ["16px", { lineHeight: "24px" }],
        "ds-3": ["20px", { lineHeight: "28px" }],
        "ds-4": ["24px", { lineHeight: "32px" }],
        "ds-5": ["32px", { lineHeight: "40px" }],
        "ds-6": ["48px", { lineHeight: "64px" }],
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
