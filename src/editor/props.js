import { addFilter } from "@wordpress/hooks";
import { assign } from "lodash";
import { getClasses } from "./helpers";

/**
 * Add a new properties i.e. classes to the props object.
 */
addFilter("blocks.getSaveContent.extraProps", "lambry/xtnd", (props, block, attributes) => {
	const classes = getClasses(attributes, props.className);

	if (classes) {
		return assign(props, { className: classes });
	}

	return props;
});
