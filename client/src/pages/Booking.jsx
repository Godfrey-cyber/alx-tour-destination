import React, { useState } from "react";

const destinations = ["Paris", "Tokyo", "New York", "Cape Town", "Rio de Janeiro"];

const BookingForm = () => {
  const [formData, setFormData] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    guests: 1,
    children: 0,
    childrenAges: [],
  });

  const [errors, setErrors] = useState({
    dateError: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleChildrenChange = (e) => {
    const count = parseInt(e.target.value);
    setFormData((prev) => ({
      ...prev,
      children: count,
      childrenAges: Array(count).fill(""),
    }));
  };

  const handleChildAgeChange = (index, value) => {
    const newAges = [...formData.childrenAges];
    newAges[index] = value;
    setFormData((prev) => ({ ...prev, childrenAges: newAges }));
  };

  const handleDateValidation = () => {
    let dateError = "";

    const startDate = new Date(formData.startDate);
    const endDate = new Date(formData.endDate);
    const today = new Date();

    if (startDate <= today) {
      dateError = "Start date must be in the future.";
    } else if (endDate <= today) {
      dateError = "End date must be in the future.";
    } else if (startDate >= endDate) {
      dateError = "Start date must be before the end date.";
    }

    setErrors({ dateError });

    return dateError === "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleDateValidation()) {
      setMessage("Booking successful!");
      // You can send this data to your backend here
      console.log("Booking Info:", formData);
    } else {
      setMessage("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-md mx-auto p-4 border rounded transition-all duration-300 ease-in-out"
    >
      <label className="block">
        Destination:
        <select
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          className="w-full p-2 border"
        >
          <option value="">Select a destination</option>
          {destinations.map((dest) => (
            <option key={dest} value={dest}>
              {dest}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        Start Date:
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          className="w-full p-2 border"
        />
      </label>

      <label className="block">
        End Date:
        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          className="w-full p-2 border"
        />
      </label>

      {errors.dateError && (
        <p className="text-red-600 text-sm">{errors.dateError}</p>
      )}

      <label className="block">
        Number of Guests:
        <input
          type="number"
          name="guests"
          min="1"
          value={formData.guests}
          onChange={handleChange}
          className="w-full p-2 border"
        />
      </label>

      <label className="block">
        Number of Children:
        <input
          type="number"
          name="children"
          min="0"
          value={formData.children}
          onChange={handleChildrenChange}
          className="w-full p-2 border"
        />
      </label>

      {formData.childrenAges.map((age, index) => (
        <label key={index} className="block">
          Age of Child {index + 1}:
          <input
            type="number"
            min="0"
            value={age}
            onChange={(e) => handleChildAgeChange(index, e.target.value)}
            className="w-full p-2 border"
          />
        </label>
      ))}

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-all duration-300 ease-in-out"
      >
        Book Now
      </button>

      {message && (
        <p
          className={`text-center mt-2 ${
            message === "Booking successful!" ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
};

export default BookingForm;
