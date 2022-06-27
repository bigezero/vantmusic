//文件名-模块页面文件名统一
import request from '@/utils/request';

export const recommendMusic = params => request({
  url:'/personalized',
  params
})