"use client";
import { useState } from "react";
import {
  Search,
  MapPin,
  Users,
  Bath,
  Bed,
  Filter,
  X,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import Link from "next/link";

// Mock data for flats
const mockFlats = [
  {
    id: 1,
    title: "Spacious 2BHK in Koramangala",
    location: "Koramangala, Bangalore",
    price: 25000,
    bedrooms: 2,
    bathrooms: 2,
    occupancy: 3,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
    amenities: ["WiFi", "AC", "Parking"],
    postedBy: "Rahul S.",
    postedDate: "2 days ago",
  },
  {
    id: 2,
    title: "Modern Studio Apartment",
    location: "Indiranagar, Bangalore",
    price: 18000,
    bedrooms: 1,
    bathrooms: 1,
    occupancy: 1,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
    amenities: ["WiFi", "Gym", "Pool"],
    postedBy: "Priya M.",
    postedDate: "5 days ago",
  },
  {
    id: 3,
    title: "3BHK Villa with Garden",
    location: "Whitefield, Bangalore",
    price: 45000,
    bedrooms: 3,
    bathrooms: 3,
    occupancy: 4,
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
    amenities: ["Garden", "Parking", "Security"],
    postedBy: "Amit K.",
    postedDate: "1 week ago",
  },
  {
    id: 4,
    title: "Cozy 1BHK Near Metro",
    location: "HSR Layout, Bangalore",
    price: 15000,
    bedrooms: 1,
    bathrooms: 1,
    occupancy: 2,
    image:
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=400&h=300&fit=crop",
    amenities: ["WiFi", "Furnished"],
    postedBy: "Sneha R.",
    postedDate: "3 days ago",
  },
  {
    id: 5,
    title: "Luxury Penthouse",
    location: "MG Road, Bangalore",
    price: 75000,
    bedrooms: 4,
    bathrooms: 4,
    occupancy: 5,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop",
    amenities: ["Terrace", "AC", "Gym", "Pool"],
    postedBy: "Vikram S.",
    postedDate: "1 day ago",
  },
  {
    id: 6,
    title: "Budget Friendly Room",
    location: "BTM Layout, Bangalore",
    price: 8000,
    bedrooms: 1,
    bathrooms: 1,
    occupancy: 1,
    image:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=400&h=300&fit=crop",
    amenities: ["WiFi", "Shared Kitchen"],
    postedBy: "Karan P.",
    postedDate: "4 days ago",
  },
];

const Flats = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [selectedBedrooms, setSelectedBedrooms] = useState<string>("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter flats based on search and filters
  const filteredFlats = mockFlats.filter((flat) => {
    const matchesSearch =
      flat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      flat.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice =
      flat.price >= priceRange[0] && flat.price <= priceRange[1];
    const matchesBedrooms =
      selectedBedrooms === "all" ||
      flat.bedrooms === parseInt(selectedBedrooms);
    return matchesSearch && matchesPrice && matchesBedrooms;
  });

  // Sort flats
  const sortedFlats = [...filteredFlats].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      default:
        return 0;
    }
  });

  const clearFilters = () => {
    setPriceRange([0, 100000]);
    setSelectedBedrooms("all");
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-soft group-hover:shadow-glow transition-shadow duration-300">
                <Home className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                Flat<span className="text-gradient">Mate</span>
              </span>
            </Link>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
              <Button size="sm" className="bg-gradient-primary" asChild>
                <Link href="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Find Your Perfect <span className="text-gradient">Flat</span>
            </h1>
            <p className="text-muted-foreground">
              Browse through {mockFlats.length} available flats
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search by location or title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 bg-card border-border/50"
              />
            </div>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-48 h-12">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>

            <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" className="h-12 gap-2">
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Filter Flats</SheetTitle>
                </SheetHeader>
                <div className="mt-6 space-y-6">
                  {/* Price Range */}
                  <div className="space-y-4">
                    <Label>Price Range</Label>
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={100000}
                      step={1000}
                      className="mt-2"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>₹{priceRange[0].toLocaleString()}</span>
                      <span>₹{priceRange[1].toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Bedrooms */}
                  <div className="space-y-4">
                    <Label>Bedrooms</Label>
                    <Select
                      value={selectedBedrooms}
                      onValueChange={setSelectedBedrooms}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select bedrooms" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="1">1 Bedroom</SelectItem>
                        <SelectItem value="2">2 Bedrooms</SelectItem>
                        <SelectItem value="3">3 Bedrooms</SelectItem>
                        <SelectItem value="4">4+ Bedrooms</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={clearFilters}
                    >
                      Clear All
                    </Button>
                    <Button
                      className="flex-1 bg-gradient-primary"
                      onClick={() => setIsFilterOpen(false)}
                    >
                      Apply Filters
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Active Filters */}
          {(priceRange[0] > 0 ||
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
          )}

          {/* Results Count */}
          <p className="text-sm text-muted-foreground mb-6">
            Showing {sortedFlats.length} of {mockFlats.length} flats
          </p>

          {/* Flats Grid */}
          {sortedFlats.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedFlats.map((flat) => (
                <Link href={`/flats/${flat.id}`} key={flat.id}>
                  <Card className="overflow-hidden hover:shadow-elegant transition-shadow duration-300 group cursor-pointer">
                    <div className="relative overflow-hidden">
                      <img
                        src={flat.image}
                        alt={flat.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-3 right-3 bg-primary/90">
                        ₹{flat.price.toLocaleString()}/mo
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-foreground text-lg mb-2 line-clamp-1">
                        {flat.title}
                      </h3>
                      <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
                        <MapPin className="h-4 w-4" />
                        <span>{flat.location}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Bed className="h-4 w-4" />
                          <span>{flat.bedrooms}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Bath className="h-4 w-4" />
                          <span>{flat.bathrooms}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{flat.occupancy}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {flat.amenities.slice(0, 3).map((amenity) => (
                          <Badge
                            key={amenity}
                            variant="outline"
                            className="text-xs"
                          >
                            {amenity}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border/50 pt-3">
                        <span>By {flat.postedBy}</span>
                        <span>{flat.postedDate}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
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
              <Button variant="outline" onClick={clearFilters}>
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Flats;
