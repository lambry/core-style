import { addFilter } from "@wordpress/hooks";
import { supportedBlocks, settings } from "./options";

/**
 * Add extra settings.
 */
addFilter("blocks.registerBlockType", "lambry/core-style", (props, name) => {
	if (!supportedBlocks.includes(name)) return props;

	const attributes = { ...props.attributes, ...settings };

	return { ...props, attributes };
});
