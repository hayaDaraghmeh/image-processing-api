import supertest from 'supertest'
import app from '../src/app'
import resizeImage from '../src/utilities/imageProcessing'


const request = supertest(app)

describe('Test endpoint responses', () => {
  it('gets the api endpoint', async () => {
    const response = await request.get('/api/images?filename=fjord&width=200&height=200')
    expect(response.status).toBe(200)
  })
})


describe('Image processing function', () => {
  it('should resize an image', async () => {
    const input = 'assets/full/fjord.jpg'
    const output = 'assets/thumb/test.jpg'

    const result = await resizeImage(input, output, 200, 200)

    expect(result).toBeUndefined()
  })
})