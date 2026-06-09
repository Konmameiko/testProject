/*
 * @Description:
 * @Author: KonmaMeiko
 * @Date: 2023-05-22 00:00:52
 * @lastEditTime: Do not edit
 * @LastEditors: KonmaMeiko
 */
import React, { useEffect, useRef } from 'react';
import jsoneditor, { JSONEditorOptions } from 'jsoneditor';

import 'jsoneditor/dist/jsoneditor.min.css';
import './index.less';

interface JsonEditorProps {
	value?: Record<string, unknown>;
}

const DEFAULT_VALUE = {
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

const JsonEditor: React.FC<JsonEditorProps> = ({ value }) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const editorRef = useRef<jsoneditor | null>(null);

	useEffect(() => {
		if (!containerRef.current) return;

		const options: JSONEditorOptions = {
			mode: 'code',
			history: true,
		};

		// eslint-disable-next-line new-cap
		editorRef.current = new jsoneditor(containerRef.current, options);
		editorRef.current.set(value ?? DEFAULT_VALUE);

		return () => {
			if (editorRef.current) {
				editorRef.current.destroy();
				editorRef.current = null;
			}
		};
		// 仅在挂载时初始化一次，jsoneditor 内部管理自身更新
	}, []);

	return <div className="jsoneditor-react-container" ref={containerRef} />;
};

export default JsonEditor;
