import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import syrianCommunity from "@/assets/SC_HomePage.png";
import syrianAdmin1 from "@/assets/SC_AdminDashboard.png";
import syrianAdmin2 from "@/assets/SC_AdminDashboard1.png";
import saasProject from "@/assets/saas-project.jpg";
import ecommerceProject from "@/assets/ecommerce-project.jpg";
import mobileProject from "@/assets/mobile-project.jpg";

const Portfolio = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>({});

  const projects = [
    {
      title: "Syrian Community Website",
      description: "Official website for the Syrian Community at Istanbul Aydın University, featuring community resources, events, and member services.",
      images: [syrianCommunity, syrianAdmin1, syrianAdmin2],
      tech: ["React", "Laravel", "MySQL", "Tailwind CSS"],
      github: "#",
      live: "https://iausyriancommunity.com/"
    },
  ];

  const handleNextImage = (projectTitle: string, imagesLength: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectTitle]: ((prev[projectTitle] || 0) + 1) % imagesLength
    }));
  };

  const handlePrevImage = (projectTitle: string, imagesLength: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectTitle]: ((prev[projectTitle] || 0) - 1 + imagesLength) % imagesLength
    }));
  };

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">My Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Here are some of my favorite projects that showcase my skills in full-stack development,
            UI/UX design, and modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 animate-slide-up border-border/50 hover:border-accent/30"
              style={{ animationDelay: `${index * 150}ms` }}>
              <div className="relative overflow-hidden group">
                {/* Image Display */}
                <img
                  src={project.images[currentImageIndex[project.title] || 0]}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Navigation Arrows for multiple images */}
                {project.images && project.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrevImage(project.title, project.images.length);
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      aria-label="Previous image"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNextImage(project.title, project.images.length);
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      aria-label="Next image"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    {/* Image Indicators */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex(prev => ({
                              ...prev,
                              [project.title]: idx
                            }));
                          }}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            (currentImageIndex[project.title] || 0) === idx
                              ? 'bg-accent w-6'
                              : 'bg-background/60 hover:bg-background/80'
                          }`}
                          aria-label={`Go to image ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors flex items-center justify-between">
                  {project.title}
                  {project.images && project.images.length > 1 && (
                    <span className="text-xs text-muted-foreground font-normal">
                      {(currentImageIndex[project.title] || 0) + 1} / {project.images.length}
                    </span>
                  )}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                  {project.images && project.images.length > 1 && (
                    <span className="block mt-2 text-xs text-accent">
                      {currentImageIndex[project.title] === 0 && "Homepage View"}
                      {currentImageIndex[project.title] === 1 && "Admin Dashboard - Overview"}
                      {currentImageIndex[project.title] === 2 && "Admin Dashboard - Management"}
                    </span>
                  )}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech}
                      className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground"
                    onClick={() => project.github !== "#" && window.open(project.github, "_blank")}
                    disabled={project.github === "#"}
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
                    onClick={() => project.live !== "#" && window.open(project.live, "_blank")}
                    disabled={project.live === "#"}
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to see more projects or discuss a collaboration?
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent/25 px-8"
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Let's Work Together
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;