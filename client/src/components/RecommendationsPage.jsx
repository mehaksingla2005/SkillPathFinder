import React, { useState, useEffect } from 'react';
import RecommendationPage from './RecommendationPage';
import axios from 'axios'; // Correctly import axios

const RecommendationsPage = () => {
  const [recommendationData, setRecommendationData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('http://localhost:3000/aifeature');
        setRecommendationData(response.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecommendations();
  }, []);
 
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <RecommendationPage data={recommendationData} />
  );
};

export default RecommendationsPage;
