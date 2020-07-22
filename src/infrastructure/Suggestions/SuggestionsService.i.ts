import SuggestionsServiceProps from "./SuggestionsServiceProps.i";

export default interface SuggestionsService {
  request(props: SuggestionsServiceProps): Promise<any>;
}
