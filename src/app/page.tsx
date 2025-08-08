import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-16 px-4 text-center bg-gradient-to-b from-card to-background" id="hero">
        <div className="mb-8">
          <Image
            src="/logo.webp"
            alt="NGO Logo and Tagline"
            width={400}
            height={200}
            className="mx-auto"
            priority
          />
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-primary tracking-tight max-w-4xl mx-auto">
          Empowering Communities, <br />
          <span className="text-foreground">Transforming Lives</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg sm:text-xl mb-10 text-muted-foreground leading-relaxed">
          Swadhyay Foundation is dedicated to promoting moral values, self-development, and self-discipline in society. 
          We inspire individuals towards self-awareness, social responsibility, and empowerment through Swadhyay (self-study), 
          creating lasting positive change in communities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/donate"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-primary/90 transition-all transform hover:scale-105"
          >
            Support Our Mission
          </Link>
          <Link
            href="/projects"
            className="inline-block border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all transform hover:scale-105"
          >
            Explore Our Work
          </Link>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The mission of Swadhyay Foundation is to promote moral values, self-development, and self-discipline in society. 
                Our priority is to inspire individuals towards self-awareness, social responsibility, and empowerment through Swadhyay (self-study).
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We aim to build a society where each individual not only introspects but also leads society in a positive direction 
                through their thoughts and actions, working in areas such as education, health, environment, and character building.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/about"
                  className="text-primary hover:text-primary/80 font-semibold transition-colors"
                >
                  Learn More About Us →
                </Link>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Creating a self-sufficient, aware, and educated society where each person leverages their inner power 
                to drive sustainable growth and progress.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                      <span className="text-primary text-xl">📚</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Education</h3>
                    <p className="text-sm text-muted-foreground">Providing quality education and learning opportunities</p>
                  </div>
                  <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                      <span className="text-primary text-xl">🏥</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Healthcare</h3>
                    <p className="text-sm text-muted-foreground">Ensuring access to basic healthcare services</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                      <span className="text-primary text-xl">💧</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Clean Water</h3>
                    <p className="text-sm text-muted-foreground">Building sustainable water infrastructure</p>
                  </div>
                  <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                      <span className="text-primary text-xl">👩‍💼</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Empowerment</h3>
                    <p className="text-sm text-muted-foreground">Supporting women and community leadership</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-4">Our Impact</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Through dedicated efforts and community partnerships, we&apos;ve achieved measurable results 
            that demonstrate our commitment to creating lasting positive change.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground font-medium">Elderly Served</div>
              <div className="text-xs text-muted-foreground mt-1">Through old age home care</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground font-medium">Children Educated</div>
              <div className="text-xs text-muted-foreground mt-1">Across 15 communities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2000+</div>
              <div className="text-muted-foreground font-medium">People Treated</div>
              <div className="text-xs text-muted-foreground mt-1">Through healthcare camps</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">300+</div>
              <div className="text-muted-foreground font-medium">Women Empowered</div>
              <div className="text-xs text-muted-foreground mt-1">With new skills & opportunities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Programs</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We focus on eight key areas that address the most critical needs of communities 
              and create sustainable, long-term impact through self-development and empowerment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border text-center hover:shadow-md transition-shadow group">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-colors">
                <span className="text-primary text-2xl">👴</span>
              </div>
              <h3 className="font-semibold text-xl mb-3">Old Age Home</h3>
              <p className="text-muted-foreground mb-6">
                Providing care, support, and dignity to elderly individuals through 
                comprehensive healthcare and social services.
              </p>
              <Link href="/projects" className="text-primary hover:text-primary/80 font-medium transition-colors">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border text-center hover:shadow-md transition-shadow group">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-colors">
                <span className="text-primary text-2xl">📚</span>
              </div>
              <h3 className="font-semibold text-xl mb-3">Child Education</h3>
              <p className="text-muted-foreground mb-6">
                Ensuring quality education for every child through comprehensive 
                learning programs and educational support systems.
              </p>
              <Link href="/projects" className="text-primary hover:text-primary/80 font-medium transition-colors">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border text-center hover:shadow-md transition-shadow group">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-colors">
                <span className="text-primary text-2xl">👩‍💼</span>
              </div>
              <h3 className="font-semibold text-xl mb-3">Women Empowerment</h3>
              <p className="text-muted-foreground mb-6">
                Empowering women through skill development, leadership training, 
                and economic independence programs.
              </p>
              <Link href="/projects" className="text-primary hover:text-primary/80 font-medium transition-colors">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border text-center hover:shadow-md transition-shadow group">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-colors">
                <span className="text-primary text-2xl">🏥</span>
              </div>
              <h3 className="font-semibold text-xl mb-3">Medical Health Care</h3>
              <p className="text-muted-foreground mb-6">
                Providing comprehensive healthcare services, medical camps, 
                and health awareness programs for communities.
              </p>
              <Link href="/projects" className="text-primary hover:text-primary/80 font-medium transition-colors">
                Learn More →
              </Link>
            </div>
          </div>
          
          {/* View All Programs Button */}
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-primary/90 transition-all transform hover:scale-105"
            >
              View All Programs
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us in Making a Difference</h2>
          <p className="text-lg mb-10 opacity-90 max-w-3xl mx-auto">
            Every contribution, whether through volunteering, donating, or spreading awareness, 
            helps us create lasting positive change in communities that need it most.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/volunteer" className="bg-white/10 p-8 rounded-lg hover:bg-white/20 transition-colors group">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Volunteer</h3>
              <p className="text-sm opacity-90 mb-4">Join our team and contribute your time and skills to our projects.</p>
              <span className="text-sm underline">Get Started →</span>
            </Link>
            
            <Link href="/donate" className="bg-white/10 p-8 rounded-lg hover:bg-white/20 transition-colors group">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                <span className="text-white text-2xl">💝</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Donate</h3>
              <p className="text-sm opacity-90 mb-4">Your financial contribution directly supports our programs and beneficiaries.</p>
              <span className="text-sm underline">Donate Now →</span>
            </Link>
            
            <Link href="/gallery" className="bg-white/10 p-8 rounded-lg hover:bg-white/20 transition-colors group">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                <span className="text-white text-2xl">📸</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">See Our Impact</h3>
              <p className="text-sm opacity-90 mb-4">Explore our photo gallery to see the real impact of our work.</p>
              <span className="text-sm underline">View Gallery →</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
