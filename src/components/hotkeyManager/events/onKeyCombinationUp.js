// Helpers
import { initAndRunScript } from '@intenda/opus-ui';
import { mapKeysToKeyCodes } from '../helpers';
import { getKeysBuffer, getRegisteredKeyCombination } from '../manager.js';

// Event
const onKeyCombinationUp = () => {
	const keyCodes = mapKeysToKeyCodes(getKeysBuffer());

	const matchedKeyCombinationData = getRegisteredKeyCombination(keyCodes);
	if (!matchedKeyCombinationData)
		return;

	const { script, inputKeys, inputKeyCodes } = matchedKeyCombinationData;

	// This script's ownerId is being set in registerKeyCombination
	initAndRunScript({
		script,
		setVariables: {
			keyCodes,
			inputKeys,
			inputKeyCodes
		},
		isRootScript: true
	});
};

export default onKeyCombinationUp;