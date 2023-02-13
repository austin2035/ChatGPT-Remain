export default async function request (param = {}) {
  let baseUrl = "https://api.openai.com/v1";
  let url = `${baseUrl}${param.url}`;
  let method = param.method || "GET";
  let data = param.data || {};
  let needToken = param.needToken || false;
  let headers = param.headers || {"Content-Type": "application/json"};
  if (needToken) {
      headers = {...headers, "Authorization": `Bearer ${getToken()}`};
  }
  let options = {
      method: method,
      headers: headers,
  }
  if (method === "POST" || method === "PUT" || method === "PATCH" || method === "DELETE") {
      options.body = JSON.stringify(data);
  }
  let response = await fetch(url, options);
  let result = await response.json();
  return result;
};



export function getToken() {
  return localStorage.getItem("token");
}

export function setToken(token) {
  localStorage.setItem("token", token);
}