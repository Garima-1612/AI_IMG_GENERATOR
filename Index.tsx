
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Image } from 'lucide-react';

const Index = () => {
  const [activeImage, setActiveImage] = useState(0);
  const sampleImages = [
    '/sample1.png',
    '/sample2.png',
    '/sample3.png',
    '/sample4.png',
  ];

  // Demo images - in a real app these would be actual AI-generated images
  const demoImages = [
    { prompt: "A futuristic cityscape with flying cars", url: "https://images.unsplash.com/photo-1480796927426-f609979314bd" },
    { prompt: "An enchanted forest with glowing mushrooms", url: "https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1" },
    { prompt: "A serene beach at sunset", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
    { prompt: "Abstract digital art with vibrant colors", url: "https://images.unsplash.com/photo-1549490349-8643362247b5" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Nav */}
      <header className="w-full py-4 px-6 md:px-10 border-b bg-white/80 backdrop-blur-sm fixed top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center">
              <Image size={20} className="text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">PixelMuse</h1>
          </div>
          <div className="flex gap-4 items-center">
            <nav className="hidden md:flex gap-6">
              <a href="#features" className="text-sm text-gray-600 hover:text-gray-900 transition">Features</a>
              <a href="#gallery" className="text-sm text-gray-600 hover:text-gray-900 transition">Gallery</a>
              <a href="#how-it-works" className="text-sm text-gray-600 hover:text-gray-900 transition">How It Works</a>
            </nav>
            <div className="flex gap-3">
              <Link to="/login">
                <Button variant="outline" className="shadow-sm">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 shadow-md">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Transform Your <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Ideas</span> Into Stunning Images
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Create beautiful, unique images with the power of AI. Simply describe what you want, and watch your imagination come to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup">
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 shadow-lg w-full sm:w-auto">
                    Get Started Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href="#gallery">
                  <Button variant="outline" size="lg" className="shadow-sm w-full sm:w-auto">
                    View Gallery
                  </Button>
                </a>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="w-full aspect-square md:aspect-[4/3] bg-gradient-to-br from-purple-100 to-blue-50 rounded-2xl p-4 shadow-xl">
                <div className="grid grid-cols-2 gap-4 h-full">
                  {demoImages.slice(0, 4).map((image, index) => (
                    <div key={index} className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group">
                      <img 
                        src={image.url} 
                        alt={image.prompt}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <p className="p-3 text-xs text-white">{image.prompt}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full blur-2xl opacity-30"></div>
              <div className="absolute -left-4 -bottom-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 md:px-10 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Amazing <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Features</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "High-Quality Generation",
                description: "Create stunning, detailed images with our state-of-the-art AI model trained on millions of images."
              },
              {
                title: "Fast Results",
                description: "Get your images in seconds, not minutes. Our optimized infrastructure ensures rapid generation times."
              },
              {
                title: "Unlimited Creativity",
                description: "No boundaries or restrictions. If you can describe it, our AI can visualize it for you."
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Image <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Gallery</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore the incredible possibilities with our AI image generator. These examples were created using simple text prompts.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { prompt: "A cyberpunk cityscape at night with neon lights", url: "https://images.unsplash.com/photo-1555680202-c86f0e12f086" },
              { prompt: "A cute robot playing with a kitten", url: "https://images.unsplash.com/photo-1589254065909-b7086229d08c" },
              { prompt: "An underwater city with mermaids", url: "https://images.unsplash.com/photo-1682687982501-1e58ab814714" },
              { prompt: "A floating island with waterfalls", url: "https://images.unsplash.com/photo-1433086966358-54859d0ed716" },
              { prompt: "A magical library with books flying around", url: "https://images.unsplash.com/photo-1507842217343-583bb7270b66" },
              { prompt: "A steampunk airship in the clouds", url: "https://images.unsplash.com/photo-1527489377706-5bf97e608852" },
            ].map((image, index) => (
              <div 
                key={index} 
                className="group relative aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img 
                  src={image.url} 
                  alt={image.prompt}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <p className="text-white font-medium mb-2">"{image.prompt}"</p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white">AI Generated</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 px-4 md:px-10 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            How It <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Works</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Sign Up",
                description: "Create your account in seconds. No credit card required to start."
              },
              {
                step: "2",
                title: "Describe Your Image",
                description: "Use natural language to describe the image you want to create."
              },
              {
                step: "3",
                title: "Get Results",
                description: "Within seconds, your AI-generated image will be ready to download and share."
              }
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-10">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to create amazing images?</h2>
              <p className="text-purple-100 mb-6 md:mb-0">
                Join thousands of creators using PixelMuse to bring their imagination to life.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <Link to="/signup">
                <Button size="lg" className="w-full md:w-auto bg-white text-purple-600 hover:bg-purple-50">
                  Start Creating Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-10 bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center">
                  <Image size={16} className="text-white" />
                </div>
                <h1 className="text-lg font-bold">PixelMuse</h1>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Transform your ideas into stunning visuals with the power of AI.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-sm text-gray-600 hover:text-gray-900">Features</a></li>
                <li><a href="#gallery" className="text-sm text-gray-600 hover:text-gray-900">Gallery</a></li>
                <li><a href="#how-it-works" className="text-sm text-gray-600 hover:text-gray-900">How It Works</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/terms" className="text-sm text-gray-600 hover:text-gray-900">Terms of Service</Link></li>
                <li><Link to="/privacy" className="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Account</h3>
              <ul className="space-y-2">
                <li><Link to="/login" className="text-sm text-gray-600 hover:text-gray-900">Login</Link></li>
                <li><Link to="/signup" className="text-sm text-gray-600 hover:text-gray-900">Sign Up</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              © {new Date().getFullYear()} PixelMuse. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
