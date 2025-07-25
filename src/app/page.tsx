import { Button } from "@/components/ui/button";
import { OfferCard } from "@/components/landing/offer-card";
import { Footer } from "@/components/landing/footer";
import { CheckCircle2 } from "lucide-react";
import { Logo } from "@/components/icons/logo";
import Link from "next/link";

const offers = [
  {
    icon: '🤖',
    step: 'Passo 1',
    title: 'A IA que lê sua tela e te mostra quando operar',
    description: 'Uma IA visual que identifica padrões, marca zonas e lê o gráfico em tempo real. Ideal para iniciantes e profissionais. Basta abrir a tela — ela faz o resto.',
    price: 'R$47',
    ctaText: 'Quero ativar minha IA',
    ctaLink: '#',
    ctaVariant: 'accent',
  },
  {
    icon: '📊',
    step: 'Passo 2',
    title: 'Use a IA nos momentos mais lucrativos',
    description: 'O segredo das Sessões Chinesas. Um indicador cirúrgico que sinaliza reversões com até 90% de assertividade. Use a IA apenas quando esse padrão estiver prestes a se formar e opere com confiança.',
    price: 'R$197',
    parcelPrice: 'ou 12x de R$20,37',
    ctaText: 'Quero o Indicador também',
    ctaLink: 'https://bit.ly/estrategia-chinesa-trader',
    ctaVariant: 'default',
    features: [
      'Sinais de alerta e ação',
      'Suporte e instalação',
      'Funciona em qualquer corretora (até demo)',
    ],
  },
  {
    icon: '🐞',
    step: 'Passo 3 (Opcional)',
    title: 'O método que transforma 1K em 10K',
    description: 'Esse não é para todos. É um método especial, usado apenas por quem já entende o jogo. Funciona com base em um comportamento não corrigido da corretora, que permite multiplicar o valor da conta independente do resultado da operação. Acesso restrito a 2 execuções por dia.',
    price: 'R$997',
    ctaText: 'Quero conhecer o método secreto',
    ctaLink: '#',
    ctaVariant: 'secondary',
  },
];


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <Logo className="h-8 w-8 text-primary" />
                <span className="font-headline text-2xl font-bold">Trader Chinês</span>
            </div>
            <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="#offers">Ver Ofertas</Link>
            </Button>
        </nav>
      </header>
      
      <main className="flex-grow">
        <section className="text-center py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-300">
              Transforme sua tela em uma máquina de leitura do mercado
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-blue-200/80">
              Você está prestes a acessar as mesmas ferramentas que uso para prever reversões, operar com confiança e multiplicar bancas com segurança.
            </p>
          </div>
        </section>

        <section id="offers" className="py-16 lg:py-24">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    {offers.map((offer, index) => (
                        <OfferCard key={index} {...offer} />
                    ))}
                </div>
            </div>
        </section>

        <section className="py-16 lg:py-24 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-headline text-4xl font-bold text-primary mb-6">🎁 Bônus e Pertencimento</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Comprando qualquer um dos produtos, você entra no meu canal exclusivo com conteúdo, atualizações e convites para sessões privadas.
              </p>
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="font-headline text-2xl font-semibold text-accent mb-4">Comprando o combo completo, você garante:</h3>
                <ul className="space-y-4 text-left inline-block">
                    <li className="flex items-center gap-3 text-lg">
                        <CheckCircle2 className="h-6 w-6 text-accent"/>
                        <span>1 sessão de alavancagem feita por mim</span>
                    </li>
                    <li className="flex items-center gap-3 text-lg">
                        <CheckCircle2 className="h-6 w-6 text-accent"/>
                        <span>Grupo fechado de elite</span>
                    </li>
                    <li className="flex items-center gap-3 text-lg">
                        <CheckCircle2 className="h-6 w-6 text-accent"/>
                        <span>Suporte VIP</span>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
