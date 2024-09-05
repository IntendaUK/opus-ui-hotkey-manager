// Helpers
import { mapKeysToKeyCodes } from '../helpers';
import { removeRegisteredKeyCombination } from '../manager';

const deregisterKeyCombination = ({ keys, keyCodes }) => {
	const mappedKeyCodes = keyCodes?.length ? keyCodes : mapKeysToKeyCodes(keys);
	if (!mappedKeyCodes.length)
		return;

	removeRegisteredKeyCombination(mappedKeyCodes)
}

export default deregisterKeyCombination