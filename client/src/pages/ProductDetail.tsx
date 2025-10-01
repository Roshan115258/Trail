import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "wouter";
import { ShoppingCart, ArrowLeft, Check, Zap, Target, Award, Package, Plus, Minus, Eye } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { useCartContext } from "@/lib/CartContext";
import { useToast } from "@/hooks/use-toast";
import type { Product } from "@/types/product";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCartContext();
  const { toast } = useToast();

  const { data: allProducts, isLoading } = useQuery<Product[]>({
    queryKey: ["/products.json"],
  });

  const product = allProducts?.find((p) => p.slug === slug);

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

      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50/50 via-green-50/30 to-purple-50/50 dark:from-blue-950/20 dark:via-green-950/20 dark:to-purple-950/20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <Button variant="ghost" asChild className="mb-6" data-testid="button-back">
            <Link href="/products">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Link>
          </Button>

          {/* Product Header Section */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
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
                <div className="space-y-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-950/30 rounded-lg p-6 border border-green-200/50 dark:border-green-800/50">
                  <h3 className="font-bold text-lg text-foreground flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    Key Highlights
                  </h3>
                  <div className="grid gap-3">
                    {keyFeatures.slice(0, 4).map((feature: any, idx: number) => (
                      <div key={idx} className="flex items-start gap-3 text-sm">
                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-foreground font-medium">{feature.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Price and Add to Cart */}
              <GlassCard className="p-6 md:p-8 space-y-6 border-2 border-primary/20 shadow-xl">
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
          <GlassCard className="p-6 md:p-8 lg:p-10 shadow-2xl border border-primary/10">
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

              <TabsContent value="features" className="space-y-8" data-testid="content-features">
                <div className="grid md:grid-cols-2 gap-6">
                  {keyFeatures.length > 0 ? (
                    keyFeatures.map((feature: any, idx: number) => {
                      const colors = [
                        { bg: 'from-blue-500/10 to-blue-600/5', icon: 'text-blue-600 dark:text-blue-400', border: 'border-l-blue-500' },
                        { bg: 'from-green-500/10 to-green-600/5', icon: 'text-green-600 dark:text-green-400', border: 'border-l-green-500' },
                        { bg: 'from-purple-500/10 to-purple-600/5', icon: 'text-purple-600 dark:text-purple-400', border: 'border-l-purple-500' },
                        { bg: 'from-amber-500/10 to-amber-600/5', icon: 'text-amber-600 dark:text-amber-400', border: 'border-l-amber-500' },
                      ];
                      const color = colors[idx % colors.length];
                      return (
                        <GlassCard key={idx} className={`p-6 md:p-8 hover:shadow-xl transition-all duration-300 border-l-4 ${color.border} bg-gradient-to-br ${color.bg}`}>
                          <div className="flex items-start gap-4">
                            <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${color.bg} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                              <Zap className={`w-7 h-7 ${color.icon}`} />
                            </div>
                            <div>
                              <h4 className="font-bold text-lg text-foreground mb-2">{feature.title}</h4>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </GlassCard>
                      );
                    })
                  ) : (
                    <p className="text-muted-foreground col-span-2">No features information available</p>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="specifications" className="space-y-6" data-testid="content-specifications">
                {renderSpecsSection()}
              </TabsContent>

              <TabsContent value="benefits" className="space-y-8" data-testid="content-benefits">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {benefits.length > 0 ? (
                    benefits.map((benefit: string, idx: number) => {
                      const [title, ...descParts] = benefit.split(':');
                      const description = descParts.join(':').trim();
                      const colors = [
                        { bg: 'from-green-500/10 to-emerald-600/5', icon: 'text-green-600 dark:text-green-400' },
                        { bg: 'from-teal-500/10 to-cyan-600/5', icon: 'text-teal-600 dark:text-teal-400' },
                        { bg: 'from-indigo-500/10 to-purple-600/5', icon: 'text-indigo-600 dark:text-indigo-400' },
                      ];
                      const color = colors[idx % colors.length];
                      return (
                        <GlassCard key={idx} className={`p-6 md:p-7 hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${color.bg}`}>
                          <div className="flex items-start gap-4">
                            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${color.bg} flex items-center justify-center flex-shrink-0 shadow-md`}>
                              <Award className={`w-6 h-6 ${color.icon}`} />
                            </div>
                            <div>
                              <h4 className="font-bold text-base text-foreground mb-2">{title}</h4>
                              {description && (
                                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
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
                  <div className="mt-10 bg-gradient-to-br from-primary/5 via-purple-50/50 to-blue-50/50 dark:from-primary/10 dark:via-purple-950/30 dark:to-blue-950/30 rounded-xl p-6 md:p-8 border border-primary/20">
                    <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      Why Choose This Product?
                    </h3>
                    <div className="grid md:grid-cols-3 gap-5">
                      {whyChoose.map((reason: string, idx: number) => {
                        const [title, ...descParts] = reason.split(':');
                        const description = descParts.join(':').trim();
                        return (
                          <div key={idx} className="bg-white/70 dark:bg-gray-900/70 backdrop-blur rounded-lg p-5 border-2 border-primary/30 hover:border-primary/60 transition-all hover:shadow-lg">
                            <div className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                <Check className="w-4 h-4 text-primary" />
                              </div>
                              <div>
                                <p className="font-bold text-foreground mb-1">{title}</p>
                                {description && (
                                  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
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

              <TabsContent value="applications" className="space-y-8" data-testid="content-applications">
                <div className="grid md:grid-cols-3 gap-6">
                  {applications.length > 0 ? (
                    applications.map((app: string, idx: number) => {
                      const [title, ...descParts] = app.split(':');
                      const description = descParts.join(':').trim();
                      const colors = [
                        { bg: 'from-blue-500/10 to-cyan-600/5', icon: 'text-blue-600 dark:text-blue-400', ring: 'ring-blue-500/30' },
                        { bg: 'from-purple-500/10 to-pink-600/5', icon: 'text-purple-600 dark:text-purple-400', ring: 'ring-purple-500/30' },
                        { bg: 'from-orange-500/10 to-red-600/5', icon: 'text-orange-600 dark:text-orange-400', ring: 'ring-orange-500/30' },
                      ];
                      const color = colors[idx % colors.length];
                      return (
                        <GlassCard key={idx} className={`p-6 md:p-8 hover:shadow-xl transition-all duration-300 text-center bg-gradient-to-br ${color.bg}`}>
                          <div className="space-y-4">
                            <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${color.bg} ring-4 ${color.ring} flex items-center justify-center mx-auto shadow-lg`}>
                              <Package className={`w-10 h-10 ${color.icon}`} />
                            </div>
                            <div>
                              <h4 className="font-bold text-lg text-foreground mb-2">{title}</h4>
                              {description && (
                                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
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

          {/* Trust Badges & Guarantees */}
          <div className="mt-12 mb-8">
            <div className="grid md:grid-cols-3 gap-6">
              <GlassCard className="p-6 text-center hover:shadow-xl transition-all bg-gradient-to-br from-blue-50/50 to-blue-100/30 dark:from-blue-950/20 dark:to-blue-900/10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Quality Assured</h3>
                <p className="text-sm text-muted-foreground">Certified products with manufacturer warranty</p>
              </GlassCard>
              <GlassCard className="p-6 text-center hover:shadow-xl transition-all bg-gradient-to-br from-green-50/50 to-green-100/30 dark:from-green-950/20 dark:to-green-900/10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Free Shipping</h3>
                <p className="text-sm text-muted-foreground">On orders above ₹50,000 across India</p>
              </GlassCard>
              <GlassCard className="p-6 text-center hover:shadow-xl transition-all bg-gradient-to-br from-purple-50/50 to-purple-100/30 dark:from-purple-950/20 dark:to-purple-900/10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Expert Support</h3>
                <p className="text-sm text-muted-foreground">Technical assistance and training included</p>
              </GlassCard>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <GlassCard className="p-8 lg:p-12 max-w-3xl mx-auto bg-gradient-to-br from-primary/5 via-blue-50/50 to-purple-50/50 dark:from-primary/10 dark:via-blue-950/30 dark:to-purple-950/30 border-2 border-primary/20">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Limited Time Offer</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Ready to Transform Your Operations?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Join hundreds of satisfied customers who trust Several Sustain for their dairy equipment needs. Get expert consultation and custom solutions tailored to your requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button size="lg" className="gradient-primary text-white shadow-xl hover:shadow-2xl transition-all" asChild>
                  <Link href="/contact">
                    <Package className="w-5 h-5 mr-2" />
                    Request Free Quote
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary/30 hover:bg-primary/5" asChild>
                  <Link href="/products">
                    <Eye className="w-5 h-5 mr-2" />
                    View All Products
                  </Link>
                </Button>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-green-600" />
                <span>Free technical consultation • Installation support available</span>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Sticky Add to Cart Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-t-2 border-primary/20 shadow-2xl">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Product Info - Hidden on small mobile */}
            <div className="hidden sm:flex items-center gap-4 flex-1 min-w-0">
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-lg flex-shrink-0"
              />
              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-sm md:text-base text-foreground truncate">
                  {product.title}
                </h3>
                {product.price && Number.isFinite(parseFloat(product.price)) ? (
                  <p className="text-lg md:text-xl font-bold text-primary">
                    ₹{parseFloat(product.price).toLocaleString('en-IN')}
                  </p>
                ) : (
                  <p className="text-sm text-muted-foreground">Contact for price</p>
                )}
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-2">
              <span className="text-xs md:text-sm font-medium text-muted-foreground hidden md:inline">Qty:</span>
              <div className="flex items-center border-2 border-primary/30 rounded-lg bg-background">
                <button
                  onClick={decrementQuantity}
                  className="px-2 md:px-3 py-1.5 md:py-2 hover:bg-primary/10 transition-colors"
                  data-testid="button-decrement-sticky"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-3 md:px-4 py-1.5 md:py-2 font-bold text-sm md:text-base min-w-[2.5rem] text-center" data-testid="quantity-display-sticky">
                  {quantity}
                </span>
                <button
                  onClick={incrementQuantity}
                  className="px-2 md:px-3 py-1.5 md:py-2 hover:bg-primary/10 transition-colors"
                  data-testid="button-increment-sticky"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button
              onClick={handleAddToCart}
              className="gradient-primary text-white hover:opacity-90 transition-opacity shadow-lg px-4 md:px-8 h-10 md:h-12 text-sm md:text-base font-bold"
              data-testid="button-add-to-cart-sticky"
            >
              <ShoppingCart className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
              <span className="hidden sm:inline">Add to Cart</span>
              <span className="sm:hidden">Add</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Spacer for sticky bar */}
      <div className="h-16 md:h-20"></div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
