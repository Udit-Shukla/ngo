import Link from "next/link";

export default function DonatePage() {
  const donationOptions = [
    {
      id: 1,
      title: "Education Fund",
      amount: 25,
      description: "Provide school supplies and books for one child for a month",
      impact: "Helps 1 child access education",
      popular: false
    },
    {
      id: 2,
      title: "Clean Water",
      amount: 50,
      description: "Contribute to building water purification systems",
      impact: "Provides clean water for 10 families",
      popular: true
    },
    {
      id: 3,
      title: "Healthcare Camp",
      amount: 100,
      description: "Support free medical check-ups and awareness programs",
      impact: "Treats 50 people in healthcare camps",
      popular: false
    },
    {
      id: 4,
      title: "Women Empowerment",
      amount: 75,
      description: "Support skill development and entrepreneurship training",
      impact: "Empowers 3 women with new skills",
      popular: false
    },
    {
      id: 5,
      title: "Emergency Relief",
      amount: 150,
      description: "Provide immediate aid during disasters and emergencies",
      impact: "Supports emergency response efforts",
      popular: false
    },
    {
      id: 6,
      title: "Custom Amount",
      amount: 0,
      description: "Choose your own amount to support our general fund",
      impact: "Flexible support for all programs",
      popular: false
    }
  ];

  const impactStats = [
    { number: "500+", label: "Children Educated" },
    { number: "10+", label: "Villages with Clean Water" },
    { number: "2000+", label: "People Treated" },
    { number: "300+", label: "Women Empowered" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="w-full py-20 px-4 text-center bg-card">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-primary tracking-tight">Support Our Mission</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Your donation directly supports our programs and helps create lasting positive change in communities. 
            Every contribution, no matter the size, makes a real difference.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Your Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Choose Your Impact</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {donationOptions.map((option) => (
              <div key={option.id} className={`bg-card rounded-lg shadow-sm border border-border p-6 relative ${option.popular ? 'ring-2 ring-primary' : ''}`}>
                {option.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">{option.title}</h3>
                  {option.amount > 0 ? (
                    <div className="text-3xl font-bold text-primary mb-2">${option.amount}</div>
                  ) : (
                    <div className="text-3xl font-bold text-primary mb-2">Custom</div>
                  )}
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                </div>

                <div className="bg-muted/50 p-3 rounded-lg mb-4">
                  <div className="text-sm font-medium text-primary">{option.impact}</div>
                </div>

                <button className="w-full bg-primary text-primary-foreground py-3 px-4 rounded-md font-medium hover:bg-primary/90 transition-colors">
                  {option.amount > 0 ? `Donate $${option.amount}` : 'Choose Amount'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Your Donation Helps */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">How Your Donation Helps</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xl">📚</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Education Programs</h3>
                  <p className="text-muted-foreground">Your donation provides school supplies, books, and educational resources to children who otherwise wouldn&apos;t have access to quality education.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xl">💧</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Clean Water Projects</h3>
                  <p className="text-muted-foreground">Funds go towards building wells, installing water purification systems, and providing clean drinking water to rural communities.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xl">🏥</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Healthcare Initiatives</h3>
                  <p className="text-muted-foreground">Support free medical camps, vaccination drives, and health awareness programs that reach thousands of people.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xl">👩‍💼</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Women Empowerment</h3>
                  <p className="text-muted-foreground">Help women gain skills, start businesses, and become financially independent through training and microfinance support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Support */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-8">Other Ways to Support</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl">🤝</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Volunteer</h3>
              <p className="text-muted-foreground mb-4">Join our team and contribute your time and skills to our projects.</p>
              <Link href="/volunteer" className="text-primary hover:underline">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl">📢</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Spread the Word</h3>
              <p className="text-muted-foreground mb-4">Share our mission with your network and help us reach more people.</p>
              <div className="flex justify-center gap-4">
                <button className="text-primary hover:underline">Facebook</button>
                <button className="text-primary hover:underline">Twitter</button>
                <button className="text-primary hover:underline">LinkedIn</button>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl">🏢</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Corporate Partnership</h3>
              <p className="text-muted-foreground mb-4">Partner with us for CSR initiatives and create larger impact together.</p>
              <Link href="/contact" className="text-primary hover:underline">
                Contact Us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Transparency & Accountability</h2>
          <p className="text-lg mb-8 opacity-90">
            We believe in complete transparency. Every donation is tracked and reported, 
            and we provide regular updates on how your contributions are making a difference.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Financial Reports</h3>
              <p className="text-sm opacity-90">Annual reports and financial statements available for review</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Impact Updates</h3>
              <p className="text-sm opacity-90">Regular updates on project progress and beneficiary stories</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Donor Recognition</h3>
              <p className="text-sm opacity-90">Recognition and appreciation for all our supporters</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 