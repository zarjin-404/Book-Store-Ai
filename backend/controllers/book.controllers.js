import bookModels from '../models/book.models.js';

export const createBooks = async (req, res) => {
  const { title, author, price } = req.body;

  try {
    const books = await bookModels.create({
      title,
      author,
      price,
      image: req.file.path,
    });

    res.status(200).json({ message: 'Book created successfully', books });
  } catch (error) {
    res.status(500).json({ message: 'Book creation failed', error: error.message });
  }
};

export const updateBooks = async (req, res) => {
  try {
    const book = await bookModels.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};

export const deletedBooks = async (req, res) => {
  try {
    const book = await bookModels.findByIdAndDelete(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json({ message: 'deleted Books successfully' });
  } catch (error) {
    res.status(200).json(error, { message: 'deleted Books unsuccessfully' });
  }
};
