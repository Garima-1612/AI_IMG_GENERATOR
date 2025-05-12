
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { useToast } from "@/components/ui/use-toast";
import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Creation {
  id: string;
  image_url: string;
  prompt: string;
  created_at: string;
}

const Creations = () => {
  const { toast } = useToast();
  
  const { data: creations, isLoading } = useQuery({
    queryKey: ['creations'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('creations')
        .select('*')
        .order('created_at', { ascending: false });
        
      if (error) throw error;
      return data as Creation[];
    }
  });

  const handleDownload = (imageUrl: string) => {
    window.open(imageUrl, '_blank');
    toast({
      title: "Download started",
      description: "Your image is being downloaded.",
    });
  };

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-purple-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <DashboardHeader />
      
      <div className="flex flex-1">
        <DashboardSidebar />
        
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold mb-6">My Creations</h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {creations?.length === 0 ? (
              <Card className="col-span-full">
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <p className="text-lg text-gray-500 mb-4">No creations yet</p>
                  <Button variant="outline" onClick={() => window.location.href = '/dashboard'}>
                    Create your first image
                  </Button>
                </CardContent>
              </Card>
            ) : (
              creations?.map((creation) => (
                <Card key={creation.id} className="overflow-hidden">
                  <div className="relative aspect-square">
                    <img 
                      src={creation.image_url} 
                      alt={creation.prompt} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm line-clamp-2 mb-4">{creation.prompt}</p>
                    <div className="flex justify-between items-center">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleDownload(creation.image_url)}
                      >
                        <Download size={14} className="mr-1" /> Download
                      </Button>
                      <span className="text-xs text-gray-500">
                        {new Date(creation.created_at).toLocaleDateString()}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Creations;
