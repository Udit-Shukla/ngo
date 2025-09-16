"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Camera, Users, Heart, Shield, Calendar, UserCheck } from "lucide-react";

type GalleryItem = {
  id: number;
  title: string;
  category: string;
  image: string;
  date: string;
};

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = [
    { name: "All", icon: <Camera className="w-4 h-4" /> },
    { name: "Education", icon: <Users className="w-4 h-4" /> },
    { name: "Healthcare", icon: <Heart className="w-4 h-4" /> },
    { name: "Women Empowerment", icon: <Shield className="w-4 h-4" /> },
    { name: "Events", icon: <Calendar className="w-4 h-4" /> },
    { name: "Volunteers", icon: <UserCheck className="w-4 h-4" /> }
  ];

  // Gallery items with manual categorization
  // You can easily update the category for each photo by looking at the image
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Swadhyay Foundation Activity 1",
      category: "Events", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.10.jpeg",
      date: "2025"
    },
    {
      id: 2,
      title: "Swadhyay Foundation Activity 2", 
      category: "Events", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.13 (1).jpeg",
      date: "2025"
    },
    {
      id: 3,
      title: "Swadhyay Foundation Activity 3",
      category: "Events", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.13.jpeg",
      date: "2025"
    },
    {
      id: 4,
      title: "Swadhyay Foundation Activity 4",
      category: "Events", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.14 (1).jpeg",
      date: "2025"
    },
    {
      id: 5,
      title: "Swadhyay Foundation Activity 5",
      category: "Events", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.14.jpeg",
      date: "2025"
    },
    {
      id: 6,
      title: "Swadhyay Foundation Activity 6",
      category: "Volunteers", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.15 (1).jpeg",
      date: "2025"
    },
    {
      id: 7,
      title: "Swadhyay Foundation Activity 7",
      category: "Volunteers", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.15 (2).jpeg",
      date: "2025"
    },
    {
      id: 8,
      title: "Swadhyay Foundation Activity 8",
      category: "Volunteers", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.15.jpeg",
      date: "2025"
    },
    {
      id: 9,
      title: "Swadhyay Foundation Activity 9",
      category: "Education", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.16 (1).jpeg",
      date: "2025"
    },
    {
      id: 10,
      title: "Swadhyay Foundation Activity 10",
      category: "Volunteer", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.16.jpeg",
      date: "2025"
    },
    {
      id: 11,
      title: "Swadhyay Foundation Activity 11",
      category: "Education", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.17 (1).jpeg",
      date: "2025"
    },
    {
      id: 12,
      title: "Swadhyay Foundation Activity 12",
      category: "Education", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.17.jpeg",
      date: "2025"
    },
    {
      id: 13,
      title: "Swadhyay Foundation Activity 13",
      category: "Women Empowerment", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.18 (1).jpeg",
      date: "2025"
    },
    {
      id: 14,
      title: "Swadhyay Foundation Activity 14",
      category: "Women Empowerment", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.18.jpeg",
      date: "2025"
    },
    {
      id: 15,
      title: "Swadhyay Foundation Activity 15",
      category: "Women Empowerment", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.19 (1).jpeg",
      date: "2025"
    },
    {
      id: 16,
      title: "Swadhyay Foundation Activity 16",
      category: "Education", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.19.jpeg",
      date: "2025"
    },
    {
      id: 17,
      title: "Swadhyay Foundation Activity 17",
      category: "Education", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.20 (1).jpeg",
      date: "2025"
    },
    {
      id: 18,
      title: "Swadhyay Foundation Activity 18",
      category: "Education", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.20.jpeg",
      date: "2025"
    },
    {
      id: 19,
      title: "Swadhyay Foundation Activity 19",
      category: "Education", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.21.jpeg",
      date: "2025"
    },
    {
      id: 20,
      title: "Swadhyay Foundation Activity 20",
      category: "Education", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.22.jpeg",
      date: "2025"
    },
    {
      id: 21,
      title: "Swadhyay Foundation Activity 21",
      category: "Education", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.23.jpeg",
      date: "2025"
    },
    {
      id: 22,
      title: "Swadhyay Foundation Activity 22",
      category: "Healthcare", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.24.jpeg",
      date: "2025"
    },
    {
      id: 23,
      title: "Swadhyay Foundation Activity 23",
      category: "Healthcare", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.25 (1).jpeg",
      date: "2025"
    },
    {
      id: 24,
      title: "Swadhyay Foundation Activity 24",
      category: "Healthcare", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.25.jpeg",
      date: "2025"
    },
    {
      id: 25,
      title: "Swadhyay Foundation Activity 25",
      category: "Healthcare", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.26.jpeg",
      date: "2025"
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
            Explore our work through photos. See the real impact we&apos;re making 
            in communities and the faces behind our mission.
          </p>
        </div>
      </section>

      {/* Gallery Stats */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{galleryItems.length}</div>
              <div className="text-muted-foreground">Photos Captured</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Events Documented</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Lives Touched</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">7</div>
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
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 rounded-full border transition-colors flex items-center gap-2 ${
                  selectedCategory === category.name
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="relative aspect-square bg-muted rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute top-2 left-2">
                  <span className="bg-primary/90 text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                    {item.category}
                  </span>
                </div>
                <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-sm font-medium truncate">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-xs">
                    {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Photos */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Featured Photos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.slice(0, 6).map((item) => (
              <div 
                key={item.id}
                className="relative aspect-video bg-muted rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-lg font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Be Part of Our Journey</h2>
          <p className="text-lg mb-8 opacity-90">
            These photos capture the real impact we&apos;re making in communities. 
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

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              ✕
            </button>
            <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="bg-white p-6 rounded-b-lg">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {selectedImage.category}
                </span>
                <span className="text-muted-foreground text-sm">
                  {selectedImage.date}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 