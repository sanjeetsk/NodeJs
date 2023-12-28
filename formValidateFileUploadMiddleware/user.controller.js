export const renderUploadForm = (req, res) => {
  res.render("upload-form", { user: null, errorMeassge: null });
};

export const registerUser = (req, res) => {
  const { name, email } = req.body;
  const filename = req.file.filename;
  res.render("upload-form", { user: { name, email, filename }, errorMeassge: null });
};
