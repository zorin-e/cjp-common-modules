export default interface SuggestQuery {
  query: string;
  resource: string;
  params?: { [key: string]: any };
}
