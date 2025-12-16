import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

import FlatCard from "@/components/landing/FlatCard";
import { TFlat } from "@/components/landing/FeatueredFlat";
import SearchAndFilter from "./components/SearchAndFilter";
import { Input } from "@/components/ui/input";

const Flats = async () => {
  // data fetching
  const res = await fetch(`${process.env.BACKEND_LINK}/flats`, {
    cache: "no-store",
  });
  const { data: flats } = await res.json();

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <main className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Find Your Perfect <span className="text-gradient">Flat</span>
            </h1>
            <p className="text-muted-foreground">
              Browse through {flats.length} available flats
            </p>
          </div>

          {/* Search and Filter Bar */}
          <SearchAndFilter />

          {/* Active Filters */}
          {/* {(priceRange[0] > 0 ||
            priceRange[1] < 100000 ||
            selectedBedrooms !== "all") && (
            <div className="flex flex-wrap gap-2 mb-6">
              {priceRange[0] > 0 || priceRange[1] < 100000 ? (
                <Badge variant="secondary" className="gap-1">
                  ₹{priceRange[0].toLocaleString()} - ₹
                  {priceRange[1].toLocaleString()}
                  <X
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => setPriceRange([0, 100000])}
                  />
                </Badge>
              ) : null}
              {selectedBedrooms !== "all" && (
                <Badge variant="secondary" className="gap-1">
                  {selectedBedrooms} Bedroom(s)
                  <X
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => setSelectedBedrooms("all")}
                  />
                </Badge>
              )}
            </div>
          )} */}

          {/* Results Count */}
          {/* <p className="text-sm text-muted-foreground mb-6">
            Showing {sortedFlats.length} of {mockFlats.length} flats
          </p> */}

          {/* Flats Grid */}
          {flats.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {flats.map((flat: TFlat, index: number) => (
                <FlatCard key={flat.id} flat={flat} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                No flats found
              </h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search or filters
              </p>
              <Button variant="outline">Clear all filters</Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Flats;
