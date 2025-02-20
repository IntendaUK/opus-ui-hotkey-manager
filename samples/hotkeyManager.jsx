//Imports
import React from 'react';
import { createRoot } from 'react-dom/client';

import Opus from '@intenda/opus-ui';
import './library';

//Sample
createRoot(document.getElementById('root'))
	.render(
		<Opus
			startupMda={{
				scope: 'c1',
				type: 'containerSimple',
				prps: {
					triggered: false,
					singlePage: true,
					scps: [
						{
							triggers: [
								{
									event: 'onMount'
								}
							],
							actions: [
								{
									type: 'hotkeyManager.registerKeyCombination',
									keys: ['shift', 'o'],
									script: {
										id: 'sOCKC',
										actions: [
											{
												type: 'setState',
												target: '||c1||',
												key: 'triggered',
												value: true
											}
										]
									}
								}
							]
						}
					]
				},
				wgts: [
					{
						type: 'hotkeyManager',
						prps: {}
					},
					{
						type: 'label',
						prps: {
							caption: 'Press shift + o to trigger',
							fontSize: '32px',
							color: '#222'
						}
					},
					{
						type: 'label',
						prps: {
							cpt: 'Triggered: false',
							flows: [
								{
									from: '||c1||',
									fromKey: 'triggered',
									toKey: 'caption',
									mapFunctionString: v => v ? 'Triggered: true': 'Triggered false'
								},
								{
									from: '||c1||',
									fromKey: 'triggered',
									toKey: 'color',
									mapFunctionString: v => v ? '#00FF00': '#FF0000'
								}
							],
							fontSize: '32px'
						}
					}
				]
			}}
		/>
	);