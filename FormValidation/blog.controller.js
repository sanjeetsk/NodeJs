// Please don't change the pre-written code

export const validateBlog = (req, res) => {
  // Write your code here
  // Extract form data from the request
  const { title, description, image } = req.body;

  // Create an array to store validation errors
  const errors = [];

  // Validate the title field
  if (!title || title.trim().length === 0) {
    errors.push('The title field should not be empty');
  } 
  if (title.length < 3) {
    errors.push('The title field should contain at least 3 characters');
  }

  // Validate the description field
  if (!description || description.trim().length === 0 ) {
    errors.push('The description field should not be empty');
  }
  if (description.length < 10) {
    errors.push('The description field should contain at least 10 characters');
  }

  // Validate the image URL field
  if (!isValidUrl(image)) {
    errors.push('The image URL provided should be a valid URL');
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