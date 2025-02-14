
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera, Utensils } from "lucide-react";

const Diet = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Diet Analysis</h1>
        
        <Card className="p-8 mb-8">
          <div className="text-center mb-6">
            <Camera className="w-16 h-16 mx-auto text-primary mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Analyze Your Meal</h2>
            <p className="text-gray-600">
              Take a photo of your meal to get instant nutritional information
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary/90 mx-auto block">
            <Camera className="mr-2 h-4 w-4" />
            Take Photo
          </Button>
        </Card>

        <h2 className="text-2xl font-semibold mb-4">Today's Meals</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <Utensils className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold">Breakfast</h3>
                <p className="text-gray-600 text-sm">8:00 AM</p>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <Utensils className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold">Lunch</h3>
                <p className="text-gray-600 text-sm">1:00 PM</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Diet;
