const generatePage = (data) => {
return `# ${data.title}

## Created by:

### ${data.name}

## License

${data.license}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [Contributing](#contributing)

* [Test](#test)

* [Questions](#questions)

* [Contact](#contact)

## Installation

To Install necessary dependencies, run the following command:  

_${data.install}_

## Usage

${data.message}


## Contributing

If you want to know about contributing to the repo:

${data.contribution}

## Test

To run the tests, run the following command:

${data.test}

## Questions



## Contact

Email: ${data.email}

Github Website: https://github.com/${data.username}/

`;

};

module.exports = generatePage;
