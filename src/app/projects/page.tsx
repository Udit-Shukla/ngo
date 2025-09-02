"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const projects = [
    {
      id: 1,
      title: "Old Age Home",
      category: "Elderly Care",
      description: "Providing comprehensive care, support, and dignity to elderly individuals through healthcare and social services.",
      impact: "100+ elderly served",
      status: "Active",
      image: "/logo.webp",
      details: [
        "24/7 healthcare support",
        "Social activities and recreation",
        "Nutrition and dietary care",
        "Family counseling and support"
      ]
    },
    {
      id: 2,
      title: "Child Education",
      category: "Education",
      description: "Ensuring quality education for every child through comprehensive learning programs and educational support systems.",
      impact: "50+ children enrolled",
      status: "Active",
      image: "/logo.webp",
      details: [
        "Free school supplies and textbooks",
        "After-school tutoring programs",
        "Computer literacy classes",
        "Scholarship programs for higher education"
      ]
    },
    {
      id: 3,
      title: "Women Empowerment",
      category: "Social Development",
      description: "Empowering women through skill development, leadership training, and economic independence programs.",
      impact: "50+ women empowered",
      status: "Active",
      image: "/logo.webp",
      details: [
        "Vocational training programs",
        "Microfinance support",
        "Leadership development",
        "Legal awareness workshops"
      ]
    },
    {
      id: 4,
      title: "Basic Human Needs",
      category: "Social Welfare",
      description: "Addressing fundamental human needs including food, shelter, and essential services for vulnerable communities.",
      impact: "100+ families supported",
      status: "Active",
      image: "/logo.webp",
      details: [
        "Food distribution programs",
        "Shelter assistance",
        "Essential supplies provision",
        "Emergency relief support"
      ]
    },
    {
      id: 5,
      title: "Medical Health Care",
      category: "Healthcare",
      description: "Providing comprehensive healthcare services, medical camps, and health awareness programs for communities.",
      impact: "1000+ people treated",
      status: "Active",
      image: "/logo.webp",
      details: [
        "Free medical check-ups",
        "Vaccination drives",
        "Health awareness workshops",
        "Referral to specialized care"
      ]
    },
    {
      id: 6,
      title: "Environment Conservation",
      category: "Environment",
      description: "Promoting environmental awareness, tree plantation, and sustainable practices for a greener future.",
      impact: "100+ trees planted",
      status: "Active",
      image: "/logo.webp",
      details: [
        "Tree plantation drives",
        "Environmental education",
        "Waste management programs",
        "Community clean-up campaigns"
      ]
    },
    {
      id: 7,
      title: "Women's Rights",
      category: "Advocacy",
      description: "Advocating for women's rights, legal awareness, and gender equality through education and support programs.",
      impact: "50+ women supported",
      status: "Active",
      image: "/logo.webp",
      details: [
        "Legal awareness workshops",
        "Rights education programs",
        "Support groups and counseling",
        "Advocacy and policy work"
      ]
    },
    {
      id: 8,
      title: "Poverty Eradication",
      category: "Economic Development",
      description: "Working towards poverty eradication through skill development, economic opportunities, and sustainable livelihood programs.",
      impact: "50+ families uplifted",
      status: "Active",
      image: "/logo.webp",
      details: [
        "Skill development training",
        "Micro-enterprise support",
        "Financial literacy programs",
        "Sustainable livelihood creation"
      ]
    }
  ];

  const categories = ["All", "Elderly Care", "Education", "Social Development", "Social Welfare", "Healthcare", "Environment", "Advocacy", "Economic Development"];

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Elderly Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Children Educated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">People Treated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
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
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full border transition-colors ${
                  selectedCategory === category
                    ? "border-primary text-primary bg-primary/10"
                    : "border-border hover:border-primary hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
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
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <div className="text-muted-foreground text-lg mb-4">
                  No projects found in the selected category.
                </div>
                <button 
                  onClick={() => setSelectedCategory("All")}
                  className="text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  View all projects →
                </button>
              </div>
            )}
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