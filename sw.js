self.addEventListener("fetch", (evt) => {
  if (evt.request.method === "POST" && evt.request.url.includes("/pro/h5")) {
    evt.respondWith(
      evt.request.clone().text().then((body) => {
        const form = new URLSearchParams(body);
        const code = form.get('code'); // 获取表单中的 code 字段
        return new Response(code, {
          headers: { "Content-Type": "text/plain" }, // 返回文本内容
          status: 200,
          statusText: "OK"
        });
      })
    );
  }
});
