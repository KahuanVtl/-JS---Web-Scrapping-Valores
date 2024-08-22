const { checkValue } = require('./monitor.js');

const url = 'https://www.magazinevoce.com.br/magazineoficialmagaluweb/jogo-de-tacas-de-vidro-para-sobremesa-transparente-150ml-6-pecas-haus-concept-lotus/p/238303600/ud/tcsb/';
const selector1 = '#__next > div > main > section:nth-child(6) > div.sc-bCrHVQ.hJVwij > div > div > div > div > p';

checkValue(url, selector1);

setInterval(() => checkValue(url, selector1), 1000);
