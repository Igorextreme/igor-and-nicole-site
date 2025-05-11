
import React from "react";
import { Card } from "@/components/ui/card";

const guidelines = [
  {
    id: 1,
    title: "Confirme sua presença",
    description: "Por favor, confirme se poderá comparecer até a data indicada no convite."
  },
  {
    id: 2,
    title: "Rosa é a cor das madrinhas",
    description: "Para manter a harmonia visual da cerimônia, pedimos que evite usar rosa, pois é a cor das madrinhas."
  },
  {
    id: 3,
    title: "Branco é a cor da noiva",
    description: "Para respeitar a tradição, pedimos que evite usar branco, que é reservado para a noiva."
  },
  {
    id: 4,
    title: "Participe da cerimônia",
    description: "Sua presença é importante para nós durante toda a celebração. Venha celebrar conosco do início ao fim!"
  },
  {
    id: 5,
    title: "Aguarde a liberação da mesa de doces",
    description: "A mesa de doces será liberada em momento específico da festa. Por favor, aguarde o anúncio."
  },
  {
    id: 6,
    title: "Aproveite bastante",
    description: "Este é um dia de celebração! Dance, converse, divirta-se e aproveite cada momento."
  },
  {
    id: 7,
    title: "Convidado não convida",
    description: "Por favor, respeite nossa lista de convidados. Não traga pessoas que não foram convidadas."
  },
  {
    id: 8,
    title: "Não atrase, seja pontual",
    description: "A cerimônia começará no horário marcado. Procure chegar com 15-30 minutos de antecedência."
  },
  {
    id: 9,
    title: "Não atrapalhe os fotógrafos",
    description: "Para garantir boas fotos, pedimos que não interfira no trabalho dos fotógrafos profissionais."
  },
  {
    id: 10,
    title: "Não saia sem se despedir dos noivos",
    description: "Antes de partir, por favor, venha nos dar um abraço de despedida. Queremos agradecer sua presença!"
  }
];

const GuestGuidelines = () => {
  return (
    <div className="py-12 md:py-16">
      <div className="wedding-container">
        <h1 className="section-title">Manual do Convidado</h1>
        <p className="section-subtitle">
          Para que todos possam aproveitar ao máximo nossa celebração, preparamos algumas orientações
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {guidelines.map((guideline) => (
            <Card key={guideline.id} className="overflow-hidden hover:shadow-md transition-shadow bg-white">
              <div className="p-6">
                <h3 className="font-dancing text-2xl text-wedding-green mb-3">{guideline.title}</h3>
                <p className="text-gray-700">{guideline.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-700 max-w-2xl mx-auto">
            Agradecemos sua compreensão e cooperação para que nosso casamento seja um dia inesquecível para todos. 
            Em caso de dúvidas, não hesite em nos contactar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GuestGuidelines;
