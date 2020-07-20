import { Suggestions, DadataService } from "@/infrastructure/Suggestions";

if (module.hot) {
  module.hot.accept();
}

(async () => {
  const suggestions = new Suggestions(
    new DadataService({
      apiKey: "222e2fe15c60358261e2e17bc9dbc7687b0b34ee"
    })
  );

  const { data } = await suggestions.value({ query: "ОТП", resource: "party" });
  console.log(data);

// using modules ...
})();
