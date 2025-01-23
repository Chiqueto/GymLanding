/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      textShadow: {
        sm: "0px 2px 4px rgb(198_67_8_/_75%)",
        DEFAULT: "2px 4px 8px rgb(198_67_8_/_75%)",
        lg: "4px 12px 24px rgb(255_0_0_/_80%)",
      },
      colors: {
        background: "#131314",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
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
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        main: {
          50: "#FFF7ED",
          100: "#FFEED4",
          200: "#FFD9A8",
          300: "#FFBD71",
          400: "#FF9737",
          500: "#FE7711",
          600: "#EF5B07",
          700: "#C64308",
          800: "#AA3A10",
          900: "#7E2F10",
          950: "#441406",
        },
        secondary: {
          50: "#F0F8FF",
          100: "#E1F0FD",
          200: "#BCDFFB",
          300: "#81C7F8",
          400: "#3EABF2",
          500: "#1491E3",
          600: "#0875C7",
          700: "#085B9C",
          800: "#0B4D81",
          900: "#0F416B",
          950: "#0A2A47",
        },
      },
      fontFamily: {
        body: ['"Inter"', "sans-serif"],
        impact: ['"chakra petch"', "sans-serif"],
        neon: ['"Neonderthaw"', "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
      },
    },
    plugins: [
      plugin(function ({ matchUtilities, theme }) {
        matchUtilities(
          {
            "text-shadow": (value) => ({
              textShadow: value,
            }),
          },
          { values: theme("textShadow") }
        );
      }),
      require("tailwindcss-animate"),
    ],
  },
};
