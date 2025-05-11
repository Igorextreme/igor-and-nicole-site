
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="py-20 md:py-32 bg-gradient-to-b from-white to-wedding-pink/10">
        <div className="wedding-container text-center">
          <h1 className="font-dancing text-5xl md:text-7xl text-wedding-green mb-4 animate-fade-in">
            Igor & Nicole
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in">
            Estamos nos casando!
          </p>
          <div className="w-24 h-1 bg-wedding-gold mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-700 mb-12 animate-fade-in">
            18 de Julho de 2025
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/rsvp">
              <Button className="wedding-button">Confirme sua presença</Button>
            </Link>
            <Link to="/gifts">
              <Button className="wedding-button">Presentes</Button>
            </Link>
            <Link to="/guidelines">
              <Button className="wedding-button">Manual do Convidado</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 bg-white">
        <div className="wedding-container">
          <h2 className="section-title">Nossa História</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-700 mb-6">
              Bem-vindos ao nosso site de casamento! Estamos muito felizes em compartilhar esse momento especial com vocês.
              Nossa jornada juntos tem sido maravilhosa, e agora queremos celebrar nossa união com as pessoas que mais amamos.
            </p>
            <Link to="/rsvp">
              <Button className="wedding-button">Participe da cerimônia</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Color Scheme Section */}
      <div className="py-16 bg-gray-50">
        <div className="wedding-container">
          <h2 className="section-title">Esquema de Cores</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-24 h-24 rounded-full bg-wedding-green mx-auto mb-4"></div>
                <h3 className="font-dancing text-2xl text-wedding-green mb-2">Verde</h3>
                <p className="text-gray-700">é a cor das madrinhas</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-24 h-24 rounded-full bg-blue-400 mx-auto mb-4"></div>
                <h3 className="font-dancing text-2xl text-wedding-green mb-2">Azul</h3>
                <p className="text-gray-700">é a cor das demoiselles</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-24 h-24 rounded-full bg-white border-2 border-gray-200 mx-auto mb-4"></div>
                <h3 className="font-dancing text-2xl text-wedding-green mb-2">Branco</h3>
                <p className="text-gray-700">é a cor dos noivos</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-wedding-green text-white">
        <div className="wedding-container text-center">
          <h2 className="font-dancing text-4xl md:text-5xl mb-8">Venha celebrar conosco!</h2>
          <Link to="/rsvp">
            <Button className="bg-white text-wedding-green hover:bg-wedding-pink hover:text-wedding-green py-3 px-8 rounded-md font-medium transition-all">
              Confirme sua presença
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
