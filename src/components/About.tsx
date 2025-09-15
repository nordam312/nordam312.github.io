import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    { name: "JavaScript", description: "React, Node.js, Next.js", level: "Advanced", progress: 75 },
    { name: "TypeScript", description: "Type-safe development", level: "Advanced", progress: 75 },
    { name: "HTML/CSS", description: "Tailwind, Responsive Design", level: "Intermediate", progress: 70 },
    { name: "Laravel/PHP", description: "RESTful APIs, MVC", level: "Advanced", progress: 80 },
    { name: "Database", description: "MySQL", level: "Intermediate", progress: 70 },
    { name: "Git & DevOps", description: "Version Control, CI/CD", level: "Intermediate", progress: 65 }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm passionate about creating digital experiences that combine beautiful design with
            robust functionality. With a strong foundation in both frontend and backend technologies,
            I love solving complex problems through elegant code.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-primary mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              Technical Skills
            </h3>
            <div className="grid gap-4">
              {skills.map((skill, index) => (
                <Card key={skill.name} className="group hover:shadow-lg transition-all duration-300 animate-fade-in hover:scale-[1.02] relative overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent to-primary"></div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">{skill.name}</h4>
                        <p className="text-sm text-muted-foreground">{skill.description}</p>
                      </div>
                      <span className="text-sm px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">
                        {skill.level}
                      </span>
                    </div>
                    <div className="mt-4">
                      <div className="flex justify-between text-xs text-muted-foreground mb-1">
                        <span>Proficiency</span>
                        <span>{skill.progress}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-accent to-primary rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.progress}%`,
                            animation: `slideInWidth 1.5s ease-out ${index * 200}ms forwards`,
                            transform: 'scaleX(0)',
                            transformOrigin: 'left'
                          }}
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience & Education */}
          <div className="space-y-12">
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-8 flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                Experience
              </h3>
              <div className="space-y-4">
                <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-accent hover:scale-[1.02]">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                          Full-Stack Developer
                          <span className="text-xs px-2 py-1 bg-accent/20 text-accent rounded-full">Current</span>
                        </h4>
                        <p className="text-accent font-medium">Syrian Community - Istanbul Aydın University</p>
                      </div>
                      <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        Sep 2023 - Present
                      </span>
                    </div>
                    <ul className="text-muted-foreground space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">▸</span>
                        Lead developer for the official Syrian Community website, serving 500+ students and faculty members
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">▸</span>
                        Implemented admin dashboard with Laravel for event management, member registration,presedint elections and content updates
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">▸</span>
                        Maintained 99.9% uptime and optimized site performance for better user experience
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-primary/50 hover:scale-[1.02] opacity-90">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">Freelance Web Developer</h4>
                        <p className="text-primary font-medium">Self-Employed</p>
                      </div>
                      <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        2022 - 2023
                      </span>
                    </div>
                    <ul className="text-muted-foreground space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">▸</span>
                        Delivered 10+ web projects for local businesses and organizations
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">▸</span>
                        Specialized in responsive design and e-commerce solutions
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-8 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                Education
              </h3>
              <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-primary hover:scale-[1.02] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full -mr-16 -mt-16"></div>
                <CardContent className="p-6 relative">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        B.S. in Software Engineering
                        <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">GPA: 3.6/4.0</span>
                      </h4>
                      <p className="text-accent font-medium">Istanbul Aydın University</p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      2021 - 2025
                    </span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      Specializing in full-stack development with focus on modern web technologies
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">Data Structures</span>
                      <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">Web Development</span>
                      <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">Database Systems</span>
                      <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">Software Architecture</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;