/******************************
脚本功能：WPS解锁稻壳会员
软件版本：11.26.0
更新时间：2022-07-05
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
*******************************

[rewrite_local]
# > WPS解锁稻壳会员
^https?:\/\/.+\.(docer.)?wps.cn\/(user\/v1\/vip|android\/mb\/buy|download\/v1\/ios|partner\/invoke\/usable|(api|rank)\/v1(\/mobile\/mb)?\/detail) url script-request-header https://raw.githubusercontent.com/ClydeTime/Quantumult/main/Script/wpsDocker.js

[mitm] 
hostname = *.docer.wps.cn, vipapi.wps.cn

*******************************/

var string = [
  "headers",
  "Cookie",
  "wps_sid=V02SX4VqzgWOwZnb8SIefL9aw_S756800a221e7c004f984b69;wpsua=V1BTVUEvMS4wKGlvcy1vZmZpY2U6MTEuMjYuMDExODY3MDtpUGhvbmU6MTQuMjtVRElELURCRTI2NTM0LTY5QUEtNEZFMi1CRTRCLTQ1QTdGQzM1NTg1NjphVkJvYjI1bClhcHBsZS9pUGhvbmUxMiwx;SEC_SESSION=be338ae5-8ee7-4340-9c02-c9c99b5177b1;Sec_User_id=57345519",
  "User-Agent",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 WpsiOS/11.26.0",
  "IP",
  "223.5.5.5"
];
var clydeTime = $request[string[0]];
clydeTime[string[1]] = string[2];
clydeTime[string[3]] = string[4];
clydeTime[string[5]] = string[6];
$done({
  headers: clydeTime
});