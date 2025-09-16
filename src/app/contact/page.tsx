import Link from "next/link";
import { MapPin, Mail, Phone, Clock, Instagram, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "Main Office",
      details: [
        "1611/26 Kashyap Nagar",
        "Kalyanpur, Kanpur Nagar",
        "Uttar Pradesh, India"
      ]
    },
    {
      icon: <Mail className="w-8 h-8 text-primary" />,
      title: "Email",
      details: [
        "swadhyafoundation@gmail.com"
      ]
    },
    {
      icon: <Phone className="w-8 h-8 text-primary" />,
      title: "Phone",
      details: [
        "+91 9794666284",
        "+91 9793957185",
      ]
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Office Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 4:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  const socialMedia = [
    { name: "Facebook", icon: <Facebook className="w-5 h-5" />, url: "#" },
    { name: "Twitter", icon: <Twitter className="w-5 h-5" />, url: "#" },
    { name: "Instagram", icon: <Instagram className="w-5 h-5" />, url: "https://instagram.com/swadhya_foundation312" },
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, url: "#" },
    { name: "YouTube", icon: <Youtube className="w-5 h-5" />, url: "https://youtube.com/@Swadhyafoundation" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="w-full py-20 px-4 text-center bg-card">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-primary tracking-tight">Contact Us</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with us to learn more about our work, volunteer opportunities, 
            or how you can support our mission. We&apos;d love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-sm border border-border text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {info.icon}
                </div>
                <h3 className="font-semibold text-lg mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">First Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 rounded border border-border bg-input text-foreground focus:ring-2 focus:ring-ring outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">Last Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 rounded border border-border bg-input text-foreground focus:ring-2 focus:ring-ring outline-none"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 rounded border border-border bg-input text-foreground focus:ring-2 focus:ring-ring outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 rounded border border-border bg-input text-foreground focus:ring-2 focus:ring-ring outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Subject *</label>
                  <select className="w-full px-4 py-2 rounded border border-border bg-input text-foreground focus:ring-2 focus:ring-ring outline-none">
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="donation">Donation Questions</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="media">Media Inquiries</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Message *</label>
                  <textarea
                    rows={6}
                    required
                    placeholder="Tell us how we can help you..."
                    className="w-full px-4 py-2 rounded border border-border bg-input text-foreground focus:ring-2 focus:ring-ring outline-none"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="mr-2"
                  />
                  <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                    Subscribe to our newsletter for updates and stories from the field
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-md font-medium hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">Visit Our Office</h3>
                <div className="bg-muted rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119.23!2d80.2807937!3d26.4789875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c381cf6fc4311%3A0x59fab8ca6c618cb8!2s1611%2C%20Kalyanpur%20-%20Vijay%20Nagar%20Rd%2C%20Rawatpur%20Gaon%2C%20Kanpur%2C%20Uttar%20Pradesh%20208019!5e0!3m2!1sen!2sin!4v1703157890123"
                    width="100%" 
                    height="256" 
                    style={{border:1}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Swadhyay Foundation Office Location"
                    className="w-full h-64"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-2 text-center">
                  1611, Kalyanpur - Vijay Nagar Rd, Rawatpur Gaon, Kanpur, UP 208019
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">Follow Us</h3>
                <div className="flex flex-wrap gap-3">
                  {socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-md hover:border-primary hover:text-primary transition-colors"
                    >
                      {social.icon}
                      <span className="text-sm">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <Link href="/volunteer" className="block text-muted-foreground hover:text-primary transition-colors">
                    → Volunteer Opportunities
                  </Link>
                  <Link href="/donate" className="block text-muted-foreground hover:text-primary transition-colors">
                    → Make a Donation
                  </Link>
                  <Link href="/projects" className="block text-muted-foreground hover:text-primary transition-colors">
                    → Our Projects
                  </Link>
                  <Link href="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                    → About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <h3 className="font-semibold text-lg mb-2 text-card-foreground">How can I volunteer with your organization?</h3>
              <p className="text-muted-foreground">
                You can apply to volunteer by filling out our volunteer application form on the volunteer page. 
                We have various opportunities available in education, healthcare, infrastructure, and more.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <h3 className="font-semibold text-lg mb-2 text-card-foreground">How do I make a donation?</h3>
              <p className="text-muted-foreground">
                You can donate through our secure online donation system on the donate page, or contact us 
                directly for other donation methods like bank transfers or checks.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <h3 className="font-semibold text-lg mb-2 text-card-foreground">Can I visit your projects in person?</h3>
              <p className="text-muted-foreground">
                Yes! We welcome visitors to our projects. Please contact us in advance to arrange a visit 
                and we&apos;ll be happy to show you around and explain our work.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <h3 className="font-semibold text-lg mb-2 text-card-foreground">How can my organization partner with you?</h3>
              <p className="text-muted-foreground">
                We&apos;re always open to partnerships! Whether it&apos;s corporate social responsibility initiatives, 
                collaborative projects, or resource sharing, please reach out to discuss potential collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Emergency Contact</h2>
          <p className="text-lg mb-6 opacity-90">
            For urgent matters or emergency situations, please contact us immediately.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Emergency Hotline</h3>
              <p className="text-2xl font-bold mb-2">+91 794666284</p>
              <p className="text-sm opacity-90">Available 24/7 for emergency situations</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">General Contact</h3>
              <p className="text-2xl font-bold mb-2">+91 9793957185</p>
              <p className="text-sm opacity-90">For general inquiries and support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 