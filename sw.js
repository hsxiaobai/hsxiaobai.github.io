self.addEventListener("fetch", (evt) => {
  if (evt.request.method === "GET" && event.request.url.includes("/data") {
    event.respondWith(
      new Response("Hello!", {
        headers: { "Content-Type": "text/plain" },
        status: 200,
        statusText: "OK"
      })
    )
  }
});
