export default function MapSection() {
  return (
    <section className="h-96 bg-gray-200 relative">
      <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
        <div className="text-center p-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p className="text-lg font-medium">Map Location: Dhruvraj Infra Headquarters</p>
          <p className="text-gray-600">123 Construction Avenue, Mumbai, Maharashtra</p>
        </div>
      </div>
    </section>
  );
}
