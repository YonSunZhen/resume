declare var require;
import config from '@config'

const data = config.baseInfo

const info = require('./info.art');
const infoHtml = info({ data });
document.getElementById('info').innerHTML = infoHtml;