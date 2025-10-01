
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GlassCard } from "@/components/ui/glass-card";
import { useToast } from "@/hooks/use-toast";

const SMTPTest = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const testSMTP = async () => {
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter an email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/test-smtp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Success!",
          description: "Test email sent successfully. Check your inbox.",
        });
      } else {
        toast({
          title: "Error",
          description: data.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send test email",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-muted/30 via-background to-accent/20">
      <GlassCard className="p-8 max-w-md w-full mx-4">
        <h1 className="text-2xl font-bold text-center mb-6">SMTP Configuration Test</h1>
        <div className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            onClick={testSMTP}
            disabled={isLoading}
            className="w-full"
          >
            {isLoading ? "Sending..." : "Send Test Email"}
          </Button>
        </div>
        <div className="mt-6 text-sm text-muted-foreground">
          <p className="font-semibold mb-2">Current SMTP Configuration:</p>
          <ul className="space-y-1">
            <li>• Service: Zoho Mail</li>
            <li>• Host: smtp.zoho.com</li>
            <li>• Port: 587</li>
            <li>• Security: STARTTLS</li>
          </ul>
        </div>
      </GlassCard>
    </div>
  );
};

export default SMTPTest;
