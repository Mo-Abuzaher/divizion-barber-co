import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { GREEN_DARK } from '@/constants/theme';
import { Navbar } from '@/components/Navbar/Navbar';
import { HeroSection } from '@/components/HeroSection/HeroSection';
import { StatsBar } from '@/components/StatsBar/StatsBar';
import { ServicesSection } from '@/components/ServicesSection/ServicesSection';
import { BarbersSection } from '@/components/BarbersSection/BarbersSection';
import { AboutSection } from '@/components/AboutSection/AboutSection';
import { PromoSection } from '@/components/PromoSection/PromoSection';
import { ContactSection } from '@/components/ContactSection/ContactSection';
import { Footer } from '@/components/Footer/Footer';
import { BookingModal } from '@/components/BookingModal/BookingModal';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div style={{ background: GREEN_DARK, minHeight: '100vh' }}>
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      <AnimatePresence>
        {bookingOpen && (
          <BookingModal
            isOpen={bookingOpen}
            onClose={() => setBookingOpen(false)}
          />
        )}
      </AnimatePresence>

      <HeroSection onOpenBooking={() => setBookingOpen(true)} />
      <StatsBar />
      <ServicesSection onOpenBooking={() => setBookingOpen(true)} />
      <BarbersSection onOpenBooking={() => setBookingOpen(true)} />
      <AboutSection />
      <PromoSection onOpenBooking={() => setBookingOpen(true)} />
      <ContactSection />
      <Footer onOpenBooking={() => setBookingOpen(true)} />
    </div>
  );
}
