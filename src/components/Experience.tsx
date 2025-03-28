
import { Trophy, Briefcase, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: "Envistas Coding Competition",
      role: "3rd Prize Winner",
      period: "2023",
      description: "Won 3rd prize in the prestigious Envistas coding competition, demonstrating strong problem-solving skills and technical expertise.",
      icon: <Trophy className="h-6 w-6 text-primary" />,
      type: "achievement"
    },
    {
      title: "Full Stack Development",
      role: "Personal Projects & Learning",
      period: "2021 - Present",
      description: "Focused on building full-stack applications with Python, Flask, and Django, with emphasis on secure and scalable architectures.",
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      type: "experience"
    },
    {
      title: "AI & Machine Learning",
      role: "Self-Study & Projects",
      period: "2022 - Present",
      description: "Explored AI integration in web applications, developing smart search systems and recommendation engines.",
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
      type: "education"
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Experience & Achievements</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          My journey in web development includes continuous learning, project building, and recognition.
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
                  <p className="text-foreground">{item.description}</p>
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
