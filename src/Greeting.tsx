import React from "react";

// Définition du type des props
type GreetingProps = {
  name: string;
};

// Définition du composant fonctionnel avec typage des props
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
