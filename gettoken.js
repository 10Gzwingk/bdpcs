var https = require('https');
var qs = require('querystring');

var data = {
	tpl: 'mn',
	apiver: 'v3',
	tt: Date.now(),
	class: 'login',
	gid: 'A414994-1553-45C4-ADFC-81D68FB2CADB',
	logintype: 'dialogLogin',
	callback: 'bd__cbs__570yu2'
}

var options = {
	hostname: 'passport.baidu.com',
	path: '/v2/api/?getapi&' +qs.stringify(data),
	headers: {
		'Accept': 'application/javascript, */*; q=0.8',
		'Accept-Encoding': 'gzip, deflate, br',
		'Accept-Language': 'en-US, en; q=0.8, zh-Hans-CN; q=0.5, zh-Hans; q=0.3',
		'Connection': 'Keep-Alive',
		'Host': 'passport.baidu.com',
		'Referer': 'https://www.baidu.com/',
		'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36 Edge/15.15063',
		'Cookie': 'H_PS_PSSID=1424_21126_17001_22073; BIDUPSID=D9CAE3A53D73190826DCFC0291A146CA; PSTM=1501320911; BDORZ=B490B5EBF6F3CD402E515D22BCDA1598; BAIDUID=87CB9CFBA5DA55A4AB9B42BE14D98F6A:FG=1'
	}
}

https.get(options, (res) => {
	console.log(res.headers);
});
