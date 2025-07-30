import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Check, 
  Star, 
  Zap, 
  Crown,
  Brain,
  Shield,
  Smartphone
} from "lucide-react";
import { useState } from "react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Básico",
      description: "Perfecto para comenzar tu viaje financiero",
      icon: Smartphone,
      price: isAnnual ? 4990 : 5990,
      originalPrice: isAnnual ? 7990 : 7990,
      popular: false,
      features: [
        "Hasta 2 cuentas bancarias",
        "Categorización automática básica",
        "Dashboard web completo",
        "Reportes mensuales",
        "Soporte por email",
        "Integración con 3 bancos principales"
      ],
      limitations: [
        "Sin análisis predictivo",
        "Sin alertas personalizadas",
        "Sin app móvil"
      ]
    },
    {
      name: "Inteligente",
      description: "La experiencia completa de SalomónAI",
      icon: Brain,
      price: isAnnual ? 9990 : 11990,
      originalPrice: isAnnual ? 15990 : 15990,
      popular: true,
      features: [
        "Cuentas bancarias ilimitadas",
        "IA avanzada de categorización",
        "Análisis predictivo completo",
        "Alertas inteligentes personalizadas",
        "App móvil sincronizada",
        "Consultas en lenguaje natural",
        "Integración con todos los bancos",
        "Asesoría tributaria automática",
        "Metas de ahorro avanzadas",
        "Soporte prioritario"
      ],
      limitations: []
    },
    {
      name: "Premium",
      description: "Para asesores financieros y empresas",
      icon: Crown,
      price: isAnnual ? 19990 : 24990,
      originalPrice: isAnnual ? 35990 : 35990,
      popular: false,
      features: [
        "Todo de Inteligente +",
        "Gestión multi-cliente",
        "API personalizada",
        "White-label disponible",
        "Análisis de riesgo empresarial",
        "Reportes personalizados",
        "Integración CRM",
        "Soporte dedicado 24/7",
        "Consultoría financiera incluida",
        "SLA garantizado 99.9%"
      ],
      limitations: []
    }
  ];

  return (
    <section className="py-20 bg-background" id="pricing">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/20 text-primary">
            <Star className="w-4 h-4 mr-2" />
            Precios Transparentes
          </Badge>
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Elige Tu Plan Ideal
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comienza gratis por 30 días. Sin compromisos, cancela cuando quieras
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm ${!isAnnual ? 'font-semibold text-foreground' : 'text-muted-foreground'}`}>
              Mensual
            </span>
            <div 
              className="relative w-12 h-6 bg-secondary rounded-full cursor-pointer transition-colors"
              onClick={() => setIsAnnual(!isAnnual)}
            >
              <div className={`absolute top-1 w-4 h-4 bg-primary rounded-full transition-transform ${
                isAnnual ? 'translate-x-7' : 'translate-x-1'
              }`} />
            </div>
            <span className={`text-sm ${isAnnual ? 'font-semibold text-foreground' : 'text-muted-foreground'}`}>
              Anual
            </span>
            {isAnnual && (
              <Badge variant="default" className="bg-primary text-primary-foreground">
                -37% OFF
              </Badge>
            )}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <Card 
                key={index}
                className={`relative bg-gradient-card border-primary/20 ${
                  plan.popular ? 'ring-2 ring-primary scale-105' : ''
                } hover:border-primary/40 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      <Star className="w-3 h-3 mr-1" />
                      Más Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                  
                  <div className="pt-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-3xl font-bold">${plan.price.toLocaleString()}</span>
                      <span className="text-muted-foreground">CLP</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-sm text-muted-foreground line-through">
                        ${plan.originalPrice.toLocaleString()}
                      </span>
                      <Badge variant="outline" className="text-xs">
                        {Math.round((1 - plan.price / plan.originalPrice) * 100)}% OFF
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {isAnnual ? 'Facturado anualmente' : 'Por mes'}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-primary hover:bg-primary/90' 
                        : 'bg-secondary hover:bg-secondary/80'
                    }`}
                  >
                    {plan.popular ? (
                      <>
                        <Zap className="w-4 h-4 mr-2" />
                        Comenzar Ahora
                      </>
                    ) : (
                      'Elegir Plan'
                    )}
                  </Button>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Características incluidas:</h4>
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {plan.limitations.length > 0 && (
                    <div className="space-y-3 pt-4 border-t border-secondary">
                      <h4 className="font-semibold text-sm text-muted-foreground">No incluye:</h4>
                      {plan.limitations.map((limitation, limitIndex) => (
                        <div key={limitIndex} className="flex items-start gap-3">
                          <div className="w-4 h-4 mt-0.5 flex-shrink-0 text-muted-foreground">×</div>
                          <span className="text-sm text-muted-foreground">{limitation}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Money Back Guarantee */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-card border-primary/20 p-8 max-w-2xl mx-auto">
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Garantía de 30 Días</h3>
            <p className="text-muted-foreground mb-6">
              Prueba SalomónAI sin riesgo. Si no estás completamente satisfecho en los primeros 30 días, 
              te devolvemos el 100% de tu dinero.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>Sin compromisos</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>Cancela cuando quieras</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>Reembolso instantáneo</span>
              </div>
            </div>
          </Card>
        </div>

        {/* FAQ Preview */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Preguntas Frecuentes</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-primary/20 p-6 text-left">
              <h4 className="font-semibold mb-2">¿Mis datos están seguros?</h4>
              <p className="text-sm text-muted-foreground">
                Sí, utilizamos cifrado bancario AES-256 y cumplimos con la Ley 19.628 chilena. 
                Nunca almacenamos credenciales bancarias.
              </p>
            </Card>
            <Card className="bg-gradient-card border-primary/20 p-6 text-left">
              <h4 className="font-semibold mb-2">¿Puedo cambiar de plan?</h4>
              <p className="text-sm text-muted-foreground">
                Por supuesto. Puedes actualizar o degradar tu plan en cualquier momento 
                desde tu dashboard.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;