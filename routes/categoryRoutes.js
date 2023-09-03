import express from 'express';
import {requireSignIn,isAdmin} from '../middlewares/authmiddleware.js'
import {createCategoryController, deleteCategoryController, getallcategoryController, singleCategoryController, updateCategoryController} from '../controllers/categoryController.js';



const router = express.Router();

// routes
// create category



router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);


// update category
router.put('/update-category/:id',requireSignIn,updateCategoryController)

// get all category
router.get('/get-category',getallcategoryController)

// get single category
router.get('/single-category/:slug', singleCategoryController)

// delete category
router.delete('/delete-category/:id',requireSignIn,isAdmin,deleteCategoryController)


export default router;