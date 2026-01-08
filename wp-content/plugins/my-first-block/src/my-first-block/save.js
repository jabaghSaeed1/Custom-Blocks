import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { content, animate } = attributes;

	const blockProps = useBlockProps.save({
		className: animate ? 'is-animated' : '',
	});

	return <div {...blockProps}>{content}</div>;
}
