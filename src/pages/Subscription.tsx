import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Shield, Zap, Crown } from "lucide-react";

const Subscription = () => {
  const plans = [
    {
      name: "HSIP Basic",
      price: "$99.99",
      period: "/month",
      description: "Entry-level HSIP features for future small-business plans",
      icon: <Shield className="h-8 w-8 text-primary" />,
      features: [
        "HSIP Identity",
        "Consent-Based Sessions",
        "Replay & Abuse Guard",
        "Basic Logs & Reports",
        "3 Devices Coverage",
      ],
      popular: false,
      buttonText: "Coming Soon",
    },
    {
      name: "HSIP Professional",
      price: "$199.99",
      period: "/month",
      description: "Pro tier for companies needing advanced HSIP controls",
      icon: <Zap className="h-8 w-8 text-secondary" />,
      features: [
        "Everything in Basic",
        "Centralized Admin Panel",
        "Team Identity Enrollment",
        "Advanced Consent Rules",
        "Custom Logging Policies",
        "10 Devices Coverage",
        "Priority Support",
      ],
      popular: true,
      buttonText: "Coming Soon",
    },
    {
      name: "HSIP Enterprise",
      price: "$499.99",
      period: "/month",
      description: "Enterprise-grade HSIP with deep integration options",
      icon: <Crown className="h-8 w-8 text-primary" />,
      features: [
        "Everything in Professional",
        "Dedicated HSIP Engineer",
        "Custom Integrations",
        "Unlimited Devices",
        "Compliance-Ready Logs",
        "SLA Guarantee",
        "Private Deployment Options",
      ],
      popular: false,
      buttonText: "Coming Soon",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* STATUS MESSAGE */}
      <section className="pt-24 pb-8 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            HSIP Subscriptions are Paused
          </h1>

          <p className="text-lg text-muted-foreground mb-3">
            We’re currently focused on delivering a rock-solid free HSIP MVP for
            individuals.  
            Paid HSIP business tiers will reopen **after the MVP has shipped
            and been tested by early users**.
          </p>

          <p className="text-sm text-muted-foreground">
            You can already try the{" "}
            <a
              href="/download"
              className="text-primary underline underline-offset-4"
            >
              free HSIP Windows build
            </a>{" "}
            while we finish the subscription backend.
          </p>
        </div>
      </section>

      {/* HERO */}
      <section className="pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Future Plans for</span>
              <span className="bg-gradient-cyber bg-clip-text text-transparent ml-2">
                HSIP Business
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              These tiers preview features that will be available for
              organizations once HSIP enters full production.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-sm text-muted-foreground">
              These HSIP plans are **not yet active**.  
              This page is a preview for future business customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative bg-card border-border hover:shadow-cyber transition-all duration-300 ${
                  plan.popular
                    ? "border-primary shadow-glow-primary scale-105"
                    : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                      Future Most Popular
                    </span>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-muted rounded-lg">{plan.icon}</div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {plan.name}
                  </CardTitle>
                  <p className="text-muted-foreground">{plan.description}</p>
                </CardHeader>

                <CardContent className="pt-4">
                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-foreground">
                        {plan.price}
                      </span>
                      <span className="text-lg text-muted-foreground ml-1">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-muted-foreground"
                      >
                        <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full cursor-not-allowed opacity-60 ${
                      plan.popular
                        ? "bg-gradient-primary hover:shadow-none"
                        : "bg-gradient-secondary hover:shadow-none"
                    } transition-all duration-300`}
                    size="lg"
                    disabled
                  >
                    {plan.buttonText}
                  </Button>

                  <p className="mt-2 text-xs text-center text-muted-foreground">
                    HSIP subscriptions will launch after the MVP phase.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-cyber">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-background mb-6">
            Start with HSIP Today
          </h2>
          <p className="text-xl text-background/80 mb-8 max-w-2xl mx-auto">
            While business plans are paused, you can already begin using HSIP
            and testing the free MVP.
          </p>
          <a href="/download" className="inline-flex">
            <Button
              size="lg"
              variant="secondary"
              className="bg-background text-primary hover:bg-background/90 shadow-lg"
            >
              Download HSIP for Windows
              <Shield className="h-5 w-5 ml-2" />
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Subscription;
