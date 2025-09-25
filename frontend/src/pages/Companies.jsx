import { useState } from "react";
import { BuildingOfficeIcon, MapPinIcon, BriefcaseIcon } from "@heroicons/react/24/solid";

export default function Companies() {
  const [search, setSearch] = useState("");

  const companies = [
    {
      id: 1,
      name: "TechCorp Inc.",
      industry: "Software Development",
      location: "San Francisco, CA",
      jobs: 12,
      logo: "https://via.placeholder.com/48",
    },
    {
      id: 2,
      name: "StartupX",
      industry: "Product & Innovation",
      location: "New York, NY",
      jobs: 8,
      logo: "https://via.placeholder.com/48",
    },
    {
      id: 3,
      name: "Designify",
      industry: "UX/UI Design",
      location: "Remote",
      jobs: 5,
      logo: "https://via.placeholder.com/48",
    },
  ];

  const filtered = companies.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Explore Companies
          </h1>
          <p className="mt-2 text-gray-600">
            Discover top companies and their open job opportunities.
          </p>
        </div>

        {/* Search bar */}
        <div className="mb-10 flex items-center justify-center">
          <input
            type="text"
            placeholder="Search companies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-lg rounded-md border border-gray-300 h-12 px-4 shadow-sm 
                       focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none sm:text-sm"
          />
        </div>

        {/* Companies list */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((company) => (
            <div
              key={company.id}
              className="rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {company.name}
                  </h3>
                  <p className="text-sm text-gray-500">{company.industry}</p>
                </div>
              </div>

              <div className="mt-4 space-y-2 text-sm text-gray-600">
                <p className="flex items-center gap-2">
                  <MapPinIcon className="h-5 w-5 text-indigo-500" />
                  {company.location}
                </p>
                <p className="flex items-center gap-2">
                  <BriefcaseIcon className="h-5 w-5 text-indigo-500" />
                  {company.jobs} open jobs
                </p>
              </div>

              <button
                className="mt-6 w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white 
                           shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                View Company
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
