import { addFilter } from "@wordpress/hooks";
import { settings } from "./options";

/**
 * Add extra settings i.e. attributes.
 */
addFilter("blocks.registerBlockType", "lambry/xtnd", (props) => {
	const attributes = { ...props.attributes, ...settings };

	return { ...props, attributes };
});
