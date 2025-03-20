
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CreditCard, Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { IntegrationCard } from "@/components/integrations/IntegrationCard";
import { IntegrationCategories } from "@/components/integrations/IntegrationCategories";

const Integrations = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
        <h2 className="text-2xl font-medium flex items-center gap-2">
          <CreditCard className="h-6 w-6 text-primary" />
          <span>Integrations</span>
        </h2>
        <div className="flex gap-2 w-full md:w-auto">
          <div className="relative flex-grow md:flex-grow-0 md:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search integrations..." 
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button
            variant="default"
            size="default"
            className="gap-1"
          >
            <Plus className="h-4 w-4" />
            <span>Add New</span>
          </Button>
        </div>
      </div>

      <IntegrationCategories />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <IntegrationCard 
          title="Shopify"
          description="Connect your Shopify store to sync orders, products, and customer data."
          status="connected"
          logo="/placeholder.svg"
        />
        <IntegrationCard 
          title="Stripe"
          description="Integrate with Stripe for payment data, subscription insights, and financial metrics."
          status="connected"
          logo="/placeholder.svg"
        />
        <IntegrationCard 
          title="Google Analytics"
          description="Import analytics data to correlate website behavior with revenue performance."
          status="disconnected"
          logo="/placeholder.svg"
        />
        <IntegrationCard 
          title="Klaviyo"
          description="Connect your email marketing platform to analyze campaign performance and impact."
          status="disconnected"
          logo="/placeholder.svg"
        />
        <IntegrationCard 
          title="ReCharge"
          description="Integrate subscription data to monitor recurring revenue patterns and churn."
          status="disconnected"
          logo="/placeholder.svg"
        />
        <IntegrationCard 
          title="Facebook Ads"
          description="Import ad performance data to correlate marketing spend with revenue outcomes."
          status="disconnected"
          logo="/placeholder.svg"
        />
      </div>
    </div>
  );
};

export default Integrations;
