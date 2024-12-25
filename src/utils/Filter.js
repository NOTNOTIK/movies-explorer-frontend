export default function searchFilter(array, query, short) {
  if (!array) {
    return [];
  }

  let searchResult = [...array];

  if (query) {
    searchResult = searchResult.filter(
      (element) =>
        element.nameRU.toLowerCase().includes(query.toLowerCase()) ||
        element.nameEN.toLowerCase().includes(query.toLowerCase())
    );
  }

  if (short) {
    return searchResult.filter((element) => element.duration <= 40);
  }

  return searchResult;
}
