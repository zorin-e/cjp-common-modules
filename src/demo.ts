import { Suggestions, DadataService } from "@/infrastructure/Suggestions";
import { ApiService, AxiosClient } from "./app";

if (module.hot) {
  module.hot.accept();
}

(async () => {
  const suggestions = new Suggestions(
    new DadataService({
      apiKey: process.env.DADATA_KEY
    })
  );

  const { data } = await suggestions.value({ query: "ОТП", resource: "party" });
  console.log(data);

  const transport = new ApiService(
    new AxiosClient({
      headers: {
        accept: "application/json",
        contentType: "application/json"
      }
    })
  )
  const posts = await transport.get({ url: 'http://jsonplaceholder.typicode.com/posts/1' })
  console.log("gettedPosts", posts);

  const puttedPost = await transport.put({ url: 'http://jsonplaceholder.typicode.com/posts/1', payload: { title: "New title" } })
  console.log("puttedPost:", puttedPost);

  const deletedPost = await transport.delete({ url: 'http://jsonplaceholder.typicode.com/posts/1' })
  console.log("deletedPost:", deletedPost);

  const newPost = await transport.post({ url: 'http://jsonplaceholder.typicode.com/posts', payload: { title: "title" } })
  console.log("newPost:", newPost);

// using modules ...
})();
