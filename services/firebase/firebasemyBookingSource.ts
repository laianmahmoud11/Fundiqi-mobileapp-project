import { Booking, CreateBookingPayload } from '../../types/booking';

export async function getUserBookingsFromFirebase(userId: string): Promise<Booking[]> {
  return [];
}

export async function createBookingInFirebase(payload: CreateBookingPayload): Promise<Booking> {
  throw new Error('Firebase create booking is not connected yet');
}

export async function cancelBookingInFirebase(bookingId: string): Promise<Booking | null> {
  throw new Error('Firebase cancel booking is not connected yet');
}

export async function completeBookingInFirebase(bookingId: string): Promise<Booking | null> {
  throw new Error('Firebase complete booking is not connected yet');
}