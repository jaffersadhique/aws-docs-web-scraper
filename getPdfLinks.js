export async function getPdfLinks(browser, url) {
  let userLinks = [];
  let page = await browser.newPage();
  await page.goto(url);
  // Set screen size
  await page.setViewport({ width: 1080, height: 1024 });
  console.log(url);
  await page.waitForNetworkIdle();
  userLinks = await page.$$eval(
    "div.aws-directories-container-wrapper a[href*='pdf']",
    (list) => {
      return list.map((node) => node.getAttribute("href"));
    }
  );
  console.log(userLinks);
  return userLinks;
}
