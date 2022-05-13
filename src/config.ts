interface Config {
  baseInfo?: any,
  skills?: any,
  education?: any
}

const CONFIG: Config = {
  baseInfo: {
    title: '前端工程师',
    name: '孙永镇',
    blogUrl: 'http://122.51.184.238/'
  },
  education: [
    {
      school: '韩山师范学院 本科',
      college: '计算与信息科学学院',
      major: '计算机科学与技术',
      duration: '2015.09 - 2019.06'
    }
  ],
  skills: ['扎实的javascript基础', 'React(阅读过相关源码)', 'Node/Koa2(阅读过源码)', 'Webpack', 'typescript', '性能优化', 'Restful', 'Nginx', 'Docker', 'Git', 'SCSS'],
}

export default CONFIG