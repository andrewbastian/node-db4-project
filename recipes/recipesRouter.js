const express = require("express")
const db = require("../data/dbConfig")
const Recipes = require('./recipesModel.js');
const router = express.Router()

router.get('/', (req, res) => {
    Recipes.getRecipes()
        .then(recipes => {
            res.json(recipes);
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to get recipes'
            });
        });
});


router.get('/:id/shoppingList', (req, res) => {
    Recipes.getShoppingList(req.params.id)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: 'Failed to get ingredients'
            })
        })
})


router.get('/:id/instructions', (req, res) => {
    Recipes.getInstructions(req.params.id)
        .then(steps => {
            res.status(200).json(steps)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: 'Failed to get instructions'
            })
        })
})

module.exports = router