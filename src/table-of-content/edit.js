import { __ } from '@wordpress/i18n';
import { useEffect } from "@wordpress/element";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import './editor.scss';

export default function Edit({
	attributes: { containerClass },
	setAttributes,
}) {
	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( "Rating", "a1a" ) }>
					<TextControl
						__nextHasNoMarginBottom
						__next40pxDefaultSize 
						label="Container Class"
						value={ containerClass }
						onChange={ ( value ) => setAttributes( {
							containerClass: value 
						} ) }
					/>
				</PanelBody>
			</InspectorControls>
			<p { ...useBlockProps() }>
				{ `Table Of Content ${ containerClass }` }
			</p>
		</>
	);
}
 