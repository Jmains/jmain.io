export const scrollToElement = (selector: string) => {
  if (document.readyState === "complete") {
    const element = document.getElementById(selector);
    element
      ? element.scrollIntoView({
          behavior: "smooth",
        })
      : null;
  } else {
    console.error("document hasn't loaded yet");
  }
};
