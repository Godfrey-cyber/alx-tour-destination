import React, { useState } from "react";

const countyData = {
  Nairobi: ["Railways", "Westland", "Eastland", "Hurringam", "Mathare", "Karen", "Kileleshwa", "Muthaiga"],
  Nakuru: ["Free Area", "Vegas", "Horeb", "Depot", "Salama"],
  Mombasa: ["Ukundani", "Malaka", "Classic", "High Point", "Carefour"],
};

const CountyData = () => {
  const [selectedCounty, setSelectedCounty] = useState("");
  const [subcounties, setSubcounties] = useState([]);
  const [selectedSubcounty, setSelectedSubcounty] = useState("");

  const handleCountyChange = (e) => {
    const county = e.target.value;
    setSelectedCounty(county);
    setSubcounties(countyData[county] || []);
    setSelectedSubcounty(""); // reset subcounty when county changes
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-6">User Registration</h2>

      <form className="space-y-4">
        {/* County */}
        <div>
          <label className="block mb-1 font-medium">Select County</label>
          <select
            value={selectedCounty}
            onChange={handleCountyChange}
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- Choose County --</option>
            {Object.keys(countyData).map((county) => (
              <option key={county} value={county}>
                {county}
              </option>
            ))}
          </select>
        </div>

        {/* Subcounty */}
        <div>
          <label className="block mb-1 font-medium">Select Subcounty</label>
          <select
            value={selectedSubcounty}
            onChange={(e) => setSelectedSubcounty(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={!selectedCounty}
          >
            <option value="">-- Choose Subcounty --</option>
            {subcounties.map((subcounty) => (
              <option key={subcounty} value={subcounty}>
                {subcounty}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
};

export default CountyData;
