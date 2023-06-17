# Neptune Animations

![Neptune Animations Banner](https://github.com/neptune-css/branding-resources/blob/main/Banner/GitHub/readme_banner_animations.png)

## Install

### Using NPM

To install Neptune Animations as a [NPM package](https://www.npmjs.com/package/neptunecss-animations), run the following commands:

```bash
npm i neptunecss-animations
```

Now import Neptune Animations.

#### yourOwn.css

```css
@import url('/path/to/your/neptune-animations.min.css');
```

#### yourOwn.js

```javascript
import NeptuneAnimate from "/path/to/your/neptune-animations.min.js"
```

### Using CDN
To use Neptune Animations with CDN Link, put this line of code in your header:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/neptunecss-animations@latest/neptune-animations.min.css">
```
And this one at the bottom of yout body:

```html
<script src="https://cdn.jsdelivr.net/npm/neptunecss-animations@latest/neptune-animations.min.js"></script>
```

##### Example

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/neptunecss@latest/neptune.min.css">
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/neptunecss-animations@latest/neptune-animations.min.css">

		<title>Neptune Animations Example Page</title>
	</head>
	<body>
		<!-- Your Content -->

		<script src="https://cdn.jsdelivr.net/npm/neptunecss-js@latest/neptune.min.js"></script>
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/neptunecss-animations@latest/neptune-animations.min.js">
	</body>
</html>
```

## Customization

You can customize the following variables in CSS:

```css
--nep-animation-duration: .5s; /* Deafault is 1s */
--nep-animation-delay: .5s; /* Default is 0s */
--nep-animation-direction: linear; /* Default is null */
--nep-animation-fillmode: infinite; /* Default is forwards */
```

To learn more read the [Docs](https://neptune-css.gitbook.io/neptune-css-docs/plugins/neptune-animations).

## Documentation

You can read the docs [here](https://neptune-css.gitbook.io/neptune-css-docs/plugins/neptune-animations).

## Snippets Extension
Download it in [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=NeptuneCSS.neptunecss-snippets) or checkout on [GitHub](https://github.com/neptune-css/neptune-snippets).

## License
[MIT LICENSE](https://github.com/neptune-css/neptune-animations/blob/main/LICENSE)

## Author
[Colin Grahm](https://github.com/CGWebDev2003)
