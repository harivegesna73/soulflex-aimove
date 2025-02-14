
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Camera } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold">Welcome to SoulFlex</h1>
            <p className="text-gray-600 mt-2">Your AI-powered yoga companion</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Camera className="mr-2 h-4 w-4" />
            Start Practice
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6 hover:shadow-lg transition-all">
            <h3 className="text-lg font-semibold mb-2">Live Pose Analysis</h3>
            <p className="text-gray-600 mb-4">Get real-time feedback on your yoga poses with AI assistance</p>
            <Button variant="outline" className="w-full">
              <Play className="mr-2 h-4 w-4" />
              Try Now
            </Button>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all">
            <h3 className="text-lg font-semibold mb-2">Meal Analysis</h3>
            <p className="text-gray-600 mb-4">Track your nutrition with our smart food recognition system</p>
            <Button variant="outline" className="w-full">
              <Camera className="mr-2 h-4 w-4" />
              Analyze Meal
            </Button>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all">
            <h3 className="text-lg font-semibold mb-2">Daily Meditation</h3>
            <p className="text-gray-600 mb-4">Find your inner peace with guided meditation sessions</p>
            <Button variant="outline" className="w-full">Start Session</Button>
          </Card>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Recent Progress</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="h-64 flex items-center justify-center text-gray-500">
              Progress chart will be implemented here
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
