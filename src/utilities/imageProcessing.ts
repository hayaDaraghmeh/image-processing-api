import sharp from 'sharp'

const resizeImage = async (
  input: string,
  output: string,
  width: number,
  height: number
) => {
  await sharp(input).resize(width, height).toFile(output)
}

export default resizeImage

