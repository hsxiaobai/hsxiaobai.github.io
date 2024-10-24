self.addEventListener("fetch", event => {
  var reqClone = event.request.clone();
  event.respondWith(
    reqClone.json()["text"],
    {
      headers: {
        "Content-Type":"text/plain"
      }
    });
  );
});
