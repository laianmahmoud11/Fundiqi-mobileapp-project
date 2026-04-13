function formatApiDate(date) {
  if (!date) {
    return null;
  }

  return date.toISOString().split('T')[0];
}

export function buildSearchFilters({
  destination,
  startDate,
  endDate,
  rooms,
  adults,
  children,
  includeGuests,
}) {
  const filters = {};
  const trimmedDestination = destination.trim();

  if (trimmedDestination) {
    filters.destination = trimmedDestination;
  }

  if (startDate) {
    filters.checkIn = formatApiDate(startDate);
  }

  if (endDate) {
    filters.checkOut = formatApiDate(endDate);
  }

  if (includeGuests) {
    filters.rooms = Math.max(1, rooms);
    filters.adults = Math.max(1, adults);
    filters.children = Math.max(0, children);
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
