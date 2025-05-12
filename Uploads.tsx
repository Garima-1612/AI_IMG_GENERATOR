
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, Image, Trash2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/context/AuthContext';
import { DashboardHeader } from '@/components/DashboardHeader';
import { DashboardSidebar } from '@/components/DashboardSidebar';
import { supabase } from '@/integrations/supabase/client';

interface UploadedImage {
  id: string;
  name: string;
  url: string;
  created_at: string;
}

const Uploads = () => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [uploading, setUploading] = useState(false);
  const [uploads, setUploads] = useState<UploadedImage[]>([]);
  
  // Redirect if not authenticated
  if (!isLoading && !isAuthenticated) {
    navigate('/login');
    return null;
  }
  
  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (!e.target.files || e.target.files.length === 0) {
        return;
      }
      
      const file = e.target.files[0];
      setUploading(true);
      
      // In a real implementation, you'd upload this to Supabase Storage
      toast({
        title: "Upload successful",
        description: `${file.name} has been uploaded.`,
      });
      
      // Add to local state (demo only)
      const newUpload: UploadedImage = {
        id: crypto.randomUUID(),
        name: file.name,
        url: URL.createObjectURL(file),
        created_at: new Date().toISOString(),
      };
      
      setUploads(prev => [newUpload, ...prev]);
    } catch (error) {
      console.error("Error uploading file:", error);
      toast({
        variant: "destructive",
        title: "Upload failed",
        description: "There was a problem uploading your file.",
      });
    } finally {
      setUploading(false);
    }
  };
  
  const handleDelete = (id: string) => {
    setUploads(prev => prev.filter(upload => upload.id !== id));
    toast({
      title: "File deleted",
      description: "The file has been removed from your uploads.",
    });
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <DashboardHeader />
      
      <div className="flex flex-1">
        <DashboardSidebar />
        
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold mb-6">My Uploads</h1>
          
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg">
                <Upload className="h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-lg font-medium mb-2">Upload new images</h3>
                <p className="text-sm text-gray-500 mb-4 text-center">
                  Drag and drop your images here, or click to select files
                </p>
                <Button
                  variant="default"
                  className="relative bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                  disabled={uploading}
                >
                  {uploading ? "Uploading..." : "Select File"}
                  <input
                    type="file"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={handleUpload}
                    accept="image/*"
                    disabled={uploading}
                  />
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {uploads.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {uploads.map(upload => (
                <Card key={upload.id} className="overflow-hidden">
                  <div className="relative aspect-square bg-gray-100">
                    <img
                      src={upload.url}
                      alt={upload.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-3">
                    <div className="flex justify-between items-center">
                      <p className="text-sm truncate flex-1">{upload.name}</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        onClick={() => handleDelete(upload.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
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
                <h3 className="text-xl font-medium mb-2">No uploads yet</h3>
                <p className="text-gray-500 mb-6 text-center max-w-sm">
                  Upload your first image to get started with your creative projects.
                </p>
              </CardContent>
            </Card>
          )}
        </main>
      </div>
    </div>
  );
};

export default Uploads;
