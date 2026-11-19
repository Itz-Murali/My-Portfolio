import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        coral: "hsl(var(--coral))",
        lavender: "hsl(var(--lavender))",
        mint: "hsl(var(--mint))",
        sky: "hsl(var(--sky))",
        peach: "hsl(var(--peach))",
        rose: "hsl(var(--rose))",
      },
      fontFamily: {
        display: ["Cinzel", "serif"],
        body: ["Nunito", "sans-serif"],
        code: ["Fira Code", "monospace"],
        script: ["Satisfy", "cursive"],
        elegant: ["Lora", "serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
      },
    },
  },
} satisfies Config;
