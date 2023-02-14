import fetch from "node-fetch";
import * as path from "path";
import * as fs from "fs";

export async function downloadFiles(urls) {
  try {
    fs.mkdirSync(path.join(process.cwd(), "downloads"));
    const promises = urls.map(async (url) => {
      const response = await fetch(url);
      const fileName = url.split("/").pop().split("?")[0];

      return new Promise((resolve, reject) => {
        const fileStream = fs.createWriteStream(
          path.join(process.cwd(), "downloads", fileName)
        );
        response.body.pipe(fileStream);

        response.body.on("error", (err) => {
          reject(err);
        });

        fileStream.on("finish", () => {
          resolve();
        });
      });
    });
    await Promise.all(promises);
    console.log("Downloaded all files");
  } catch (error) {
    console.log(`Errors in file download ${JSON.stringify(error)}`);
  }
}
