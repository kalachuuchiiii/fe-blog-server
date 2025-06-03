const cloudinary = require("./cloudinary.js");

exports.uploadImage = async (image = null) => {
  if (!image) {
    throw new Error("No image found at uploadImage.js")
  }
  const imageTransform = [{
    fetch_format: 'auto', quality: 'auto', flags: 'strip_profile'
  }]
  const res = await cloudinary.uploader.upload(image, {
    resource_type: "image",
    folder: "image",
    transformation: imageTransform
  })
  const { public_id, secure_url } = res;
  return { public_id, url: secure_url };
}