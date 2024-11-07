/**
 * qtail.js - mjs module
 * @author XiaozhiSans
 * @license MPL-2.0
 */

/**
 * 整理尾巴
 * @param {string} tail 尾巴
 * @returns {string} 整理后的尾巴
 */
function retail(tail) {
	let startSymbols = tail.match(/^[^\w\s\u4e00-\u9fa5]+/) || '';
	let endSymbols = tail.match(/[^\w\s\u4e00-\u9fa5]+$/) || '';
	if(startSymbols === endSymbols) return tail; // 如果一样, 则不整理
	tail = tail.replace(startSymbols, '').replace(endSymbols, '');
	return endSymbols + tail + startSymbols;
}

export default {
	/**
	 * 生成新昵称
	 * @param {string} nick 昵称
	 * @param {string} tail 尾巴
	 * @returns {string} 生成的昵称
	 */
	generate(nick, tail) {
		if(!nick || !tail) throw new Error('参数不能为空');
		tail = retail(tail.trim());
		return nick + '\u2067' + tail + '\u2066';
	}
}