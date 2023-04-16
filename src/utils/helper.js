export function filterData(searchText, restro) {
    const result = restro.filter((res) =>
      res?.data?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return result;
  }
  