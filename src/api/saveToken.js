export const SaveToken = async (token) => {
  console.log("lol");
  console.log(token);
  const url = `https://tokentwitch-dev-ncxh.4.us-1.fl0.io/TOKK/?code=${token}`;
  const resp = await fetch(url);
  const r = await resp.json();
  return r;
};
