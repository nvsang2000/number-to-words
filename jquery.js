

function spellingNumber (number, options) {
		
		number = parseFloat(number.toString().replace(/,/g, ''));

		if (!isNumeric(number)) {
			throwError('Value given is not numeric.');
			return;
		}
		
		var spellingNumber = {};

		spellingNumber.defaults = {
			noAnd: false,
			alternativeBase: null,
			decimalSeperator: '',
			wholesUnit: '',
			fractionUnit: '',
			digitsLengthW2F: null,
			lang: "en",
			i18n: {
				'en': {
					"useLongScale": false,
					"baseSeparator": "-",
					"unitSeparator": "and ",
					"decimalSeperator": 'and ',
					"base": {
						"0": "zero",
						"1": "one",
						"2": "two",
						"3": "three",
						"4": "four",
						"5": "five",
						"6": "six",
						"7": "seven",
						"8": "eight",
						"9": "nine",
						"10": "ten",
						"11": "eleven",
						"12": "twelve",
						"13": "thirteen",
						"14": "fourteen",
						"15": "fifteen",
						"16": "sixteen",
						"17": "seventeen",
						"18": "eighteen",
						"19": "nineteen",
						"20": "twenty",
						"30": "thirty",
						"40": "forty",
						"50": "fifty",
						"60": "sixty",
						"70": "seventy",
						"80": "eighty",
						"90": "ninety"
					},
					"units": [
						"hundred",
						"thousand",
						"million",
						"billion",
						"trillion",
						"quadrillion",
						"quintillion",
						"sextillion",
						"septillion",
						"octillion",
						"nonillion",
						"decillion",
						"undecillion",
						"duodecillion",
						"tredecillion",
						"quattuordecillion",
						"quindecillion"
					],
					"unitExceptions": []
				},
				'vi':{
					"useLongScale": false,
					"baseSeparator": " ",
					"unitSeparator": "và ",
					"base": {
						"0": "không",
						"1": "một",
						"2": "hai",
						"3": "ba",
						"4": "bốn",
						"5": "năm",
						"6": "sáu",
						"7": "bảy",
						"8": "tám",
						"9": "chín",
						"10": "mười",
						"15": "mười lăm",
						"20": "hai mươi",
						"21": "hai mươi mốt",
						"25": "hai mươi lăm",
						"30": "ba mươi",
						"31": "ba mươi mốt",
						"40": "bốn mươi",
						"41": "bốn mươi mốt",
						"45": "bốn mươi lăm",
						"50": "năm mươi",
						"51": "năm mươi mốt",
						"55": "năm mươi lăm",
						"60": "sáu mươi",
						"61": "sáu mươi mốt",
						"65": "sáu mươi lăm",
						"70": "bảy mươi",
						"71": "bảy mươi mốt",
						"75": "bảy mươi lăm",
						"80": "tám mươi",
						"81": "tám mươi mốt",
						"85": "tám mươi lăm",
						"90": "chín mươi",
						"91": "chín mươi mốt",
						"95": "chín mươi lăm"
					},
					"units": [
						"trăm",
						"ngàn",
						"triệu",
						"tỷ",
						"nghìn tỷ"
					],
					"unitExceptions": []
				}

	
			}
		}

		options = options || {};
		options = $.extend({}, spellingNumber.defaults, options);

		"use strict";

		var spellingNumber = {};

		var languages = ["en", "es", "ar", "enIndian", "ptPT" , "hu", "pt", "fr", "eo", "it", "vi", "tr", "uk", "ru", "id"];


		var shortScale = [100];
		for (var i = 1; i <= 16; i++) {
			shortScale.push(Math.pow(10, i * 3));
		}

		var longScale = [100, 1000];
		for (i = 1; i <= 15; i++) {
			longScale.push(Math.pow(10, i * 6));
		}

		var language = typeof options.lang === "string"
			? options.i18n[options.lang]
			: options.lang;


		if (!language) {
			if (languages.indexOf(spellingNumber.defaults.lang) < 0) {
				spellingNumber.defaults.lang = "en";
			}

			language = options.i18n[spellingNumber.defaults.lang];
		}

		function spelling_number(n) {



			if (n < 0) {
				return "";
			}

			n = Math.round(+n);


			var scale = language.useLongScale ? longScale : shortScale;
			var units = language.units;
			var unit;

			if (!(units instanceof Array)) {
				var rawUnits = units;

				units = [];
				scale = Object.keys(rawUnits);

				for (var i in scale) {
					units.push(rawUnits[scale[i]]);
					scale[i] = Math.pow(10, parseInt(scale[i]));
				}
			}

			var baseCardinals = language.base;

			var alternativeBaseCardinals = options.alternativeBase
				? language.alternativeBase[options.alternativeBase]
				: {};

			if (language.unitExceptions[n]) return language.unitExceptions[n];
			if (alternativeBaseCardinals[n]) return alternativeBaseCardinals[n];
			if (baseCardinals[n]) return baseCardinals[n];
			if (n < 100)
				return handleSmallerThan100(n, language, unit, baseCardinals, alternativeBaseCardinals);

			var m = n % 100;
			var ret = [];

			if (m) {
				if (
					options.noAnd &&
					!(language.andException && language.andException[10])
				) {
					ret.push(spelling_number(m));
				} else {
					ret.push(language.unitSeparator + spelling_number(m));
				}
			}

			var firstSignificant;

			for (var i = 0, len = units.length; i < len; i++) {
				var r = Math.floor(n / scale[i]);
				var divideBy;

				if (i === len - 1) divideBy = 1000000;
				else divideBy = scale[i + 1] / scale[i];

				r %= divideBy;

				unit = units[i];

				if (!r) continue;
				firstSignificant = scale[i];

				if (unit.useBaseInstead) {
					var shouldUseBaseException =
						unit.useBaseException.indexOf(r) > -1 &&
						(unit.useBaseExceptionWhenNoTrailingNumbers
							? i === 0 && ret.length
							: true);
					if (!shouldUseBaseException) {
						ret.push(alternativeBaseCardinals[r * scale[i]] || baseCardinals[r * scale[i]]);
					} else {
						ret.push(r > 1 && unit.plural ? unit.plural : unit.singular);
					}
					continue;
				}

				var str;
				if (typeof unit === "string") {
					str = unit;
				} else if (r === 1 || unit.useSingularEnding && r % 10 === 1
					&& (!unit.avoidEndingRules || unit.avoidEndingRules.indexOf(r) < 0)) {
					str = unit.singular;
				} else if (unit.few && (r > 1 && r < 5 || unit.useFewEnding && r % 10 > 1 && r % 10 < 5
					&& (!unit.avoidEndingRules || unit.avoidEndingRules.indexOf(r) < 0))) {
					str = unit.few;
				} else {
					str = unit.plural && (!unit.avoidInNumberPlural || !m)
						? unit.plural
						: unit.singular;

					// Languages with dual
					str = (r === 2 && unit.dual) ? unit.dual : str;

					// "restrictedPlural" : use plural only for 3 to 10
					str = (r > 10 && unit.restrictedPlural) ? unit.singular : str;
				}

				if (
					unit.avoidPrefixException &&
					unit.avoidPrefixException.indexOf(r) > -1
				) {
					ret.push(str);
					continue;
				}

				var exception = language.unitExceptions[r];


				var number = null;
				if (exception) {
					number = exception;
				} else {
					options = $.extend({}, options, {
						// Languages with and exceptions need to set `noAnd` to false
						noAnd: !((language.andException && language.andException[r]) ||
							unit.andException) && true,
						alternativeBase: unit.useAlternativeBase
					})
					number = spelling_number(r);
				}

				n -= r * scale[i];
				ret.push(number + " " + str);
			}

			var firstSignificantN = firstSignificant * Math.floor(n / firstSignificant);
			var rest = n - firstSignificantN;

			if (
				language.andWhenTrailing &&
				firstSignificant &&
				0 < rest &&
				ret[0].indexOf(language.unitSeparator) !== 0
			) {
				ret = [ret[0], language.unitSeparator.replace(/\s+$/, "")].concat(
					ret.slice(1)
				);
			}

			// Languages that have separators for all cardinals.
			if (language.allSeparator) {
				for (var j = 0; j < ret.length - 1; j++) {
					ret[j] = language.allSeparator + ret[j];
				}
			}
			var result = ret.reverse().join(" ");
			return result;
		}

		function handleSmallerThan100(n, language, unit, baseCardinals, alternativeBaseCardinals) {
			var dec = Math.floor(n / 10) * 10;
			unit = n - dec;

			if (unit) {
				return (
					alternativeBaseCardinals[dec] || baseCardinals[dec] + language.baseSeparator + spelling_number(unit)
				);
			}
			return alternativeBaseCardinals[dec] || baseCardinals[dec];
		}


		// Throw error
		function throwError(content) {
			throw new Error('spellingNumber: ' + content);
		}

		var wholesSpelling = '';
		var fractionSpelling = '';

		var b = number.toString().split(".");

		var wholes = b[0];
		wholesSpelling = spelling_number(wholes);

		if (b[1] && $.isNumeric(options.digitsLengthW2F)) {
			var fraction = parseFloat("0."+(b[1].substr(0, options.digitsLengthW2F)));
				 fraction = fraction*(Math.pow(10, options.digitsLengthW2F));//Convert to Fraction Unit
			    if(fraction > 0) fractionSpelling = spelling_number(fraction);
		}

		if (wholesSpelling != '') wholesSpelling = wholesSpelling + ' ' + options.wholesUnit;
		if (fractionSpelling != '') fractionSpelling = ' ' + options.decimalSeperator + ' ' + fractionSpelling + ' ' + options.fractionUnit;

		return wholesSpelling + fractionSpelling;

	}

