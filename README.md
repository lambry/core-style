# Core Style

A little plugin that extends core WordPress blocks with the following options.

## Options
- Shift: `group`, `columns`, `media-text`, `image` and `video`. Choose to shift the current block up, right, down or left.
- Max Width: `group`, `heading`, `paragraph`, `quote` and `list`. For when you want to limit a block to a preset width.
- Padding: `group`, `cover` and `buttons`. Choose from preset padding options for visual consistency.

## Usage
To override the shift, padding and max-width values just set your own values for the corresponding CSS variables.

```css
body {
    --cs-shift-up: -5rem;
    --cs-shift-right: -2.5rem;
    --cs-shift-down: -5rem;
    --cs-shift-left: -2.5rem;
    --cs-max-width-sm: 30rem;
    --cs-max-width-md: 40rem;
    --cs-max-width-lg: 50rem;
    --cs-padding-sm: 1rem;
    --cs-padding-md: 2.5rem;
    --cs-padding-lg: 5rem;
}
```

You can also filter which blocks have which options by using the following filters: `coreStyle.supportsShift`, `coreStyle.supportsMaxWidth` and `coreStyle.supportsPadding`. Below is an example of adding the shift controls to heading blocks.

```js
wp.hooks.addFilter("coreStyle.supportsShift", "extend/shift", (blocks) => ([
	...blocks, "core/heading"
]));
```

### Admin
![screenshot](screenshot.jpg)
