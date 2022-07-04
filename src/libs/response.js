const sendSuccess = (res, data, message = '') => {
  res.status(200).json({ message, data });
};

const sendError = (res, code, error, errorSubject = undefined) => {
  if (errorSubject) console.log(errorSubject);
  res.status(code).json({ error });
};

module.exports = {
  sendSuccess,
  sendError,
}