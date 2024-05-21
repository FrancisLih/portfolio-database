export const urlPathPortfolio = "http://localhost/react-navarro-portfolio";
export const devApiUrl = `${urlPathPortfolio}/rest`;
export const devBaseImgUrl="http://localhost/react-navarro-portfolio/public/img/"

export const devKey =
  "$2a$12$47wDvbLInZif/PVS8B6P3.7WxyJvUpBzZAWCsnWJUKq3nrn4qgmeO";

  // fetch for uploading photo or file
export const fetchFormData = (url, fd = {}) => {
  const data = fetch(url, {
      method: "post",
      body: fd,
  })
      .then((res) => res.json())
      .catch((error) => {
          console.error(error + " api endpoint error");
      });

  return data;
};

// get the url id parameter
export const getUrlParam = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams;
};
// to use img at a div
// { `${devBaseImgUrl}/${item.(tableName)_(tableContent) }`}
// or
// { `${devBaseImgUrl}/${item.home_mainImg}`}

export const checkLocalStorage = () => {
  // saves a token id that minimizes the requirements for i,p,o
  let glatoken = null;
  try {
      glatoken = JSON.parse(localStorage.getItem("glatoken"));
  } catch (error) {
      glatoken = null;
  }

  return glatoken;
};

export function setStorageRoute(jwt) {
  localStorage.setItem("glatoken", JSON.stringify({ token: jwt }));
}