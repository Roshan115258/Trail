import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "wouter";
import { ShoppingCart, ArrowLeft, Check, Zap, Target, Award, Package, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { useCartContext } from "@/lib/CartContext";
import { useToast } from "@/hooks/use-toast";
import type { Product } from "@shared/schema";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCartContext();
  const { toast } = useToast();

  const { data, isLoading } = useQuery<{ success: boolean; product: Product }>({
    queryKey: ["/api/products", slug],
  });

  const product = data?.product;

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      toast({
        title: "Added to cart",
        description: `${quantity} × ${product.title} added to your cart`,
      });
      setQuantity(1);
    }
  };

  const incrementQuantity = () => setQuantity((q) => q + 1);
  const decrementQuantity = () => setQuantity((q) => Math.max(1, q - 1));

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Header />
        <section className="pt-32 pb-20 bg-gradient-to-br from-muted/30 via-background to-accent/20">
          <div className="container mx-auto px-4 lg:px-8">
            <Skeleton className="h-10 w-32 mb-8" />
            <div className="grid lg:grid-cols-2 gap-12">
              <Skeleton className="w-full h-96 rounded-lg" />
              <div className="space-y-4">
                <Skeleton className="h-12 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen">
        <Header />
        <section className="pt-32 pb-20 bg-gradient-to-br from-muted/30 via-background to-accent/20">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
            <Button asChild>
              <Link href="/products">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Products
              </Link>
            </Button>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  const productImageUrl = product.images[0]?.startsWith('http') 
    ? product.images[0] 
    : `https://severalsustain.in${product.images[0] || ''}`;

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.title,
    "description": product.longDesc,
    "image": productImageUrl,
    "brand": {
      "@type": "Brand",
      "name": "Several Sustain"
    },
    "category": product.category,
    "sku": product.id,
    ...(product.price && Number.isFinite(parseFloat(product.price)) ? {
      "offers": {
        "@type": "Offer",
        "url": `https://severalsustain.in/products/${product.slug}`,
        "price": parseFloat(product.price),
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition",
        "seller": {
          "@type": "Organization",
          "name": "Several Sustain"
        }
      }
    } : {})
  };

  // Extract structured data from specs
  const specs = product.specs as any;
  const keyFeatures = specs?.keyFeatures || [];
  const benefits = specs?.benefits || [];
  const applications = specs?.applications || [];
  const whyChoose = specs?.whyChoose || [];

  // Render specifications in organized groups
  const renderSpecsSection = () => {
    if (!specs || typeof specs !== "object") return null;

    const sections: JSX.Element[] = [];
    
    Object.entries(specs).forEach(([key, value]) => {
      // Skip our custom arrays
      if (key === 'keyFeatures' || key === 'benefits' || key === 'applications' || key === 'whyChoose') {
        return;
      }

      if (value && typeof value === 'object' && !Array.isArray(value)) {
        sections.push(
          <div key={key} className="mb-8" data-testid={`spec-section-${key.toLowerCase().replace(/\s+/g, '-')}`}>
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Package className="w-5 h-5 text-primary" />
              {key}
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {Object.entries(value as Record<string, any>).map(([subKey, subValue]) => (
                <div key={subKey} className="bg-muted/30 rounded-lg p-4 border border-border/50">
                  <div className="font-semibold text-sm text-muted-foreground mb-1">
                    {subKey}
                  </div>
                  <div className="text-foreground">
                    {Array.isArray(subValue) ? subValue.join(", ") : String(subValue)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      }
    });

    return sections.length > 0 ? sections : <p className="text-muted-foreground">No specifications available</p>;
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{product.title} - Several Sustain</title>
        <meta name="description" content={product.longDesc} />
        <link rel="canonical" href={`https://severalsustain.in/products/${product.slug}`} />

        <meta property="og:title" content={`${product.title} - Several Sustain`} />
        <meta property="og:description" content={product.longDesc} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={`https://severalsustain.in/products/${product.slug}`} />
        <meta property="og:site_name" content="Several Sustain" />
        {productImageUrl && <meta property="og:image" content={productImageUrl} />}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={product.title} />
        <meta name="twitter:description" content={product.longDesc} />
        {productImageUrl && <meta name="twitter:image" content={productImageUrl} />}

        <script type="application/ld+json">
          {JSON.stringify(productJsonLd)}
        </script>
      </Helmet>
      <Header />

      <section className="pt-24 pb-12 bg-gradient-to-br from-muted/30 via-background to-accent/20">
        <div className="container mx-auto px-4 lg:px-8">
          <Button variant="ghost" asChild className="mb-6" data-testid="button-back">
            <Link href="/products">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Link>
          </Button>

          {/* Product Header Section */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              {product.images.length > 1 ? (
                <Carousel className="w-full" data-testid="product-gallery">
                  <CarouselContent>
                    {product.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <GlassCard className="overflow-hidden">
                          <img
                            src={image}
                            alt={`${product.title} - Image ${index + 1}`}
                            className="w-full h-[400px] lg:h-[500px] object-cover"
                            data-testid={`product-image-${index}`}
                          />
                        </GlassCard>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>
              ) : (
                <GlassCard className="overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-full h-[400px] lg:h-[500px] object-cover"
                    data-testid="product-image-0"
                  />
                </GlassCard>
              )}
              
              {/* Category Badge */}
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                  {product.category}
                </span>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="product-title">
                  {product.title}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed" data-testid="product-description">
                  {product.longDesc}
                </p>
              </div>

              {/* Quick Features Highlight */}
              {keyFeatures.length > 0 && (
                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    Key Highlights
                  </h3>
                  <div className="grid gap-2">
                    {keyFeatures.slice(0, 4).map((feature: any, idx: number) => (
                      <div key={idx} className="flex items-start gap-3 text-sm">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Price and Add to Cart */}
              <GlassCard className="p-6 space-y-4">
                <div>
                  {product.price && Number.isFinite(parseFloat(product.price)) ? (
                    <>
                      <p className="text-sm text-muted-foreground mb-1">Price</p>
                      <p className="text-3xl font-bold text-primary" data-testid="product-price">
                        ₹{parseFloat(product.price).toLocaleString('en-IN')}
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-lg font-semibold text-foreground" data-testid="product-price">
                        Contact for Price
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Get a custom quote for your requirements
                      </p>
                    </>
                  )}
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-muted-foreground">Quantity:</span>
                    <div className="flex items-center border border-border rounded-lg">
                      <button
                        onClick={decrementQuantity}
                        className="px-3 py-2 hover:bg-muted transition-colors"
                        data-testid="button-decrement"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 py-2 font-semibold min-w-[3rem] text-center" data-testid="quantity-display">
                        {quantity}
                      </span>
                      <button
                        onClick={incrementQuantity}
                        className="px-3 py-2 hover:bg-muted transition-colors"
                        data-testid="button-increment"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handleAddToCart}
                  className="w-full gradient-primary text-white hover:opacity-90 transition-opacity shadow-lg"
                  size="lg"
                  data-testid="button-add-to-cart"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>

                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Free shipping on orders above ₹50,000</span>
                </div>
              </GlassCard>
            </div>
          </div>

          {/* Tabbed Content Section */}
          <GlassCard className="p-6 lg:p-8">
            <Tabs defaultValue="features" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
                <TabsTrigger value="features" className="text-sm lg:text-base" data-testid="tab-features">
                  Key Features
                </TabsTrigger>
                <TabsTrigger value="specifications" className="text-sm lg:text-base" data-testid="tab-specifications">
                  Specifications
                </TabsTrigger>
                <TabsTrigger value="benefits" className="text-sm lg:text-base" data-testid="tab-benefits">
                  Benefits
                </TabsTrigger>
                <TabsTrigger value="applications" className="text-sm lg:text-base" data-testid="tab-applications">
                  Applications
                </TabsTrigger>
              </TabsList>

              <TabsContent value="features" className="space-y-6" data-testid="content-features">
                <div className="grid md:grid-cols-2 gap-6">
                  {keyFeatures.length > 0 ? (
                    keyFeatures.map((feature: any, idx: number) => (
                      <GlassCard key={idx} className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Zap className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-bold text-foreground mb-2">{feature.title}</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </GlassCard>
                    ))
                  ) : (
                    <p className="text-muted-foreground col-span-2">No features information available</p>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="specifications" className="space-y-6" data-testid="content-specifications">
                {renderSpecsSection()}
              </TabsContent>

              <TabsContent value="benefits" className="space-y-6" data-testid="content-benefits">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {benefits.length > 0 ? (
                    benefits.map((benefit: string, idx: number) => {
                      const [title, ...descParts] = benefit.split(':');
                      const description = descParts.join(':').trim();
                      return (
                        <GlassCard key={idx} className="p-6 hover:shadow-lg transition-all duration-300">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                              <Award className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                              <h4 className="font-bold text-foreground mb-1">{title}</h4>
                              {description && (
                                <p className="text-sm text-muted-foreground">{description}</p>
                              )}
                            </div>
                          </div>
                        </GlassCard>
                      );
                    })
                  ) : (
                    <p className="text-muted-foreground col-span-3">No benefits information available</p>
                  )}
                </div>

                {whyChoose.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                      <Target className="w-6 h-6 text-primary" />
                      Why Choose This Product?
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {whyChoose.map((reason: string, idx: number) => {
                        const [title, ...descParts] = reason.split(':');
                        const description = descParts.join(':').trim();
                        return (
                          <div key={idx} className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                            <div className="flex items-start gap-3">
                              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <div>
                                <p className="font-semibold text-foreground">{title}</p>
                                {description && (
                                  <p className="text-sm text-muted-foreground mt-1">{description}</p>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="applications" className="space-y-6" data-testid="content-applications">
                <div className="grid md:grid-cols-3 gap-6">
                  {applications.length > 0 ? (
                    applications.map((app: string, idx: number) => {
                      const [title, ...descParts] = app.split(':');
                      const description = descParts.join(':').trim();
                      return (
                        <GlassCard key={idx} className="p-6 hover:shadow-lg transition-all duration-300 text-center">
                          <div className="space-y-4">
                            <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto">
                              <Target className="w-8 h-8 text-blue-600" />
                            </div>
                            <div>
                              <h4 className="font-bold text-foreground mb-2">{title}</h4>
                              {description && (
                                <p className="text-sm text-muted-foreground">{description}</p>
                              )}
                            </div>
                          </div>
                        </GlassCard>
                      );
                    })
                  ) : (
                    <p className="text-muted-foreground col-span-3">No applications information available</p>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </GlassCard>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <GlassCard className="p-8 lg:p-12 max-w-3xl mx-auto">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Interested in This Product?
              </h2>
              <p className="text-muted-foreground mb-8">
                Get in touch with our team for detailed information, pricing, and custom solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-primary text-white" asChild>
                  <Link href="/contact">Get a Quote</Link>
                </Button>
                <Button size="lg" variant="outline" onClick={handleAddToCart}>
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
