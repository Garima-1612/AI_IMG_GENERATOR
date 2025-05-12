
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Image } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="w-full py-4 px-6 md:px-10 border-b bg-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center">
              <Image size={16} className="text-white" />
            </div>
            <h1 className="text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">PixelMuse</h1>
          </Link>
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
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-slate max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <h2>1. Introduction</h2>
          <p>Welcome to PixelMuse ("we," "our," or "us"). By accessing or using our AI image generation service and website (the "Service"), you agree to comply with and be bound by the following terms and conditions ("Terms"). Please read these Terms carefully before using our Service.</p>

          <h2>2. Acceptance of Terms</h2>
          <p>By accessing or using our Service, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Service.</p>

          <h2>3. Changes to Terms</h2>
          <p>We reserve the right to modify these Terms at any time, effective upon posting on our website. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.</p>

          <h2>4. User Accounts</h2>
          <p>To use certain features of our Service, you may need to create an account. You are responsible for maintaining the confidentiality of your account information and password. You agree to notify us immediately of any unauthorized use of your account.</p>

          <h2>5. User Content</h2>
          <p>By submitting prompts or other content to our Service, you:
            <ul>
              <li>Represent that you have all necessary rights to submit such content</li>
              <li>Grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute such content in connection with providing the Service</li>
              <li>Acknowledge that we cannot guarantee that all generated images will be unique or free from third-party rights</li>
            </ul>
          </p>

          <h2>6. Prohibited Uses</h2>
          <p>You agree not to use the Service to:
            <ul>
              <li>Generate, upload, or share content that is illegal, fraudulent, misleading, deceptive, threatening, abusive, harassing, or defamatory</li>
              <li>Generate pornographic, sexually explicit, or excessively violent images</li>
              <li>Infringe upon any third-party intellectual property rights</li>
              <li>Create images that impersonate specific individuals without consent</li>
              <li>Attempt to deceive or mislead others through generated images</li>
              <li>Circumvent any technological measures implemented to protect the Service</li>
            </ul>
          </p>

          <h2>7. Intellectual Property Rights</h2>
          <p>We retain ownership of all intellectual property rights related to the Service, including the AI models, software, and technology. For generated images, ownership rights are governed by our specific plan terms. Generally, basic personal use rights are granted to you for generated images, while we retain all other rights.</p>

          <h2>8. Disclaimer of Warranties</h2>
          <p>THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. WE EXPRESSLY DISCLAIM ALL WARRANTIES, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>

          <h2>9. Limitation of Liability</h2>
          <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF THE SERVICE.</p>

          <h2>10. Indemnification</h2>
          <p>You agree to defend, indemnify, and hold harmless PixelMuse and our affiliates, officers, agents, and employees from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses arising from your use of the Service or your violation of these Terms.</p>

          <h2>11. Termination</h2>
          <p>We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the Service will immediately cease.</p>

          <h2>12. Governing Law</h2>
          <p>These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions.</p>

          <h2>13. Contact Information</h2>
          <p>If you have any questions about these Terms, please contact us at support@pixelmuse.example.com</p>
        </div>
        
        <div className="mt-12 flex justify-between">
          <Link to="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
          <Link to="/privacy">
            <Button variant="outline">Privacy Policy</Button>
          </Link>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="py-6 px-6 bg-gray-100 border-t">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} PixelMuse. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Terms;
