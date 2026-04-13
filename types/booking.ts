export type BookingStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';

export type Booking = {
  id: string;
  userId: string;
  hotelId: string;
  hotelName: string;
  city: string;
  country: string;
  image: string;
  checkInDate: string;
  checkOutDate: string;
  rooms: number;
  guests: number;
  checkInTime: string;
  status: BookingStatus;
  createdAt: string;
  updatedAt: string;
};

export type CreateBookingPayload = {
  userId: string;
  hotelId: string;
  hotelName: string;
  city: string;
  country: string;
  image: string;
  checkInDate: string;
  checkOutDate: string;
  rooms: number;
  guests: number;
  checkInTime: string;
  status?: BookingStatus;
};