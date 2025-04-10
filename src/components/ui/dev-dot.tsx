
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { GithubIcon, Globe, X } from 'lucide-react';

const DevDot = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div 
        className="dev-dot fixed bottom-4 right-4 bg-primary cursor-pointer animate-blink" 
        onClick={() => setOpen(true)}
        aria-hidden="true"
      />
      
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl text-center">Developer Information</DialogTitle>
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-4 top-4" 
              onClick={() => setOpen(false)}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="flex flex-col items-center space-y-2">
              <img 
                src="https://github.com/identicons/innocent-goodness.png" 
                alt="Innocent Goodness" 
                className="h-20 w-20 rounded-full"
              />
              <h3 className="text-lg font-semibold">Innocent Goodness</h3>
              <p className="text-center text-sm text-muted-foreground">
                Frontend Developer & UI/UX Designer
              </p>
            </div>
            
            <div className="flex justify-center space-x-4">
              <Button variant="outline" asChild>
                <a href="https://innocent-goodness.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Globe className="mr-2 h-4 w-4" />
                  Portfolio
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://github.com/innocent-goodness" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <GithubIcon className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DevDot;
