const generatePage = (data) => {
return `# ${data.title}

${data.license}

###Author

${data.username}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Test](#test)

* [Questions](#questions)

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

`;

};

module.exports = generatePage;