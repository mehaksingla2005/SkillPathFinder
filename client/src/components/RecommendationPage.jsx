import React from 'react';


const RecommendationPage =  ({recommendationData}) => {
 
  const { recommendations, learningPathSuggestion, additionalResources, careerInsight } = recommendationData;

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Your Personalized Learning Recommendations</h1>
        
        {/* Course Recommendations */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended Courses</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {recommendations.map((course, index) => (
              <div key={index} className="bg-white overflow-hidden shadow-lg rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">{course.courseName}</h3>
                  <p className="mt-1 text-sm text-gray-500">{course.platform} • {course.difficulty} • {course.duration}</p>
                  <p className="mt-3 text-sm text-gray-700">{course.description}</p>
                  <p className="mt-3 text-sm font-medium text-indigo-600">Relevance: {course.relevance}</p>
                  <div className="mt-4">
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200 last:mr-0 mr-1">
                      {course.skillsGained.join(', ')}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Learning Path Suggestion */}
        <div className="bg-white overflow-hidden shadow rounded-lg mb-12">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Suggested Learning Path</h2>
            <p className="text-gray-700">{learningPathSuggestion}</p>
          </div>
        </div>
        
        {/* Additional Resources */}
        <div className="bg-white overflow-hidden shadow rounded-lg mb-12">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Additional Resources</h2>
            <ul className="list-disc list-inside text-gray-700">
              {additionalResources.map((resource, index) => (
                <li key={index}>{resource}</li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Career Insight */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Career Insight</h2>
            <p className="text-gray-700">{careerInsight}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationPage;