const { response } = require('express');
const express = require('express');
const puppeteer = require('puppeteer');

const server = express();
server.get('/', async (req,res) => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.alura.com.br/formacao-front-end');
    
    const pageContent = await page.evaluate(() => {
        return {
            subtitle: document.querySelector('.formacao-headline-subtitulo').innerHTML
            // width: document.documentElement.clientWidth,
            // height: document.documentElement.clientHeight,
            // deviceScaleFactor: window.devicePixelRatio
        }

    })

    await browser.close();
    res.send({
        "Id":35213,
        "code":'fornt-end',
        "kind":"DEGREE",
        "kindDisplayName": "Formação",
        "kindSlugDisplayName":"formacao",
        "situation":"PUBLISHED",
        "title":"Front End",
        "subtitle":pageContent.subtitle
    });
});
const port = 3333;

server.listen(port, () => {
    console.log(`Servidor iniciado!acesse em http://localhost:${port}`);
});



// (async () => {
   
// })();
