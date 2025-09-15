import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      ),
      title: "Email",
      value: "nordam312@email.com",
      link: "mailto:nordam312@email.com"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      title: "LinkedIn",
      value: "/in/alexchen-dev",
      link: "https://linkedin.com/in/alexchen-dev"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      title: "GitHub",
      value: "/alexchen-dev",
      link: "https://github.com/alexchen-dev"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, collaborating on exciting projects, 
            or just having a chat about technology and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Methods */}
          <div className="space-y-6">
            {contactMethods.map((method, index) => (
              <Card key={method.title} 
                    className="group hover:shadow-lg transition-all duration-300 animate-fade-in cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => window.open(method.link, '_blank')}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-accent/10 text-accent rounded-lg group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      {method.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-1">{method.title}</h4>
                      <p className="text-muted-foreground">{method.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0 shadow-2xl">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to collaborate?</h3>
                <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                  Whether you're looking to build a new project from scratch or need help 
                  improving an existing application, I'd love to hear from you.
                </p>
                <Button 
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent/25 px-8"
                  onClick={() => window.open('mailto:nordam312@email.com', '_blank')}
                >
                  Send Me an Email
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Mohammed Nour Damlakhi. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;