import { addFilter } from "@wordpress/hooks";
import { createHigherOrderComponent } from "@wordpress/compose";
import { getClasses } from "./helpers";

/**
 * Add classes to the block editor wrapper.
 */
addFilter("editor.BlockListBlock", "lambry/xtnd",
	createHigherOrderComponent((BlockListBlock) => {
		return (props) => {
			const { attributes } = props;

			const classes = getClasses(attributes, attributes.className);

			if (classes) {
				return <BlockListBlock {...props} className={classes} />;
			}

			return <BlockListBlock {...props} />;
		};
	})
);
