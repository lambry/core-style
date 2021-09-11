import classnames from "classnames";
import { supportsShift, supportsMaxWidth, supportsPadding } from "./options";

/**
 * Get classes to apply.
 */
export const getClasses = (attributes, name, classes = "") => {
	if (supportsShift.includes(name)) {
		const { shiftBlock } = attributes;

		classes = classnames(classes, { [`shift-${shiftBlock}`]: shiftBlock });
	}

	if (supportsMaxWidth.includes(name)) {
		const { maxWidth } = attributes;

		classes = classnames(classes, { [`max-width-${maxWidth}`]: maxWidth });
	}

	if (supportsPadding.includes(name)) {
		const { paddingTop, paddingRight, paddingBottom, paddingLeft } = attributes;

		classes = classnames(classes, {
			[`padding-top-${paddingTop}`]: paddingTop,
			[`padding-right-${paddingRight}`]: paddingRight,
			[`padding-bottom-${paddingBottom}`]: paddingBottom,
			[`padding-left-${paddingLeft}`]: paddingLeft,
		})
	}

	return classes;
};
