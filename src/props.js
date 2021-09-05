import { addFilter } from "@wordpress/hooks";
import { assign } from "lodash";
import { extended } from "./options";
import { getClasses } from "./helpers";

/**
 * Add a new properties i.e. classes to the props object.
 */
addFilter("blocks.getSaveContent.extraProps", "lambry/core-style", (props, block, attributes) => {
	if (!extended.includes(block.name)) return props;

	const classes = getClasses(attributes, props.className);

	return assign(props, { className: classes });
});
