const url = "http://localhost:3333/user";

export function getUser() {
  return fetch(url).then((data) => data.json());
}
