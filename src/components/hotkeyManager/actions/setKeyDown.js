import { addCurrentlyHeldKey, addKeyToKeysBuffer } from '../manager';

const setKeyDown = ({ triggeredKey }) => {
	addCurrentlyHeldKey(triggeredKey);
	addKeyToKeysBuffer(triggeredKey);
}

export default setKeyDown