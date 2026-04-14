import { Hotel } from '../types/hotel';
import {
  getHotelsFromFirebase,
  getHotelByIdFromFirebase
} from './firebase/firebasehotelSource';

export async function getHotels(): Promise<Hotel[]> {
  return getHotelsFromFirebase();
}

export async function getHotelById(hotelId: string): Promise<Hotel | null> {
  return getHotelByIdFromFirebase(hotelId);
}