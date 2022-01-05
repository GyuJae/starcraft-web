import { ASL_MAPS_URL, MAPS_URL } from "./url.constants";

export interface IMap {
  id: string;
  title: string;
  date: string;
  url: string;
  image: string;
}

export interface IASLMap extends IMap {
  season: string;
}

export const getMaps = () =>
  fetch(MAPS_URL)
    .then((res) => {
      if (!res.ok) {
        throw new Error();
      }
      return res.json();
    })
    .catch((e) => alert(e));

export const getASLMaps = () =>
  fetch(ASL_MAPS_URL).then((res) => {
    if (!res.ok) {
      throw new Error();
    }
    return res.json();
  });
