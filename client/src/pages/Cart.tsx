import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ShoppingCart, Plus, Minus, Trash2, ArrowLeft, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useCartContext } from "@/lib/CartContext";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, totalItems, totalPrice } = useCartContext();

  const incrementQuantity = (productId: string, currentQuantity: number) => {
    updateQuantity(productId, currentQuantity + 1);
  };

  const decrementQuantity = (productId: string, currentQuantity: number) => {
    if (currentQuantity > 1) {
      updateQuantity(productId, currentQuantity - 1);
    }
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Shopping Cart - Several Sustain</title>
        <meta name="description" content="Review your shopping cart and proceed to checkout" />
        <link rel="canonical" href="https://severalsustain.in/cart" />
      </Helmet>
      <Header />

      <section className="pt-32 pb-20 bg-gradient-to-br from-muted/30 via-background to-accent/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div
              className="w-24 h-24 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-8"
              data-testid="hero-icon"
            >
              <ShoppingCart className="w-12 h-12 text-white" />
            </div>
            <h1
              className="text-5xl lg:text-6xl font-bold text-foreground mb-4"
              data-testid="cart-title"
            >
              Shopping Cart
            </h1>
            <p className="text-xl text-muted-foreground" data-testid="cart-item-count">
              {totalItems === 0 ? "Your cart is empty" : `${totalItems} ${totalItems === 1 ? "item" : "items"} in your cart`}
            </p>
          </div>

          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <GlassCard className="p-12 max-w-2xl mx-auto">
                <p className="text-xl text-muted-foreground mb-8" data-testid="empty-cart-message">
                  Your shopping cart is empty. Start browsing our products to add items.
                </p>
                <Button className="gradient-primary text-white hover:opacity-90 transition-opacity" size="lg" asChild data-testid="button-browse-products">
                  <Link href="/products">
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Browse Products
                  </Link>
                </Button>
              </GlassCard>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => {
                  const price = item.product.price && Number.isFinite(parseFloat(item.product.price))
                    ? parseFloat(item.product.price)
                    : 0;
                  const itemTotal = price * item.quantity;

                  return (
                    <GlassCard key={item.product.id} className="p-6" data-testid={`cart-item-${item.product.id}`}>
                      <div className="flex gap-6">
                        <img
                          src={item.product.images[0] || "/placeholder.jpg"}
                          alt={item.product.title}
                          className="w-32 h-32 object-cover rounded-lg"
                          data-testid={`cart-item-image-${item.product.id}`}
                        />
                        <div className="flex-1">
                          <Link href={`/products/${item.product.slug}`}>
                            <h3 className="text-2xl font-bold text-foreground mb-2 hover:text-primary transition-colors" data-testid={`cart-item-title-${item.product.id}`}>
                              {item.product.title}
                            </h3>
                          </Link>
                          <p className="text-muted-foreground mb-4 line-clamp-2" data-testid={`cart-item-desc-${item.product.id}`}>
                            {item.product.shortDesc}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => decrementQuantity(item.product.id, item.quantity)}
                                data-testid={`button-decrease-${item.product.id}`}
                              >
                                <Minus className="w-4 h-4" />
                              </Button>
                              <span className="text-xl font-semibold w-12 text-center" data-testid={`quantity-${item.product.id}`}>
                                {item.quantity}
                              </span>
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => incrementQuantity(item.product.id, item.quantity)}
                                data-testid={`button-increase-${item.product.id}`}
                              >
                                <Plus className="w-4 h-4" />
                              </Button>
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => removeFromCart(item.product.id)}
                                className="text-destructive hover:bg-destructive/10"
                                data-testid={`button-remove-${item.product.id}`}
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                            <div className="text-right">
                              {price > 0 ? (
                                <>
                                  <p className="text-sm text-muted-foreground" data-testid={`unit-price-${item.product.id}`}>
                                    ${price.toFixed(2)} each
                                  </p>
                                  <p className="text-2xl font-bold text-primary" data-testid={`item-total-${item.product.id}`}>
                                    ${itemTotal.toFixed(2)}
                                  </p>
                                </>
                              ) : (
                                <p className="text-lg text-muted-foreground italic" data-testid={`item-total-${item.product.id}`}>
                                  Contact for price
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  );
                })}
              </div>

              <div className="lg:col-span-1">
                <GlassCard className="p-6 sticky top-24">
                  <h2 className="text-2xl font-bold text-foreground mb-6" data-testid="order-summary-title">
                    Order Summary
                  </h2>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground" data-testid="subtotal-label">Subtotal ({totalItems} items)</span>
                      <span className="font-semibold text-foreground" data-testid="subtotal-value">
                        ${totalPrice.toFixed(2)}
                      </span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-foreground" data-testid="total-label">Total</span>
                        <span className="text-2xl font-bold text-primary" data-testid="total-value">
                          ${totalPrice.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full gradient-primary text-white hover:opacity-90 transition-opacity mb-4" size="lg" asChild data-testid="button-proceed-checkout">
                    <Link href="/checkout">
                      <ArrowRight className="w-5 h-5 mr-2" />
                      Proceed to Checkout
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" size="lg" asChild data-testid="button-continue-shopping">
                    <Link href="/products">
                      <ArrowLeft className="w-5 h-5 mr-2" />
                      Continue Shopping
                    </Link>
                  </Button>
                </GlassCard>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cart;
