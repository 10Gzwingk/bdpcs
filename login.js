var request = require('request').defaults({jar: true});
var qs = require('querystring');

var codeString = '';
var token = '';

var gid = 'A414994-1553-45C4-ADFC-81D68FB2CADB';

function masterbate(json) {
	return json.data;
}

function login() {
	var options = {
		uri: 'https://passport.baidu.com/v2/api/?login',
		qs: {
			apiver: 'v3',
			callback: 'masterbate',
			charset: 'utf-8',
			codestring: codeString,
			countrycode: '',
			detect: 1,
			dv: 'MDExAAoAWQALBDMAIgAAAF00AAkCACOGhLKzAgICAgJU8PCk5avsvv-y7bLiseG-j7_gv8y527bfqwgCAAmRkLm4cHBwIhENAgAgkZHWn4TQkd-YyovGmcaWxZXK-8uUy73YqsOl3J_wlPEJAgAniojHxqKioqKilWJiNnc5fixtIH8gcCNzLB0tci1bPkwlQzp5FnIXBwIABJGRkZEHAgAEkZGRkQ0CACCRkZ7p8qbnqe68_bDvsOCz47yNveK9y67ctdOq6Ybihw0CAAWRkZ7s7AcCAASRkZGRDQIABZGRntLSDQIABZGRnP__EwIBGJCEhITsmOyc79X61aLVoozuj-aC99m61biX5Nuy1-qf642gmL7Y5d37ifqM07HB_M3rn_HMrs-mwreR5oK_2qzNoYfomaTKpcGkzr2Yqp-tmKqa6I38ieyf682_zLrlleTZv9y92O-JsICwgLCBud243PqI-43Sppv5nf_MleeWzpnAlKzovtfvueHRmsCn1Zr0k_7NqcuhmOiD5dyR3Kj7kaPt2buI46ror86r4I7GtPbT4dTmoMfhk-KO74Hm27jW8ILxh9i906fCsI28mvOd7ZjsuIW0hbSEotCj1Yr5jOvY5dfkwrDDteqZ7Iu6h7aBp9Wm0I_8ie7Z5NXl1fOB8oTbqN26iLWFo9Gi1Iv4jere49Lj0uIWAgAisMSvn7GJuI24jL6Ov4a1gLiJvIWyg7aGt4KzgrqJu4i5jwECAAaRk5OaG7UFAgAEkZGRmhUCAAiRkZDNVEATDgQCAAaTk5GQpZcXAgAVkpM8PCxYBSwAdhkxR25CGCYbcR44EAIAAZEGAgAokZGR3Nzc3Nzc3NmTk5OV5ubm47W1tba2traz5eXl5ubm5uOFhYWGlgcCAASRkZGRCQIAJ4qI8vOUlJSUlJv4-Kzto-S297rluuq56baHt-i3waTWv9mg44zojQkCACeKiKChyMjIyMj7uLjsreOk9rf6pfqq-an2x_eo94Hklv-Z4KPMqM0JAgAnioj6-5eXl5eXpD8_aypkI3EwfSJ9LX4ucUBwL3AGYxF4HmckSy9KDAIAIopvb29vVaTwsf-46qvmuea25bXq2-u06534iuOF_L_QtNEHAgAEkZGRkQwCACKKb29vb1Tuuvu18qDhrPOs_K__oJGh_qHXssCpz7b1mv6bBwIABJGRkZEMAgAiim9vb29TcSVkKm0_fjNsM2MwYD8OPmE-SC1fNlApagVhBAcCAASRkZGRDAIAIopvb29vUVgMTQNEFlcaRRpKGUkWJxdIF2EEdh95AEMsSC0MAgAiim9vb29R86fmqO-9_LHuseGy4r2MvOO8yq_dtNKr6IfjhggCACCGhDMympqa2YTQkd-YyovGmcaWxZXK-8uUy7jNr8Kr3wgCAB6EhquqDAwMWGw4eTdwImMucS5-LX0iEyN8I0UqWDU',
			fp_info: 'ac60c267fb06f2f686a13d83c6c817a5002%7E%7E%7EnCnnszcDavDi8dc_wnn4tcK8n8v5TUz5wU_ccK8n8v5TUz5wU_TnVUZHnVUZxnnZWnVKmucvpv-h4vbz4KHDFky-JvUSFky-JvUiMv5x61aVHvauF1HGOGazHKcSswnZIcD8w4i8X__FwnZUwnXAwnZPc0Cnpv-h4vbz4KHDFky-JvUepv-h4vbz4KHDFky-JvUeFGFTHaZ1FDHPHK7DJU__GB0NnXu1XUpRXX1DmlAnkhEtX1S7-ZsXUztRqRX9Xhh9XCR1lUX2sX3XxqGuzhaxpWAoXE2NHlXXXsLsSBuVyUU5eZUxUUOgLwnZQwnZBwnZKwnZYnncMcDHGxbaa8_DcK7GgEMkqzMU__nwnZVnC8P4UPsrnnXZwnXOnCJiQLnZhwnXNwnXiwnXdwnX',
			fp_uid: 'ac60c267fb06f2f686a13d83c6c817a5',
			gid: gid,
			idc: '',
			isPhone: false,
			loginmerge: true,
			logintype: 'dialogLogin',
			logLoginType: 'pc_loginDialog',
			mem_pass: 'on',
			password: 'zhc1915%5Ezqsiab',
			ppui_logintime: 20023,
			quick_user: 0,
			safeflg: 0,
			splogin: 'rate',
			staticpage: 'https%3A%2F%2Fwww.baidu.com%2Fcache%2Fuser%2Fhtml%2Fv3Jump.html',
			subpro: '',
			token: token,
			tpl: 'mn',
			tt: Date.now(),
			u: 'https%3A%2F%2Fwww.baidu.com%2Fs%3Fie%3Dutf-8%26f%3D8%26rsv_bp%3D1%26tn%3Dbaidu%26wd%3Deval%26oq%3Dnodejs%252520request%26rsv_pq%3Dfcae7f9000018ded%26rsv_t%3Dbdb3YrqXWYT8DVi8VX0KZgrOngm3dbj9pkf9MMtSj2N4b3kIBGaeKnHrB%252Fg%26rqlang%3Dcn%26rsv_enter%3D1%26inputT%3D1110%26rsv_sug3%3D23%26rsv_sug1%3D17%26rsv_sug7%3D100%26rsv_sug2%3D0%26rsv_sug4%3D1110',
			username: '13588042677'
		},
		headers: {
			'Accept': 'application/javascript, */*; q=0.8',
			// 'Accept-Encoding': 'gzip, deflate, br',
			'Accept-Language': 'en-US, en; q=0.8, zh-Hans-CN; q=0.5, zh-Hans; q=0.3',
			'Connection': 'Keep-Alive',
			'Host': 'passport.baidu.com',
			'Referer': 'https://www.baidu.com/',
			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36 Edge/15.15063',
		}
	}
	request(options, function(err, res, body) {
		console.log(res);
	});
}

function loginhistory() {
	params = {
		token: token,
		tpl: 'mn',
		apiver: 'v3',
		tt: Date.now(),
		gid: gid,
		logintype: 'dialogLogin',
		callback: 'masterbate'
	};
	var options = {
		uri: 'https://passport.baidu.com/v2/api/?loginhistory&' + qs.stringify(params), //get方法的参数应当直接写在path中，而不是像post一样写在option.qs中
		headers: {
			'Accept': 'application/javascript, */*; q=0.8',
			// 'Accept-Encoding': 'gzip, deflate, br',
			'Accept-Language': 'en-US, en; q=0.8, zh-Hans-CN; q=0.5, zh-Hans; q=0.3',
			'Connection': 'Keep-Alive',
			'Host': 'passport.baidu.com',
			'Referer': 'https://www.baidu.com/',
			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36 Edge/15.15063',
		}
	}
	request(options, function(err, res, body) {
		login();
	});
}

function logincheck() {
	params = {
		apiver: 'v3',
		callback: 'masterbate',
		dv: '',
		isPhone: false,
		logincheck: '',
		sub_source: 'leadsetpwd',
		tpl: 'mn',
		tt: Date.now(),
		username: '13588042677'
	};
	var options = {
		uri: 'https://passport.baidu.com/v2/api/?logincheck&' + qs.stringify(params), //get方法的参数应当直接写在path中，而不是像post一样写在option.qs中
		headers: {
			'Accept': 'application/javascript, */*; q=0.8',
			// 'Accept-Encoding': 'gzip, deflate, br',
			'Accept-Language': 'en-US, en; q=0.8, zh-Hans-CN; q=0.5, zh-Hans; q=0.3',
			'Connection': 'Keep-Alive',
			'Host': 'passport.baidu.com',
			'Referer': 'https://www.baidu.com/',
			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36 Edge/15.15063',
		}
	}
	request(options, function(err, res, body) {
		codeString = eval(body).codeString;
		// loginhistory();
		console.log(token, codeString);
	});
}

function getapi() {
	params = {
		tpl: 'mn',
		apiver: 'v3',
		tt: Date.now(),
		class: 'login',
		gid: gid,
		logintype: 'dialogLogin',
		callback: 'masterbate'
	};
	var options = {
		uri: 'https://passport.baidu.com/v2/api/?getapi&' + qs.stringify(params), //get方法的参数应当直接写在path中，而不是像post一样写在option.qs中
		headers: {
			'Accept': 'application/javascript, */*; q=0.8',
			// 'Accept-Encoding': 'gzip, deflate, br',
			'Accept-Language': 'en-US, en; q=0.8, zh-Hans-CN; q=0.5, zh-Hans; q=0.3',
			'Connection': 'Keep-Alive',
			'Host': 'passport.baidu.com',
			'Referer': 'https://www.baidu.com/',
			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36 Edge/15.15063',
		}
	}
	request(options, function(err, res, body) {
		token = eval(body).token;
		logincheck();
	});
}

var options = {
	uri: 'https://www.baidu.com/',
	headers: {
		'Accept': 'text/html, application/xhtml+xml, image/jxr, */*',
		// 'Accept-Encoding': 'gzip, deflate, br',
		'Accept-Language': 'en-US, en; q=0.8, zh-Hans-CN; q=0.5, zh-Hans; q=0.3',
		'Connection': 'Keep-Alive',
		'Host': 'www.baidu.com',
		'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36 Edge/15.15063'
	}
}

request(options, function(err, res, body) {
	getapi();
});