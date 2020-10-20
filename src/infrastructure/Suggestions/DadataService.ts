import SuggestionsService from "./SuggestionsService.i";
import SuggestionsServiceProps from "./SuggestionsServiceProps.i";
import axios from "axios";

export default class DadataService implements SuggestionsService {
  private apiKey: string;
  constructor({ apiKey }: { apiKey: string }) {
    this.apiKey = apiKey;
  }

  request(props: SuggestionsServiceProps) {
    const { query, resource, suggestType = "suggest", params } = props;
    return axios.post(
      `https://suggestions.dadata.ru/suggestions/api/4_1/rs/${suggestType}/${resource}`,
      { query, ...params },
      {
        headers: {
          Authorization: `Token ${this.apiKey}`
        }
      }
    );
  }
}
