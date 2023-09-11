const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// Return all tags
router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }, { model: ProductTag}]
    })
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    // find a single tag by its `id`
    // be sure to include its associated Product data
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }, { model:ProductTag }]
    });
    // If the id in the URL doesn't exist
    if (!tagData) {
      res.status(404).json({message: 'No Tag Data Under that ID'});
      return;
    }
    
    res.status(200).json(tagData);

  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  const tagData = await Tag.create(req.body);
  return res.json(tagData);
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  const tagData = await Tag.update(
    {
      category_name: req.body.category_name,
    },
    {
      // "where" tells the location of the thing to search for. In this case it will look for the id provided in the URL which is located in req.params
      where: {
        id: req.params,
      },
    },
  );
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  const tagData = await Tag.destroy({
    where:{
      id: req.params.id,
    },
  });
  return res.json(tagData);
});

module.exports = router;
