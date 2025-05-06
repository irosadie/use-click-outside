# useClickOutside

`use-click-outside` is a lightweight and reusable custom React hook that allows you to detect clicks outside a specified element. This is particularly useful for implementing dropdowns, modals, or any UI component that should close when clicking outside of it.

## Installation

Install the library using npm or yarn:

```bash
npm install use-click-outside
```

or

```bash
yarn add use-click-outside
```
```bash
bun add use-click-outside
```

## Usage

Here is an example of how to use the `use-click-outside` hook:
```tsx
import React, { useRef, useState } from 'react';
import { useClickOutside } from '@binarydev/use-click-outside';

const Dropdown = () => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef(null);

	useClickOutside(dropdownRef, () => setIsOpen(false));

	return (
		<div>
			<button onClick={() => setIsOpen(!isOpen)}>Toggle Dropdown</button>
			{isOpen && (
				<div ref={dropdownRef}>
					<p>Dropdown Content</p>
				</div>
			)}
		</div>
	);
};

export default Dropdown;
```

### Handling Multiple Refs

If you need to monitor clicks outside multiple elements, you can use an array of refs:

```tsx
import React, { useRef, useState } from 'react';
import { useClickOutside } from '@binarydev/use-click-outside';

const MultiDropdown = () => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef1 = useRef(null);
	const dropdownRef2 = useRef(null);

	useClickOutside([dropdownRef1, dropdownRef2], () => setIsOpen(false));

	return (
		<div>
			<button onClick={() => setIsOpen(!isOpen)}>Toggle Dropdowns</button>
			{isOpen && (
				<>
					<div ref={dropdownRef1}>
						<p>Dropdown 1 Content</p>
					</div>
					<div ref={dropdownRef2}>
						<p>Dropdown 2 Content</p>
					</div>
				</>
			)}
		</div>
	);
};

export default MultiDropdown;
```

## API

### `useClickOutside(refs, callback)`

| Prop       | Type                              | Description                                                                 |
|------------|-----------------------------------|-----------------------------------------------------------------------------|
| `refs`     | `React.RefObject` or `React.RefObject[]` | A single React ref object or an array of refs pointing to the elements you want to monitor for outside clicks. This prop is required. |
| `callback` | `Function`                        | A required function to be called when a click outside the specified element(s) is detected. |

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.