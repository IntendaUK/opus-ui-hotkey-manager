// Manager
const manager = {
	registeredKeyCombinations: [],
	currentlyHeldKeys: [],
	keysBuffer: []
};

// Key Combination Helpers
export const getRegisteredKeyCombination = keyCodes => {
	const keyCodesListString = JSON.stringify(keyCodes);

	const res = manager.registeredKeyCombinations.find(rkc => JSON.stringify(rkc.keyCodes) === keyCodesListString);
	if (!res)
		return null;

	return res;
};

export const removeRegisteredKeyCombination = keyCodes => {
	const existingRegisteredKeyCombination = getRegisteredKeyCombination(keyCodes);
	if (!existingRegisteredKeyCombination)
		return;

	manager.registeredKeyCombinations.splice(manager.registeredKeyCombinations.indexOf(existingRegisteredKeyCombination), 1);
};

export const addRegisteredKeyCombination = (keyCodes, script, inputKeys, inputKeyCodes) => {
	removeRegisteredKeyCombination(keyCodes);

	return manager.registeredKeyCombinations.push({ keyCodes, script, inputKeys, inputKeyCodes });
};

export const getRegisteredKeyCombinations = () => {
	return manager.registeredKeyCombinations;
};

// Currently Held Key Helpers
export const getCurrentlyHeldKey = key => {
	key = key.toLowerCase();
	const res = manager.currentlyHeldKeys.find(hk => hk === key);
	if (!res)
		return null;

	return res;
};

export const removeCurrentlyHeldKey = key => {
	key = key.toLowerCase();
	const existingCurrentlyHeldKey = getCurrentlyHeldKey(key);
	if (!existingCurrentlyHeldKey)
		return;

	manager.currentlyHeldKeys.splice(manager.currentlyHeldKeys.indexOf(existingCurrentlyHeldKey), 1);
};

export const addCurrentlyHeldKey = (key) => {
	key = key.toLowerCase();

	removeCurrentlyHeldKey(key);

	return manager.currentlyHeldKeys.push(key);
};

export const getCurrentlyHeldKeys = () => {
	return manager.currentlyHeldKeys;
};

// Keys Buffer Helpers
export const getKeyInKeysBuffer = key => {
	key = key.toLowerCase();
	const res = manager.keysBuffer.find(k => k === key);
	if (!res)
		return null;

	return res;
};

export const removeKeyInKeysBuffer = key => {
	key = key.toLowerCase();
	const existingKey = getKeyInKeysBuffer(key);
	if (!existingKey)
		return;

	manager.keysBuffer.splice(manager.keysBuffer.indexOf(existingKey), 1);
};

export const addKeyToKeysBuffer = (key) => {
	key = key.toLowerCase();

	removeKeyInKeysBuffer(key);

	return manager.keysBuffer.push(key);
};

export const getKeysBuffer = () => {
	return manager.keysBuffer;
};

export const clearKeysBuffer = () => {
	manager.keysBuffer.length = 0;
};

// Manager
export default manager;