import { __ } from "@wordpress/i18n";
import { addFilter } from "@wordpress/hooks";
import { Fragment } from "@wordpress/element";
import { createHigherOrderComponent } from "@wordpress/compose";
import { InspectorControls, BlockControls } from "@wordpress/block-editor";
import { PanelBody, SelectControl, DropdownMenu } from "@wordpress/components";
import { flipVertical } from "@wordpress/icons";
import { supportsShift, supportsMaxWidth, supportsPadding, supportedBlocks, sizes, shift } from "./options";

/**
 * Add new controls to edit views.
 */
addFilter("editor.BlockEdit", "lambry/core-style",
	createHigherOrderComponent((BlockEdit) => (props) => {
		const { name, attributes: {
			shiftBlock, maxWidth, paddingTop, paddingRight, paddingBottom, paddingLeft
		}, setAttributes } = props;

		if (!supportedBlocks.includes(name)) return <BlockEdit {...props} />;

		return (
			<Fragment>
				<BlockEdit {...props} />
				{supportsShift.includes(name) &&
					<BlockControls>
						<DropdownMenu
							className="components-toolbar"
							icon={shiftBlock ? shift[shiftBlock].icon : flipVertical}
							label="Shift block"
							controls={Object.keys(shift).map((key) => ({
								...shift[key],
								isActive: shiftBlock === key,
								onClick: () => setAttributes({ shiftBlock: shiftBlock !== key ? key : null }),
							}))}
						/>
					</BlockControls>
				}
				<InspectorControls>
					<PanelBody title={__("Display")}>
						{supportsPadding.includes(name) &&
							<Fragment>
								<h4>{__("Padding")}</h4>
								<div style={{ display: "flex", gap: "5px" }}>
									<SelectControl
										label={__("Top")}
										value={paddingTop}
										options={sizes}
										onChange={(paddingTop) => setAttributes({ paddingTop })}
									/>
									<SelectControl
										label={__("Right")}
										value={paddingRight}
										options={sizes}
										onChange={(paddingRight) => setAttributes({ paddingRight })}
									/>
									<SelectControl
										label={__("Bottom")}
										value={paddingBottom}
										options={sizes}
										onChange={(paddingBottom) => setAttributes({ paddingBottom })}
									/>
									<SelectControl
										label={__("Left")}
										value={paddingLeft}
										options={sizes}
										onChange={(paddingLeft) => setAttributes({ paddingLeft })}
									/>
								</div>
							</Fragment>
						}
						{supportsMaxWidth.includes(name) &&
							<SelectControl
								label={__("Max width")}
								value={maxWidth}
								options={sizes}
								onChange={(maxWidth) => setAttributes({ maxWidth })}
							/>
						}
					</PanelBody>
				</InspectorControls>
			</Fragment>
		);
	})
);
