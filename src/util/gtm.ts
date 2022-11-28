declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

export const gtm = (rest) => {
  window.dataLayer?.push({
    event: "VirtualPageView",
    ...rest,
  });
};
