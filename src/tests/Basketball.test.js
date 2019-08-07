describe('cards are showing on the page', () => {
  test('cards are on the page', async done => {
    jest.setTimeout(30000)
    await page.goto("http://localhost:3000/basketball-stats");
    await page.waitForSelector(".team-card");
    done()
  })
})
