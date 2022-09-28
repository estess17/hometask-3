export default function getDatesFromString(str) {
  let dates = str.match(/(\d{1,2}([.\-/])\d{1,2}([.\-/])\d{4})/g);

  return dates ? dates.join(", ") : "";
}