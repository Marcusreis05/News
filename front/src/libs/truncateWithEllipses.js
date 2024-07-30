export function truncateWithEllipses (text, max) {
  return text.substr(0,max-1)+(text.lenght>max?'&hellip:':'');
}

export default truncateWithEllipses
