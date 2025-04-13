/*
 * @Description:
 * @Author: KonmaMeiko
 * @Date: 2023-05-22 00:00:52
 * @lastEditTime: Do not edit
 * @LastEditors: KonmaMeiko
 */
import { useEffect, useState } from 'react';
import jsoneditor, { JSONEditorOptions } from 'jsoneditor';

import 'jsoneditor/dist/jsoneditor.min.css';
import './index.less';

const JsonEditor = (props: any) => {
	let jsonEditor: jsoneditor;
	const [flag, setFlag] = useState(false);
	const [jsonRef, setJsonRef] = useState<any>(null);

	const renderJsonEditor = () => {
		const value = {
			this: 'this',
			is: 'is',
			'JSON!!!111!!': 'JSON!!!111!!',
			1: 1,
			2: 1,
			3: 1,
			4: 1,
			5: 1,
			6: 1,
			action: ['value1', 'value2'],
		};

		const options: JSONEditorOptions = {
			mode: 'code',
			history: true,
		};

		const container = document.getElementById('jsoneditor-react');

		if (container) {
			jsonEditor = new jsoneditor(container, options);
			jsonEditor.set(value);
		}
	};

	const renderHighLightStr = () => {
		const defaultValue = {
			this: 'this',
			is: 'is',
			'JSON!!!111!!': 'JSON!!!111!!',
			1: 1,
			2: 1,
			3: 1,
			4: 1,
			5: 1,
			6: 1,
			action: ['value1', 'value2'],
		};

		const defaultKey = ['action'];

		const container = document.getElementById('jsoneditor-react');
		console.log(container);
	};

	useEffect(() => {
		renderJsonEditor();
		renderHighLightStr();

		return () => {
			if (jsonEditor) {
				jsonEditor.destroy();
			}
		};
	}, [renderJsonEditor, renderHighLightStr, jsonRef]);

	return <div className="jsoneditor-react-container" id="jsoneditor-react" ref={setJsonRef} />;
};

export default JsonEditor;
