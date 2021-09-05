import { addFilter } from "@wordpress/hooks";
import { extended, settings } from "./options";

/**
 * Add extra settings.
 */
addFilter("blocks.registerBlockType", "lambry/core-style", (props, name) => {
	if (!extended.includes(name)) return props;

	const attributes = { ...props.attributes, ...settings };

	return { ...props, attributes };
});
