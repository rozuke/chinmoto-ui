export async function fetchMotorcycles() {
  const url =
    "http://localhost:8080/chinmoto/api/v1/motorcycle/all-motorcycles";

  const response = await fetch(url, {
    method: "GET",
  });
  const result = await response.json();

  return result;
}
