export async function fetchMotorcycles() {
  const url =
    "https://chinmoto-api-production.up.railway.app/chinmoto/api/v1/motorcycle/all-motorcycles";

  const response = await fetch(url, {
    method: "GET",
  });
  const result = await response.json();

  return result;
}
