import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/ui/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      content: "nyxsystemsllc@gmail.com",
      description: "Send us an email anytime",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Address",
      content: "Miami, FL 33177",
      description: "Base of Nyx Systems LLC",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Contact</span>
              <span className="bg-gradient-cyber bg-clip-text text-transparent ml-4">
                Nyx Systems LLC
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Get in touch with us about HSIP, early access, or general business inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Send Us a Message
                </h2>
                <p className="text-lg text-muted-foreground">
                  Have questions about HSIP, the free MVP release, or future business features?
                  Reach out and we’ll get back to you as soon as possible.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Get in Touch
                </h2>
                <p className="text-lg text-muted-foreground">
                  Whether you're an individual user or a business interested in HSIP,
                  we’re here to help you understand how our technology can protect your privacy.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="bg-card border-border hover:shadow-cyber transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-muted rounded-lg">{info.icon}</div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            {info.title}
                          </h3>
                          <p className="text-foreground mb-1">{info.content}</p>
                          <p className="text-sm text-muted-foreground">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ REMOVED — HIDDEN FOR NOW */}

      <Footer />
    </div>
  );
};

export default Contact;
