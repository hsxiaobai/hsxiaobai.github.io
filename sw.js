self.addEventListener("fetch", (evt) => {
  if (evt.request.method === "GET" && evt.request.url.includes("/data")) {
    evt.respondWith(
      new Response("Hello!", {
        headers: { "Content-Type": "text/plain" },
        status: 200,
        statusText: "OK"
      })
    );
  }
});
