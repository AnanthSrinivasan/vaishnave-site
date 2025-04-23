
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star } from "lucide-react";

export default function ConsultantSite() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center p-6 shadow-md sticky top-0 bg-white z-10">
        <div className="text-xl font-bold">Vaishnave</div>
        <div className="space-x-4">
          <a href="#services" className="text-gray-700 hover:text-black">Services</a>
          <a href="#about" className="text-gray-700 hover:text-black">About</a>
          <a href="#testimonials" className="text-gray-700 hover:text-black">Testimonials</a>
          <a href="#contact" className="text-gray-700 hover:text-black">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-gradient-to-r from-indigo-100 to-purple-100">
        <h1 className="text-5xl font-bold mb-4">Vaishnave Anantha Srinivasan</h1>
        <p className="text-lg text-gray-600 mb-6">Amazon Marketplace Expert | Data-Driven Growth Strategist</p>
        <a
          href="https://www.linkedin.com/in/vaishnave-srinivasan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="text-white text-md">Book via LinkedIn</Button>
        </a>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-10">What I Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "Amazon Seller/Vendor Central Management",
            "SEO & ASIN Optimization with Helium 10",
            "FBA Logistics & Inventory Forecasting",
            "Sales Insights & Forecasting (Python, RStudio)",
            "A+ Content, Amazon Stores & Brand Integrity",
            "Advertising ROI & Media Optimization",
            "Tableau Dashboards for Business Decisions",
            "EU Market Launch & Unauthorized Seller Control"
          ].map((item, idx) => (
            <Card key={idx} className="shadow-sm">
              <CardContent className="flex items-start space-x-3 p-5">
                <CheckCircle className="text-purple-600 mt-1" />
                <p>{item}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700 text-md">
            I’m an Amazon Marketplace Manager with 7+ years of experience across brands and platforms.
            At Advantage Solutions, I led strategic sales efforts that drove a 30% increase, optimized ad returns by 112%,
            and improved SEO to boost traffic by 63%. With Gabriel Cosmetics, I managed full-lifecycle eCommerce operations,
            launched A+ content, and increased store traffic by 80%.
            <br /><br />
            Certified in Amazon Ads and Google Data Analytics, I blend technical skills in Python, RStudio, and Tableau
            with hands-on leadership in FBA, supply chain, and brand protection. My mission is to unlock profitable growth
            with clarity, strategy, and operational excellence.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10">What Clients Say</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="shadow-md">
              <CardContent className="p-6 text-left">
                <div className="flex items-center mb-3 space-x-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-500" />)}
                </div>
                <p className="italic">“Vaishnave transformed our Amazon storefront and doubled our sales in under 3 months. Her strategies are precise and effective.”</p>
                <p className="mt-4 font-semibold">— Brand Manager, Natural Skincare Co.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6 text-left">
                <div className="flex items-center mb-3 space-x-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-500" />)}
                </div>
                <p className="italic">“Her data analysis helped us optimize ad spend and improve ROI significantly. Highly professional and insightful.”</p>
                <p className="mt-4 font-semibold">— Director of E-Commerce, Fashion Retailer</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-4">Let’s Connect</h2>
        <p className="text-gray-600 mb-6">Reach out for personalized consultation or business inquiries.</p>
        <a
          href="https://www.linkedin.com/in/vaishnave-srinivasan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Connect on LinkedIn</Button>
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 mt-10 py-6 border-t">
        <p className="mb-2">Certifications: Amazon Ads Certified (2023), Google Data Analyst Certified (2024)</p>
        <p>&copy; {new Date().getFullYear()} Vaishnave Anantha Srinivasan. All rights reserved.</p>
      </footer>
    </main>
  );
}
