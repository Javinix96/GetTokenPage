
export const SaveToken = async( token ) => {
    const url = `http://localhost:8080/tokk/?code=${token}`;
    const resp = await fetch(url);
    const r = await resp.json();
    return r;
}