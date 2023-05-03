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

      if (url.pathname === "/") {
        return new Response(
          "This is a simple API to get metro stations by line and ID.",
          {
            headers: { ...headers, "content-type": "text/plain" },
          }
        );
      }

      if (url.pathname === "/metro") {
        return new Response(JSON.stringify(metros), {
          headers: { ...headers, "content-type": "application/json" },
        });
      }

      if (
        url.pathname.startsWith("/metro/") &&
        url.pathname.split("/").length === 4
      ) {
        const line = url.pathname.split("/")[2].toLowerCase();
        const id = url.pathname.split("/")[3].toLowerCase();
        const foundLine = metros.lines.find((l) => l.name === line);

        if (foundLine) {
          const foundStation = foundLine.stations.find((s) => s.code === id);

          if (foundStation) {
            return new Response(JSON.stringify(foundStation), {
              headers: { ...headers, "content-type": "application/json" },
            });
          } else {
            return new Response(JSON.stringify("Station not found"), {
              status: 404,
              headers: { ...headers, "content-type": "text/plain" },
            });
          }
        } else {
          return new Response(JSON.stringify("Line not found"), {
            status: 404,
            headers: { ...headers, "content-type": "text/plain" },
          });
        }
      }
      if (url.pathname.startsWith("/metro/")) {
        const line = url.pathname.split("/")[2].toLowerCase();
        const foundLine = metros.lines.find((l) => l.name === line);

        if (foundLine) {
          return new Response(JSON.stringify(foundLine.stations), {
            headers: { ...headers, "content-type": "application/json" },
          });
        } else {
          return new Response(JSON.stringify("Line not found"), {
            status: 404,
            headers: { ...headers, "content-type": "text/plain" },
          });
        }
      }

      return new Response("Not Found", {
        status: 404,
        headers: { ...headers, "content-type": "text/plain" },
      });
    } catch (error) {
      return new Response(error.toString(), {
        status: 500,
        headers: { ...headers },
      });
    }
  },
};
