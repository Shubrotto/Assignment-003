const fetcData = `https://jsonplaceholder.typicode.com/posts`;
const getApi = async () => {
  const response = await fetch(fetcData);
  const res = await response.json();

  return postMessage(res);
};
getApi()
  .then((res) => res.json())
  .catch((e) => console.log(e));
// https://jsonplaceholder.typicode.com/posts
