import { Code2, Github, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Code2 className="h-6 w-6" />
              <span className="font-semibold">HackathonHub</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Empowering innovation through collaborative hackathons
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/hackathons">Browse Hackathons</Link></li>
              <li><Link href="/resources">Resources</Link></li>
              <li><Link href="/leaderboard">Leaderboard</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/help">Help Center</Link></li>
              <li><Link href="/guidelines">Guidelines</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/code-of-conduct">Code of Conduct</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t flex items-center justify-between text-sm text-muted-foreground">
          <p>© 2024 HackathonHub. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="https://twitter.com" className="hover:text-foreground">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="https://github.com" className="hover:text-foreground">
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}