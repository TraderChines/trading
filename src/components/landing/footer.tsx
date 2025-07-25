import Link from 'next/link';
import { Send, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/icons/logo';

export function Footer() {
  return (
    <footer className="w-full py-8 mt-24 border-t border-white/10">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <div className="flex justify-center items-center gap-4 mb-4">
            <Logo className="h-8 w-8 text-primary" />
            <h3 className="font-headline text-xl font-bold text-white">TradeVision AI</h3>
        </div>
        <div className="flex justify-center space-x-4 mb-6">
          <Button asChild variant="ghost" size="icon">
            <Link href="https://t.me/TraderChinesVIP" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
              <Send className="h-6 w-6" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="h-6 w-6" />
            </Link>
          </Button>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} TradeVision AI. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
