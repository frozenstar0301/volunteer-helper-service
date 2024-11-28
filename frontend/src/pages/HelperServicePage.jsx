import React, { useState, useEffect } from "react";
import HelperCard from "../components/HelperCard";
import "./HelperServicePage.css"; // Your additional styling for the page

const HelperServicePage = () => {
  const [helperServices, setHelperServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHelperServices = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/helpers');
        if (!response.ok) {
          throw new Error('Failed to fetch helper services');
        }
        const data = await response.json();
        console.log(data);
        setHelperServices(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchHelperServices();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  function formatDate(inputDate) {
    const date = new Date(inputDate);
  
    console.log(inputDate);
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
  
    const getOrdinalSuffix = (day) => {
      if (day % 10 === 1 && day !== 11) return "st";
      if (day % 10 === 2 && day !== 12) return "nd";
      if (day % 10 === 3 && day !== 13) return "rd";
      return "th";
    };
  
    return `${month} ${day}${getOrdinalSuffix(day)} ${year}`;
  }

  return (
    <div>
        <div className="helper-list">
            <h1>Helper Services</h1>
            <div className="helper-cards-container">
                {helperServices.map((service, index) => (
                <HelperCard
                    key={index}
                    title={service.title}
                    description={service.description}
                    phone={service.phone}
                    status={service.isOpen}
                    location={service.region}
                    date={formatDate(service.date)}
                />
                ))}
            </div>
        </div>
    </div>
  );
};

export default HelperServicePage;
