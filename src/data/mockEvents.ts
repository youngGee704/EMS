
export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  image?: string;
  organizer: string;
  capacity: number;
  registered: number;
}

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Tech Conference 2025',
    description: 'Join us for the largest tech conference in the region. Learn from industry experts, network with professionals, and discover the latest innovations in technology.',
    date: 'May 15, 2025',
    time: '9:00 AM - 5:00 PM',
    location: 'Tech Hub, Abuja',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3',
    organizer: 'TechNigeria',
    capacity: 500,
    registered: 350
  },
  {
    id: '2',
    title: 'Campus Hackathon',
    description: 'A 48-hour coding marathon where students showcase their skills and creativity to build innovative solutions to real-world problems.',
    date: 'June 10, 2025',
    time: '10:00 AM - 10:00 AM (48h)',
    location: 'NS Campus, Computer Science Building',
    category: 'Competition',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3',
    organizer: 'CS Department',
    capacity: 100,
    registered: 78
  },
  {
    id: '3',
    title: 'Career Fair 2025',
    description: 'Connect with potential employers, explore career opportunities, and learn about internships in various fields and industries.',
    date: 'July 5, 2025',
    time: '10:00 AM - 4:00 PM',
    location: 'Central Auditorium, Lagos',
    category: 'Networking',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3',
    organizer: 'CareerNigeria',
    capacity: 300,
    registered: 210
  },
  {
    id: '4',
    title: 'Alumni Reunion',
    description: 'Reconnect with your former classmates and professors in this annual alumni gathering. Share memories and build new connections.',
    date: 'August 12, 2025',
    time: '6:00 PM - 10:00 PM',
    location: 'Grand Hall, NS Campus',
    category: 'Social',
    image: 'https://images.unsplash.com/photo-1540575861501-a391a26a3d33?ixlib=rb-4.0.3',
    organizer: 'Alumni Association',
    capacity: 200,
    registered: 150
  },
  {
    id: '5',
    title: 'Mobile App Development Workshop',
    description: 'Learn the fundamentals of mobile app development in this hands-on workshop. Perfect for beginners and intermediate developers.',
    date: 'September 20, 2025',
    time: '1:00 PM - 5:00 PM',
    location: 'Lab 101, CS Building',
    category: 'Workshop',
    image: 'https://images.unsplash.com/photo-1551739440-5dd934d3a94a?ixlib=rb-4.0.3',
    organizer: 'Mobile Dev Society',
    capacity: 50,
    registered: 45
  },
  {
    id: '6',
    title: 'Cultural Festival',
    description: 'Celebrate the rich cultural diversity of our campus community with music, food, performances, and exhibitions from around the world.',
    date: 'October 5, 2025',
    time: '11:00 AM - 8:00 PM',
    location: 'Campus Central Park',
    category: 'Festival',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3',
    organizer: 'Cultural Affairs Office',
    capacity: 1000,
    registered: 750
  }
];
