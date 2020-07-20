import { Suggestions, DadataService } from "@/infrastructure/Suggestions";
import mockAxios from "axios";

afterEach(() => {
  //@ts-ignore
  mockAxios.post.mockClear();
});

describe("Suggestions dadata", () => {
  it("request should return suggestions", async () => {
    const suggestions = [{ value: 'АО "ОТП"' }, { value: 'АО "ОТП БАНК"' }];
    //@ts-ignore
    mockAxios.post.mockResolvedValue({
      data: { suggestions }
    });
    const { data } = await new Suggestions(
      new DadataService({
        apiKey: "apiKey"
      })
    ).value({
      query: "ОТП",
      resource: ""
    });

    expect(data.suggestions).toEqual(suggestions);
  });

  it("request should be called once", async () => {
    await new Suggestions(
      new DadataService({
        apiKey: "apiKey"
      })
    ).value({
      query: "ОТП",
      resource: ""
    });

    expect(mockAxios.post).toHaveBeenCalledTimes(1);
  });
});
