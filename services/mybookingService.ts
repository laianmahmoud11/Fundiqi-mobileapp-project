import { Booking, BookingStatus, CreateBookingPayload } from '../types/booking';
import {
  getUserBookingsFromFirebase,
  createBookingInFirebase,
  cancelBookingInFirebase,
  completeBookingInFirebase
} from './firebase/firebasemyBookingSource';

export async function getUserBookings(userId: string): Promise<Booking[]> {
  return getUserBookingsFromFirebase(userId);
}

export async function getActiveBookings(userId: string): Promise<Booking[]> {
  const bookings = await getUserBookings(userId);

  return bookings.filter(
    (booking) => booking.status === 'pending' || booking.status === 'confirmed'
  );
}

export async function getPastBookings(userId: string): Promise<Booking[]> {
  const bookings = await getUserBookings(userId);

  return bookings.filter(
    (booking) => booking.status === 'completed' || booking.status === 'cancelled'
  );
}

export async function createBooking(payload: CreateBookingPayload): Promise<Booking> {
  return createBookingInFirebase(payload);
}

export async function cancelBooking(bookingId: string): Promise<Booking | null> {
  return cancelBookingInFirebase(bookingId);
}

export async function completeBooking(bookingId: string): Promise<Booking | null> {
  return completeBookingInFirebase(bookingId);
}

export function getBookingStatusLabel(status: BookingStatus) {
  switch (status) {
    case 'pending':
      return 'Pending';
    case 'confirmed':
      return 'Confirmed';
    case 'completed':
      return 'Completed';
    case 'cancelled':
      return 'Cancelled';
    default:
      return status;
  }
}

export function getBookingStatusColor(status: BookingStatus) {
  switch (status) {
    case 'pending':
      return '#d97706';
    case 'confirmed':
      return '#1f4ba5';
    case 'completed':
      return 'green';
    case 'cancelled':
      return 'red';
    default:
      return 'gray';
  }
}