import { __ } from "@wordpress/i18n";
import { addFilter } from "@wordpress/hooks";
import { Fragment } from "@wordpress/element";
import { createHigherOrderComponent } from "@wordpress/compose";
import { InspectorControls, BlockControls } from "@wordpress/block-editor";
import { PanelBody, SelectControl, DropdownMenu, ToggleControl } from "@wordpress/components";
import { flipVertical } from "@wordpress/icons";
import { sizes, shift, animations } from "./options";

/**
 * Add new controls to edit views.
 */
addFilter("editor.BlockEdit", "lambry/xtnd",
	createHigherOrderComponent((BlockEdit) => (props) => {
		const { attributes: { shiftBlock, maxWidth, paddingTop, paddingRight, paddingBottom, paddingLeft, hideSmall, hideMedium, hideLarge, animateIn }, setAttributes } = props;

		return (
			<Fragment>
				<BlockEdit {...props} />
				<BlockControls>
					<DropdownMenu
						className="components-toolbar"
						icon={shiftBlock ? shift[shiftBlock].icon : flipVertical}
						label="Shift block"
						controls={Object.keys(shift).map((key) => ({
							...shift[key],
							isActive: shiftBlock === key,
							onClick: () =>
								setAttributes({ shiftBlock: shiftBlock !== key ? key : null }),
						}))}
					/>
				</BlockControls>
				<InspectorControls>
					<PanelBody title={__("Display", "xtnd")} initialOpen={false}>
						<h4>{__("Padding", "xtnd")}</h4>
						<div style={{ display: "flex", gap: "5px" }}>
							<SelectControl
								label={__("Top", "xtnd")}
								value={paddingTop}
								options={sizes}
								onChange={(paddingTop) => setAttributes({ paddingTop })}
							/>
							<SelectControl
								label={__("Right", "xtnd")}
								value={paddingRight}
								options={sizes}
								onChange={(paddingRight) => setAttributes({ paddingRight })}
							/>
							<SelectControl
								label={__("Bottom", "xtnd")}
								value={paddingBottom}
								options={sizes}
								onChange={(paddingBottom) => setAttributes({ paddingBottom })}
							/>
							<SelectControl
								label={__("Left", "xtnd")}
								value={paddingLeft}
								options={sizes}
								onChange={(paddingLeft) => setAttributes({ paddingLeft })}
							/>
						</div>
						<SelectControl
							label={__("Max width", "xtnd")}
							value={maxWidth}
							options={sizes.map(({ full, value }) => ({ label: full, value }))}
							onChange={(maxWidth) => setAttributes({ maxWidth })}
						/>
						<SelectControl
							label={__("Animate in", "xtnd")}
							value={animateIn}
							options={animations}
							onChange={(animateIn) => setAttributes({ animateIn })}
						/>
						<ToggleControl
							label={__('Hide on small screens', 'postie')}
							checked={hideSmall}
							onChange={() => setAttributes({ hideSmall: !hideSmall })}
						/>
						<ToggleControl
							label={__('Hide on medium screens', 'postie')}
							checked={hideMedium}
							onChange={() => setAttributes({ hideMedium: !hideMedium })}
						/>
						<ToggleControl
							label={__('Hide on large screens', 'postie')}
							checked={hideLarge}
							onChange={() => setAttributes({ hideLarge: !hideLarge })}
						/>
					</PanelBody>
				</InspectorControls>
			</Fragment>
		);
	})
);
