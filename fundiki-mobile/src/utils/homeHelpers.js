import { monthNames } from '../data/homeData';

export function formatSingleDate(date) {
  return `${String(date.getDate()).padStart(2, '0')} ${
    monthNames[date.getMonth()]
  }`;
}

export function formatDateRange(startDate, endDate) {
  if (!startDate) {
    return 'Choose your stay dates';
  }

  if (!endDate) {
    return `${formatSingleDate(startDate)} - Select checkout`;
  }

  return `${formatSingleDate(startDate)} - ${formatSingleDate(endDate)}`;
}

export function buildGuestsLabel(rooms, adults, children) {
  return `${rooms} room${rooms > 1 ? 's' : ''} - ${adults} adult${
    adults > 1 ? 's' : ''
  } - ${children} children`;
}

export function isSameDay(firstDate, secondDate) {
  return (
    firstDate.getFullYear() === secondDate.getFullYear() &&
    firstDate.getMonth() === secondDate.getMonth() &&
    firstDate.getDate() === secondDate.getDate()
  );
}

export function isWithinRange(date, startDate, endDate) {
  if (!startDate || !endDate) {
    return false;
  }

  const current = new Date(date).setHours(0, 0, 0, 0);
  const start = new Date(startDate).setHours(0, 0, 0, 0);
  const end = new Date(endDate).setHours(0, 0, 0, 0);

  return current >= start && current <= end;
}

export function generateCalendarDays(monthDate) {
  const year = monthDate.getFullYear();
  const month = monthDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const totalDays = new Date(year, month + 1, 0).getDate();
  const offset = firstDay.getDay();
  const days = [];

  for (let index = 0; index < offset; index += 1) {
    days.push({ key: `empty-${index}`, empty: true });
  }

  for (let day = 1; day <= totalDays; day += 1) {
    const fullDate = new Date(year, month, day);

    days.push({
      key: fullDate.toISOString(),
      date: fullDate,
      day,
      empty: false,
    });
  }

  return days;
}
