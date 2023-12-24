// Please don't change the pre-written code

export const validateBlog = (req, res) => {
  // Write your code here
  // Extract form data from the request
  const { title, description, imageUrl } = req.body;

  // Create an array to store validation errors
  const errors = [];

  // Validate the title field
  if (!title || title.trim().length === 0) {
    errors.push('Title cannot be empty');
  } else if (title.length < 3) {
    errors.push('Title should have a minimum length of three characters');
  }

  // Validate the description field
  if (!description || description.trim().length === 0) {
    errors.push('Description cannot be empty');
  } else if (description.length < 10) {
    errors.push('Description should have a minimum length of ten characters');
  }

  // Validate the image URL field
  if (!isValidUrl(imageUrl)) {
    errors.push('Please enter a valid image URL');
  }

  // Render the view with error messages and success message
  res.render('addBlog', {
    errors: errors,
    successMessage: errors.length === 0 ? 'Validation successful!' : null
  });

  // res.status(201).render("addBlog", { errors: null, successMessage: true });
};


export const renderBlogForm = (req, res) => {
  res.render("addBlog", { errors: null, successMessage: false });
};


const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
};