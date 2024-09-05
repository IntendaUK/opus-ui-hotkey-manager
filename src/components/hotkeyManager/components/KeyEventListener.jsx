// Plugins
import { Component } from '@intenda/opus-ui';

const KeyEventListener = () => {
	return (
		<Component mda={{
			type: 'label',
			prps: {
				scps: [
					{
						triggers: [
							{
								event: 'onGlobalKeyDown'
							}
						],
						actions: [
							{
								type: 'hotkeyManager.setKeyDown',
								triggeredKey: '{{variable.triggeredKey}}'
							}
						]
					},
					{
						triggers: [
							{
								event: 'onGlobalKeyUp'
							}
						],
						actions: [
							{
								type: 'hotkeyManager.setKeyUp',
								triggeredKey: '{{variable.triggeredKey}}'
							}
						]
					}
				]
			}
		}} />
	)
};

export default KeyEventListener;