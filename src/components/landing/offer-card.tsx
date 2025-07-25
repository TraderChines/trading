"use client";

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface OfferCardProps {
  icon: React.ReactNode;
  step: string;
  title: string;
  description: string;
  price: string;
  parcelPrice?: string;
  ctaText: string;
  ctaLink: string;
  ctaVariant?: 'default' | 'accent' | 'secondary' | 'outline';
  features?: string[];
  className?: string;
}

export function OfferCard({
  icon,
  step,
  title,
  description,
  price,
  parcelPrice,
  ctaText,
  ctaLink,
  ctaVariant = 'default',
  features,
  className
}: OfferCardProps) {
  return (
    <Card className={cn("border-2 border-border/50 bg-card/80 backdrop-blur-sm shadow-2xl shadow-black/20 flex flex-col h-full", className)}>
      <CardHeader className="items-start">
        <div className="flex flex-col items-start gap-4">
            <div className='flex items-center gap-3'>
                <span className="text-5xl">{icon}</span>
                <div>
                    <p className="font-headline text-primary font-semibold">{step}</p>
                    <CardTitle className="font-headline text-2xl lg:text-3xl !mt-0">{title}</CardTitle>
                </div>
            </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow">
        <p className="text-muted-foreground mb-6 flex-grow">{description}</p>
        
        {features && (
          <ul className="space-y-3 mb-8 text-foreground/90">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-6 border-t border-border/50">
            <div className="flex items-end justify-between mb-4">
                <div className="font-headline">
                    <p className="text-4xl font-bold text-primary">{price}</p>
                    {parcelPrice && <p className="text-sm text-muted-foreground">{parcelPrice}</p>}
                </div>
            </div>
            <Button 
              asChild 
              size="lg" 
              className={cn(
                "w-full text-lg font-bold py-7 shadow-lg transition-transform transform hover:scale-105",
                ctaVariant === 'accent' && 'bg-accent text-accent-foreground hover:bg-accent/90',
                ctaVariant === 'default' && 'bg-primary text-primary-foreground hover:bg-primary/90'
              )}>
              <Link href={ctaLink} target="_blank" rel="noopener noreferrer">{ctaText}</Link>
            </Button>
        </div>
      </CardContent>
    </Card>
  );
}
