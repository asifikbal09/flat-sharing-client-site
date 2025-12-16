"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@radix-ui/react-label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import { Slider } from "@radix-ui/react-slider";
import { Filter, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

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

const SearchAndFilter = () => {
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

  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const onSubmit = (data: FieldValues) => {
    router.push(`/flats?search=${data.searchTerm}`);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <form onSubmit={handleSubmit(onSubmit)} className="flex-1">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search by location or title..."
            {...register("searchTerm")}
            className="pl-12 h-12 bg-card border-border/50"
          />
          <Button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 px-4 bg-gradient-primary"
          >
            Search
          </Button>
        </div>
      </form>
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
  );
};

export default SearchAndFilter;
