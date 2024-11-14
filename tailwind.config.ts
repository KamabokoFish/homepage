import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        whiteTrans: 'rgba(243, 240, 240, 0.1)', // 半透明で白っぽいカラー
      },
    },
  },
  plugins: [],
};
export default config;
