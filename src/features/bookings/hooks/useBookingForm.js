import { useState, useEffect } from 'react';
import { bookingsApi } from '../api/bookingsApi';

const useBookingForm = (journeyId) => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    travelers: 1,
    personalDetails: {
      name: "",
      email: "",
      phone: "",
    },
    notes: "",
    payment: {
      method: "credit_card",
      cardName: "",
      cardNumber: "",
      expiry: "",
      cvv: "",
    }
  });
  
  const [currentStep, setCurrentStep] = useState(1);
  const [formOptions, setFormOptions] = useState(null);
  const [error, setError] = useState(null);
  
  // Load form options on mount
  useEffect(() => {
    const loadFormOptions = async () => {
      try {
        const options = await bookingsApi.getBookingFormOptions();
        setFormOptions(options);
      } catch (err) {
        setError('Failed to load booking options');
        console.error(err);
      }
    };
    
    loadFormOptions();
  }, []);
  
  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Handle nested objects in form data
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };
  
  // Handle traveler count changes
  const handleTravelerChange = (delta) => {
    setFormData((prev) => ({
      ...prev,
      travelers: Math.max(1, Math.min(10, prev.travelers + delta))
    }));
  };
  
  // Step navigation
  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));
  
  return {
    formData,
    setFormData,
    currentStep,
    setCurrentStep,
    nextStep,
    prevStep,
    formOptions,
    error,
    handleChange,
    handleTravelerChange
  };
};

export default useBookingForm;
