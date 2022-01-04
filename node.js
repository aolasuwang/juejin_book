// import { readdir } from 'fs/promises';
const { readdir, appendFile } = require('fs/promises');

async function getDoc() {
    try {
        const files = await readdir('./');
        let links = '';
        for (const file of files) {
            if (file.split('.').pop() === 'htm') {
                console.log(file);
                links += `
                    <div>
                        <a href="/juejin_book/${file}">${file}</a>
                    </div>
                `
            }
        }

        let html = `
            <!DOCTYPE html>
            <html>
                <head>
                    <title>mszd</title>
                    <meta charset="utf-8" />
                </head>
                <body>
                    ${links}
                </body>
            </html>
        `

        console.log(html)

        appendFile('./index.html', html)
    } catch (err) {
        console.error(err);
    }
}

getDoc();