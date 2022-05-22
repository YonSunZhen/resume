interface Config {
  baseInfo?: any,
  skills?: any,
  education?: any,
  experience?: any,
  personalProject?: any
}

const CONFIG: Config = {
  baseInfo: {
    title: '前端工程师',
    name: '孙永镇',
    blog: 'http://yonsunzhen.cn',
    github: 'https://github.com/YonSunZhen',
    mail: '1315976441@qq.com',
    phone: '18307682491',
    cv: {
      title: 'Sun Yongzhen_CV.pdf',
      url: './static/pdf/CV.pdf'
    }
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
      skills: '@Angular , vue2 ,  typescript , Node(Koa2)',
      projects: [
        {
          name: '<b>百度脑图数据平台</b>',
          items: [
            {
              desc: '前端基于@angular + typescript技术栈，负责相关前端功能的开发，设计并实现了<b>动态用户权限功能</b>;',
            },
            {
              desc: '后端基于nodejs koa2 + MySQL技术栈，负责数据表设计，<b>restful</b> api接口开发;'
            }
          ]
        },
        {
          name: '<b>车联网数据微服务平台</b>',
          items: [
            {
              desc: '负责后端微服务接口的开发，nodejs微服务工程的搭建，产出了快速搭建项目工程的npm脚手架 <a target="_blank" href="https://www.npmjs.com/package/fission-template-cli" style="text-decoration-line: none; color: blue;">fission-template-cli（nodejs + typescript）</a>，极大的缩短了重复搭建项目消耗的时间；'
            },
            {
              desc: '设计并实现vs code插件 <a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=yonsunzhen.json-go-ts" style="text-decoration-line: none; color: blue;">json-go-ts</a>，配合fission-template-cli脚手架生成的项目工程使用，实现了typescript文件与json文件之间 <b>代码自动补全</b>, <b>跳转到定义</b>, <b>智能诊断&提示</b>，提高了开发效率；'
            }   
          ]
        },
        {
          name: '<b>研发信息化管理平台</b>',
          items: [
            {
              desc: '前端基于vue2 + element ui技术栈，负责相关前端功能的开发（<b>项目计划管理功能</b>, <b>项目缺陷管理功能</b> ，<b>ECharts报表功能</b>），以及公共组件的开发；'
            },
            {
              desc: '封装了<b>基于ECharts的公共方法</b>, 便于ECharts报表的快速创建与维护；'
            }    
          ]
        },
      ]
    }
  },
  personalProject: [
    {
      name: '<b>图床管理平台</b>',
      url: 'http://www.yonsunzhen.cn/storage/#/files/all-files',
      skill: [
        { name: '@angular', url: 'https://github.com/YonSunZhen/client-storage'}, 
        { name: '后端开发', url: 'https://github.com/YonSunZhen/server-storage'},
        { name: '性能优化', url: 'https://github.com/YonSunZhen/resume/blob/main/nginx/default.conf'},
      ],
      item: [
        {
          title: '@angular',
          url: 'https://github.com/YonSunZhen/client-storage',
          desc: '从0到1搭建了angular项目工程，并且产出了基于 angular@10.1.5 & ng-zorro-antd@10.0.1 实现的<a href="https://github.com/YonSunZhen/ng-antd-admin" target="_blank">后台管理系统模板</a>，</br>其中实现了菜单模块&http service模块（定义统一的响应状态码），便于后续其他项目的快速搭建；',
          // items: [
          //   '对 css、js 以及图片等资源,以 hashChunk 命名并配置 cache-control 缓存时间为长缓存',
          //   '对 css、js 以及 json 等文本资源进行 gzip 压缩，并开启 http1.1 实现 http 长连接并边压缩边输出'
          // ]
        },
        {
          title: '后端开发',
          url: 'https://github.com/YonSunZhen/server-storage',
          desc: '有后端开发和部署能力,本项目后端采用 nodejs koa2 (阅读过koa2源码)；'
        },
        {
          title: '性能优化',
          desc: '配置 nginx 性能优化策略如下:',
          url: 'https://github.com/YonSunZhen/resume/blob/main/nginx/default.conf',
          items: [
            '对 css、js 以及图片等资源,以 hashChunk 命名并配置 cache-control 缓存时间为长缓存；',
            '对于图片资源, 上传图片时会生成相应缩略图，界面初始化时显示缩略图，减少请求资源消耗的时间；'
          ]
        },
        {
          title: '部署',
          desc: '熟悉 linux shell 命令,有 linux 部署能力,本项目部署于 centos7,前端通过 nginx 进行部署,后端通过 node 进行部署；'
        },
        {
          title: 'ts',
          desc: '熟悉 typescript 常用用法；'
        }
      ]
    },
  ],
  skills: [
    { 
      value: '扎实的javascript基础',
      desc: '扎实的 javascript 基础，熟悉常用的ES5、ES6语法'
    },
    { 
      value: 'vue2(熟悉原理)',
      desc: '熟悉前端 vue2 框架，阅读过 vue2 相关源码，比如：响应式设计原理，vuex 实现原理'
    },
    { 
      value: '@angular',
      desc: '熟悉前端 @angular 框架，了解其中 DI（依赖注入）的实现原理'
    },
    { 
      value: 'Node/Koa2(阅读过源码)',
      desc: '熟悉 nodejs，有后端开发和部署经验，阅读过 nodejs koa2 相关源码'
    },
    { 
      value: 'typescript',
      desc: '熟悉 typescript，了解常用的类型用法'
    },
    {
      value: 'React',
      desc: '了解 React 框架，能进行简单功能的开发'
    },
    { 
      value: 'Git',
      desc: '了解Git常用用法'
    },
    { 
      value: 'SCSS',
      desc: '了解SCSS常用用法'
    }
  ]
}

export default CONFIG