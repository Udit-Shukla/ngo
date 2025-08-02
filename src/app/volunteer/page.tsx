import Link from "next/link";

export default function VolunteerPage() {
  const volunteerOpportunities = [
    {
      id: 1,
      title: "Teaching Assistant",
      category: "Education",
      location: "Local Community Centers",
      duration: "2-4 hours/week",
      commitment: "3-6 months",
      description: "Help children with their studies, assist teachers in classrooms, and support educational activities.",
      requirements: [
        "Basic education background",
        "Patience and good communication skills",
        "Commitment to regular schedule"
      ],
      impact: "Directly impact children's learning outcomes"
    },
    {
      id: 2,
      title: "Healthcare Camp Volunteer",
      category: "Healthcare",
      location: "Various Locations",
      duration: "Full day events",
      commitment: "Event-based",
      description: "Assist in organizing and running healthcare camps, help with registration, and support medical staff.",
      requirements: [
        "Basic healthcare knowledge preferred",
        "Good organizational skills",
        "Compassionate attitude"
      ],
      impact: "Help provide healthcare to hundreds of people"
    },
    {
      id: 3,
      title: "Water Project Assistant",
      category: "Infrastructure",
      location: "Rural Areas",
      duration: "4-6 hours/day",
      commitment: "1-2 weeks",
      description: "Support water project implementation, help with community awareness, and assist in maintenance training.",
      requirements: [
        "Physical fitness for field work",
        "Basic technical understanding",
        "Willingness to travel to rural areas"
      ],
      impact: "Help provide clean water to communities"
    },
    {
      id: 4,
      title: "Women Empowerment Trainer",
      category: "Social Development",
      location: "Community Centers",
      duration: "3-4 hours/week",
      commitment: "6 months",
      description: "Conduct skill development workshops, entrepreneurship training, and financial literacy sessions.",
      requirements: [
        "Relevant professional experience",
        "Training or teaching experience",
        "Empathy and cultural sensitivity"
      ],
      impact: "Empower women with new skills and opportunities"
    },
    {
      id: 5,
      title: "Environmental Campaigner",
      category: "Environment",
      location: "Schools & Communities",
      duration: "2-3 hours/week",
      commitment: "3 months",
      description: "Lead environmental awareness programs, organize tree planting drives, and promote sustainable practices.",
      requirements: [
        "Environmental awareness",
        "Good public speaking skills",
        "Enthusiasm for environmental causes"
      ],
      impact: "Create environmental consciousness in communities"
    },
    {
      id: 6,
      title: "Administrative Support",
      category: "Office Support",
      location: "Main Office",
      duration: "4-6 hours/day",
      commitment: "Flexible",
      description: "Provide administrative support, help with data entry, social media management, and office coordination.",
      requirements: [
        "Basic computer skills",
        "Good organizational abilities",
        "Attention to detail"
      ],
      impact: "Support smooth operations of all programs"
    }
  ];

  const volunteerBenefits = [
    {
      icon: "🎯",
      title: "Make Real Impact",
      description: "Directly contribute to positive change in communities"
    },
    {
      icon: "🤝",
      title: "Build Connections",
      description: "Meet like-minded people and build meaningful relationships"
    },
    {
      icon: "📚",
      title: "Learn & Grow",
      description: "Gain new skills and valuable experience in social work"
    },
    {
      icon: "💝",
      title: "Personal Fulfillment",
      description: "Experience the joy of helping others and making a difference"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="w-full py-20 px-4 text-center bg-card">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-primary tracking-tight">Volunteer With Us</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our team of dedicated volunteers and help us create positive change in communities. 
            Your time, skills, and passion can make a real difference in someone&apos;s life.
          </p>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Why Volunteer With Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {volunteerBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Current Volunteer Opportunities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {volunteerOpportunities.map((opportunity) => (
              <div key={opportunity.id} className="bg-card rounded-lg shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-primary font-medium">{opportunity.category}</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      Open
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">{opportunity.title}</h3>
                  <p className="text-muted-foreground mb-4">{opportunity.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span className="w-4 h-4 mr-2">📍</span>
                      {opportunity.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span className="w-4 h-4 mr-2">⏰</span>
                      {opportunity.duration}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span className="w-4 h-4 mr-2">📅</span>
                      {opportunity.commitment}
                    </div>
                  </div>

                  <div className="bg-muted/50 p-3 rounded-lg mb-4">
                    <h4 className="font-medium text-sm text-card-foreground mb-2">Requirements:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {opportunity.requirements.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-sm text-primary font-medium mb-4">
                    Impact: {opportunity.impact}
                  </div>

                  <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md font-medium hover:bg-primary/90 transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Apply to Volunteer</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">First Name *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 rounded border border-border bg-input text-foreground focus:ring-2 focus:ring-ring outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">Last Name *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 rounded border border-border bg-input text-foreground focus:ring-2 focus:ring-ring outline-none"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">Email *</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 rounded border border-border bg-input text-foreground focus:ring-2 focus:ring-ring outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">Phone *</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2 rounded border border-border bg-input text-foreground focus:ring-2 focus:ring-ring outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-card-foreground mb-2">Preferred Volunteer Role *</label>
              <select className="w-full px-4 py-2 rounded border border-border bg-input text-foreground focus:ring-2 focus:ring-ring outline-none">
                <option value="">Select a role</option>
                <option value="teaching">Teaching Assistant</option>
                <option value="healthcare">Healthcare Camp Volunteer</option>
                <option value="water">Water Project Assistant</option>
                <option value="women">Women Empowerment Trainer</option>
                <option value="environment">Environmental Campaigner</option>
                <option value="admin">Administrative Support</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-card-foreground mb-2">Availability *</label>
              <div className="grid md:grid-cols-3 gap-4">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Weekdays</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Weekends</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Evenings</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-card-foreground mb-2">Skills & Experience</label>
              <textarea
                rows={4}
                placeholder="Tell us about your skills, experience, and why you want to volunteer with us..."
                className="w-full px-4 py-2 rounded border border-border bg-input text-foreground focus:ring-2 focus:ring-ring outline-none"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Volunteer Stories */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Volunteer Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mr-4">
                  <span className="text-muted-foreground">👤</span>
                </div>
                <div>
                  <h3 className="font-semibold">Sarah Johnson</h3>
                  <p className="text-sm text-muted-foreground">Teaching Assistant, 2 years</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                &ldquo;Volunteering as a teaching assistant has been incredibly rewarding. Seeing the children&apos;s 
                progress and their enthusiasm for learning makes every moment worthwhile.&rdquo;
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mr-4">
                  <span className="text-muted-foreground">👤</span>
                </div>
                <div>
                  <h3 className="font-semibold">Michael Chen</h3>
                  <p className="text-sm text-muted-foreground">Healthcare Volunteer, 1 year</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                &ldquo;Being part of the healthcare camps has shown me the real impact we can have on people&apos;s lives. 
                The gratitude from the communities we serve is overwhelming.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join our volunteer community and help us create lasting positive change. 
            Every volunteer brings unique skills and perspectives that make our work stronger.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Apply Now
            </button>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 