//System
import { createContext } from '@intenda/opus-ui';

//Components
import KeyEventListener from './components/KeyEventListener';

//Context
const HotkeyManagerContext = createContext('hotkeyManager');

//Exports
export const HotkeyManager = props => {
	const { id, classNames, style, attributes } = props;

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
