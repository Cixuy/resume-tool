// 复制本文件为 profile.js，填入自己的信息。
// profile.js 已在 .gitignore 中，不会被提交；没有这个文件时页面显示（姓名）（学校）这类占位符。
window.PROFILE_OVERRIDE = {
  name: "张三",
  birth: "2002/03",          // 出生年月，写到月即可
  phone: "13800000000",
  mail: "zhangsan@example.com",
  home: "zhangsan.github.io", // 不带 https://，页面上会自动补链接
  intent: "Java 后端开发",    // 只是默认值，粘 JD 后会按 JD 重算
  edu: {
    school: "某某大学",
    major: "软件工程",
    degree: "本科",
    // 起止年月，格式 YYYY/MM - YYYY/MM，中间用空格连字符空格
    period: "2021/09 - 2025/07",
    courses: "数据结构、操作系统、计算机网络、数据库原理"
  },
  extra: "英语已通过 CET-4 / CET-6"
}
