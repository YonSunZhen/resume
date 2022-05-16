interface Config {
  baseInfo?: any,
  skills?: any,
  education?: any,
  experience?: any
}

const CONFIG: Config = {
  baseInfo: {
    title: '前端工程师',
    name: '孙永镇',
    blog: 'http://122.51.184.238/',
    github: 'https://github.com/YonSunZhen',
    mail: '1315976441@qq.com',
    phone: '18307682491'
  },
  education: [
    {
      school: '韩山师范学院 本科',
      college: '计算与信息科学学院',
      major: '计算机科学与技术',
      duration: '2015.09 - 2019.06'
    }
  ],
  experience: {
    desaySv: {
      companyName: '德赛西威',
      companyUrl: 'https://www.desaysv.com/',
      job: '前端(兼后端)工程师',
      duration: '2019.06 - 至今(3年)',
      skills: '@Angular , typescript , Node , 性能优化 , nginx , docker , 微信小程序',
      projects: [
        {
          name: '<b>百度脑图数据平台</b>',
          items: [
            {
              desc: '设计并实现了数据接口统一封装,使接口模块多系统复用,降低了接口维护成本,规范了整个开发流程,提高了开发效率',
            },
            {
              desc: '性能优化,配置 nginx 性能优化策略如下:',
              detail: [
                '对 css、js 以及图片等资源, 配置 cache-control 缓存时间为<b>长缓存</b>',
                '对 css、js 以及 json 等文本资源进行 gzip 压缩'
              ]
            }
          ]
        },
        {
          name: '<b>后端(负责node微服务的开发)</b>',
          items: [
            {
              desc: '负责搭建 node koa2 + typescript 工程，集成了 jest、apidoc、docker、eslint、husky 等功能。 并产出了脚手架：koa-ts-cli，该脚手架用来初始化 koa2 + ts 工程，节省了每次创建新项目的大量配置时间。'
            },
            {
              desc: '负责搭建 node koa2 + typescript 工程，集成了 jest、apidoc、docker、eslint、husky 等功能。 并产出了脚手架：koa-ts-cli，该脚手架用来初始化 koa2 + ts 工程，节省了每次创建新项目的大量配置时间。'
            },
            {
              desc: '负责搭建 node koa2 + typescript 工程，集成了 jest、apidoc、docker、eslint、husky 等功能。 并产出了脚手架：koa-ts-cli，该脚手架用来初始化 koa2 + ts 工程，节省了每次创建新项目的大量配置时间。'
            },
            {
              desc: '负责搭建 node koa2 + typescript 工程，集成了 jest、apidoc、docker、eslint、husky 等功能。 并产出了脚手架：koa-ts-cli，该脚手架用来初始化 koa2 + ts 工程，节省了每次创建新项目的大量配置时间。'
            },          ]
        }
      ]
    }
  },
  skills: ['扎实的javascript基础','vue2(熟悉原理)', '@angular', 'Node/Koa2(阅读过源码)', 'typescript', 'Git']
}

export default CONFIG