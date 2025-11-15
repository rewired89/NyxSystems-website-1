import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Target, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Security & Consent First",
      description:
        "Every design decision starts from one question: did the user actually consent to this connection or data flow?",
    },
    {
      icon: <Users className="h-12 w-12 text-secondary" />,
      title: "Human-Centered",
      description:
        "We build for real people, not ad-tech dashboards. Clear language, practical defenses, and no dark patterns.",
    },
    {
      icon: <Target className="h-12 w-12 text-primary" />,
      title: "Focused Innovation",
      description:
        "We don’t chase every buzzword. We go deep on a few core ideas: identity, consent, and safe transport.",
    },
    {
      icon: <Award className="h-12 w-12 text-secondary" />,
      title: "Independent & Honest",
      description:
        "No investors pushing for surveillance “features”, no data selling. Just a small team building what we believe in.",
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
              <span className="text-foreground">About</span>
              <span className="bg-gradient-cyber bg-clip-text text-transparent ml-4">
                Nyx Systems LLC
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A small independent team building HSIP, a consent-first network
              layer for people who are tired of being tracked, profiled, and
              exploited by default.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground">
                Nyx Systems LLC exists because the current internet assumes “yes”
                by default. Your devices connect, leak, and share before you
                even understand who&apos;s on the other side. Our mission is to
                flip that: identity and consent first, everything else second.
              </p>
              <p className="text-lg text-muted-foreground">
                HSIP (Hyper-Secure Internet Protocol) is our first product and
                foundation. It&apos;s not a shiny dashboard or a cloud service,
                it&apos;s a transport layer designed so your device can verify
                who it&apos;s talking to and enforce consent before data moves.
              </p>
              <p className="text-lg text-muted-foreground">
                We&apos;re not promising magic AI that solves everything. We&apos;re
                focused on solid cryptography, clear boundaries, and tools that
                high-risk users and everyday people can actually use.
              </p>
            </div>

            <div className="flex justify-center">
              <Card className="bg-card border-border shadow-cyber p-8">
                <CardContent className="text-center">
                  <div className="mb-6">
                    <Shield className="h-24 w-24 text-primary mx-auto animate-glow-pulse" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    HSIP: Our First Building Block
                  </h3>
                  <p className="text-muted-foreground">
                    HSIP adds identity, consent, and basic abuse protection at
                    the transport layer, so other tools (VPNs, firewalls,
                    antivirus) aren&apos;t the only line of defense.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we design at Nyx Systems LLC and
              in our first product, HSIP.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:shadow-cyber transition-all duration-300 text-center"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              A Small, Focused Team
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Nyx Systems LLC is a small group of people wearing a lot of hats:
              protocol and product design, security and abuse-prevention, and
              low-level systems engineering. We don&apos;t have a giant
              marketing department or a sales army, just people who care about
              building a safer default for everyone.
            </p>
            <div className="bg-gradient-cyber p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-background mb-4">
                Why Choose Nyx Systems LLC?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-background/90">
                <div>
                  <h4 className="font-semibold mb-2">Consent-First Design</h4>
                  <p className="text-sm">
                    HSIP is built around explicit consent and identity, not just
                    “block lists” after the fact.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">
                    Practical, Real-World Focus
                  </h4>
                  <p className="text-sm">
                    We design for abuse scenarios that real people and
                    high-risk users actually face.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">
                    Independent & Privacy-Respecting
                  </h4>
                  <p className="text-sm">
                    No ads, no data selling. HSIP ships free for individuals
                    because a safer baseline shouldn&apos;t be a luxury feature.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
