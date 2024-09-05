// Helpers
import { clearKeysBuffer, getCurrentlyHeldKeys, removeCurrentlyHeldKey } from '../manager';

// Events
import onKeyCombinationUp from '../events/onKeyCombinationUp';

// Helpers
const setKeyUp = ({ triggeredKey }) => {
	removeCurrentlyHeldKey(triggeredKey)

	const currentlyHeldKeys = getCurrentlyHeldKeys();

	if (!currentlyHeldKeys.length) {
		onKeyCombinationUp()
		clearKeysBuffer()
	}
}

export default setKeyUp

