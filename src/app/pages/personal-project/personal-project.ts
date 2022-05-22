declare var require;
import config from '@config'

const data = config.personalProject

const personalProject = require('./personal-project.art');
const personalProjectHtml = personalProject({data});
document.getElementById('personal-project').innerHTML = personalProjectHtml;