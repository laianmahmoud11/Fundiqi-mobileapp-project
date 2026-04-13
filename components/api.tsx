export async function getBookings() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}