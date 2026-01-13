import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LoginModal } from '@/components/LoginModal';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import campusHero from '@/assets/campus-hero.jpg';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Trophy, 
  Microscope, 
  Palette, 
  Scale, 
  Cpu,
  Building,
  Globe,
  Award,
  Clock,
  ChevronRight,
  Play
} from 'lucide-react';

const programs = [
  { icon: Cpu, title: 'Engineering & Technology', description: 'Computer Science, Electrical, Mechanical, Civil Engineering' },
  { icon: Microscope, title: 'Sciences', description: 'Physics, Chemistry, Biology, Mathematics, Environmental Science' },
  { icon: Scale, title: 'Business & Law', description: 'MBA, Finance, Marketing, Corporate Law, International Business' },
  { icon: Palette, title: 'Arts & Humanities', description: 'Fine Arts, Literature, History, Philosophy, Languages' },
];

const stats = [
  { value: '15,000+', label: 'Students', icon: Users },
  { value: '500+', label: 'Faculty', icon: GraduationCap },
  { value: '50+', label: 'Programs', icon: BookOpen },
  { value: '95%', label: 'Placement Rate', icon: Trophy },
];

const Index = () => {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0">
          <img 
            src={campusHero} 
            alt="University Campus" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sidebar/95 via-sidebar/70 to-transparent" />
        </div>
        <div className="container relative mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-accent/20 text-accent rounded-full animate-fade-in">
              Applications Open for 2024-25
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-slide-up">
              Shape Your Future at{' '}
              <span className="text-accent">EduConnect</span> University
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed animate-slide-up" style={{ animationDelay: '100ms' }}>
              Discover a world-class education that prepares you for tomorrow's challenges. 
              Join our community of innovators, leaders, and changemakers.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
              <Button variant="hero" size="xl" onClick={() => setLoginOpen(true)}>
                Portal Login
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Play className="mr-2 h-5 w-5" />
                Virtual Tour
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary-foreground/80" />
                <p className="text-3xl md:text-4xl font-bold text-primary-foreground">{stat.value}</p>
                <p className="text-primary-foreground/70 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <span className="text-accent font-semibold">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                Excellence in Education Since 1965
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                For over five decades, EduConnect University has been at the forefront of academic excellence, 
                producing graduates who lead in their fields and make meaningful contributions to society.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our commitment to innovation, research, and holistic development ensures that every student 
                receives an education that prepares them not just for careers, but for life.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">NAAC A++ Accredited</p>
                    <p className="text-sm text-muted-foreground">Highest grade certification</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Global Recognition</p>
                    <p className="text-sm text-muted-foreground">Partnerships in 30+ countries</p>
                  </div>
                </div>
              </div>
              <Button className="mt-8" variant="default" size="lg">
                Learn More About Us
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative animate-slide-up" style={{ animationDelay: '200ms' }}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={campusHero} 
                  alt="Campus Life" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">58+</p>
                    <p className="text-sm text-muted-foreground">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="academics" className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-semibold">Academic Programs</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              Explore Our Diverse Programs
            </h2>
            <p className="mt-4 text-muted-foreground">
              Choose from over 50 undergraduate and postgraduate programs designed to prepare you for success.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <Card 
                key={program.title} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <program.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{program.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{program.description}</p>
                  <a href="#" className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline">
                    View Programs <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions CTA */}
      <section id="admissions" className="py-24 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Begin Your Journey?
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Applications for the 2024-25 academic year are now open. Join thousands of students who have chosen EduConnect University.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="xl" className="bg-white text-primary hover:bg-white/90">
              Apply Now
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              Download Prospectus
            </Button>
          </div>
        </div>
      </section>

      {/* Campus Life */}
      <section id="campus" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-semibold">Campus Life</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              Life Beyond Academics
            </h2>
            <p className="mt-4 text-muted-foreground">
              Experience a vibrant campus community with state-of-the-art facilities, clubs, sports, and cultural activities.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] animate-slide-up">
              <img src={campusHero} alt="Sports" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <Building className="h-8 w-8 text-white mb-2" />
                <h3 className="text-xl font-bold text-white">Modern Facilities</h3>
                <p className="text-white/70 text-sm mt-1">State-of-the-art labs and libraries</p>
              </div>
            </div>
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] animate-slide-up" style={{ animationDelay: '100ms' }}>
              <img src={campusHero} alt="Culture" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <Trophy className="h-8 w-8 text-white mb-2" />
                <h3 className="text-xl font-bold text-white">Sports & Athletics</h3>
                <p className="text-white/70 text-sm mt-1">50+ sports teams and clubs</p>
              </div>
            </div>
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] animate-slide-up" style={{ animationDelay: '200ms' }}>
              <img src={campusHero} alt="Events" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <Palette className="h-8 w-8 text-white mb-2" />
                <h3 className="text-xl font-bold text-white">Cultural Events</h3>
                <p className="text-white/70 text-sm mt-1">Festivals, performances & more</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-accent font-semibold">Get in Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              Have Questions? We're Here to Help
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our admissions team is ready to assist you with any queries about programs, fees, or campus life.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg">
                Contact Admissions
              </Button>
              <Button variant="outline" size="lg">
                Schedule a Campus Visit
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <LoginModal open={loginOpen} onOpenChange={setLoginOpen} />
    </div>
  );
};

export default Index;
