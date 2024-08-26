# Easy DateTime Formatter

Easy, simple date and time formatter.

[![install size](https://packagephobia.com/badge?p=easy-datetime-fmt)](https://packagephobia.com/result?p=easy-datetime-fmt) 

## Table of Contents

| S.No | Section | Description |
|:-- | :-- | :-- |
| 1.    | [Description](#description) | Overview of the package and its purpose. |
| 2.   | [Installation](#installation) | How to install the package. |
| 3.   | [Usage](#usage) | Basic usage examples of the functions provided by the package. |
| 4.    | [Features](#features) | Key features of the package. |
| 5.    | [More Examples](#more-examples) | Additional usage scenarios and examples. |
| 6.    | [Error Handling](#error-handling) | Common errors and how to handle them. |
| 7.    | [Contributing](#contributing) | Guidelines for contributing to the project. |
| 8.    | [License](#license) | Licensing information for the package. |

## Description

`easy-datetime-fmt` is a JavaScript library designed to simplify the formatting of dates and times. Currently, it provides three functions to handle various date and time formats. Ideal for use in web applications and backend services, it ensures consistent formatting for date and time values, making it easier to display or manipulate dates in a user-friendly format.

## Installation

To use this package, you must have Node.js installed on your machine. This library is compatible with both CommonJS and ES Modules.

```console
$ npm install easy-datetime-fmt
```

## Usage

Once installed, you can import the functions and use them in your project. Here’s how to use each function:

```js
import { formatDateTime, formatDate, formatTime } from 'easy-datetime-fmt';

const today = new Date();

console.log(formatDateTime(today)); // Output: 'Aug 26, 2024, 4:30 PM'
console.log(formatDate(today)); // Output: 'Aug 26, 2024'
console.log(formatTime(today)); // Output: '4:30 PM'
```

## Features 

* **DateTime Formatting:** Provides an easy way to format date and time together.
* **Date Formatting:** Allows for formatting dates in a standard, human-readable way.
* **Time Formatting:** Formats time to a 12-hour clock with AM/PM indicators.

## More Examples

**Example 1: DateTime Format**
```js
const today = new Date();
console.log(formatDateTime(today)); 
// Output: 'Aug 26, 2024, 4:30 PM'
```

**Example 2: Date Format**
```js
const today = new Date();
console.log(formatDate(today)); 
// Output: 'Aug 26, 2024'
```

**Example 3: Time Format**
```js
const today = new Date();
console.log(formatTime(today)); 
// Output: '4:30 PM'
```

**Formatting Dates from Backend:**
When fetching date data from a backend service (e.g., MongoDB), you can use this library to format the dates easily:

```js
// Example with MongoDB data
const data = { createdAt: '2024-08-26T16:30:00Z' };
const createdAt = new Date(data.createdAt);

console.log(formatDateTime(createdAt)); // Output: 'Aug 26, 2024, 4:30 PM'
console.log(formatDate(createdAt));    // Output: 'Aug 26, 2024'
console.log(formatTime(createdAt));    // Output: '4:30 PM'
```

## Error Handling

### Common Errors

1. TypeError: date.getMonth is not a function

    * Cause: This error occurs when a non-Date object is passed to the formatting functions. For example, passing a timestamp or a string instead of a Date object.
    * Solution: Ensure that you pass a valid Date object to the functions. For instance, use new Date() to create a Date object from a timestamp.

    **Incorrect Usage:**
    ```js
      const formattedDate = formatDateTime(Date.now()); // Error
    ```

    **Correct Usage:**
    ```js
      const now = new Date();
      const formattedDate = formatDateTim(now); // No Error```

1. TypeError: Date.now is not a constructor

    * Cause: This error happens when Date.now is mistakenly used with the new keyword.
    * Solution: Use Date.now() to get the current timestamp in milliseconds and then create a Date object if needed.

    **Incorrect Usage:**
    ```js
      const date = new Date(Date.now()); // This is correct, but might be confusing
    ```

    **Correct Usage:**
    ```js
      const date = new Date(); // Creates a new Date object for the current date and time
      ```


## Contributing

Contributions are welcome! To contribute to this project, please follow these guidelines:

1. Fork the repository and create a feature branch.
2. Make your changes and ensure your code follows the project's coding standards.
3. Submit a pull request with a clear description of your changes.

## License

  This project is licensed under the [MIT License](LICENSE).
