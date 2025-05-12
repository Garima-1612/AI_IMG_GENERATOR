
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Image } from 'lucide-react';

const Privacy = () => {
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
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-slate max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <p>This Privacy Policy explains how PixelMuse ("we", "our", or "us") collects, uses, and discloses your personal information when you use our AI image generation service (the "Service"). By using our Service, you agree to the collection and use of information in accordance with this policy.</p>

          <h2>1. Information We Collect</h2>
          
          <h3>1.1 Personal Information</h3>
          <p>We may collect the following types of personal information:</p>
          <ul>
            <li><strong>Account Information:</strong> When you register for an account, we collect your name, email address, and password.</li>
            <li><strong>User Content:</strong> The text prompts you submit to generate images.</li>
            <li><strong>Generated Images:</strong> The images created through our Service based on your prompts.</li>
            <li><strong>Payment Information:</strong> If you subscribe to our premium services, we collect payment details, which are processed by our trusted payment processors.</li>
          </ul>

          <h3>1.2 Usage Information</h3>
          <p>We automatically collect certain information about how you interact with our Service, including:</p>
          <ul>
            <li>Device information (e.g., device type, operating system)</li>
            <li>Log data (e.g., IP address, browser type, pages visited)</li>
            <li>Usage patterns (e.g., features used, time spent on the Service)</li>
            <li>Performance data (e.g., crashes, system activity)</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect for various purposes, including:</p>
          <ul>
            <li>Providing, maintaining, and improving our Service</li>
            <li>Processing and generating images based on your prompts</li>
            <li>Processing your payments and managing your account</li>
            <li>Sending you service-related notifications and updates</li>
            <li>Responding to your inquiries, comments, or questions</li>
            <li>Improving and training our AI models</li>
            <li>Monitoring and analyzing usage trends</li>
            <li>Detecting, preventing, and addressing technical issues and security threats</li>
            <li>Compliance with legal obligations</li>
          </ul>

          <h2>3. Sharing Your Information</h2>
          <p>We may share your personal information with:</p>
          <ul>
            <li><strong>Service Providers:</strong> Companies that perform services on our behalf, such as payment processing, data analysis, email delivery, and hosting services.</li>
            <li><strong>Business Partners:</strong> With your consent, we may share information with our business partners to offer you certain products, services, or promotions.</li>
            <li><strong>Legal Requirements:</strong> When required by law, such as in response to a subpoena, court order, or other legal process.</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, bankruptcy, or sale of assets, your information may be transferred as a business asset.</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or method of electronic storage is 100% secure.</p>

          <h2>5. Your Rights</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information, which may include:</p>
          <ul>
            <li>Access to your personal information</li>
            <li>Correction of inaccurate or incomplete information</li>
            <li>Deletion of your personal information</li>
            <li>Restriction or objection to processing</li>
            <li>Data portability</li>
            <li>Withdrawal of consent</li>
          </ul>
          <p>To exercise these rights, please contact us using the information in the "Contact Us" section below.</p>

          <h2>6. Children's Privacy</h2>
          <p>Our Service is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.</p>

          <h2>7. Changes to This Privacy Policy</h2>
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>

          <h2>8. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p>Email: privacy@pixelmuse.example.com</p>
        </div>
        
        <div className="mt-12 flex justify-between">
          <Link to="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
          <Link to="/terms">
            <Button variant="outline">Terms of Service</Button>
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

export default Privacy;
