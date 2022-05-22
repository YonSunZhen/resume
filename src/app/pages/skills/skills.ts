declare var require;
import config from '@config'

export const data = config.skills

const skillsArt = require('./skills.art');
const skillsHtml = skillsArt({ data });
document.getElementById('skills').innerHTML = skillsHtml;

setTimeout(async () => {
  const consoleHelper = await import('./console.helper');
  consoleHelper.consoleSkills(data);
}, 1000);

