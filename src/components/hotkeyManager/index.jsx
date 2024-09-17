//System
import { useEffect } from 'react';
import { createContext, } from '@intenda/opus-ui';

//Components
import KeyEventListener from './components/KeyEventListener';

//Helpers
import { clearKeysBuffer } from './manager';

//Context
const HotkeyManagerContext = createContext('hotkeyManager');

//Events
const onMount = () => {
	document.addEventListener('visibilitychange', () => {
		if (!document.hidden)
			clearKeysBuffer();
	});
};

//Exports
export const HotkeyManager = props => {
	const { id, classNames, style, attributes } = props;

	useEffect(onMount, []);

	return (
		<HotkeyManagerContext.Provider value={props}>
			<div
				id={id}
				className={classNames}
				style={style}
				{...attributes}
			>
				<KeyEventListener cpnId={id} />
			</div>
		</HotkeyManagerContext.Provider>
	);
};
