module.exports = function check(str, bracketsConfig) {
	const arr = [];

	label: for (let i = 0; i < str.length; i++) {
		for (let j = 0; j < bracketsConfig.length; j++) {
			if (str[i] == bracketsConfig[j][1]) {
				if (arr[arr.length - 1] == bracketsConfig[j][0]) {
					arr.pop();
					continue label;
				} else {
					arr.push(str[i]);
				}
			} else if (str[i] == bracketsConfig[j][0]) {
				arr.push(str[i]);
				continue label;
			}
		}
	}
	return arr.length == 0;
}