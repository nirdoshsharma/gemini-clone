const checkHeading = (str) => {
  return /^(\*\*|\*)\s?.*/.test(str.trim());
};
export const replaceHeadingStars = (str) => {
  return str.replace(/^\*+/, "").replace(/\*+$/, "").trim();
};
export default checkHeading;
