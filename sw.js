self.addEventListener("fetch", (evt) => {
  if (evt.request.method === "POST" && evt.request.url.includes("/pro/h5")) {
    var form = evt.request.clone().json()
    evt.respondWith(
      new Response(form.code, {
        headers: { "Content-Type": "text/html" },
        status: 200,
        statusText: "OK"
      })
    )
  }
});
