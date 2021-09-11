import { addFilter } from "@wordpress/hooks";
import { createHigherOrderComponent } from "@wordpress/compose";
import { supportedBlocks } from "./options";
import { getClasses } from "./helpers";

/**
 * Add classes to the block editor.
 */
addFilter("editor.BlockListBlock", "lambry/core-style",
	createHigherOrderComponent((BlockListBlock) => {
		return (props) => {
			const { attributes, name } = props;

			if (!supportedBlocks.includes(name)) return <BlockListBlock {...props} />;

			const classes = getClasses(attributes, name);

			return <BlockListBlock {...props} className={classes} />;
		};
	})
);
