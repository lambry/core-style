import classnames from "classnames";

/**
 * Get classes to apply.
 */
export const getClasses = (attributes, classes = "") => {
	const { shiftBlock, maxWidth, paddingTop, paddingRight, paddingBottom, paddingLeft } = attributes;

	return classnames(classes, {
		[`shift-${shiftBlock}`]: shiftBlock,
		[`max-width-${maxWidth}`]: maxWidth,
		[`padding-top-${paddingTop}`]: paddingTop,
		[`padding-right-${paddingRight}`]: paddingRight,
		[`padding-bottom-${paddingBottom}`]: paddingBottom,
		[`padding-left-${paddingLeft}`]: paddingLeft,
	});
};
