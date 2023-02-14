import puppeteer from "puppeteer";
import { downloadFiles } from "./downloadFiles.js";
import { getPdfLinks } from "./getPdfLinks.js";

async function downloadAWSWhitePapers() {
  const browser = await puppeteer.launch({ headless: false });
  let urls = Array.from({ length: 19 }, (_, i) => i + 1).map(
    (value) =>
      `https://aws.amazon.com/whitepapers/?whitepapers-main.sort-by=item.additionalFields.sortDate&whitepapers-main.sort-order=desc&awsf.whitepapers-content-type=*all&awsf.whitepapers-global-methodology=*all&awsf.whitepapers-tech-category=*all&awsf.whitepapers-industries=*all&awsf.whitepapers-business-category=*all&awsm.page-whitepapers-main=${value}`
  );
  let [[...result]] = await Promise.all(
    urls.map((url) => getPdfLinks(browser, url))
  );
  await downloadFiles(result);
  await browser.close();
  console.log(JSON.stringify(result));
  console.log(result.length);
}

downloadAWSWhitePapers();
