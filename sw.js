self.addEventListener("fetch", (evt) => {
  if (evt.request.method === "POST" && evt.request.url.includes("/pro/h5")) {
    var body = evt.request.clone().text()
    var form = new URLSearchParams(body)
    evt.respondWith(
      new Response(form.get("code"), {
        headers: { "Content-Type": "text/html" },
        status: 200,
        statusText: "OK"
      })
    )
  }
});
