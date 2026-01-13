import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useUser } from '@/contexts/UserContext';
import { UserRole } from '@/types/user';
import { useNavigate } from 'react-router-dom';
import { Shield, BookOpen, GraduationCap, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const roles: { role: UserRole; label: string; icon: React.ElementType }[] = [
  { role: 'admin', label: 'Administrator', icon: Shield },
  { role: 'faculty', label: 'Faculty', icon: BookOpen },
  { role: 'student', label: 'Student', icon: GraduationCap },
  { role: 'parent', label: 'Parent', icon: Users },
];

export const LoginModal = ({ open, onOpenChange }: LoginModalProps) => {
  const { login } = useUser();
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<UserRole>('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(selectedRole);
    onOpenChange(false);
    navigate('/dashboard');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">Portal Login</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleLogin} className="space-y-6 pt-4">
          {/* Role Selection */}
          <div className="space-y-2">
            <Label>Select Role</Label>
            <div className="grid grid-cols-2 gap-2">
              {roles.map(({ role, label, icon: Icon }) => (
                <button
                  key={role}
                  type="button"
                  onClick={() => setSelectedRole(role)}
                  className={cn(
                    "flex items-center gap-2 rounded-lg border-2 p-3 text-left transition-all",
                    selectedRole === role
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  )}
                >
                  <Icon className={cn("h-5 w-5", selectedRole === role ? "text-primary" : "text-muted-foreground")} />
                  <span className={cn("text-sm font-medium", selectedRole === role ? "text-primary" : "text-foreground")}>
                    {label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button type="submit" variant="hero" className="w-full" size="lg">
            Sign In
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            Forgot password? <a href="#" className="text-primary hover:underline">Reset here</a>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};
