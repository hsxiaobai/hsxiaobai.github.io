self.addEventListener('fetch', event => {
  // 确保请求是主线程发起的主请求，而不是子请求
  if (event.request.method === 'GET') {
    event.respondWith(
      event.request.clone().text().then(requestText => {
        // 解析请求体中的 JSON 数据
        const data = JSON.parse(requestText);

        // 这里可以对 data 进行修改

        // 将修改后的数据转换为 JSON 字符串
        const modifiedData = JSON.stringify(data);

        // 创建一个新的请求对象，用于发送修改后的请求体
        const modifiedRequest = new Request(event.request, {
          method: event.request.method,
          headers: event.request.headers,
          body: modifiedData
        });

        // 发送修改后的请求
        return fetch(modifiedRequest).then(response => {
          // 这里可以对响应进行处理，例如修改响应体或头部

          // 返回响应给页面
          return response;
        });
      })
    );
  }
});
