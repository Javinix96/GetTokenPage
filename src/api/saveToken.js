export const SaveToken = async (token) => {
  console.log("lol");
  console.log(token);
  const url = `https://javinix96.github.io/GetTokenPage/?code=${token}`;
  const resp = await fetch(url);
  const r = await resp.json();
  return r;
};
