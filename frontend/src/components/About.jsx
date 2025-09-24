import { BriefcaseIcon, BuildingOfficeIcon, UserGroupIcon } from "@heroicons/react/24/outline";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 py-16 text-center text-white">
        <h1 className="text-4xl font-bold">About JobNest</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Connecting talented professionals with top companies worldwide.  
          Our mission is to make finding the right job simple and efficient.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Mission & Vision */}
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Our Mission</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              At JobNest, we aim to create opportunities for professionals and 
              companies by providing a trusted platform where talent meets innovation.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Our Vision</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We envision a future where hiring is seamless, transparent, and accessible, 
              helping individuals build fulfilling careers while companies grow with the right talent.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3 text-center">
          <div className="rounded-xl bg-white p-6 shadow">
            <BriefcaseIcon className="mx-auto h-10 w-10 text-indigo-600" />
            <h3 className="mt-4 text-2xl font-bold text-gray-900">5k+</h3>
            <p className="text-gray-600">Jobs Posted</p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow">
            <BuildingOfficeIcon className="mx-auto h-10 w-10 text-indigo-600" />
            <h3 className="mt-4 text-2xl font-bold text-gray-900">1k+</h3>
            <p className="text-gray-600">Companies</p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow">
            <UserGroupIcon className="mx-auto h-10 w-10 text-indigo-600" />
            <h3 className="mt-4 text-2xl font-bold text-gray-900">50k+</h3>
            <p className="text-gray-600">Active Users</p>
          </div>
        </div>

        {/* Team Section (Optional) */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-semibold text-gray-900">Meet Our Team</h2>
          <p className="mt-2 text-gray-600">Passionate people behind JobNest</p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-xl bg-white p-6 shadow hover:shadow-md transition">
                <div className="mx-auto h-24 w-24 rounded-full bg-gray-200" />
                <h3 className="mt-4 text-lg font-semibold text-gray-900">Team Member {i}</h3>
                <p className="text-gray-500">Role / Position</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
