import {
    createRecommendation,
    getRecommendations,
    getRecommendationById,
    updateRecommendation,
    deleteRecommendation
  } from '../controllers/recommendation.controller.js';
  import protectRoute from '../middleware/protectRoute.js';
  
  const router = express.Router();
  
  // Route to create a new recommendation
  router.post('/recommendations', protectRoute,createRecommendation);
  
  // Route to get all recommendations
  router.get('/recommendations',protectRoute, getRecommendations);
  
  // Route to get a recommendation by ID
  router.get('/recommendations/:id',protectRoute, getRecommendationById);
  
  // Route to update a recommendation by ID
  router.put('/recommendations/:id',protectRoute, updateRecommendation);
  
  // Route to delete a recommendation by ID
  router.delete('/recommendations/:id',protectRoute, deleteRecommendation);
  
  export default router;