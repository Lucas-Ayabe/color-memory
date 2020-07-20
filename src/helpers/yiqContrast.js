export default function getContrastYIQ(hexcolor) {
  const sanitilizedColor = hexcolor.split("#").join("");
  const r = parseInt(sanitilizedColor.substr(0, 2), 16);
  const g = parseInt(sanitilizedColor.substr(2, 2), 16);
  const b = parseInt(sanitilizedColor.substr(4, 2), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  return yiq >= 128 ? "#000" : "#fff";
}
