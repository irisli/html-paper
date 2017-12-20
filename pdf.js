// Converts a static paper into a pdf
// Takes in a filename without the html extension (e.g. static-paper) and
// outputs a pdf file of the same name.

// Usage: pdf.js static-paper

if (!process.argv[2]) {
  console.error('Usage: pdf.js static-paper')
  process.exit(1);
}

let pagename = process.argv[2];
pagename = pagename.replace(/\.html$/,'');
console.log('Generating pdf for: ' + pagename)

const path = require('path');

const puppeteer = require('puppeteer');
const fs = require('fs');
const { spawn } = require('child_process');

const httpServer = spawn('node', [path.dirname(process.argv[1]) + '/node_modules/.bin/http-server', '-p', '8085', '-a', '127.0.0.1']);

let pageToPdfStarted = false;
let serverOuts = 0;

httpServer.stdout.on( 'data', data => {
  serverOuts++;

  console.log( `stdout: ${data}` );

  if (serverOuts >= 2) {
    if (!pageToPdfStarted) {
      pageToPdfStarted = true;
      pageToPdf();
    }
  }
});

httpServer.stderr.on( 'data', data => {
  console.log( `stderr: ${data}` );
});

httpServer.on( 'close', code => {
  console.log( `child process exited with code ${code}` );
} );

process.on('exit', function() {
  httpServer.kill();
});


function shutdown(code) {
  httpServer.kill();
  process.exit(code)
}

function pageToPdf() {
  (async() => {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      let url = 'http://127.0.0.1:8085/' + pagename + '.html';
      console.log(url)
      await page.goto(url, {waitUntil: 'networkidle2'});
      await page.pdf({
        path: pagename + '.pdf',
        format: 'letter'
      });

      console.log('pdf file created at ' + pagename + '.pdf')

      await browser.close();
      shutdown(0);
    } catch(e) {
      console.error(e);
      shutdown(1);
    }
  })();
}

