export default function fixedDate(date) {
  return date.toString().split("T")[0].split("-").reverse().join("/");
}
