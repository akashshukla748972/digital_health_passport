import { useNavigate } from "react-router-dom";
import {
  Shield,
  FileText,
  QrCode,
  MessageSquare,
  Heart,
  Activity,
  Lock,
} from "lucide-react";
import FeaturesCard from "../components/FeaturesCard";

const featuresCardData = [
  {
    Icon: FileText,
    title: "Medical Records",
    text: "Store and access all your medical documents securely. Upload prescriptions, lab reports, and scan results.",
    bgColor: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    Icon: QrCode,
    title: "Emergency QR Card",
    text: "Generate a QR code with your critical health information for emergency responders.",
    bgColor: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    Icon: MessageSquare,
    title: "AI Health Assistant",
    text: "Get instant health guidance and symptom information from our AI chatbot, available 24/7.",
    bgColor: "bg-secondary/10",
    iconColor: "text-secondary",
  },
  {
    Icon: Heart,
    title: "Role-Based Access",
    text: "Separate portals for patients, doctors, and administrators with appropriate permissions.",
    bgColor: "bg-secondary/10",
    iconColor: "text-secondary",
  },
  {
    Icon: Lock,
    title: "Secure & Private",
    text: "Bank-level encryption and secure authentication protect your sensitive health data.",
    bgColor: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    Icon: Activity,
    title: "Real-Time Access",
    text: "Access your health information anytime, anywhere, from any device with internet connection.",
    bgColor: "bg-primary/10",
    iconColor: "text-primary",
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-primary opacity-10"></div>
        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-4 bg-linear-to-br from-primary  to-primary-600/60 rounded-2xl shadow-medical">
                <Shield className="w-12 h-12 text-surface" />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-primary bg-clip-text text-transparent">
                Digital Health Passport
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-text-muted max-w-2xl mx-auto">
              Your comprehensive, secure health management platform. Access
              medical records, emergency information, and AI health
              assistance—all in one place.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <button
                size="lg"
                onClick={() => navigate("/dashboard")}
                className="shadow bg-linear-to-br from-primary  to-primary-600/90 px-6 py-2 rounded text-white/90"
              >
                Get Started
              </button>
              <button
                className="shadow bg-linear-to-br from-surface  to-white/90 px-6 py-2 rounded "
                onClick={() => navigate("/login")}
              >
                Sign In
              </button>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-text-muted mt-6">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4" />
                <span>End-to-end encrypted</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>HIPAA compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Everything You Need for Health Management
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuresCardData.map((item, index) => (
              <FeaturesCard
                key={index}
                Icon={item.Icon}
                title={item.title}
                text={item.text}
                bgColor={item.bgColor}
                iconColor={item.iconColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2D77FF] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),transparent_50%)]"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of users managing their health information securely
            and efficiently.
          </p>
          <button
            size="lg"
            variant="secondary"
            onClick={() => navigate("/auth")}
            className="shadow bg-success px-4 py-2 rounded text-white/90"
          >
            Create Your Free Account
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>
            &copy; 2025 Digital Health Passport. Your health, securely managed.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
