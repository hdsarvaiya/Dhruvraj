import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-8 md:mb-0 md:w-2/3">
            <h2 className="text-3xl font-heading font-bold mb-3">Ready to Start Your Construction Project?</h2>
            <p className="text-blue-200">
              Contact us today for a free consultation. Our experts will help you plan and execute your vision with precision.
            </p>
          </div>
          <div>
            <Button asChild variant="secondary" className="font-bold">
              <a href="#contact">Get Free Estimate</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
