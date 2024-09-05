// Opus UI
import { registerComponentTypes, registerExternalAction } from '@intenda/opus-ui';

//Components
import { HotkeyManager } from './components/hotkeyManager';

// Actions
import registerKeyCombination from './components/hotkeyManager/actions/registerKeyCombination';
import deregisterKeyCombination from './components/hotkeyManager/actions/deregisterKeyCombination';
import setKeyDown from './components/hotkeyManager/actions/setKeyDown';
import setKeyUp from './components/hotkeyManager/actions/setKeyUp';

//PropSpecs
import propsHotkeyManager from './components/hotkeyManager/props';

registerComponentTypes([{
	type: 'hotkeyManager',
	component: HotkeyManager,
	propSpec: propsHotkeyManager
}]);

registerExternalAction({
	type: 'hotkeyManager.registerKeyCombination',
	handler: registerKeyCombination
});

registerExternalAction({
	type: 'hotkeyManager.deregisterKeyCombination',
	handler: deregisterKeyCombination
});

registerExternalAction({
	type: 'hotkeyManager.setKeyDown',
	handler: setKeyDown
});

registerExternalAction({
	type: 'hotkeyManager.setKeyUp',
	handler: setKeyUp
});