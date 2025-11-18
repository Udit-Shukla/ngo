"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Camera, Users, Heart, Shield, Calendar, UserCheck, Play } from "lucide-react";

type GalleryItem = {
  id: number;
  title: string;
  category: string;
  image: string;
  date: string;
  mediaType: "image" | "video";
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
      category: "Events",
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.10.jpeg",
      date: "2025",
      mediaType: "image"
    },
    {
      id: 2,
      title: "Swadhyay Foundation Activity 2", 
      category: "Events", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.13 (1).jpeg",
      date: "2025",
      mediaType: "image"
    },
    {
      id: 3,
      title: "Swadhyay Foundation Activity 3",
      category: "Events", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.13.jpeg",
      date: "2025",
      mediaType: "image"
    },
    {
      id: 4,
      title: "Swadhyay Foundation Activity 4",
      category: "Events", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.14 (1).jpeg",
      date: "2025",
      mediaType: "image"
    },
    {
      id: 5,
      title: "Swadhyay Foundation Activity 5",
      category: "Events", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.14.jpeg",
      date: "2025",
      mediaType: "image"
    },
    {
      id: 6,
      title: "Swadhyay Foundation Activity 6",
      category: "Volunteers", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.15 (1).jpeg",
      date: "2025",
      mediaType: "image"
    },
    {
      id: 7,
      title: "Swadhyay Foundation Activity 7",
      category: "Volunteers", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.15 (2).jpeg",
      date: "2025",
      mediaType: "image"
    },
    {
      id: 8,
      title: "Swadhyay Foundation Activity 8",
      category: "Volunteers", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.15.jpeg",
      date: "2025",
      mediaType: "image"
    },
    {
      id: 9,
      title: "Swadhyay Foundation Activity 9",
      category: "Education", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.16 (1).jpeg",
      date: "2025",
      mediaType: "image"
    },
    {
      id: 10,
      title: "Swadhyay Foundation Activity 10",
      category: "Volunteers", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.16.jpeg",
      date: "2025",
      mediaType: "image"
    },
    {
      id: 11,
      title: "Swadhyay Foundation Activity 11",
      category: "Education", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.17 (1).jpeg",
      date: "2025",
      mediaType: "image"
    },
    {
      id: 12,
      title: "Swadhyay Foundation Activity 12",
      category: "Education", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.17.jpeg",
      date: "2025",
      mediaType: "image"
    },
    {
      id: 13,
      title: "Swadhyay Foundation Activity 13",
      category: "Women Empowerment", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.18 (1).jpeg",
      date: "2025",
      mediaType: "image"
    },
    {
      id: 14,
      title: "Swadhyay Foundation Activity 14",
      category: "Women Empowerment", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.18.jpeg",
      date: "2025",
      mediaType: "image"
    },
    {
      id: 15,
      title: "Swadhyay Foundation Activity 15",
      category: "Women Empowerment", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.19 (1).jpeg",
      date: "2025",
      mediaType: "image"
    },
    {
      id: 16,
      title: "Swadhyay Foundation Activity 16",
      category: "Education", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.19.jpeg",
      date: "2025",
      mediaType: "image"
    },
    {
      id: 17,
      title: "Swadhyay Foundation Activity 17",
      category: "Education", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.20 (1).jpeg",
      date: "2025",
      mediaType: "image"
    },
    {
      id: 18,
      title: "Swadhyay Foundation Activity 18",
      category: "Education", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.20.jpeg",
      date: "2025",
      mediaType: "image"
    },
    {
      id: 19,
      title: "Swadhyay Foundation Activity 19",
      category: "Education", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.21.jpeg",
      date: "2025",
      mediaType: "image"
    },
    {
      id: 20,
      title: "Swadhyay Foundation Activity 20",
      category: "Education", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.22.jpeg",
      date: "2025",
      mediaType: "image"
    },
    {
      id: 21,
      title: "Swadhyay Foundation Activity 21",
      category: "Education", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.23.jpeg",
      date: "2025",
      mediaType: "image"
    },
    {
      id: 22,
      title: "Swadhyay Foundation Activity 22",
      category: "Healthcare", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.24.jpeg",
      date: "2025",
      mediaType: "image"
    },
    {
      id: 23,
      title: "Swadhyay Foundation Activity 23",
      category: "Healthcare", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.25 (1).jpeg",
      date: "2025",
      mediaType: "image"
    },
    {
      id: 24,
      title: "Swadhyay Foundation Activity 24",
      category: "Healthcare", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.25.jpeg",
      date: "2025",
      mediaType: "image"
    },
    {
      id: 25,
      title: "Swadhyay Foundation Activity 25",
      category: "Healthcare", // Update this based on what you see in the image
      image: "/gallery/WhatsApp Image 2025-07-11 at 11.37.26.jpeg",
      date: "2025",
      mediaType: "image"
    },
    // New images and videos
    {
      id: 26,
      title: "Swadhyay Foundation Activity 26",
      category: "Events",
      image: "/gallery/280adf87-93e3-4d72-b854-0d1a0bef01c8.JPG",
      date: "2025",
      mediaType: "image"
    },
    {
      id: 27,
      title: "Swadhyay Foundation Activity 27",
      category: "Events",
      image: "/gallery/2f774311-e54b-43f8-80b9-6aa5005a8156.JPG",
      date: "2025",
      mediaType: "image"
    },
    {
      id: 28,
      title: "Swadhyay Foundation Activity 28",
      category: "Events",
      image: "/gallery/374b5a17-4139-4cc3-8b99-b6b77ee50503.JPG",
      date: "2025",
      mediaType: "image"
    },
    {
      id: 29,
      title: "Swadhyay Foundation Activity 29",
      category: "Events",
      image: "/gallery/39c1d12b-5f94-4ee8-8b1b-dac5f30d8b43.JPG",
      date: "2025",
      mediaType: "image"
    },
    {
      id: 30,
      title: "Swadhyay Foundation Activity 30",
      category: "Events",
      image: "/gallery/3a1f0688-f249-42dc-8045-bd8426bc2e8c.JPG",
      date: "2025",
      mediaType: "image"
    },
    {
      id: 31,
      title: "Swadhyay Foundation Activity 31",
      category: "Events",
      image: "/gallery/456101c7-c2f3-4dd7-b609-f403daeebc02.JPG",
      date: "2025",
      mediaType: "image"
    },
    {
      id: 32,
      title: "Swadhyay Foundation Activity 32",
      category: "Events",
      image: "/gallery/58df00b7-c27f-4622-82a6-0cdc24069aee.JPG",
      date: "2025",
      mediaType: "image"
    },
    {
      id: 33,
      title: "Swadhyay Foundation Activity 33",
      category: "Events",
      image: "/gallery/659f7937-98e0-411e-b258-5ace54d66ebb.JPG",
      date: "2025",
      mediaType: "image"
    },
    {
      id: 34,
      title: "Swadhyay Foundation Activity 34",
      category: "Events",
      image: "/gallery/66175709-638b-4ddc-b8a3-ca2be6e67a1c.JPG",
      date: "2025",
      mediaType: "image"
    },
    {
      id: 35,
      title: "Swadhyay Foundation Video 1",
      category: "Events",
      image: "/gallery/7b0bbe1a-b99e-4a1a-a4de-a10288758ef0.MP4",
      date: "2025",
      mediaType: "video"
    },
    {
      id: 36,
      title: "Swadhyay Foundation Activity 36",
      category: "Events",
      image: "/gallery/8d7a85c7-5be4-459c-814f-77dde435ad1b.JPG",
      date: "2025",
      mediaType: "image"
    },
    {
      id: 37,
      title: "Swadhyay Foundation Activity 37",
      category: "Events",
      image: "/gallery/a8e48c6f-7a8b-4534-972d-86ceb83aac3a.JPG",
      date: "2025",
      mediaType: "image"
    },
    {
      id: 38,
      title: "Swadhyay Foundation Activity 38",
      category: "Events",
      image: "/gallery/b51cf8dc-e549-473d-a376-8f7d70ddabba.JPG",
      date: "2025",
      mediaType: "image"
    },
    {
      id: 39,
      title: "Swadhyay Foundation Activity 39",
      category: "Events",
      image: "/gallery/baf1e051-5cdd-421a-94da-fcbb2489775a.JPG",
      date: "2025",
      mediaType: "image"
    },
    {
      id: 40,
      title: "Swadhyay Foundation Activity 40",
      category: "Events",
      image: "/gallery/c0b5a919-308b-4f18-bac0-35c0826f9b46.JPG",
      date: "2025",
      mediaType: "image"
    },
    {
      id: 41,
      title: "Swadhyay Foundation Video 2",
      category: "Events",
      image: "/gallery/d48f2a26-bb01-4d8f-9443-a8570388b976.MP4",
      date: "2025",
      mediaType: "video"
    },
    {
      id: 42,
      title: "Swadhyay Foundation Activity 42",
      category: "Events",
      image: "/gallery/e7f38315-66d2-4ab9-a53a-af3f5321b0f9.JPG",
      date: "2025",
      mediaType: "image"
    },
    {
      id: 43,
      title: "Swadhyay Foundation Activity 43",
      category: "Events",
      image: "/gallery/eca2986d-4754-4100-be82-0035b8f892f8.JPG",
      date: "2025",
      mediaType: "image"
    },
    {
      id: 44,
      title: "Swadhyay Foundation Activity 44",
      category: "Events",
      image: "/gallery/fcb3e690-4d2e-46d1-b809-cead72a4a45b.JPG",
      date: "2025",
      mediaType: "image"
    },
  ];

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="w-full py-20 px-4 text-center bg-card">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-primary tracking-tight">Photo & Video Gallery</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our work through photos and videos. See the real impact we&apos;re making 
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
              <div className="text-4xl font-bold text-primary mb-2">{galleryItems.length}+</div>
              <div className="text-muted-foreground">Events Documented</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Lives Touched</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5</div>
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
                {item.mediaType === "video" ? (
                  <video
                    src={item.image}
                    className="w-full h-full object-cover"
                    muted
                    playsInline
                  />
                ) : (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                {item.mediaType === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary/80 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                    </div>
                  </div>
                )}
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
                {item.mediaType === "video" ? (
                  <video
                    src={item.image}
                    className="w-full h-full object-cover"
                    muted
                    playsInline
                  />
                ) : (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                {item.mediaType === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-primary/80 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Play className="w-10 h-10 text-white ml-1" fill="white" />
                    </div>
                  </div>
                )}
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

      {/* Image/Video Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              ✕
            </button>
            <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
              {selectedImage.mediaType === "video" ? (
                <video
                  src={selectedImage.image}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              )}
            </div>
            <div className="bg-white p-6 rounded-b-lg">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {selectedImage.category}
                </span>
                <span className="text-muted-foreground text-sm">
                  {selectedImage.date}
                </span>
                {selectedImage.mediaType === "video" && (
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Video
                  </span>
                )}
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