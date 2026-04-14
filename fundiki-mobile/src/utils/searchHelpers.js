export function buildSearchFilters({ destination }) {
  const filters = {};
  const trimmedDestination = destination.trim();

  if (trimmedDestination) {
    filters.destination = trimmedDestination;
  }

  return filters;
}

export function buildSearchQuery(filters) {
  const query = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (value !== '' && value !== null && value !== undefined) {
      query.append(key, String(value));
    }
  });

  return query.toString();
}
