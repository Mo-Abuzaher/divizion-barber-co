import { BARBERS, SERVICES } from '@/constants/data';

const APPOINTMENTS_KEY = 'divizion_appointments';

function delay(ms = 120) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchServices() {
  await delay();
  return SERVICES;
}

export async function fetchBarbers() {
  await delay();
  return BARBERS;
}

export async function createAppointment(payload) {
  await delay(200);

  const {
    barber_id,
    service_id,
    customer_name,
    customer_email,
    appointment_time,
  } = payload;

  if (
    !barber_id ||
    !service_id ||
    !customer_name ||
    !customer_email ||
    !appointment_time
  ) {
    throw new Error('Missing required fields');
  }

  const appointment = {
    id: crypto.randomUUID(),
    barber_id,
    service_id,
    customer_name,
    customer_email,
    appointment_time,
    created_at: new Date().toISOString(),
  };

  const existing = JSON.parse(localStorage.getItem(APPOINTMENTS_KEY) || '[]');
  existing.push(appointment);
  localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(existing));

  return appointment;
}
