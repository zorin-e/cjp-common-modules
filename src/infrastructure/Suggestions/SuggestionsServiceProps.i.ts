export default interface SuggestionsServiceProps {
  resource?: string;
  query?: string;
  suggestType?: string;
  params?: { [key: string]: any };
}
