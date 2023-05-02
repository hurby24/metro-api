import metros from "./metro.json";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET",
  "Access-Control-Allow-Headers": "Content-Type",
};

export default {
  fetch(request) {
    try {
      const url = new URL(request.url);
      switch (url.pathname) {
        case "/":
          return new Response("This is a simple API to get metros by ID.", {
            headers: { ...headers, "content-type": "text/plain" },
          });
        case "/id":
          return new Response("Please provide an ID parameter.", {
            headers: { ...headers, "content-type": "text/plain" },
          });
        case `/id/${url.pathname.split("/")[2]}`:
          const id = parseInt(url.pathname.split("/")[2]);
          const metro = metros.find((metro) => metro.id === id);
          if (metro) {
            return new Response(JSON.stringify(metro), {
              headers: { ...headers, "content-type": "application/json" },
            });
          } else {
            return new Response(JSON.stringify("metro not found"), {
              status: 404,
              headers: { ...headers, "content-type": "text/plain" },
            });
          }
        default:
          return new Response("Not Found", {
            status: 404,
            headers: { ...headers, "content-type": "text/plain" },
          });
      }
    } catch (error) {
      return new Response(error.toString(), {
        status: 500,
        headers: { ...headers },
      });
    }
  },
};
