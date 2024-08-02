import User from '../models/user.model.js';
import Recommendation from '../models/recommendation.model.js';

const getUserProfile = async (req, res) => {
  try {
    // Assuming you have middleware to authenticate and attach the user to the request
    const userId = req.user.id;

    // Fetch user data
    const user = await User.findById(userId).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Fetch recommendations for the user
    const recommendationData = await Recommendation.findOne({ userId });

    // Prepare the response
    const response = {
      user: {
        username: user.username,
        fullName: user.fullName || user.username, // Assuming you might want to add a fullName field to your User model
        email: user.email,
        profilePic: user.profilePic,
      },
      recommendations: recommendationData ? recommendationData.recommendations : [],
      learningPathSuggestion: recommendationData ? recommendationData.learningPathSuggestion : '',
      additionalResources: recommendationData ? recommendationData.additionalResources : [],
      careerInsight: recommendationData ? recommendationData.careerInsight : '',
    };

    res.json(response);
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export default getUserProfile;