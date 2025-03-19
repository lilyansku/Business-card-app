import { useState } from "react";
import BusinessCard from "./components/BusinessCard";

const myBusinessCard = {
  name: "Angelika Ervasti",
  education: "Vaasa University of Applied Sciences",
  jobTitle: "Information Technology Engineering Intern",
  company: "ABB",
  email: "angelika.ervasti@hotmail.fi",
};

const johnDoeCard = {
  name: "John Doe",
  education: "University of Vaasa",
  jobTitle: "Senior Software Engineer",
  company: "ABB",
  email: "john.doe@hotmail.com",
};

const janeSmithCard = {
  name: "Jane Smith",
  education: "University of Vaasa",
  jobTitle: "Project Manager",
  company: "ABB",
  email: "jane.smith@hotmail.com",
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
      <h1>Show email</h1>
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