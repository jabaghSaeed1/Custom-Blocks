import {
	useBlockProps,
	RichText,
	InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
	const { content, animate } = attributes;

	const blockProps = useBlockProps({
		className: animate ? 'is-animated' : '',
	});

	return (
		<>
			<InspectorControls>
				<PanelBody title="Animation Settings" initialOpen={true}>
					<ToggleControl
						label="Enable animation"
						checked={!!animate}
						onChange={(value) => setAttributes({ animate: value })}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<RichText
					tagName="p"
					value={content}
					onChange={(value) => setAttributes({ content: value })}
					placeholder="Write something…"
				/>
			</div>
		</>
	);
}
