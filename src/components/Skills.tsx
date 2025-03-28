
import { Code, Database, Server, Globe, Wrench, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code className="h-6 w-6 text-primary" />,
      skills: ['Python', 'SQL', 'JavaScript', 'HTML', 'CSS']
    },
    {
      title: 'Frameworks',
      icon: <Server className="h-6 w-6 text-primary" />,
      skills: ['Flask', 'Django', 'React.js', 'Express.js']
    },
    {
      title: 'Databases',
      icon: <Database className="h-6 w-6 text-primary" />,
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLite']
    },
    {
      title: 'Frontend',
      icon: <Globe className="h-6 w-6 text-primary" />,
      skills: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap']
    },
    {
      title: 'Tools & Deployment',
      icon: <Wrench className="h-6 w-6 text-primary" />,
      skills: ['Git', 'Docker', 'AWS S3', 'Cloudinary', 'Heroku']
    },
    {
      title: 'Others',
      icon: <Zap className="h-6 w-6 text-primary" />,
      skills: ['REST APIs', 'JWT', 'RBAC', 'Payment Gateway Integration', 'AI Integration']
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">My Tech Stack</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Here are the technologies I work with to build secure, scalable, and efficient applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                {category.icon}
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-sm rounded-full bg-secondary text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
