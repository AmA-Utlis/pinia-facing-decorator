/**
 * @Description: 方法描述
 * @Author: 码小趣 (www.maxiaoqu.com)
 * @Date: 2023-10-19 15:50:14
 * @LastEditors: 码小趣 (www.maxiaoqu.com)
 * @LastEditTime: 2023-10-19 18:00:44
 */
import { defineConfig } from 'father';

export default defineConfig({
  platform: 'browser',
  esm: {
    output: 'es'
  },
  cjs: {
    platform: 'browser',
    output: 'lib'
  },
  umd: {
    output: 'dist'
  }
})
