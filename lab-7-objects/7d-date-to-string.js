const date = 1458086400 * 1000; // epoch date in milliseconds
const d = new Date(date);
const dd = d.getFullYear();
const mm = d.getMonth() + 1;
const yyyy = d.getDate();
const dateStr = `${yyyy}-${mm}-${dd}`;
console.log(dateStr);
