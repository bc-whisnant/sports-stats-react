describe("content is rendered on homepage", () => {
  test("showing all icons on homepage", async done => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector(".fa-baseball-ball");
    await page.waitForSelector(".fa-football-ball");
    await page.waitForSelector(".fa-basketball-ball ");
    await page.waitForSelector(".fa-hockey-puck");
    // await browser.close()
    done();
  });
});
