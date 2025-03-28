
import { Github, ExternalLink, Book, Star, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'Library Management System',
      description: 'A comprehensive library management solution with AI-powered smart search capabilities, inventory tracking, and user management.',
      image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600',
      tags: ['Python', 'Flask', 'SQL', 'AI', 'REST API'],
      icon: <Book className="h-10 w-10 text-primary" />,
      links: {
        github: '#',
        live: '#'
      }
    },
    {
      title: 'Role-Based Access Control System',
      description: 'A secure RBAC implementation that provides granular permission control for enterprise applications with audit logging and security measures.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600',
      tags: ['Python', 'Django', 'PostgreSQL', 'JWT', 'Security'],
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      links: {
        github: '#',
        live: '#'
      }
    },
    {
      title: 'AI-powered Search Module',
      description: 'An intelligent search system that leverages NLP to understand user intent and provide relevant results across different data sources.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600',
      tags: ['Python', 'NLP', 'Machine Learning', 'API', 'React'],
      icon: <Star className="h-10 w-10 text-primary" />,
      status: 'In Progress',
      links: {
        github: '#'
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Featured Projects</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Here are some of the projects I've worked on that showcase my skills in building
          secure, scalable, and intelligent web applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card overflow-hidden flex flex-col h-full">
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {project.status && (
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                      {project.status}
                    </Badge>
                  </div>
                )}
              </div>
              
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-secondary rounded-full p-2">
                  {project.icon}
                </div>
                <div>
                  <CardTitle>{project.title}</CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <CardDescription className="text-muted-foreground mb-4">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="bg-background/50">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-end gap-2 border-t border-border pt-4">
                {project.links.github && (
                  <Button asChild variant="ghost" size="icon">
                    <a 
                      href={project.links.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                )}
                {project.links.live && (
                  <Button asChild variant="ghost" size="icon">
                    <a 
                      href={project.links.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              View More Projects on GitHub
              <Github className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
