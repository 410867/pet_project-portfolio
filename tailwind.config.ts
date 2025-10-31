// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#FF7A00" },
      },
      container: { center: true, padding: "1rem" },
    },
  },
} satisfies Config;
