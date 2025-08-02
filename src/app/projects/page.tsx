import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Education for All",
      category: "Education",
      description: "Providing free educational resources and classes to underprivileged children in rural and urban areas.",
      impact: "500+ children enrolled",
      status: "Active",
      image: "/image.png", // Placeholder - replace with actual project images
      details: [
        "Free school supplies and textbooks",
        "After-school tutoring programs",
        "Computer literacy classes",
        "Scholarship programs for higher education"
      ]
    },
    {
      id: 2,
      title: "Clean Water Initiative",
      category: "Infrastructure",
      description: "Building wells and water purification systems in rural areas to provide clean drinking water.",
      impact: "10+ villages served",
      status: "Active",
      image: "/image.png",
      details: [
        "Hand pump installation",
        "Water purification systems",
        "Hygiene awareness programs",
        "Maintenance training for communities"
      ]
    },
    {
      id: 3,
      title: "Healthcare Camps",
      category: "Healthcare",
      description: "Organizing free health check-ups and awareness drives for the community.",
      impact: "2000+ people treated",
      status: "Active",
      image: "/image.png",
      details: [
        "Free medical check-ups",
        "Vaccination drives",
        "Health awareness workshops",
        "Referral to specialized care"
      ]
    },
    {
      id: 4,
      title: "Women Empowerment",
      category: "Social Development",
      description: "Supporting women through skill development, entrepreneurship training, and financial literacy.",
      impact: "300+ women empowered",
      status: "Active",
      image: "/image.png",
      details: [
        "Vocational training programs",
        "Microfinance support",
        "Leadership development",
        "Legal awareness workshops"
      ]
    },
    {
      id: 5,
      title: "Environmental Conservation",
      category: "Environment",
      description: "Tree planting initiatives and environmental awareness programs to promote sustainability.",
      impact: "5000+ trees planted",
      status: "Active",
      image: "/image.png",
      details: [
        "Tree plantation drives",
        "Environmental education",
        "Waste management programs",
        "Community clean-up campaigns"
      ]
    },
    {
      id: 6,
      title: "Disaster Relief",
      category: "Emergency Response",
      description: "Providing immediate relief and support during natural disasters and emergencies.",
      impact: "Emergency response team",
      status: "On-call",
      image: "/image.png",
      details: [
        "Emergency food and shelter",
        "Medical aid during disasters",
        "Rehabilitation support",
        "Disaster preparedness training"
      ]
    }
  ];

  const categories = ["All", "Education", "Healthcare", "Infrastructure", "Social Development", "Environment", "Emergency Response"];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="w-full py-20 px-4 text-center bg-card">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-primary tracking-tight">Our Projects & Programs</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the various initiatives we&apos;re running to create positive change in our community. 
            Each project is designed to address specific needs and create lasting impact.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Children Educated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Villages Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2000+</div>
              <div className="text-muted-foreground">People Treated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">300+</div>
              <div className="text-muted-foreground">Women Empowered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-card rounded-lg shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-muted flex items-center justify-center">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-primary font-medium">{project.category}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      project.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="text-sm text-primary font-medium mb-4">{project.impact}</div>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="font-medium text-sm text-card-foreground">Key Activities:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.details.slice(0, 3).map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-primary text-primary-foreground py-2 px-4 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
                      Learn More
                    </button>
                    <button className="px-4 py-2 border border-border rounded-md text-sm font-medium hover:border-primary hover:text-primary transition-colors">
                      Support
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Support */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Support Our Projects</h2>
          <p className="text-lg mb-8 opacity-90">
            Your support helps us continue these vital programs and expand our impact. 
            There are many ways you can contribute to our mission.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Volunteer</h3>
              <p className="text-sm opacity-90 mb-4">Join our team and contribute your time and skills to our projects.</p>
              <Link href="/volunteer" className="text-sm underline hover:no-underline">
                Learn More →
              </Link>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Donate</h3>
              <p className="text-sm opacity-90 mb-4">Your financial contribution directly supports our programs and beneficiaries.</p>
              <Link href="/donate" className="text-sm underline hover:no-underline">
                Donate Now →
              </Link>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Partner</h3>
              <p className="text-sm opacity-90 mb-4">Partner with us to create larger impact through collaboration.</p>
              <Link href="/contact" className="text-sm underline hover:no-underline">
                Contact Us →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 