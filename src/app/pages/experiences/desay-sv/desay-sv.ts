declare var require;
import config from '@config'

const data = config.experience.desaySv

const desaySV = require('./desay-sv.art');
const desaySVHtml = desaySV({data});
document.getElementById('desay-sv').innerHTML = desaySVHtml;