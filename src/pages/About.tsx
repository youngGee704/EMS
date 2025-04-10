
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Users, BookOpen, Award, Calendar } from 'lucide-react';

const About = () => {
  return (
    <MainLayout>
      <div className="container py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">About Group f2 _ NS csc 219 practical</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a dedicated team of students passionate about creating innovative solutions
            for event management on campus and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-4">
              Our mission is to simplify event planning and management for students, 
              organizations, and administrators on campus. We believe that well-organized
              events foster community, learning, and growth.
            </p>
            <p className="text-muted-foreground">
              By providing an intuitive platform for event creation, discovery, and participation,
              we aim to enhance campus life and create memorable experiences for all.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground mb-4">
              We envision a connected campus community where students can easily discover
              events that match their interests, and organizers can effortlessly manage
              their events from conception to completion.
            </p>
            <p className="text-muted-foreground">
              Our platform serves as a bridge between event organizers and participants,
              fostering engagement and enriching the educational experience.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Event Management</h3>
                <p className="text-muted-foreground">
                  Comprehensive tools for creating, scheduling, and managing events
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Attendee Tracking</h3>
                <p className="text-muted-foreground">
                  Monitor registrations and attendance for your events
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Resource Management</h3>
                <p className="text-muted-foreground">
                  Organize venues, equipment, and other resources efficiently
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Certificate Generation</h3>
                <p className="text-muted-foreground">
                  Create and distribute certificates for event participants
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4 overflow-hidden">
                  <img src="/placeholder.svg" alt="Team Member" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold">Jane Doe</h3>
                <p className="text-muted-foreground">Team Lead</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4 overflow-hidden">
                  <img src="/placeholder.svg" alt="Team Member" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold">John Smith</h3>
                <p className="text-muted-foreground">Frontend Developer</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4 overflow-hidden">
                  <img src="/placeholder.svg" alt="Team Member" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold">Alice Johnson</h3>
                <p className="text-muted-foreground">Backend Developer</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
