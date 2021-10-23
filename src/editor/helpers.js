import classnames from "classnames";

/**
 * Get classes to apply.
 */
export const getClasses = (attributes, classes = "") => {
	const { shiftBlock, paddingTop, paddingRight, paddingBottom, paddingLeft, maxWidth, hideSmall, hideMedium, hideLarge, animateIn } = attributes;

	return classnames(classes, {
		[`x-shift-${shiftBlock}`]: shiftBlock,
		[`x-padding-top-${paddingTop}`]: paddingTop,
		[`x-padding-right-${paddingRight}`]: paddingRight,
		[`x-padding-bottom-${paddingBottom}`]: paddingBottom,
		[`x-padding-left-${paddingLeft}`]: paddingLeft,
		[`x-max-width-${maxWidth}`]: maxWidth,
		[`x-hide-sm`]: hideSmall,
		[`x-hide-md`]: hideMedium,
		[`x-hide-lg`]: hideLarge,
		[`x-animate-${animateIn}`]: animateIn,
	});
};
