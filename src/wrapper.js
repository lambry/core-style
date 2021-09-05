import { addFilter } from "@wordpress/hooks";
import { createHigherOrderComponent } from "@wordpress/compose";
import { extended } from "./options";
import { getClasses } from "./helpers";

/**
 * Add classes to the block editor.
 */
addFilter("editor.BlockListBlock", "lambry/core-style",
	createHigherOrderComponent((BlockListBlock) => {
		return (props) => {
			const { attributes, name } = props;

			if (!extended.includes(name)) return <BlockListBlock {...props} />;

			const classes = getClasses(attributes);

			return <BlockListBlock {...props} className={classes} />;
		};
	})
);
