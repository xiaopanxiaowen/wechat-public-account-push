/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx83bfe89f72396714',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '5fbb9c8f0d2a738f3195e9a1c378d976',

  PROVINCE: '江苏',
  CITY: '南通',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝老婆',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oT1h86IBUokBHJhXw9K_rMzCgGsc',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'K4HYwjFUD4nsVGJc7RnaBZ58dc9Drj_jwteExietzEk',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-21',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '2001', date: '11-21',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '*生日', name: '小潘', year: '2003', date: '02-04',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '07-20',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-01-23' },
        // 已经认识
        { keyword: 'marry_day', date: '2022-07-20' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: 'oT1h86IBUokBHJhXw9K_rMzCgGsc',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
    }
  ],

}

module.exports = USER_CONFIG

