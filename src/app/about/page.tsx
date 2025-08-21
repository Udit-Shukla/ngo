import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="w-full py-20 px-4 text-center bg-card">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-primary tracking-tight">About Swadhyay Foundation</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn about our journey, mission, and the dedicated team working to promote moral values, self-development, and self-discipline in society.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The mission of Swadhyay Foundation is to promote moral values, self-development, and self-discipline in society. 
              Our priority is to inspire individuals towards self-awareness, social responsibility, and empowerment through Swadhyay (self-study).
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We aim to build a society where each individual not only introspects but also leads society in a positive direction 
              through their thoughts and actions, working in areas such as education, health, environment, and character building.
            </p>
            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">What We Do</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Old Age Home care and support services</li>
                <li>• Child education and development programs</li>
                <li>• Women empowerment and rights advocacy</li>
                <li>• Basic human needs and poverty eradication</li>
                <li>• Medical healthcare and awareness programs</li>
                <li>• Environment conservation initiatives</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">Our Vision</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Creating a self-sufficient, aware, and educated society where each person leverages their inner power 
              to drive sustainable growth and progress.
            </p>
            <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
              <h3 className="font-semibold text-lg mb-2 text-primary">Our Values</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium mb-1">Compassion</h4>
                  <p className="text-muted-foreground">Empathy and care in all our interactions</p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Transparency</h4>
                  <p className="text-muted-foreground">Open and honest communication</p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Sustainability</h4>
                  <p className="text-muted-foreground">Long-term impact over quick fixes</p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Community</h4>
                  <p className="text-muted-foreground">Working together for common good</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-8">Our Story</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Founded with the vision of promoting moral values and self-development, Swadhyay Foundation began with 
              the belief that true transformation comes from within. Our journey started with the philosophy of Swadhyay (self-study) 
              and has evolved into a comprehensive organization dedicated to societal upliftment.
            </p>
            <p>
              Over the years, we have touched the lives of thousands of individuals across communities, 
              implementing programs that focus on self-awareness, social responsibility, and character building. 
              Our approach emphasizes the importance of introspection and personal growth in creating lasting change.
            </p>
            <p>
              Today, we continue to expand our reach and impact, always guided by our core values of moral development, 
              self-discipline, and community service. Our journey is far from over, and we invite you to be part of this 
              transformative mission towards building a self-sufficient, aware, and educated society.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Our Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 - Sandhya Chauhan */}
            <div className="bg-card p-6 rounded-lg shadow-lg border border-border text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/sandhyachauhan.jpg"
                  alt="Sandhya Chauhan - Director"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg mb-1">Sandhya Chauhan</h3>
              <p className="text-sm text-primary font-medium mb-3">Director</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                An accomplished businesswoman and dedicated homemaker with 8 years of experience in social work. 
                Passionate about empowering people and making a positive impact in her community. Her family is her strength.
              </p>
            </div>

            {/* Team Member 2 - Swati Shukla */}
            <div className="bg-card p-6 rounded-lg shadow-lg border border-border text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/swatishukla.jpg"
                  alt="Swati Shukla - Managing Director"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg mb-1">Swati Shukla</h3>
              <p className="text-sm text-primary font-medium mb-3">Managing Director</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A skilled teacher with 7 years of experience, actively involved in social welfare programs. 
                Her philosophy: &ldquo;If you want to go far, you have to walk. If you want to make society better, you have to change yourself.&rdquo;
              </p>
            </div>

            {/* Team Member 3 - Anil Kumar Shukla */}
            <div className="bg-card p-6 rounded-lg shadow-lg border border-border text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/anijlkumar.jpg"
                  alt="Anil Kumar Shukla - Chief Adviser"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg mb-1">Mr. Anil Kumar Shukla</h3>
              <p className="text-sm text-primary font-medium mb-3">Chief Adviser</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Providing strategic guidance and leadership to our organization. 
                His expertise and experience help shape our mission and vision for community development.
              </p>
            </div>

            {/* Team Member 4 - Shubham */}
            <div className="bg-card p-6 rounded-lg shadow-lg border border-border text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/shubham.jpg"
                  alt="Shubham - Volunteer Coordinator"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg mb-1">Mr. Shubham</h3>
              <p className="text-sm text-primary font-medium mb-3">Volunteer Coordinator</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Managing and coordinating our volunteer programs and community outreach initiatives. 
                Ensuring smooth coordination between volunteers and community needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-lg mb-8 opacity-90">
            Ready to make a difference? There are many ways you can get involved and support our work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/volunteer"
              className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Volunteer With Us
            </Link>
            <Link
              href="/donate"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              Make a Donation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 