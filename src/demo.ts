import { Suggestions, DadataService } from "@/infrastructure/Suggestions";
import transportCreator from './httpTransport';

if (module.hot) {
  module.hot.accept();
}

(async () => {
  const suggestions = new Suggestions(
    new DadataService({
      apiKey: process.env.DADATA_KEY
    })
  );

  const transport = transportCreator();

  const { data } = await suggestions.value({
    query: "ОТП",
    resource: "party",
    params: { kpp: "123456789" }
  });
  console.log('d', data);



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
