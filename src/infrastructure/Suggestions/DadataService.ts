import SuggestionsService from "./SuggestionsService.i";
import SuggestionsServiceProps from "./SuggestionsServiceProps.i";
import axios from "axios";

export default class DadataService implements SuggestionsService {
  private apiKey: string;
  constructor({ apiKey }: { apiKey: string }) {
    this.apiKey = apiKey;
  }

  request(props: SuggestionsServiceProps) {
    const { query, resource, suggestType = "suggest", parts = [] } = props;
    return axios.post(
      `http://suggestions.dadata.ru/suggestions/api/4_1/rs/${suggestType}/${resource}`,
      { query, parts },
      {
        headers: {
          Authorization: `Token ${this.apiKey}`
        }
      }
    );
  }
}
