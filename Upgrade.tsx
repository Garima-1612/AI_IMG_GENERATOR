
import { useState } from 'react';
import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$8",
    features: [
      "50 AI image generations per month",
      "720p image resolution",
      "Basic art styles",
      "24-hour support response time"
    ]
  },
  {
    name: "Premium",
    price: "$19",
    features: [
      "200 AI image generations per month",
      "4K image resolution",
      "Advanced art styles",
      "Priority support",
      "Commercial usage rights"
    ]
  },
  {
    name: "Enterprise",
    price: "$49",
    features: [
      "Unlimited AI image generations",
      "8K image resolution",
      "All art styles",
      "Custom art style training",
      "Instant support response",
      "API access"
    ]
  }
];

const Upgrade = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleUpgrade = async (plan: string) => {
    setSelectedPlan(plan);
    // TODO: Implement Stripe integration for payment processing
    console.log(`Upgrading to ${plan} plan`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <DashboardHeader />
      
      <div className="flex flex-1">
        <DashboardSidebar />
        
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">Upgrade Your Plan</h1>
            <p className="text-gray-600 mb-8">Choose the perfect plan for your creative needs</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((plan) => (
                <Card key={plan.name} className={`relative ${
                  plan.name === "Premium" ? "border-purple-400 shadow-lg" : ""
                }`}>
                  {plan.name === "Premium" && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <CardHeader>
                    <CardTitle className="flex flex-col items-center">
                      <h3 className="text-xl font-bold">{plan.name}</h3>
                      <div className="mt-4">
                        <span className="text-3xl font-bold">{plan.price}</span>
                        <span className="text-gray-600">/month</span>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                      onClick={() => handleUpgrade(plan.name)}
                      disabled={selectedPlan === plan.name}
                    >
                      {selectedPlan === plan.name ? "Processing..." : `Upgrade to ${plan.name}`}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Upgrade;
