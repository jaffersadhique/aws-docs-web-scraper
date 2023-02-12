import { createWriteStream } from "fs";
import fetch from "node-fetch";

export async function downloadFiles(urls) {
  try {
    const promises = urls.map(async (url) => {
      const response = await fetch(url);
      const fileName = url.split("/").pop().split("?")[0];

      return new Promise((resolve, reject) => {
        const fileStream = createWriteStream(fileName);
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
