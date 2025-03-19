import { useState } from "react";
import "./Card.css";
import abbLogo from "../assets/ABB.png";

const BusinessCard = ({ name, education, jobTitle, company, email }) => {
  const [showEmail, setShowEmail] = useState(false);

  const toggleEmailVisibility = () => {
    setShowEmail(!showEmail);
  };

  return (
    <div className="businessCard">
      <img src={abbLogo} alt="ABB Logo" className="logo" />
      <h2>{name}</h2>
      <p>{education}</p>
      <p>{jobTitle}</p>
      <p>{company}</p>
      <button onClick={toggleEmailVisibility}>Show Contact Details</button>
      {showEmail && <p>{email}</p>}
    </div>
  );
};

export default BusinessCard;