import axios from 'axios'
console.log("api.js > axios");
const BASE = `/`

const get = () => {
  console.log("getter");
  return new Promise((res, rej) => {
    setTimeout(() => {
      axios.get(`${BASE}get`).then(res).catch(rej)
    }, 3000);
  });
}

export default {
  get
}