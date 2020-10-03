const generatePage = (data) => {
return `# ${data.title}

${data.license}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Test](#test)

* [Contact](#contact)

## Installation

To Install necessary dependencies, run the following command:  

${data.install}

## Usage

${data.message}

## License

## Contributing

${data.contribution}

## Test

To run the tests, run the following command:

${data.test}

## Questions

## Contact

Email: ${data.email}

https://github.io/${data.username}

`;

};

module.exports = generatePage;
