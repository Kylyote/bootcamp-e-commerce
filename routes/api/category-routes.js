const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// Finds all Category labeled items and returns them with a status 200. 
router.get('/', async (req, res) => {
  try {
    const catData = await Category.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Products
});

// Find a specificly numbered item and return that. If it is not found, through an error with a message.
router.get('/:id', async (req, res) => {
  try {
    // find one category by its `id` value
    const catData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    // If the id in the URL doesn't exist
    if (!catData) {
      res.status(404).json({message: 'No Category Data Under that ID'});
      return;
    }

    res.status(200).json(catData);
  // be sure to include its associated Products
  } catch (err) {
    res.status(500).json(err);
  }
});

// Creates a new category, should be fed a properly formatted json in Insomnia.
router.post('/', async (req, res) => {
  // create a new category
    const catData = await Category.create(req.body);
    return res.json(catData);
});

// Finds the category ID in the database and replaces it with the json supplied through Insomnia. Remember that while some of these look the same, there is a different HTTP requests that is being made. 
router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const catData = await Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      // "where" tells the location of the thing to search for. In this case it will look for the id provided in the URL which is located in req.params
      where: {
        id: req.params.id,
      },
    },
  );
  res.status(200).json(catData);
});

// Finds the category item from the supplied ID and removes it from the database. 
router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const catData = await Category.destroy({
    where:{
      id: req.params.id,
    },
  });
  return res.json(catData);
});

module.exports = router;
