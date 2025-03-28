
import { Trophy, Briefcase, GraduationCap, Star, Book, Award, Code, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: "Kongu Engineering College",
      role: "B.Tech in Information Technology",
      period: "2021 - 2025",
      description: "Pursuing my bachelor's degree with a focus on developing strong technical foundations in software development, databases, and artificial intelligence.",
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
      type: "education",
      badges: ["Current CGPA: 8.5/10", "Data Structures", "Algorithms", "Database Systems"]
    },
    {
      title: "National Level Coding Competition",
      role: "1st Prize Winner",
      period: "2024",
      description: "Secured first place in a prestigious national coding competition, demonstrating exceptional problem-solving skills and algorithmic thinking under time constraints.",
      icon: <Award className="h-6 w-6 text-primary" />,
      type: "achievement",
      badges: ["Competitive Programming", "Algorithm Optimization", "Time Management"]
    },
    {
      title: "Envistas Coding Competition",
      role: "3rd Prize Winner",
      period: "2023",
      description: "Won 3rd prize in the prestigious Envistas coding competition, demonstrating strong problem-solving skills and technical expertise in algorithm design and implementation.",
      icon: <Trophy className="h-6 w-6 text-primary" />,
      type: "achievement",
      badges: ["Algorithm Design", "Problem Solving", "Competitive Programming"]
    },
    {
      title: "Open Source Contribution",
      role: "Active Contributor",
      period: "2022 - Present",
      description: "Contributing to prominent open-source projects in the Python ecosystem. Implemented key features and fixed critical bugs that enhanced performance and security for thousands of users.",
      icon: <Code className="h-6 w-6 text-primary" />,
      type: "achievement",
      badges: ["GitHub", "Code Review", "Bug Fixing", "Feature Development"]
    },
    {
      title: "Full Stack Development",
      role: "Personal Projects & Learning",
      period: "2021 - Present",
      description: "Focused on building full-stack applications with Python, Flask, and Django, with emphasis on secure and scalable architectures. Developed multiple web applications and contributed to open-source projects.",
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      type: "experience",
      badges: ["Python", "Flask", "Django", "React", "PostgreSQL"]
    },
    {
      title: "Student Developer Community",
      role: "Technical Lead",
      period: "2022 - Present",
      description: "Leading a community of student developers, organizing workshops and hackathons to foster technical growth and collaboration. Mentored junior students in web development and programming fundamentals.",
      icon: <Users className="h-6 w-6 text-primary" />,
      type: "experience",
      badges: ["Leadership", "Mentoring", "Event Organization", "Community Building"]
    },
    {
      title: "AI & Machine Learning",
      role: "Self-Study & Projects",
      period: "2022 - Present",
      description: "Explored AI integration in web applications, developing smart search systems and recommendation engines. Completed multiple online courses and hands-on projects in machine learning.",
      icon: <Star className="h-6 w-6 text-primary" />,
      type: "education",
      badges: ["Machine Learning", "AI Integration", "Python", "TensorFlow"]
    },
    {
      title: "Technical Writing",
      role: "Blog & Documentation",
      period: "2022 - Present",
      description: "Created technical tutorials and documentation for web development and AI projects. Shared knowledge through online platforms to help fellow developers.",
      icon: <Book className="h-6 w-6 text-primary" />,
      type: "experience",
      badges: ["Documentation", "Tutorials", "Knowledge Sharing"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Experience & Achievements</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          My journey in tech includes education, project building, competitions, and continuous learning.
        </p>

        <div className="max-w-3xl mx-auto">
          {experiences.map((item, index) => (
            <div key={index} className="mb-8 relative">
              {/* Timeline connector */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-border h-full z-0"></div>
              )}
              
              <Card className="relative z-10 bg-card border-border hover:border-primary/50 transition-all duration-300">
                <CardHeader className="flex flex-row space-x-4 items-start pb-2">
                  <div className="bg-secondary p-3 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {item.role} | {item.period}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground mb-4">{item.description}</p>
                  {item.badges && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.badges.map((badge, i) => (
                        <Badge key={i} variant="outline" className="bg-secondary/30">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
