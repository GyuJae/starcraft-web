export interface IMap {
  title: string;
  date: string;
  url: string;
  image: string;
}

export const getMaps = () =>
  fetch("http://localhost:4000/maps")
    .then((res) => {
      console.log(res);
      if (!res.ok) {
        throw new Error();
      }
      return res.json();
    })
    .catch((e) => alert(e));
