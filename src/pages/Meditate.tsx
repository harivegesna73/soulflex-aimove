
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Moon, Sun } from "lucide-react";

const Meditate = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Meditation</h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <Sun className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-semibold">Morning Meditation</h2>
            </div>
            <p className="text-gray-600 mb-4">Start your day with a peaceful 10-minute guided meditation</p>
            <Button variant="outline" className="w-full">
              <Play className="mr-2 h-4 w-4" />
              Begin Session
            </Button>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <Moon className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-semibold">Evening Relaxation</h2>
            </div>
            <p className="text-gray-600 mb-4">Wind down with a calming 15-minute meditation session</p>
            <Button variant="outline" className="w-full">
              <Play className="mr-2 h-4 w-4" />
              Begin Session
            </Button>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Meditate;
