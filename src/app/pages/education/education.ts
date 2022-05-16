declare var require;
import config from '@config'

const data = config.education

const education = require('./education.art');
const educationHtml = education({data});
document.getElementById('education').innerHTML = educationHtml;