const axios = require('axios');
const cheerio = require('cheerio');

async function fetchHTML(url, selector) {
    try {
        const valueDesired = 100.00;

        const { data: html } = await axios.get(url);
        const $ = cheerio.load(html);

        const valueText = $(selector).text().trim();
        const valueFiltered = valueText.match(/(\d+)[.,](\d{2})/);

        if (valueFiltered) {
            const valueFormatted = parseFloat(valueFiltered[1] + '.' + valueFiltered[2]);

            let message;
            if (valueFormatted > valueDesired) {
                message = `Valor ${valueFormatted} maior do que o desejado: ${valueDesired}`;
            } else if (valueFormatted === valueDesired) {
                message = `Valor ${valueFormatted} igual ao desejado: ${valueDesired}`;
            } else if (valueFormatted < valueDesired) {
                message = `Valor ${valueFormatted} menor do que o desejado: ${valueDesired}`;
            } else {
                message = `Valor não entendido`;
            }

            return message;
        } else {
            return 'Valor não encontrado na página';
        }
    } catch (error) {
        console.error(`Erro ao buscar a página: ${error}`);
    }
}

function checkValue(url, selector) {
    fetchHTML(url, selector).then(value => {
        console.log(value);
    });
}

module.exports = { checkValue };
