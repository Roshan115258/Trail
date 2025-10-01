import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { ShoppingCart, CheckCircle } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useCartContext } from "@/lib/CartContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const checkoutSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().optional(),
  address: z.string().min(10, "Please enter your complete address"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  zip: z.string().min(3, "ZIP code is required"),
  country: z.string().min(2, "Country is required"),
  notes: z.string().optional(),
  honeypot: z.string().max(0, "Invalid submission"),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

const Checkout = () => {
  const [, setLocation] = useLocation();
  const { cartItems, totalItems, totalPrice, clearCart } = useCartContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderId] = useState(() => `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`);
  const [submitTimestamp] = useState(Date.now());

  const form = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      country: "",
      notes: "",
      honeypot: "",
    },
  });

  if (cartItems.length === 0 && !isSuccess) {
    return (
      <div className="min-h-screen">
        <Header />
        <section className="pt-32 pb-20 bg-gradient-to-br from-muted/30 via-background to-accent/20">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <div className="w-24 h-24 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-8">
              <ShoppingCart className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4" data-testid="empty-cart-title">
              Your Cart is Empty
            </h1>
            <p className="text-lg text-muted-foreground mb-8" data-testid="empty-cart-message">
              Please add items to your cart before checking out.
            </p>
            <Button className="gradient-primary text-white" size="lg" asChild data-testid="button-go-to-products">
              <Link href="/products">Browse Products</Link>
            </Button>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  const onSubmit = async (data: CheckoutFormData) => {
    const timeElapsed = Date.now() - submitTimestamp;
    
    if (timeElapsed < 3000) {
      form.setError("root", { message: "Please slow down and review your order" });
      return;
    }

    if (data.honeypot) {
      form.setError("root", { message: "Invalid submission" });
      return;
    }

    setIsSubmitting(true);

    const orderItems = cartItems.map((item) => ({
      productId: item.product.id,
      productTitle: item.product.title,
      quantity: item.quantity,
      unitPrice: item.product.price && Number.isFinite(parseFloat(item.product.price)) 
        ? parseFloat(item.product.price) 
        : 0,
      total: (item.product.price && Number.isFinite(parseFloat(item.product.price)) 
        ? parseFloat(item.product.price) 
        : 0) * item.quantity,
    }));

    const emailPayload = {
      ...data,
      orderId,
      orderDate: new Date().toISOString(),
      items: orderItems,
      totalItems,
      totalPrice: totalPrice.toFixed(2),
      formattedOrder: `
ORDER DETAILS
=============
Order ID: ${orderId}
Order Date: ${new Date().toLocaleString()}

CUSTOMER INFORMATION
====================
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
${data.company ? `Company: ${data.company}` : ""}

SHIPPING ADDRESS
================
${data.address}
${data.city}, ${data.state} ${data.zip}
${data.country}

ORDER ITEMS
===========
${orderItems.map((item, idx) => `
${idx + 1}. ${item.productTitle}
   Quantity: ${item.quantity}
   Unit Price: ₹${item.unitPrice.toLocaleString('en-IN')}
   Total: ₹${item.total.toLocaleString('en-IN')}
`).join("")}

ORDER SUMMARY
=============
Total Items: ${totalItems}
Total Amount: ₹${totalPrice.toLocaleString('en-IN')}

${data.notes ? `\nNOTES\n=====\n${data.notes}` : ""}
      `.trim(),
    };

    try {
      const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || "https://formspree.io/f/meorgyae";
      
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailPayload),
      });

      if (response.ok) {
        setIsSuccess(true);
        clearCart();
        form.reset();
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      form.setError("root", {
        message: "Failed to submit order. Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen">
        <Helmet>
          <title>Order Confirmed - Several Sustain</title>
          <meta name="robots" content="noindex,nofollow" />
        </Helmet>
        <Header />
        <section className="pt-32 pb-20 bg-gradient-to-br from-muted/30 via-background to-accent/20">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <div className="w-24 h-24 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-8" data-testid="success-icon">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4" data-testid="success-title">
              Order Confirmed!
            </h1>
            <p className="text-xl text-muted-foreground mb-2" data-testid="order-id">
              Order ID: <span className="font-mono font-bold">{orderId}</span>
            </p>
            <p className="text-lg text-muted-foreground mb-8" data-testid="success-message">
              Thank you for your order! We've sent a confirmation email to your inbox.
              Our team will contact you shortly to discuss next steps.
            </p>
            <Button className="gradient-primary text-white" size="lg" asChild data-testid="button-continue">
              <Link href="/">Continue Browsing</Link>
            </Button>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Checkout - Several Sustain</title>
        <meta name="description" content="Complete your order" />
        <meta name="robots" content="noindex,nofollow" />
        <link rel="canonical" href="https://severalsustain.in/checkout" />
      </Helmet>
      <Header />

      <section className="pt-32 pb-20 bg-gradient-to-br from-muted/30 via-background to-accent/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4" data-testid="checkout-title">
              Checkout
            </h1>
            <p className="text-xl text-muted-foreground" data-testid="order-id-label">
              Order ID: <span className="font-mono font-bold">{orderId}</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <GlassCard className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6" data-testid="shipping-info-title">
                  Shipping Information
                </h2>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Rajesh Kumar" {...field} data-testid="input-name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john@example.com" {...field} data-testid="input-email" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number *</FormLabel>
                            <FormControl>
                              <Input placeholder="+91 98765 43210" {...field} data-testid="input-phone" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="Company Name" {...field} data-testid="input-company" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Address *</FormLabel>
                          <FormControl>
                            <Input placeholder="123 MG Road, Sector 5" {...field} data-testid="input-address" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>City *</FormLabel>
                            <FormControl>
                              <Input placeholder="Patna" {...field} data-testid="input-city" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>State/Province *</FormLabel>
                            <FormControl>
                              <Input placeholder="Bihar" {...field} data-testid="input-state" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="zip"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>PIN Code *</FormLabel>
                            <FormControl>
                              <Input placeholder="800001" {...field} data-testid="input-zip" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Country *</FormLabel>
                            <FormControl>
                              <Input placeholder="India" {...field} data-testid="input-country" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="notes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Order Notes (Optional)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Any special requirements or notes..." 
                              className="min-h-[100px]" 
                              {...field} 
                              data-testid="input-notes"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="honeypot"
                      render={({ field }) => (
                        <FormItem className="hidden">
                          <FormControl>
                            <Input {...field} tabIndex={-1} autoComplete="off" />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    {form.formState.errors.root && (
                      <div className="text-destructive text-sm" data-testid="form-error">
                        {form.formState.errors.root.message}
                      </div>
                    )}

                    <Button
                      type="submit"
                      className="w-full gradient-primary text-white hover:opacity-90"
                      size="lg"
                      disabled={isSubmitting}
                      data-testid="button-place-order"
                    >
                      {isSubmitting ? "Processing..." : "Place Order"}
                    </Button>
                  </form>
                </Form>
              </GlassCard>
            </div>

            <div className="lg:col-span-1">
              <GlassCard className="p-6 sticky top-24">
                <h2 className="text-2xl font-bold text-foreground mb-6" data-testid="order-summary-title">
                  Order Summary
                </h2>
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => {
                    const price = item.product.price && Number.isFinite(parseFloat(item.product.price))
                      ? parseFloat(item.product.price)
                      : 0;
                    const itemTotal = price * item.quantity;

                    return (
                      <div key={item.product.id} className="flex justify-between items-start pb-4 border-b" data-testid={`summary-item-${item.product.id}`}>
                        <div className="flex-1">
                          <p className="font-semibold text-foreground" data-testid={`summary-title-${item.product.id}`}>
                            {item.product.title}
                          </p>
                          <p className="text-sm text-muted-foreground" data-testid={`summary-quantity-${item.product.id}`}>
                            Qty: {item.quantity}
                          </p>
                        </div>
                        <p className="font-semibold text-foreground" data-testid={`summary-total-${item.product.id}`}>
                          {price > 0 ? `₹${itemTotal.toLocaleString('en-IN')}` : "Contact"}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground" data-testid="summary-items-label">Items ({totalItems})</span>
                    <span className="font-semibold text-foreground" data-testid="summary-items-value">
                      ₹{totalPrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span className="text-foreground" data-testid="summary-total-label">Total</span>
                    <span className="text-primary" data-testid="summary-total-value">
                      ₹{totalPrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Checkout;
