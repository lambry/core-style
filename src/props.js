import { addFilter } from "@wordpress/hooks";
import { assign } from "lodash";
import { supportedBlocks } from "./options";
import { getClasses } from "./helpers";

/**
 * Add a new properties i.e. classes to the props object.
 */
addFilter("blocks.getSaveContent.extraProps", "lambry/core-style", (props, { name }, attributes) => {
	if (!supportedBlocks.includes(name)) return props;

	const classes = getClasses(attributes, name, props.className);

	return assign(props, { className: classes });
});
