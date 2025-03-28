
import { Github, Linkedin, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl animate-fade-in">
          <p className="text-primary mb-4 font-mono">Hi, my name is</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">
            Roohith Bala.
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-muted-foreground mb-6">
            I build professional-grade web applications.
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mb-8">
            I'm a <span className="highlight">Full Stack Developer</span> | <span className="highlight">Backend Engineer</span> | <span className="highlight">AI Enthusiast</span> specializing in building exceptional digital experiences with Python, Flask, Django, and AI-powered solutions.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <Button asChild size="lg">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <FileText className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/roohithbala/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
