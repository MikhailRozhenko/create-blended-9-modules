export function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}

export function getFromLS(key) {
  const jsonData = localStorage.getItem(key);

  if (jsonData) {
    return JSON.parse(jsonData);
  }
  return null;
}
