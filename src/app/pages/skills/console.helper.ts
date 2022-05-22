
interface SkillInfo {
  value?: string;
  desc?: string;
}

/**
 * console log my skill list
 */
export function consoleSkills(skillList: Array<SkillInfo>) {
  let conStr = '\n%cWhat I can do?%c \n\n';
  conStr += '**********************************************************\n';
  let conCss = ['color:red', 'color:black'];
  skillList.forEach(item => {
    if (item.desc) {
      conStr += `%c${item.value}%c:\n\n${item.desc}\n\n`;
      conCss.push('color:red');
      conCss.push('color:black');
    }
  });
  conStr += '\n\n**********************************************************\n\n';
  console.log(conStr, ...conCss);
}