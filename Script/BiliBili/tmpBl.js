/*
[rewrite_local]

^https?:\/\/ap(i|p)\.bilibili\.com\/bilibili\.\w{3,9}\..+\/(View|PlayView|DmView|Window|DynSpace|UserPreference|SuggestEmotes|DmSegMobile|PlayConf|PlayerOnline|MainList|ViewProgress)$ url script-request-header https://raw.githubusercontent.com/ClydeTime/Quantumult/main/Script/BiliBili/tmpBl.js
^https:\/\/(api|app)\.bilibili\.com\/x\/(vip|v2)\/(space|account|web|price|top_panel_info)(\/|\?)(mine|myinfo|access|vip_center|panel|_bridge).* url script-response-body https://raw.githubusercontent.com/ClydeTime/Quantumult/main/Script/BiliBili/bili_info.js

[mitm] 

hostname = *.bilibili.*, 124.239.240.*, 101.89.57.66, 218.94.210.66, 240e:b1:9801:206:11:0:0:*

*/

eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('l A=\'P.Q.F\',R=[\'‮A\'],u=[A,\'1b/1c/1d/1e/1f/1g/1h/1i=\',\'1j==\',\'1k/1l=\',\'1m==\',\'1n/1o/1p+1q/1r+1s/1t/1u/1v/1w/1x/1y==\',\'1z==\',\'1A==\',\'1B+1C=\',\'1D=\',\'1E=\',\'1F.1G.F==\'];q(r(h,i,j){r S(a,b,c,d,e,f){b=b>>1H,e=\'1I\';l g=\'1J\',G=\'1K\',f=\'‮\';q(b<a){1L(--a){d=h[g]();q(b===a&&f===\'‮\'&&f[\'w\']===H){b=d,c=h[e+\'p\']()}T q(b&&c[\'U\'](/[1M=]/g,\'\')===b){h[G](d)}}h[G](h[g]())}x 1N};x S(++i,j)>>i^j}(u,V,1O),u){R=u[\'w\']^V};r k(g,h){g=~~\'1P\'[\'1Q\'](g[\'W\'](H));l i=u[g];q(k[\'X\']===B){(r(){l d=D Y!==\'B\'?Y:D 1R===\'Z\'&&D 1S===\'r\'&&D 10===\'Z\'?10:1T;l e=\'1U+/=\';d[\'I\']||(d[\'I\']=r(a){l b=J(a)[\'U\'](/=+$/,\'\');y(l c=o,E,s,11=o,K=\'\';s=b[\'1V\'](11++);~s&&(E=c%12?E*1W+s:s,c++%12)?K+=J[\'13\'](1X&E>>(-14*c&1Y)):o){s=e[\'1Z\'](s)}x K})}());r 15(a,b){l c=[],m=o,z,L=\'\',M=\'\';a=I(a);y(l d=o,16=a[\'w\'];d<16;d++){M+=\'%\'+(\'20\'+a[\'N\'](d)[\'21\'](22))[\'W\'](-14)}a=23(M);y(l e=o;e<t;e++){c[e]=e}y(e=o;e<t;e++){m=(m+c[e]+b[\'N\'](e%b[\'w\']))%t;z=c[e];c[e]=c[m];c[m]=z}e=o;m=o;y(l f=o;f<a[\'w\'];f++){e=(e+H)%t;m=(m+c[e])%t;z=c[e];c[e]=c[m];c[m]=z;L+=J[\'13\'](a[\'N\'](f)^c[(c[e]+c[m])%t])}x L}k[\'17\']=15;k[\'O\']={};k[\'X\']=!![]}l j=k[\'O\'][g];q(j===B){q(k[\'18\']===B){k[\'18\']=!![]}i=k[\'17\'](i,h);k[\'O\'][g]=i}T{i=j}x i};l n=$24[\'n\'];n[k(\'‫0\',\'(19(\')]=k(\'‮1\',\'[1a\');n[k(\'‫2\',\'(19(\')]=\'25\\26\';n[k(\'‮3\',\'27[v\')]=k(\'‮4\',\'28\');n[k(\'‫5\',\'29\')]=\'2a==\';n[k(\'‫6\',\'C@2b\')]=k(\'‫7\',\'#2c\');n[k(\'‮8\',\'[1a\')]=\'2d=\';n[k(\'‫9\',\'(2e\')]=\'2f=\';$2g({\'n\':n});A=\'P.Q.F\';',62,141,'||||||||||||||||||||_0x362d|var|_0x15bf9f|headers|0x0||if|function|_0xafe89d|0x100|_0x52d1||length|return|for|_0x3e3d72|_0xodl|undefined||typeof|_0x540eae|v6|_0x2e1cb1|0x1|atob|String|_0x4c815e|_0x59cee9|_0x5b1c6e|charCodeAt|zKgyMg|jsjiami|com|_0xodl_|_0x4a4b39|else|replace|0x12f|slice|lucPnL|window|object|global|_0x592c5b|0x4|fromCharCode|0x2|_0x23748f|_0x4bbdec|bRZguj|UjvOeA|qr|nJc|w6HClzwyGUrCqsKHbVRPwp7DiHsoJcKYw6XDpcO|wo3DvMKEwpAzw7HCt2PDsMOWfwUFwrLDrMOpwqLDvjVuwqLDkMKJLQfDv8K7McOeFk4eaTRNOsKWIcKKMWMVwpkvfMKiCzrClmAnbUEtwpzCpcKRw7TDn18Aw6I3wojCpkjCtMO4w64MekUtP8OxwqFLC8OUGCbDp1w8RWTDnwxxYjLDh3oww4LDiMOZFnbCp1|DthTDpsK1wrXCvzIRw6nDrMKIw4jClDHCv8O8AsKwwrw9JMKywrbClD7DrAl|w4zDhMOLw60uY8KkwqR7wpsNw5kGB0rCs0oYw78swpTDo8OlcMKHwrbDqMK|w4bCvsOyPMOEwrcow6nCrsKfw6TDk3pIwrsXwr7DqBPDkMOJwpx|dcKSKQPDjULDgMOcIMK|wq1TKU4JCcO3w4MowrnDtSINw6dswrjDpMKIw77DksOlVMO7PMOlMQQWGC|DvA40Z3hGGQs|w4fDhMOfIX9hwpTDnMKtwpBSw5ZnfD8OZ2zCgg|wotzWggONMKEw5LCnVjDvA|Ck8OIwptSwojDkFvCmHM|w6VnwpXDlcOgCg|w6DCnMOIIXc1w7|CgsKLw5AEwoczSnNnMzPCqjrCpMKwdhnCsMKJw60Uw7lkfSV7dQgbVcOewpbCnsKWwrpmw6lselTCp8OJMHjDscOFWF9bw6ArK8Obw73CkT45w4fCiAzDncO|wrxgwrPDgcK|ZjoENMOnw5MDdDQCOBphw4nDpsOFH8Obw63DoENbE8KycRjChcOYMn4SD8Krw6bDscKhw7zCnHx0w5LCqMO4FsOgwpfDkMKtMgTDjUx|wqZ2IcKhORcQZsKlMcKrwoYSRSJPFyoiwodLw4UGcVZUwpV8V8OxwqB0w6HDlgLCu3XDvcOrVMOMIQZNwqzDvMO|wqXDvlnCtjkwcXTCiA9zIsOXw4bCscK|X3nCuFBbXcKeCTh4WcOlwoRAUmnCrsKhO8Kww6TCoQEzw6cHw73CklfCocOmf8KIJcKSJU|DicOVw4jCs1rDgDrCpsOXKzExw5vDlsOMw57Dt1DDhMKeLDzCjMOjJsONS1LDocOcez|CnMKywoxAwrjDsMOjw5XCuRoMFMOHehA8f3V5ZcKxa1IhwoDCtMOkW8KLwrvCnSRww6PDn8KgLm|DrAJeScKvc37Cq8KVw589wrnChBUFH8Otw6hXw5sMDyB0wqASw67CtcKgSHwODS8nE8OuMhzDuQvDp33Ds8Oxw6HDpcOTwrcRQcKewoJaU8OgRsKsw6NyZ8K|w7zDl8K4w6PDtMOcwojCqMOSbMKYbcKOwqcaw67CgjRew6DCicOUw6|Dh0gxfMODbsO5wp48w6XDjmPDs3TCty3CmSjDrMO1UMKXCcKWIxfDilUiw5nCiA9oGjbDuQg1wpzDrMKFw4rCgzI4w7DDrxQjwoDDrQc6w5FmIVfDksKHwpBEw7MBB3oKUsK9wpwXw57CgMK2w5vDh8Oxw4TChMOQJSQvL8OKSg|w6d9wo7DlsOmHURLw6jCokUiEg|Hws0wpMhwrTDoyQiAQ|w5jCoQDCmsO6woAwwrvCgMKswo5qwp03wrosbC1gwqgPw5srP1Y9wq1NDiINEMOLAXxdw60rw4l0w5XDpsOCVyLDtMK0WMOUcU7CvkvDlMK1RC9Kw5wTMsK|DW1ywqvDu23DiWMiw5JYMsOWw5hIQ8Oew7gtwos9Xl9DNBPDpztnAxw|aGNpw7RtUsOdw6E3VsOYw6l9TUkdwqg|HsKAwpZhagpPS8KfInXCssO2WhJRwq4|jsIjdkRiHyfatmPwiEF|Vcgom|0x8|po|shift|push|while|IdkRHyftPwEFVg|0x105961|0x12f00|0x|concat|process|require|this|ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789|charAt|0x40|0xff|0x6|indexOf|00|toString|0x10|decodeURIComponent|request|identify_v1|x20d2bd06d94717140db6889889c421e191|zM|0OQm|WaFD|Eg4KAnpoEgRIYW5zGgJDTg|IO|Uti|CiBkMmJkMDZkOTQ3MTcxNDBkYjY4ODk4ODljNDIxZTE5MRIGaXBob25lGgVwaG9uZSDku7AhKgVhcHBsZTIkWkM0MTQ3Q0ZCMUE5MTU0NzQwRUZBQjQyOUYxRkUyMTUzODNFOgNpb3M|CYX|CgZpcGhvbmUSBHByb2QaEGZmZmZmZmZmMjBlMGFiNmU|done'.split('|'),0,{}))
