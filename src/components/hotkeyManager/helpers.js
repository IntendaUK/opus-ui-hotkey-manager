// Internals
import keyCodesMap from './keyCodesMap';

// Helpers
export const mapKeysToKeyCodes = keys => {
	const res = [];

	if (!keys?.length)
		return res;

	const keyCodesMapItems = Object.values(keyCodesMap);

	const mappedKeyCodes = keys.map(k => {
		const key = k.toLowerCase();

		const match = keyCodesMapItems.find(mv => mv.code.toLowerCase() === key || mv.key.toLowerCase() === key);
		if (!match)
			return null;

		return match.which;
	});

	if (!mappedKeyCodes.some(c => c === null))
		res.push(...mappedKeyCodes);

	return res;
};