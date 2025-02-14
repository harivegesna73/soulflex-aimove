
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera } from "lucide-react";

const Practice = () => {
  const handleCameraStart = () => {
    // Camera permission and initialization will be implemented here
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Yoga Practice</h1>
        
        <Card className="p-8 text-center">
          <div className="mb-6">
            <Camera className="w-16 h-16 mx-auto text-primary mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Start Your Practice Session</h2>
            <p className="text-gray-600 mb-6">
              Get real-time feedback on your poses with our AI-powered analysis
            </p>
          </div>
          
          <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleCameraStart}>
            <Camera className="mr-2 h-4 w-4" />
            Enable Camera
          </Button>
        </Card>
      </div>
    </Layout>
  );
};

export default Practice;
