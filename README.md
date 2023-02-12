# aws-docs-web-scraper

This code is used to download white papers from the AWS website. It imports the puppeteer library, as well as two custom functions from separate files - downloadFiles and getPdfLinks. It then creates an array of URLs for each page of white papers on the website, and uses the getPdfLinks function to get all of the PDF links from each page. The downloadFiles function is then used to download all of the PDFs.

## Prerequisites

What things you need to install the software and how to install them:

- Node.js
- Text Editor (e.g., Sublime Text, Atom, Visual Studio Code)

## Installing

1. Clone or download the repository from Github
2. Open the repository in your text editor
3. Run `npm install` to add the necessary dependencies for this project

## Running the Project

1. Open the terminal in your text editor
2. Run `node index.js` to generate the Readme file
