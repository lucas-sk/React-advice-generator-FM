const url = "https://api.adviceslip.com/advice";
const api = async () => {
  try {
    const data = await fetch(url);
    const json = await data.json();
    return json.slip;
  }catch(e) {
    console.error(e)
  }
};

export default api;
