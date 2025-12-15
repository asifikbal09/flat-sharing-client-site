"use client";

import { Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const SearchFilters = () => {
  const [activeTab, setActiveTab] = useState("flatmates");

  const tabs = [
    { id: "rooms", label: "Rooms" },
    { id: "flatmates", label: "Flatmates" },
    { id: "teamups", label: "Teamups" },
  ];

  return (
    <section className="py-12 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Search Card */}
          <div className="bg-card rounded-2xl shadow-elegant p-6 md:p-8 border border-border/50">
            {/* Tabs */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex  rounded-lg p-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-2.5 text-sm font-medium rounded-md transition-all duration-200 ${
                      activeTab === tab.id
                        ? "bg-gradient-primary text-primary-foreground shadow-warm"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Input */}
            <div className="mb-6">
              <Input
                placeholder="Start typing a suburb, city, station or uni"
                className="h-14 text-base bg-background border-border/50 focus:border-primary transition-colors rounded-lg px-4"
              />
            </div>

            {/* Search Button */}
            <Button className="w-full h-14 bg-gradient-primary hover:bg-gradient-primary/90 text-primary-foreground font-semibold text-base rounded-lg shadow-warm transition-all duration-300 hover:shadow-lg">
              <Search className="h-5 w-5 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchFilters;
