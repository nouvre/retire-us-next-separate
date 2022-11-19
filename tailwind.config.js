/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      GreatVibes: ["'Great Vibes', cursive"],
      HomemadeApple: ["'Homemade Apple', cursive"],
      WindSong: ["'WindSong', cursive"],
      Karla: ["'Karla', sans-serif"],
      SourceSansPro: ["'Source Sans Pro', sans-serif"],
      Lato: ["'Lato', sans-serif"],
    },
    boxShadow: {
      header: "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      option: "0px 4px 12px rgba(85, 101, 126, 0.1)",
    },
    extend: {
      keyframes: {
        timer: {
          "0%": { transform: "100%" },
          "100%": { width: "0px" },
        },
      },
      animation: {
        timer: "timer 5s linear infinite",
      },
      boxShadow: {
        SwitchCard: "20px 16px 80px rgba(8, 39, 84, 0.1)",
        Tab: "box-shadow: 0px 4px 32px rgba(24, 54, 98, 0.04)",
        SwitchCardMobile: "0px 0px 24px rgba(8, 39, 84, 0.14)",
        Plan: "0px 4px 32px rgba(24, 54, 98, 0.04)",
      },
      backgroundSize: {
        "underline-text-size": "100% 1px",
        cover: "cover",
        100: "100%",
        "service-big": "60px",
        "service-small": "32px",
      },
      backgroundPosition: {
        "bottom-left": "bottom 56px left -210px",
      },
      backgroundImage: {
        "banner-texture":
          "url('/assets/images/banner/bg.png'), linear-gradient(90deg, #4D7EF2 -24.69%, #5FD4F4 123.22%)",
        "banner-texture-mobile":
          "url('/assets/images/banner/bg-mobile.png'), linear-gradient(90deg, #4D7EF2 -24.69%, #5FD4F4 123.22%)",
        "blog-hero-texture":
          "url('/assets/images/blog/hero.png'), linear-gradient(90deg, #3F68E4 0%, #5EC4F7 146.04%)",
        "hero-texture": "url('/assets/images/hero-texture.webp')",
        "hero-texture-mobile":
          "url('/assets/images/hero-texture-mobile.webp')",
        "future-texture":
          "url('/assets/images/home/future.png'), linear-gradient(90deg, #3F68E4 0%, #5EC4F7 146.04%)",
        "future-texture-mobile":
          "url('/assets/images/future-texture-mobile.png')",
        "small-texture": "url('/assets/images/small-texture.png')",
        "about-us-texture": "url('/assets/images/about-us-texture.png')",
        "sidebar-bg": "url('/assets/images/sidebar-bg.png')",
        "underline-text":
          "linear-gradient(transparent, transparent),linear-gradient(transparent, transparent),linear-gradient(to right, #4D7EF2, #5FD4F4)",
        getstarted: "url('/assets/images/get-started-bg.png')",
        "featured-texture":
          "url('/assets/images/featured/bg_mobile.png'), linear-gradient(90deg, #3F68E4 0%, #5EC4F7 146.04%)",
        "featured-texture-desktop":
          "url('/assets/images/featured/bg_desktop.png'), linear-gradient(90deg, #3F68E4 0%, #5EC4F7 146.04%)",
        "plan-texture":
          "linear-gradient(90deg, #4D7EF2 -24.69%, #5FD4F4 123.22%)",
        "basic-title":
          "url('/assets/images/our-services/titles/basic-desktop.png')",
        "basic-title-mobile":
          "url('/assets/images/our-services/titles/basic-mobile.png')",
        "tax-title":
          "url('/assets/images/our-services/titles/tax-desktop.png')",
        "tax-title-mobile":
          "url('/assets/images/our-services/titles/tax-mobile.png')",
        "wealth-title":
          "url('/assets/images/our-services/titles/wealth-desktop.png')",
        "wealth-title-mobile":
          "url('/assets/images/our-services/titles/wealth-mobile.png')",
        service: "url('/assets/images/our-services/item.svg')",
        "basic-plan":
          "linear-gradient(90deg, #4D7EF2 -24.69%, #5FD4F4 123.22%)",
        "tax-plan": "linear-gradient(90deg, #FAA942 23.79%, #FADD43 97.26%)",
        "wealth-plan": "linear-gradient(90deg, #57CAC3 41.48%, #76EFC3 87.14%)",
      },
      height: {
        max: "max-content",
      },
      outline: {
        yellow: "1px solid #FAA942",
      },
    },
  },
  plugins: [],
};
