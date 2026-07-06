const S3_BASE_URL =
  "https://wealll-media-assets.s3.ap-southeast-2.amazonaws.com";

export const mediaUrl = (filePath) => {
  const cleanPath = filePath.startsWith("/") ? filePath.slice(1) : filePath;

  return `${S3_BASE_URL}/${cleanPath}`;
};
