import { useEffect, useState } from "react";
import { SaveToken } from "../api/saveToken";

export const useRegex = (word = "") => {
  const [token, setToken] = useState(null);
  const [type, setType] = useState("Type");
  const [scope, setScope] = useState("scope");

  useEffect(() => {
    if (word === "") return;

    let index = window.location.hash.substring(1).indexOf("=");
    let index2 = window.location.hash.substring(1).indexOf("&");
    let dif = index2 - index;
    let regex = "[a-zA-Z0-9]{" + (dif - 1) + "}";
    const r = new RegExp(regex);
    // let token2 = r.exec(window.location.hash.substring(1))[0];
    setToken(r.exec(window.location.hash.substring(1))[0]);

    regex = "type=[a-zA-Z]{6}";
    let r2 = new RegExp(regex);
    let first = r2.exec(window.location.hash.substring(1))[0];
    regex = "[a-zA-Z]{6}";
    r2 = new RegExp(regex);
    setType(r2.exec(first));

    index = window.location.hash.substring(1).indexOf("scope=") + 6;
    index2 = window.location.hash.substring(1).indexOf("&token_type");
    dif = index2 - index;
    regex = "scope=[%a-z?+A-Z0-9]{" + dif + "}";
    r2 = new RegExp(regex);
    first = "";
    first = r2.exec(window.location.hash.substring(1));

    index = first[0].indexOf("=");
    regex = `[%a-z?+A-Z0-9]{${first[0].length - 1 - index}}`;
    r2 = new RegExp(regex);
    first = r2.exec(first[0]);
    setScope(first[0]);
  }, []);

  async function save() {
    let myPromise = new Promise(function (myResolve, myReject) {
      if (token !== null) {
        SaveToken(token);
        myResolve(); // when successful
      }
    });

    await myPromise.then(function () {
      // window.close();
    });
  }
  save();

  const copyToken = () => {
    navigator.clipboard.writeText(token);
  };

  const copyFullPath = () => {};

  return {
    token,
    type,
    scope,
    copyToken,
  };
};
