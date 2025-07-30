import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Database, 
  Plug, 
  Shield, 
  Zap,
  CheckCircle,
  Clock,
  AlertCircle,
  ArrowRight,
  Server
} from "lucide-react";
import { useState } from "react";

const APIShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [apiStatus, setApiStatus] = useState("connected");

  const integrations = [
    {
      name: "Belvo API",
      description: "Agregador financiero oficial para Chile",
      status: "active",
      endpoints: 4,
      responseTime: "120ms",
      uptime: 99.9
    },
    {
      name: "Banco de Chile",
      description: "API Open Banking certificada",
      status: "active", 
      endpoints: 6,
      responseTime: "85ms",
      uptime: 99.8
    },
    {
      name: "Santander API",
      description: "Integración directa con servicios Santander",
      status: "active",
      endpoints: 5,
      responseTime: "95ms",
      uptime: 99.7
    },
    {
      name: "SII Webservices",
      description: "Servicios tributarios automatizados",
      status: "pending",
      endpoints: 3,
      responseTime: "200ms",
      uptime: 98.5
    }
  ];

  const apiEndpoints = [
    {
      method: "GET",
      endpoint: "/api/accounts/balance",
      description: "Obtiene saldos actualizados de todas las cuentas",
      response: {
        accounts: [
          { id: "acc_001", bank: "Banco de Chile", balance: 2847650, currency: "CLP" },
          { id: "acc_002", bank: "Santander", balance: 1250000, currency: "CLP" }
        ]
      }
    },
    {
      method: "GET", 
      endpoint: "/api/transactions/categorize",
      description: "Clasificación automática de transacciones",
      response: {
        transaction_id: "txn_12345",
        category: "Alimentación",
        confidence: 0.94,
        subcategory: "Restaurantes"
      }
    },
    {
      method: "POST",
      endpoint: "/api/insights/generate",
      description: "Genera insights personalizados basados en patrones",
      response: {
        insights: [
          {
            type: "spending_pattern",
            message: "Tus gastos en delivery aumentan 23% los viernes",
            action: "Considera cocinar en casa los viernes"
          }
        ]
      }
    }
  ];

  const mockResponses = [
    `{
  "status": "success",
  "data": {
    "total_balance": 4097650,
    "accounts": [
      {
        "id": "acc_001",
        "bank": "Banco de Chile",
        "type": "checking",
        "balance": 2847650,
        "currency": "CLP",
        "last_update": "2024-01-28T10:30:00Z"
      }
    ]
  },
  "meta": {
    "request_id": "req_abc123",
    "response_time": "85ms"
  }
}`,
    `{
  "status": "success",
  "data": {
    "transaction_id": "txn_12345",
    "original_description": "UBER TRIP - Santiago Centro",
    "category": "Transporte",
    "subcategory": "Ride Sharing",
    "confidence_score": 0.94,
    "alternative_categories": [
      {"name": "Viajes", "confidence": 0.12},
      {"name": "Servicios", "confidence": 0.08}
    ]
  }
}`,
    `{
  "status": "success",
  "data": {
    "insights": [
      {
        "id": "insight_001",
        "type": "spending_optimization",
        "priority": "high",
        "message": "Podrías ahorrar $45,000 mensuales reduciendo delivery",
        "details": {
          "current_spending": 120000,
          "suggested_limit": 75000,
          "potential_savings": 45000
        }
      }
    ]
  }
}`
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/20 text-primary">
            <Database className="w-4 h-4 mr-2" />
            API & Integraciones
          </Badge>
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Arquitectura de Integración Financiera
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            APIs robustas y seguras que conectan con el ecosistema financiero chileno
          </p>
        </div>

        {/* Integration Status */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {integrations.map((integration, index) => (
            <Card key={index} className="bg-gradient-card border-primary/20">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Plug className="w-5 h-5 text-primary" />
                  <Badge 
                    variant={integration.status === "active" ? "default" : "secondary"}
                    className={integration.status === "active" ? "bg-primary text-primary-foreground" : ""}
                  >
                    {integration.status === "active" ? (
                      <CheckCircle className="w-3 h-3 mr-1" />
                    ) : (
                      <Clock className="w-3 h-3 mr-1" />
                    )}
                    {integration.status === "active" ? "Activo" : "Pendiente"}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{integration.name}</CardTitle>
                <p className="text-xs text-muted-foreground">{integration.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Endpoints:</span>
                    <span className="font-medium">{integration.endpoints}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Latencia:</span>
                    <span className="font-medium text-primary">{integration.responseTime}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Uptime:</span>
                    <span className="font-medium">{integration.uptime}%</span>
                  </div>
                  <Progress value={integration.uptime} className="h-1" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* API Explorer */}
        <Card className="bg-gradient-card border-primary/20 mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="w-5 h-5 text-primary" />
              Explorador de API
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Explora los endpoints disponibles y sus respuestas
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Endpoints List */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm mb-4">Endpoints Principales:</h4>
                {apiEndpoints.map((endpoint, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                      activeTab === index 
                        ? 'bg-primary/10 border-primary/40' 
                        : 'bg-secondary/20 border-secondary hover:border-primary/20'
                    }`}
                    onClick={() => setActiveTab(index)}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="outline" className="text-xs">
                        {endpoint.method}
                      </Badge>
                      <code className="text-sm font-mono">{endpoint.endpoint}</code>
                    </div>
                    <p className="text-xs text-muted-foreground">{endpoint.description}</p>
                  </div>
                ))}
              </div>

              {/* Response Preview */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-sm">Respuesta de Ejemplo:</h4>
                  <Badge variant="secondary" className="bg-primary/20 text-primary">
                    JSON
                  </Badge>
                </div>
                <div className="bg-secondary/30 rounded-lg p-4 max-h-80 overflow-y-auto">
                  <pre className="text-xs text-foreground whitespace-pre-wrap">
                    {mockResponses[activeTab]}
                  </pre>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                  <Zap className="w-3 h-3 text-primary" />
                  <span>Respuesta en ~85ms</span>
                  <span>•</span>
                  <span>Rate limit: 1000/min</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security & Compliance */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gradient-card border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Seguridad & Cumplimiento
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm">Cifrado AES-256 en tránsito y reposo</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm">Cumplimiento Ley 19.628 (Chile)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm">Certificación PCI DSS Level 1</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm">OAuth 2.0 + JWT Authentication</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm">Auditoría continua de endpoints</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-primary/20">
            <CardHeader>
              <CardTitle>Estado del Sistema</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">APIs Activas</span>
                <Badge variant="default" className="bg-primary text-primary-foreground">
                  12/15
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Latencia Promedio</span>
                <span className="text-sm font-medium text-primary">92ms</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Requests/min</span>
                <span className="text-sm font-medium">2,847</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Uptime 24h</span>
                <span className="text-sm font-medium text-primary">99.9%</span>
              </div>
              
              <div className="pt-4">
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Ver Documentación Completa
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default APIShowcase;