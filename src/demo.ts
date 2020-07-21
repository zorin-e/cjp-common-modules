import { Suggestions, DadataService } from "@/infrastructure/Suggestions";

if (module.hot) {
  module.hot.accept();
}

(async () => {
  const suggestions = new Suggestions(
    new DadataService({
      apiKey: process.env.DADATA_API_KEY
    })
  );

  const { data } = await suggestions.value({ query: "ОТП", resource: "party" });
  console.log(data);

// using modules ...
})();
