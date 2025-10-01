import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Package, ShoppingCart, Eye, Filter } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { useCartContext } from "@/lib/CartContext";
import { useToast } from "@/hooks/use-toast";
import type { Product } from "@shared/schema";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { addToCart } = useCartContext();
  const { toast } = useToast();

  const { data, isLoading } = useQuery<{ success: boolean; products: Product[] }>({
    queryKey: ["/api/products"],
  });

  const products = data?.products || [];

  const categories = ["all", ...Array.from(new Set(products.map((p) => p.category)))];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const handleAddToCart = (product: Product) => {
    addToCart(product, 1);
    toast({
      title: "Added to cart",
      description: `${product.title} has been added to your cart`,
    });
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Products - Several Sustain | Milk Analyzers & Equipment</title>
        <meta
          name="description"
          content="Browse our range of professional milk analyzers, weighing scales, DPU systems, and dairy equipment. High-quality analytical instruments for farms and labs."
        />
        <link rel="canonical" href="https://severalsustain.in/products" />

        <meta property="og:title" content="Products - Several Sustain" />
        <meta
          property="og:description"
          content="Professional milk analyzers and dairy equipment for farms, collection centers and laboratories."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://severalsustain.in/products" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Products - Several Sustain" />
        <meta
          name="twitter:description"
          content="Browse our range of professional milk analyzers and dairy equipment."
        />
      </Helmet>
      <Header />

      <section className="pt-32 pb-20 bg-gradient-to-br from-muted/30 via-background to-accent/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div
              className="w-24 h-24 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-8"
              data-testid="hero-icon"
            >
              <Package className="w-12 h-12 text-white" />
            </div>
            <h1
              className="text-5xl lg:text-6xl font-bold text-foreground mb-8"
              data-testid="products-title"
            >
              Our Products
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Professional analytical instruments and dairy equipment for quality assurance and
              efficient operations.
            </p>
          </div>

          <div className="mb-12">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <span className="text-lg font-semibold text-foreground" data-testid="filter-label">
                Filter by Category:
              </span>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "gradient-primary text-white" : ""}
                  data-testid={`filter-${category.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {category === "all" ? "All Products" : category}
                </Button>
              ))}
            </div>
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <GlassCard key={i} className="p-6" data-testid={`skeleton-card-${i}`}>
                  <Skeleton className="w-full h-48 mb-4 rounded-lg" />
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <div className="flex gap-2">
                    <Skeleton className="h-10 flex-1" />
                    <Skeleton className="h-10 flex-1" />
                  </div>
                </GlassCard>
              ))}
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground" data-testid="no-products-message">
                No products found in this category.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <GlassCard
                  key={product.id}
                  className="p-6 hover-lift border-t-4 border-primary"
                  data-testid={`product-card-${product.id}`}
                >
                  <div className="mb-4">
                    <img
                      src={product.images[0] || "/placeholder.jpg"}
                      alt={product.title}
                      className="w-full h-48 object-cover rounded-lg"
                      data-testid={`product-image-${product.id}`}
                    />
                  </div>
                  <h3
                    className="text-2xl font-bold text-foreground mb-3"
                    data-testid={`product-title-${product.id}`}
                  >
                    {product.title}
                  </h3>
                  <p
                    className="text-muted-foreground mb-4 line-clamp-3"
                    data-testid={`product-desc-${product.id}`}
                  >
                    {product.shortDesc}
                  </p>
                  <div className="mb-4">
                    {product.price && Number.isFinite(parseFloat(product.price)) ? (
                      <p className="text-2xl font-bold text-primary" data-testid={`product-price-${product.id}`}>
                        ${parseFloat(product.price).toFixed(2)}
                      </p>
                    ) : (
                      <p className="text-lg text-muted-foreground italic" data-testid={`product-price-${product.id}`}>
                        Contact for price
                      </p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/products/${product.slug}`} className="flex-1">
                      <Button
                        variant="outline"
                        className="w-full"
                        data-testid={`button-view-details-${product.id}`}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </Link>
                    <Button
                      className="flex-1 gradient-primary text-white hover:opacity-90"
                      onClick={() => handleAddToCart(product)}
                      data-testid={`button-add-to-cart-${product.id}`}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </GlassCard>
              ))}
            </div>
          )}

          <div className="mt-16 text-center">
            <GlassCard className="p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-4">Need Help Choosing?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our team of experts is ready to help you find the perfect solution for your needs.
                Contact us for personalized recommendations and quotes.
              </p>
              <Link href="/contact">
                <Button className="gradient-primary text-white hover:opacity-90 transition-opacity" size="lg" data-testid="button-contact-us">
                  Contact Us
                </Button>
              </Link>
            </GlassCard>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
