
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">About Me</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              <p className="text-lg">
                My journey into web development began with a fascination for building systems that solve real-world problems. I've developed a strong focus on <span className="highlight">full-stack applications</span> with particular expertise in backend development.
              </p>
              
              <p className="text-lg">
                I specialize in creating <span className="highlight">professional-grade platforms</span> that are secure, scalable, and efficient. My experience spans across various domains including <span className="highlight">database design</span>, <span className="highlight">API development</span>, and <span className="highlight">cloud deployment</span>.
              </p>
              
              <p className="text-lg">
                Recently, I've been exploring <span className="highlight">AI-powered systems</span> and integrating them into web applications to create smarter, more intuitive user experiences. I'm passionate about building solutions that not only work reliably but also evolve with changing needs.
              </p>
              
              <p className="text-lg">
                I'm proud to have won <span className="highlight">3rd prize in the Envistas coding event</span>, where I demonstrated my problem-solving skills and technical expertise.
              </p>
              
              <div className="pt-4">
                <Button asChild variant="default">
                  <a href="#projects">Check out my work</a>
                </Button>
              </div>
            </div>
            
            <div className="md:col-span-1">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    <span>Full-Stack Developer with backend focus</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    <span>Experienced in Python, Flask, and Django</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    <span>Database design specialist (SQL, PostgreSQL, MongoDB)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    <span>Cloud deployment expert (AWS, Cloudinary)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    <span>AI integration enthusiast</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    <span>3rd prize winner in Envistas coding event</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
