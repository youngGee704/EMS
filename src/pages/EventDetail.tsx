import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { mockEvents } from '@/data/mockEvents';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Users, User, Share2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);
  const [shareUrl, setShareUrl] = useState('');
  
  useEffect(() => {
    // First, look for the event in localStorage
    const localEvents = JSON.parse(localStorage.getItem('events') || '[]');
    const localEvent = localEvents.find((event: any) => event.id === id);
    
    // If found locally, use that event data
    if (localEvent) {
      // Add default values for registered and capacity if they don't exist
      setEvent({
        ...localEvent,
        registered: localEvent.registered || 0,
        capacity: localEvent.capacity || 100,
        organizer: localEvent.organizer || 'Event Organizer'
      });
    } 
    // Otherwise, try to find the event in mock data
    else {
      const mockEvent = mockEvents.find(event => event.id === id);
      if (mockEvent) {
        setEvent(mockEvent);
      }
    }
    
    setLoading(false);
    
    // Generate share URL
    setShareUrl(`${window.location.origin}/events/${id}`);
  }, [id]);
  
  if (loading) {
    return (
      <MainLayout>
        <div className="container py-12">
          <p>Loading event details...</p>
        </div>
      </MainLayout>
    );
  }
  
  if (!event) {
    return (
      <MainLayout>
        <div className="container py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Event not found</h1>
          <p className="mb-8">The event you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate('/events')}>Browse Events</Button>
        </div>
      </MainLayout>
    );
  }
  
  const registrationPercentage = (event.registered / event.capacity) * 100;
  
  const handleRegister = () => {
    // Get the event from localStorage to update it
    const localEvents = JSON.parse(localStorage.getItem('events') || '[]');
    const updatedEvents = localEvents.map((e: any) => {
      if (e.id === event.id) {
        return {
          ...e,
          registered: (e.registered || 0) + 1
        };
      }
      return e;
    });
    
    localStorage.setItem('events', JSON.stringify(updatedEvents));
    
    // Update the UI
    setEvent({
      ...event,
      registered: event.registered + 1
    });
    
    toast({
      title: "Registration Successful",
      description: `You've successfully registered for ${event.title}`,
    });
  };
  
  const handleShare = () => {
    setIsShareDialogOpen(true);
  };
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    toast({
      title: "Link Copied",
      description: "Event link has been copied to clipboard",
    });
    setIsShareDialogOpen(false);
  };

  return (
    <MainLayout>
      <div className="container py-12">
        <div className="mb-8">
          <Badge variant="outline" className="bg-event-light/10 text-event-dark mb-4">
            {event.category}
          </Badge>
          <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
          
          <div className="flex flex-wrap gap-6 mb-6">
            <div className="flex items-center text-muted-foreground">
              <Calendar className="mr-2 h-5 w-5" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <Clock className="mr-2 h-5 w-5" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <MapPin className="mr-2 h-5 w-5" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <User className="mr-2 h-5 w-5" />
              <span>{event.organizer}</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
              <img
                src={event.image || '/placeholder.svg'}
                alt={event.title}
                className="h-full w-full object-cover"
              />
            </div>
            
            <h2 className="text-2xl font-bold mb-4">About This Event</h2>
            <p className="text-muted-foreground whitespace-pre-line">{event.description}</p>
          </div>
          
          <div>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Registration</h3>
                
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Available spots</span>
                    <span className="text-sm font-medium">{event.registered} / {event.capacity}</span>
                  </div>
                  <Progress value={registrationPercentage} className="h-2" />
                </div>
                
                <Button className="w-full mb-4" onClick={handleRegister}>
                  Register Now
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-center" 
                  onClick={handleShare}
                >
                  <Share2 className="mr-2 h-4 w-4" /> Share Event
                </Button>
                
                <div className="flex items-center justify-center text-sm text-muted-foreground mt-4">
                  <Users className="mr-2 h-4 w-4" />
                  <span>{event.registered} people registered</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Dialog open={isShareDialogOpen} onOpenChange={setIsShareDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Share this event</DialogTitle>
            <DialogDescription>
              Copy the link below to share this event with friends
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2 mt-4">
            <Input 
              value={shareUrl} 
              readOnly 
              onClick={(e) => e.currentTarget.select()}
            />
            <Button onClick={copyToClipboard}>Copy</Button>
          </div>
        </DialogContent>
      </Dialog>
    </MainLayout>
  );
};

export default EventDetail;
