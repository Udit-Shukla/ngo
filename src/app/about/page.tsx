import Link from "next/link";

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
            {/* Team Member 1 */}
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border text-center">
              <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-muted-foreground">👤</span>
              </div>
              <h3 className="font-semibold text-lg mb-1">Executive Director</h3>
              <p className="text-sm text-muted-foreground mb-3">[Name]</p>
              <p className="text-sm text-muted-foreground">
                Leading our organization with over [X] years of experience in community development and social work.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border text-center">
              <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-muted-foreground">👤</span>
              </div>
              <h3 className="font-semibold text-lg mb-1">Program Director</h3>
              <p className="text-sm text-muted-foreground mb-3">[Name]</p>
              <p className="text-sm text-muted-foreground">
                Overseeing our educational and healthcare initiatives with expertise in program management.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border text-center">
              <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-muted-foreground">👤</span>
              </div>
              <h3 className="font-semibold text-lg mb-1">Community Outreach</h3>
              <p className="text-sm text-muted-foreground mb-3">[Name]</p>
              <p className="text-sm text-muted-foreground">
                Building partnerships and connecting with communities to understand their needs and priorities.
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