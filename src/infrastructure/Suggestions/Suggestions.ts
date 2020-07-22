import SuggestQuery from "./SuggestQuery.i";
import SuggestionsService from "./SuggestionsService.i";

export default class Suggestions {
  private component: SuggestionsService;

  constructor(component: SuggestionsService) {
    this.component = component;
  }

  value(props: SuggestQuery) {
    return this.component.request({
      ...props
    });
  }
}
