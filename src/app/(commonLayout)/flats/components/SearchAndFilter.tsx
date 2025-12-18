"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { Filter, Search } from "lucide-react";

const SearchAndFilter = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <form className="flex-1">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search by location or title..."
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
      <Select>
        <SelectTrigger className="w-full md:w-48 h-12">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="newest">Newest First</SelectItem>
          <SelectItem value="price-low">Price: Low to High</SelectItem>
          <SelectItem value="price-high">Price: High to Low</SelectItem>
        </SelectContent>
      </Select>

      <Sheet>
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
              <Slider max={100000} step={1000} className="mt-2" />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>₹0</span>
                <span>₹100,000</span>
              </div>
            </div>

            {/* Bedrooms */}
            <div className="space-y-4">
              <Label>Bedrooms</Label>
              <Select>
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
              <Button variant="outline" className="flex-1">
                Clear All
              </Button>
              <Button className="flex-1 bg-gradient-primary">
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
