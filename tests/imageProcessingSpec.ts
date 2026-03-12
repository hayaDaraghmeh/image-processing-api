import resizeImage from '../src/utilities/imageProcessing'
import fs from 'fs'

describe('Image Processing Function', () => {

  it('should resize image successfully', async () => {

    const input = 'assets/full/fjord.jpg'
    const output = 'assets/thumb/test.jpg'

    await resizeImage(input, output, 200, 200)

    expect(fs.existsSync(output)).toBeTrue()

  })

  it('should throw error for invalid image path', async () => {

    await expectAsync(
      resizeImage('wrong.jpg', 'assets/thumb/test.jpg', 200, 200)
    ).toBeRejected()

  })

})