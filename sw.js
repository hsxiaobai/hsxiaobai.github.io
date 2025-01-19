self.addEventListener("fetch", (evt) => {
  if (evt.request.method === "GET" && evt.request.url.includes("/pro/h5")) {
    // 获取 URL 中的查询参数
    const url = new URL(evt.request.url);
    const code = url.searchParams.get('code'); // 获取 URL 查询参数中的 code 字段

    evt.respondWith(
      new Response(code, {
        headers: { "Content-Type": "text/plain" },
        status: 200,
        statusText: "OK"
      })
    );
  }
});
