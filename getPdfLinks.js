export async function getPdfLinks(browser, url) {
  let userLinks = [];
  let page = await browser.newPage();
  await page.goto(url);
  // Set screen size
  await page.setViewport({ width: 1080, height: 1024 });
  console.log(url);
  await page.waitForNetworkIdle();
  userLinks = await page.$$eval(
    "#aws-element-254003e8-8375-4608-bc6b-9ea7d5df473b > div.aws-directories-container-wrapper > section > ul > li > div.m-card-container > div.m-card-main > div > div.m-desc > p > a:nth-child(2)",
    (list) => {
      return list.map((node) => node.getAttribute("href"));
    }
  );
  console.log(userLinks);
  return userLinks;
}
