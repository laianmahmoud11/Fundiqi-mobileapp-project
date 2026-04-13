import { useQuery } from '@tanstack/react-query';
import {
  getPopularCapitalHotels,
  getWeekendDeals,
} from '../services/hotelService';

export function useWeekendDeals() {
  return useQuery({
    queryKey: ['weekend-deals'],
    queryFn: getWeekendDeals,
  });
}

export function usePopularHotels() {
  return useQuery({
    queryKey: ['popular-hotels'],
    queryFn: getPopularCapitalHotels,
  });
}
