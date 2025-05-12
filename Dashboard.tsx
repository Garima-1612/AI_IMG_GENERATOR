
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Download, Image, ArrowRight, Loader2 } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { useAuth } from '@/context/AuthContext';
import { DashboardHeader } from '@/components/DashboardHeader';
import { DashboardSidebar } from '@/components/DashboardSidebar';

interface GeneratedImage {
  id: string;
  url: string;
  prompt: string;
  timestamp: Date;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, isLoading } = useAuth();
  const [isGenerating, setIsGenerating] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [settings, setSettings] = useState({
    style: 'realistic',
    aspectRatio: '1:1',
    quality: 75,
    negativePrompt: '',
  });
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([]);

  // Redirect if no user (not logged in) after loading completes
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, isLoading, navigate]);

  // Show loading state while auth is being checked
  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-12 w-12 text-purple-600 animate-spin" />
          <p className="text-lg font-medium">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  // Dummy data for recent generations (in a real app, this would come from the database)
  const recentGenerations = [
    {
      id: '1',
      url: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714',
      prompt: 'A beautiful sunset over the ocean with palm trees',
      timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    },
    {
      id: '2',
      url: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66',
      prompt: 'A magical library with books flying around',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    }
  ];

  const handleGenerateImage = async () => {
    if (!prompt.trim()) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter a prompt before generating",
      });
      return;
    }

    setIsGenerating(true);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // For demo, use a stock image
      const demoImages = [
        "https://images.unsplash.com/photo-1493612276216-ee3925520721",
        "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d",
        "https://images.unsplash.com/photo-1505142468610-359e7d316be0",
      ];
      
      const newImage: GeneratedImage = {
        id: crypto.randomUUID(),
        url: demoImages[Math.floor(Math.random() * demoImages.length)],
        prompt: prompt,
        timestamp: new Date(),
      };
      
      setGeneratedImages(prev => [newImage, ...prev]);
      
      toast({
        title: "Image generated!",
        description: "Your image was successfully created.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Generation failed",
        description: "There was an error generating your image. Please try again.",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = (imageUrl: string) => {
    // In a real app, this would download the actual image
    toast({
      title: "Download started",
      description: "Your image is being downloaded.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <DashboardHeader />
      
      <div className="flex flex-1">
        <DashboardSidebar />
        
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold mb-6">Create Images</h1>
          
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left side - prompt and settings */}
            <div className="w-full md:w-2/5 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="prompt" className="text-lg font-medium">Prompt</Label>
                      <Textarea
                        id="prompt"
                        placeholder="Describe the image you want to create..."
                        className="min-h-32 mt-2"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                      />
                    </div>
                    
                    <div className="pt-4 border-t">
                      <h3 className="text-lg font-medium mb-4">Settings</h3>
                      
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <Label>Style</Label>
                          <div className="grid grid-cols-4 gap-2">
                            {['realistic', 'artistic', 'anime', 'abstract'].map(style => (
                              <Button
                                key={style}
                                variant={settings.style === style ? "default" : "outline"}
                                className="w-full capitalize"
                                onClick={() => setSettings({...settings, style})}
                              >
                                {style}
                              </Button>
                            ))}
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Aspect Ratio</Label>
                          <div className="grid grid-cols-3 gap-2">
                            {['1:1', '16:9', '4:5'].map(ratio => (
                              <Button
                                key={ratio}
                                variant={settings.aspectRatio === ratio ? "default" : "outline"}
                                className="w-full"
                                onClick={() => setSettings({...settings, aspectRatio: ratio})}
                              >
                                {ratio}
                              </Button>
                            ))}
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <Label>Quality</Label>
                            <span className="text-sm text-gray-500">{settings.quality}%</span>
                          </div>
                          <Slider
                            min={25}
                            max={100}
                            step={25}
                            value={[settings.quality]}
                            onValueChange={(value) => setSettings({...settings, quality: value[0]})}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="negativePrompt">Negative Prompt (Optional)</Label>
                          <Input
                            id="negativePrompt"
                            placeholder="Elements to avoid in the image..."
                            value={settings.negativePrompt}
                            onChange={(e) => setSettings({...settings, negativePrompt: e.target.value})}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <Button
                      onClick={handleGenerateImage}
                      disabled={isGenerating || !prompt.trim()}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                    >
                      {isGenerating ? "Generating..." : "Generate Image"}
                      {!isGenerating && <ArrowRight className="ml-2 h-4 w-4" />}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Right side - results and history */}
            <div className="w-full md:w-3/5">
              <Tabs defaultValue="generated">
                <TabsList className="w-full mb-6">
                  <TabsTrigger value="generated" className="flex-1">Generated Images</TabsTrigger>
                  <TabsTrigger value="history" className="flex-1">History</TabsTrigger>
                </TabsList>
                
                <TabsContent value="generated" className="m-0">
                  {generatedImages.length === 0 ? (
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center py-12">
                        <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                          <Image size={24} className="text-gray-400" />
                        </div>
                        <h3 className="text-xl font-medium mb-2">No images generated yet</h3>
                        <p className="text-gray-500 mb-6 text-center max-w-sm">
                          Enter a descriptive prompt and click "Generate Image" to create your first AI-generated image.
                        </p>
                      </CardContent>
                    </Card>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {generatedImages.map(image => (
                        <Card key={image.id} className="overflow-hidden">
                          <div className="relative aspect-square">
                            <img 
                              src={image.url} 
                              alt={image.prompt} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <CardContent className="p-4">
                            <p className="text-sm line-clamp-2 mb-4">{image.prompt}</p>
                            <div className="flex justify-between items-center">
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => handleDownload(image.url)}
                              >
                                <Download size={14} className="mr-1" /> Download
                              </Button>
                              <span className="text-xs text-gray-500">
                                {image.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="history" className="m-0">
                  {recentGenerations.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {recentGenerations.map(image => (
                        <Card key={image.id} className="overflow-hidden">
                          <div className="relative aspect-square">
                            <img 
                              src={image.url} 
                              alt={image.prompt} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <CardContent className="p-4">
                            <p className="text-sm line-clamp-2 mb-4">{image.prompt}</p>
                            <div className="flex justify-between items-center">
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => handleDownload(image.url)}
                              >
                                <Download size={14} className="mr-1" /> Download
                              </Button>
                              <span className="text-xs text-gray-500">
                                {image.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center py-12">
                        <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                          <Image size={24} className="text-gray-400" />
                        </div>
                        <h3 className="text-xl font-medium mb-2">No generation history</h3>
                        <p className="text-gray-500 mb-6 text-center max-w-sm">
                          Your previous generations will appear here once you start creating images.
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
