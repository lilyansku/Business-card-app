import { useState } from "react";
import BusinessCard from "./components/BusinessCard";

const myBusinessCard = {
  name: "Angelika Ervasti",
  education: "Vaasa University of Applied Sciences",
  jobTitle: "Information Technology Engineering Intern",
  company: "ABB",
  email: "angelika.ervasti@hotmail.fi",
  phoneNumber: "+358 40 123 4567",
  address: "ABB Oy, Smart Power, Muottitie 2, 65320 Vaasa"
};

const johnDoeCard = {
  name: "John Doe",
  education: "University of Vaasa",
  jobTitle: "Senior Software Engineer",
  company: "ABB",
  email: "john.doe@hotmail.com",
  phoneNumber: "+358 40 765 4321",
  address: "ABB Oy, Smart Power, Muottitie 2, 65320 Vaasa"

};

const janeSmithCard = {
  name: "Jane Smith",
  education: "University of Vaasa",
  jobTitle: "Project Manager",
  company: "ABB",
  email: "jane.smith@hotmail.com",
  phoneNumber: "+358 40 987 6543",
  address: "ABB Oy, Smart Power, Muottitie 2, 65320 Vaasa"
};

const App = () => {
  const [search, setSearch] = useState("");
  const businessCards = [myBusinessCard, johnDoeCard, janeSmithCard];

  const filteredCards = businessCards.filter(
    (card) =>
      card.name.toLowerCase().includes(search.toLowerCase()) ||
      card.company.toLowerCase().includes(search.toLowerCase()) ||
      card.jobTitle.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Show information</h1>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="card-container">
        {filteredCards.map((card, index) => (
          <BusinessCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default App;