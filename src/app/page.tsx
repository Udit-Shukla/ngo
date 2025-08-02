import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-24 px-4 text-center bg-gradient-to-b from-card to-background" id="hero">
        <div className="mb-8">
          <Image
            src="/image.png"
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
          We are a dedicated non-profit organization committed to creating lasting positive change 
          through education, healthcare, and sustainable development initiatives that empower 
          communities to build their own future.
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
                We believe that every individual deserves access to basic human rights and opportunities. 
                Our mission is to empower communities through sustainable development, education, and 
                healthcare initiatives that create lasting positive change.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                By addressing the root causes of social challenges and building resilient communities, 
                we work towards a world where every person can thrive and reach their full potential.
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
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground font-medium">Children Educated</div>
              <div className="text-xs text-muted-foreground mt-1">Across 15 communities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground font-medium">Villages Served</div>
              <div className="text-xs text-muted-foreground mt-1">With clean water access</div>
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
            <h2 className="text-3xl font-bold text-primary mb-4">Our Core Programs</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We focus on four key areas that address the most critical needs of communities 
              and create sustainable, long-term impact.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border text-center hover:shadow-md transition-shadow group">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-colors">
                <span className="text-primary text-2xl">📚</span>
              </div>
              <h3 className="font-semibold text-xl mb-3">Education for All</h3>
              <p className="text-muted-foreground mb-6">
                Providing free educational resources, computer literacy, and after-school programs 
                to ensure every child has access to quality education.
              </p>
              <Link href="/projects" className="text-primary hover:text-primary/80 font-medium transition-colors">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border text-center hover:shadow-md transition-shadow group">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-colors">
                <span className="text-primary text-2xl">🏥</span>
              </div>
              <h3 className="font-semibold text-xl mb-3">Healthcare Access</h3>
              <p className="text-muted-foreground mb-6">
                Organizing free medical camps, vaccination drives, and health awareness programs 
                to improve community health outcomes.
              </p>
              <Link href="/projects" className="text-primary hover:text-primary/80 font-medium transition-colors">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border text-center hover:shadow-md transition-shadow group">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-colors">
                <span className="text-primary text-2xl">💧</span>
              </div>
              <h3 className="font-semibold text-xl mb-3">Clean Water Initiative</h3>
              <p className="text-muted-foreground mb-6">
                Building wells, installing water purification systems, and providing 
                sustainable access to clean drinking water in rural communities.
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
                Supporting women through skill development, entrepreneurship training, 
                and leadership programs to create economic independence.
              </p>
              <Link href="/projects" className="text-primary hover:text-primary/80 font-medium transition-colors">
                Learn More →
              </Link>
            </div>
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
