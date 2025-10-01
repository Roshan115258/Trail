import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "wouter";
import { ShoppingCart, ArrowLeft, Download, Plus, Minus, Package } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { useCartContext } from "@/lib/CartContext";
import { useToast } from "@/hooks/use-toast";
import type { Product } from "@shared/schema";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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

  const renderSpecsTable = (specs: any) => {
    if (!specs || typeof specs !== "object") return null;

    const flattenSpecs = (obj: any, prefix = ""): [string, string][] => {
      const result: [string, string][] = [];
      
      for (const [key, value] of Object.entries(obj)) {
        const label = prefix ? `${prefix} - ${key}` : key;
        
        if (value && typeof value === "object" && !Array.isArray(value)) {
          result.push(...flattenSpecs(value, key));
        } else if (Array.isArray(value)) {
          result.push([label, value.join(", ")]);
        } else {
          result.push([label, String(value)]);
        }
      }
      
      return result;
    };

    const specsArray = flattenSpecs(specs);

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/3">Specification</TableHead>
            <TableHead>Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {specsArray.map(([label, value], index) => (
            <TableRow key={index}>
              <TableCell className="font-medium capitalize">{label.replace(/([A-Z])/g, " $1").trim()}</TableCell>
              <TableCell>{value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Header />
        <section className="pt-32 pb-20 bg-gradient-to-br from-muted/30 via-background to-accent/20">
          <div className="container mx-auto px-4 lg:px-8">
            <Skeleton className="h-12 w-48 mb-8" />
            <div className="grid lg:grid-cols-2 gap-12">
              <Skeleton className="h-96 rounded-lg" />
              <div className="space-y-4">
                <Skeleton className="h-10 w-3/4" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-24 w-full" />
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
            <div className="w-24 h-24 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Package className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4" data-testid="not-found-title">
              Product Not Found
            </h1>
            <p className="text-lg text-muted-foreground mb-8" data-testid="not-found-message">
              The product you're looking for doesn't exist.
            </p>
            <Link href="/products">
              <Button className="gradient-primary text-white" data-testid="button-back-to-products">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Products
              </Button>
            </Link>
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
        {product.images[0] && <meta property="og:image" content={product.images[0]} />}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={product.title} />
        <meta name="twitter:description" content={product.longDesc} />
        {product.images[0] && <meta name="twitter:image" content={product.images[0]} />}

        <script type="application/ld+json">
          {JSON.stringify(productJsonLd)}
        </script>
      </Helmet>
      <Header />

      <section className="pt-32 pb-20 bg-gradient-to-br from-muted/30 via-background to-accent/20">
        <div className="container mx-auto px-4 lg:px-8">
          <Link href="/products">
            <Button variant="ghost" className="mb-8" data-testid="button-back">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Button>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              {product.images.length > 1 ? (
                <Carousel className="w-full" data-testid="product-gallery">
                  <CarouselContent>
                    {product.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <img
                          src={image}
                          alt={`${product.title} - Image ${index + 1}`}
                          className="w-full h-96 object-cover rounded-lg"
                          data-testid={`gallery-image-${index}`}
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              ) : (
                <img
                  src={product.images[0] || "/placeholder.jpg"}
                  alt={product.title}
                  className="w-full h-96 object-cover rounded-lg"
                  data-testid="product-main-image"
                />
              )}
            </div>

            <div>
              <div className="mb-2">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold" data-testid="product-category">
                  {product.category}
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4" data-testid="product-title">
                {product.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6" data-testid="product-short-desc">
                {product.shortDesc}
              </p>
              
              <div className="mb-6">
                {product.price && Number.isFinite(parseFloat(product.price)) ? (
                  <p className="text-4xl font-bold text-primary" data-testid="product-price">
                    ${parseFloat(product.price).toFixed(2)}
                  </p>
                ) : (
                  <p className="text-2xl text-muted-foreground italic" data-testid="product-price">
                    Contact for price
                  </p>
                )}
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Quantity</h3>
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={decrementQuantity}
                    data-testid="button-decrease-quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="text-2xl font-semibold w-12 text-center" data-testid="quantity-value">
                    {quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={incrementQuantity}
                    data-testid="button-increase-quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <Button
                className="w-full gradient-primary text-white hover:opacity-90 transition-opacity mb-4"
                size="lg"
                onClick={handleAddToCart}
                data-testid="button-add-to-cart"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>

              {product.datasheetUrl && (
                <Button
                  variant="outline"
                  className="w-full"
                  asChild
                  data-testid="button-download-datasheet"
                >
                  <a href={product.datasheetUrl} download target="_blank" rel="noopener noreferrer">
                    <Download className="w-5 h-5 mr-2" />
                    Download Datasheet
                  </a>
                </Button>
              )}
            </div>
          </div>

          <GlassCard className="p-8 mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6" data-testid="description-heading">
              Product Description
            </h2>
            <p className="text-lg text-muted-foreground" data-testid="product-long-desc">
              {product.longDesc}
            </p>
          </GlassCard>

          <GlassCard className="p-8">
            <h2 className="text-3xl font-bold text-foreground mb-6" data-testid="specs-heading">
              Technical Specifications
            </h2>
            <div data-testid="specs-table">
              {renderSpecsTable(product.specs)}
            </div>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
