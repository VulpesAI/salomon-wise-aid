import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Coffee, 
  Car, 
  Home, 
  ShoppingCart, 
  Heart, 
  Gamepad2,
  Plane,
  BookOpen,
  Smartphone,
  Brain,
  Check,
  X
} from "lucide-react";
import { useState } from "react";

const CategoryPrototype = () => {
  const [selectedTransaction, setSelectedTransaction] = useState<number | null>(null);
  const [categorizedTransactions, setCategorizedTransactions] = useState<number[]>([]);

  const transactions = [
    {
      id: 1,
      description: "UBER TRIP - Santiago Centro",
      amount: -8500,
      date: "2024-01-28",
      suggested: "Transporte",
      icon: Car,
      confidence: 95
    },
    {
      id: 2,
      description: "STARBUCKS PROVIDENCIA",
      amount: -4200,
      date: "2024-01-28",
      suggested: "Alimentación",
      icon: Coffee,
      confidence: 92
    },
    {
      id: 3,
      description: "NETFLIX.COM SUSCRIPCION",
      amount: -8990,
      date: "2024-01-28",
      suggested: "Entretenimiento",
      icon: Gamepad2,
      confidence: 98
    },
    {
      id: 4,
      description: "JUMBO LAS CONDES",
      amount: -45600,
      date: "2024-01-27",
      suggested: "Alimentación",
      icon: ShoppingCart,
      confidence: 88
    },
    {
      id: 5,
      description: "TELEFONICA MOVIL",
      amount: -29990,
      date: "2024-01-27",
      suggested: "Servicios",
      icon: Smartphone,
      confidence: 96
    }
  ];

  const categories = [
    { name: "Alimentación", icon: Coffee, color: "text-orange-400" },
    { name: "Transporte", icon: Car, color: "text-blue-400" },
    { name: "Vivienda", icon: Home, color: "text-green-400" },
    { name: "Entretenimiento", icon: Gamepad2, color: "text-purple-400" },
    { name: "Salud", icon: Heart, color: "text-red-400" },
    { name: "Educación", icon: BookOpen, color: "text-cyan-400" },
    { name: "Viajes", icon: Plane, color: "text-indigo-400" },
    { name: "Servicios", icon: Smartphone, color: "text-yellow-400" }
  ];

  const handleCategorize = (transactionId: number, accepted: boolean) => {
    if (accepted) {
      setCategorizedTransactions([...categorizedTransactions, transactionId]);
    }
    setSelectedTransaction(null);
  };

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/20 text-primary">
            <Brain className="w-4 h-4 mr-2" />
            Prototipo de Categorización IA
          </Badge>
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Clasificación Automática Inteligente
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Observa cómo SalomónAI aprende de tus transacciones y las categoriza automáticamente
            con un nivel de confianza superior al 90%
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Categories Panel */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-card border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-primary" />
                  Categorías Detectadas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {categories.map((category, index) => {
                  const IconComponent = category.icon;
                  return (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
                      <div className="flex items-center gap-3">
                        <IconComponent className={`w-4 h-4 ${category.color}`} />
                        <span className="font-medium text-sm">{category.name}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {Math.floor(Math.random() * 15) + 5} trans.
                      </Badge>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          {/* Transactions Panel */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-primary/20">
              <CardHeader>
                <CardTitle>Transacciones Pendientes de Clasificar</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Haz clic en una transacción para ver la sugerencia de IA
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {transactions.map((transaction) => {
                  const IconComponent = transaction.icon;
                  const isSelected = selectedTransaction === transaction.id;
                  const isCategorized = categorizedTransactions.includes(transaction.id);
                  
                  return (
                    <div 
                      key={transaction.id} 
                      className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                        isCategorized 
                          ? 'bg-primary/10 border-primary/40' 
                          : isSelected 
                            ? 'bg-accent/10 border-accent/40' 
                            : 'bg-secondary/20 border-secondary hover:border-primary/20'
                      }`}
                      onClick={() => !isCategorized && setSelectedTransaction(isSelected ? null : transaction.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <IconComponent className={`w-5 h-5 ${isCategorized ? 'text-primary' : 'text-muted-foreground'}`} />
                            <div>
                              <p className="font-medium text-sm">{transaction.description}</p>
                              <p className="text-xs text-muted-foreground">{transaction.date}</p>
                            </div>
                          </div>
                          
                          {isSelected && !isCategorized && (
                            <div className="mt-4 p-3 bg-accent/5 rounded-lg border border-accent/20">
                              <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2">
                                  <Brain className="w-4 h-4 text-accent" />
                                  <span className="text-sm font-medium">Sugerencia IA:</span>
                                  <Badge variant="outline" className="text-xs bg-accent/20 text-accent">
                                    {transaction.suggested}
                                  </Badge>
                                </div>
                                <Badge variant="secondary" className="text-xs">
                                  {transaction.confidence}% confianza
                                </Badge>
                              </div>
                              <Progress value={transaction.confidence} className="h-2 mb-3" />
                              <div className="flex gap-2">
                                <Button 
                                  size="sm" 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleCategorize(transaction.id, true);
                                  }}
                                  className="bg-primary hover:bg-primary/90"
                                >
                                  <Check className="w-3 h-3 mr-1" />
                                  Aceptar
                                </Button>
                                <Button 
                                  size="sm" 
                                  variant="outline"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleCategorize(transaction.id, false);
                                  }}
                                >
                                  <X className="w-3 h-3 mr-1" />
                                  Rechazar
                                </Button>
                              </div>
                            </div>
                          )}
                          
                          {isCategorized && (
                            <div className="mt-2 flex items-center gap-2">
                              <Check className="w-4 h-4 text-primary" />
                              <span className="text-sm text-primary font-medium">
                                Categorizada como: {transaction.suggested}
                              </span>
                            </div>
                          )}
                        </div>
                        
                        <div className="text-right">
                          <p className={`font-bold ${transaction.amount < 0 ? 'text-destructive' : 'text-primary'}`}>
                            ${Math.abs(transaction.amount).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Learning Stats */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="bg-gradient-card border-primary/20 text-center p-6">
            <h3 className="text-2xl font-bold text-primary mb-2">94%</h3>
            <p className="text-sm text-muted-foreground">Precisión promedio</p>
          </Card>
          <Card className="bg-gradient-card border-primary/20 text-center p-6">
            <h3 className="text-2xl font-bold text-accent mb-2">1,247</h3>
            <p className="text-sm text-muted-foreground">Transacciones procesadas</p>
          </Card>
          <Card className="bg-gradient-card border-primary/20 text-center p-6">
            <h3 className="text-2xl font-bold text-secondary-foreground mb-2">12</h3>
            <p className="text-sm text-muted-foreground">Categorías detectadas</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CategoryPrototype;