// Helpers
import { mapKeysToKeyCodes } from '../helpers';
import { addRegisteredKeyCombination } from '../manager';

const registerKeyCombination = ({ keys, keyCodes, script, scriptOwnerId }, callerScript) => {
	const mappedKeyCodes = keyCodes?.length ? keyCodes : mapKeysToKeyCodes(keys);
	if (!mappedKeyCodes.length)
		return;

	script.ownerId = scriptOwnerId ?? callerScript.ownerId;

	addRegisteredKeyCombination(mappedKeyCodes, script, keys, keyCodes);
};

export default registerKeyCombination