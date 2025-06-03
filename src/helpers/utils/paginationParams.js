

exports.pageParams = (req) => {
  const limit = 6; 
  const skip = parseInt(req.params.skip) * limit;
  return {
    skip, 
    limit
  }
}