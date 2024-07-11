const {Router} = require ('express');
const {getMeal,saveMeals,deleteMeal,editMeal} = require('./MealController');
const router = Router ();

router.get ('/',getMeal);
router.post('/saveMeals', saveMeals)
module.exports = router;
router.delete ('/deleteMeal', deleteMeal)
router.put ('/editMeal',editMeal)
//для кластера
// daryamagomedova91
// FbE0SKBYDEf44jWo
//mongodb+srv://daryamagomedova91:<password>@cluster0.cnm2ual.mongodb.net/