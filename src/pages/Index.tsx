
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import MainLayout from '@/components/layout/MainLayout';
import EventCard from '@/components/events/EventCard';
import { ChevronRight, Users, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockEvents } from '@/data/mockEvents';

const Index = () => {
  // Get featured events (first 3)
  const featuredEvents = mockEvents.slice(0, 3);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-event-light/30 to-background py-20">
        <div className="container px-4 py-10 md:py-20 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Manage Events with <span className="text-primary">Group f2</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Your all-in-one platform for creating, managing, and discovering amazing events on campus and beyond.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/events">Browse Events</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/events/new">Create Event</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Why Choose Our Platform</h2>
            <p className="mt-4 text-muted-foreground">
              Powerful features to make your event planning experience seamless
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <Calendar className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Easy Scheduling</h3>
                <p className="mt-2 text-muted-foreground">
                  Create and manage events with our intuitive scheduling tools
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Attendee Management</h3>
                <p className="mt-2 text-muted-foreground">
                  Track registrations, send updates, and engage with your audience
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <MapPin className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Location Services</h3>
                <p className="mt-2 text-muted-foreground">
                  Find perfect venues and provide clear directions to attendees
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-12 bg-secondary/50">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Events</h2>
            <Button variant="ghost" asChild>
              <Link to="/events" className="flex items-center">
                View all <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredEvents.map(event => (
              <EventCard
                key={event.id}
                id={event.id}
                title={event.title}
                date={event.date}
                time={event.time}
                location={event.location}
                category={event.category}
                image={event.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold">Ready to host your next event?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Get started with our platform today and make your event a success
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link to="/events/new">Create Event Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
