"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BarChart3, Camera, Users2 } from "lucide-react";

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");

  const categories = ["All", "Project Updates", "Impact Stories", "Volunteer News", "Community Events", "Announcements", "Success Stories"];
  const years = ["All", "2025", "2024", "2023", "2022"];

  const newsItems = [
    {
      id: 1,
      title: "Launch of 'Learn without Limits' Campaign for Children",
      category: "Announcements",
      date: "January 15, 2025",
      year: "2025",
      excerpt: "We're thrilled to announce the launch of our new 'Learn without Limits' campaign, empowering children with unlimited learning opportunities through innovative educational programs and holistic development.",
      content: "Swadhyay Foundation is excited to launch our groundbreaking 'Learn without Limits' campaign, a comprehensive educational initiative designed to empower children with unlimited learning opportunities. This innovative program focuses on digital literacy, creative arts, interactive learning sessions, and mentorship programs to ensure every child reaches their full potential. The campaign aims to break barriers in education and provide holistic development opportunities for children across our communities.",
      image: "/logo.webp",
      featured: true,
      tags: ["Education", "Children", "Campaign Launch", "Innovation"],
      readTime: "4 min read",
      author: "Education Team"
    },
    {
      id: 2,
      title: "New Education Center Opens in Rural Village",
      category: "Project Updates",
      date: "December 15, 2024",
      year: "2024",
      excerpt: "We're excited to announce the opening of our newest education center, providing quality education to 50+ children in rural communities.",
      content: "Our latest education center in the rural village of [Village Name] has officially opened its doors. This facility will serve over 50 children who previously had limited access to quality education. The center includes modern classrooms, computer labs, and dedicated spaces for extracurricular activities.",
      image: "/logo.webp",
      featured: false,
      tags: ["Education", "Rural Development", "Infrastructure"],
      readTime: "3 min read",
      author: "Swadhyay Foundation Team"
    },
    {
      id: 3,
      title: "Healthcare Camp Serves 200+ People",
      category: "Impact Stories",
      date: "December 10, 2024",
      year: "2024",
      excerpt: "Our monthly healthcare camp provided free medical check-ups, vaccinations, and health awareness to over 200 community members.",
      content: "The healthcare camp held in [Location] was a tremendous success, serving 200+ people including children, elderly, and adults. Our medical team provided free check-ups, administered vaccinations, and conducted health awareness sessions on nutrition and hygiene.",
      image: "/logo.webp",
      featured: false,
      tags: ["Healthcare", "Community Service", "Medical Camps"],
      readTime: "2 min read",
      author: "Healthcare Team"
    },
    {
      id: 4,
      title: "Women Empowerment Program Graduates 25 Women",
      category: "Success Stories",
      date: "December 5, 2024",
      year: "2024",
      excerpt: "Congratulations to 25 women who successfully completed our skill development and entrepreneurship training program.",
      content: "We're proud to announce that 25 women have successfully graduated from our comprehensive skill development and entrepreneurship training program. These women have learned valuable skills in tailoring, computer literacy, and financial management.",
      image: "/logo.webp",
      featured: false,
      tags: ["Women Empowerment", "Skill Development", "Entrepreneurship"],
      readTime: "4 min read",
      author: "Women Empowerment Team"
    },
    {
      id: 5,
      title: "Volunteer Recognition Event Highlights",
      category: "Volunteer News",
      date: "November 30, 2024",
      year: "2024",
      excerpt: "Our annual volunteer recognition event celebrated the dedication and contributions of over 100 volunteers who made our work possible.",
      content: "The annual volunteer recognition event was a heartwarming celebration of our dedicated volunteers. We honored over 100 volunteers who contributed their time, skills, and passion to our various programs throughout the year.",
      image: "/logo.webp",
      featured: false,
      tags: ["Volunteers", "Recognition", "Community"],
      readTime: "3 min read",
      author: "Volunteer Coordinator"
    },
    {
      id: 6,
      title: "Water Project Completion in Three Villages",
      category: "Project Updates",
      date: "November 25, 2024",
      year: "2024",
      excerpt: "Clean water projects completed in three villages, providing safe drinking water to 150+ families.",
      content: "We're thrilled to announce the successful completion of clean water projects in three villages. These projects include the installation of water purification systems and hand pumps, benefiting over 150 families with access to safe drinking water.",
      image: "/logo.webp",
      featured: false,
      tags: ["Water Projects", "Infrastructure", "Rural Development"],
      readTime: "3 min read",
      author: "Infrastructure Team"
    },
    {
      id: 7,
      title: "Environmental Conservation Drive Results",
      category: "Community Events",
      date: "November 20, 2024",
      year: "2024",
      excerpt: "Community tree plantation drive resulted in 1000+ new trees planted across five locations.",
      content: "Our environmental conservation drive brought together community members, volunteers, and local organizations to plant over 1000 trees across five different locations. This initiative aims to combat climate change and promote environmental awareness.",
      image: "/logo.webp",
      featured: false,
      tags: ["Environment", "Tree Plantation", "Community Engagement"],
      readTime: "2 min read",
      author: "Environmental Team"
    },
    {
      id: 8,
      title: "New Partnership with Local Hospital",
      category: "Announcements",
      date: "November 15, 2024",
      year: "2024",
      excerpt: "We're excited to announce a new partnership with [Hospital Name] to expand our healthcare services.",
      content: "Swadhyay Foundation is proud to announce a new partnership with [Hospital Name], a leading healthcare institution. This collaboration will enable us to expand our healthcare services and provide better medical care to communities.",
      image: "/logo.webp",
      featured: false,
      tags: ["Partnerships", "Healthcare", "Collaboration"],
      readTime: "2 min read",
      author: "Partnership Team"
    },
    {
      id: 9,
      title: "Annual Impact Report Released",
      category: "Announcements",
      date: "November 10, 2024",
      year: "2024",
      excerpt: "Our comprehensive annual impact report is now available, showcasing the real difference we've made in communities.",
      content: "We're pleased to release our comprehensive annual impact report for 2024. This report details our achievements, challenges, and the real impact we've made in communities through our various programs and initiatives.",
      image: "/logo.webp",
      featured: false,
      tags: ["Impact Report", "Transparency", "Accountability"],
      readTime: "5 min read",
      author: "Communications Team"
    }
  ];

  // Filter news items based on selected category and year
  const filteredNews = newsItems.filter(item => {
    const categoryMatch = selectedCategory === "All" || item.category === selectedCategory;
    const yearMatch = selectedYear === "All" || item.year === selectedYear;
    return categoryMatch && yearMatch;
  });

  // Get featured news
  const featuredNews = newsItems.filter(item => item.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="w-full py-20 px-4 text-center bg-card">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-primary tracking-tight">News & Updates</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with our latest work, project progress, and the impact we&apos;re creating in communities. 
            Get real-time updates on our programs and initiatives.
          </p>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews.length > 0 && (
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">Featured Updates</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredNews.map((item) => (
                <div key={item.id} className="bg-card rounded-lg shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-64 bg-muted">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-background/90 text-foreground px-3 py-1 rounded-full text-sm">
                        {item.readTime}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm text-primary font-medium">{item.category}</span>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{item.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-card-foreground">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag, index) => (
                        <span key={index} className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">By {item.author}</span>
                      <button className="text-primary hover:text-primary/80 text-sm font-medium transition-colors">
                        Read Full Story →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filters */}
      <section className="py-8 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-muted-foreground self-center">Category:</span>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full border transition-colors text-sm ${
                    selectedCategory === category
                      ? "border-primary text-primary bg-primary/10"
                      : "border-border hover:border-primary hover:text-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-muted-foreground self-center">Year:</span>
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-4 py-2 rounded-full border transition-colors text-sm ${
                    selectedYear === year
                      ? "border-primary text-primary bg-primary/10"
                      : "border-border hover:border-primary hover:text-primary"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.length > 0 ? (
              filteredNews.map((item) => (
                <div key={item.id} className="bg-card rounded-lg shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-48 bg-muted">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {item.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-background/90 text-foreground px-3 py-1 rounded-full text-sm">
                        {item.readTime}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm text-muted-foreground">{item.date}</span>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{item.year}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-card-foreground line-clamp-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{item.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">By {item.author}</span>
                      <button className="text-primary hover:text-primary/80 text-sm font-medium transition-colors">
                        Read More →
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <div className="text-muted-foreground text-lg mb-4">
                  No news found for the selected filters.
                </div>
                <button 
                  onClick={() => {
                    setSelectedCategory("All");
                    setSelectedYear("All");
                  }}
                  className="text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  View all news →
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-8 opacity-90">
            Subscribe to our newsletter to receive the latest updates, project progress, and impact stories directly in your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-md border border-white/30 bg-white/10 text-primary-foreground placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50"
              />
              <button className="bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm opacity-75 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Quick Access</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Impact Reports</h3>
              <p className="text-muted-foreground mb-4">Access detailed reports on our programs and their outcomes.</p>
              <Link href="/projects" className="text-primary hover:text-primary/80 font-medium transition-colors">
                View Reports →
              </Link>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Photo Gallery</h3>
              <p className="text-muted-foreground mb-4">See visual stories of our work and community impact.</p>
              <Link href="/gallery" className="text-primary hover:text-primary/80 font-medium transition-colors">
                Browse Gallery →
              </Link>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Get Involved</h3>
              <p className="text-muted-foreground mb-4">Join our mission through volunteering or donations.</p>
              <Link href="/volunteer" className="text-primary hover:text-primary/80 font-medium transition-colors">
                Get Started →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
