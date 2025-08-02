"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Education", "Healthcare", "Water Projects", "Women Empowerment", "Environmental", "Events", "Volunteers"];

  const galleryItems = [
    {
      id: 1,
      title: "Children Learning in Our Education Center",
      category: "Education",
      description: "Students engaged in interactive learning activities",
      image: "/logo.webp", // Replace with actual image
      date: "2024"
    },
    {
      id: 2,
      title: "Healthcare Camp in Rural Village",
      category: "Healthcare",
      description: "Free medical check-ups for community members",
      image: "/logo.webp",
      date: "2024"
    },
    {
      id: 3,
      title: "Clean Water Project Completion",
      category: "Water Projects",
      description: "Celebrating the completion of water purification system",
      image: "/logo.webp",
      date: "2024"
    },
    {
      id: 4,
      title: "Women's Skill Development Workshop",
      category: "Women Empowerment",
      description: "Training session on entrepreneurship and financial literacy",
      image: "/logo.webp",
      date: "2024"
    },
    {
      id: 5,
      title: "Tree Plantation Drive",
      category: "Environmental",
      description: "Community members planting trees for environmental conservation",
      image: "/logo.webp",
      date: "2024"
    },
    {
      id: 6,
      title: "Annual Volunteer Recognition Event",
      category: "Events",
      description: "Celebrating our dedicated volunteers and their contributions",
      image: "/logo.webp",
      date: "2024"
    },
    {
      id: 7,
      title: "Volunteer Teaching Session",
      category: "Volunteers",
      description: "Our volunteers conducting educational sessions",
      image: "/logo.webp",
      date: "2024"
    },
    {
      id: 8,
      title: "Computer Literacy Class",
      category: "Education",
      description: "Students learning basic computer skills",
      image: "/logo.webp",
      date: "2024"
    },
    {
      id: 9,
      title: "Vaccination Drive",
      category: "Healthcare",
      description: "Immunization program for children and adults",
      image: "/logo.webp",
      date: "2024"
    },
    {
      id: 10,
      title: "Water Well Installation",
      category: "Water Projects",
      description: "Installing hand pumps in rural communities",
      image: "/logo.webp",
      date: "2024"
    },
    {
      id: 11,
      title: "Women's Leadership Training",
      category: "Women Empowerment",
      description: "Empowering women with leadership and communication skills",
      image: "/logo.webp",
      date: "2024"
    },
    {
      id: 12,
      title: "Community Clean-up Campaign",
      category: "Environmental",
      description: "Volunteers cleaning up local areas and promoting waste management",
      image: "/logo.webp",
      date: "2024"
    }
  ];

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="w-full py-20 px-4 text-center bg-card">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-primary tracking-tight">Photo Gallery</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our work through photos and stories. See the real impact we&apos;re making 
            in communities and the faces behind our mission.
          </p>
        </div>
      </section>

      {/* Gallery Stats */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Photos Captured</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Events Documented</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Lives Touched</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">8</div>
              <div className="text-muted-foreground">Project Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full border transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-card rounded-lg shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow group">
                <div className="relative h-64 bg-muted">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-background/90 text-foreground px-3 py-1 rounded-full text-sm">
                      {item.date}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-card-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {item.description}
                  </p>
                  <button className="text-primary hover:text-primary/80 text-sm font-medium transition-colors">
                    View Full Story →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Featured Story</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 bg-muted rounded-lg overflow-hidden">
              <Image
                src="/logo.webp"
                alt="Featured Story"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <div>
                <span className="text-primary font-medium">Education • 2024</span>
                <h3 className="text-2xl font-bold text-card-foreground mt-2">
                  Transforming Lives Through Education
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                This year, we reached a milestone of educating over 500 children in rural communities. 
                Our education centers provide not just basic literacy, but also computer skills, 
                life skills, and confidence building activities.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The transformation we&apos;ve seen in these children is remarkable. From shy, 
                hesitant learners to confident, curious minds ready to take on the world.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/projects"
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
                >
                  Learn More
                </Link>
                <Link
                  href="/donate"
                  className="border border-primary text-primary px-6 py-3 rounded-md font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Support This Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Be Part of Our Story</h2>
          <p className="text-lg mb-8 opacity-90">
            These photos tell the story of real change happening in communities. 
            You can be part of creating more moments like these.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/volunteer"
              className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Join Our Team
            </Link>
            <Link
              href="/donate"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              Support Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 