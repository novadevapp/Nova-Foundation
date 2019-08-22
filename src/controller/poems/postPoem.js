const insertPoem = require('../../database/queries/insertPoem');

module.exports = async (req, res) => {
  try {
    const { title, poem } = req.body.data;
    const userId = req.auth.id;
    // Validation
    if (!title || !poem) throw Error('Validation Error');
    // Insert Poem
    const insertedPoem = await insertPoem({ title, content: poem, publisher: userId });
    if (insertedPoem) {
      return res.send({ data: { message: 'Success' }, error: null });
    }
    // Error in Insert
    throw Error('error');
  } catch (error) {
    // Error Cases
    switch (error.message) {
      case 'Validation Error':
        res.status(401).send({ data: null, error: 'Validation Error' });
        break;
      default:
        res.status(500).send({ data: null, error: 'Internal Server Error' });
    }
  }
}
