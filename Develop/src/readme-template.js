// create the about section
const generateLicense = licenseText => {
    let tempLicense = "";

    if (!licenseText) {
      return '';
    } else{

        switch(licenseText){

            case "Apache 2.0":
                tempLicense = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
                break;

            case "MIT":
                tempLicense = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
                break;

            case "ISC":
                tempLicense = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
                break;
                
            case "IBM Public license":
                tempLicense = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";    
                break;

            case "Mozilla Public license":
                tempLicense = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
                break;

            case "Artistic license 2.0":
                tempLicense = "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
                break;

            default:
                break;
        }
    }
    return tempLicense;
  };


const generatePage = (data) => {
return `# ${data.title}

## Created by:

### ${data.name}

## License

${generateLicense(data.license)}


## Description

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [Contributing](#contributing)

* [Test](#test)

* [Contact](#contact)

## Installation

To Install necessary dependencies, run the following command:  

\`\`\`
${data.install}
\`\`\`

## Usage

${data.message}


## Contributing

If you want to know about contributing to the repo:

${data.contribution}

## Test

To run the tests, run the following command:

\`\`\`
${data.test}
\`\`\`

## Contact

Email: ${data.email}

Github Website: https://github.com/${data.username}/

`;

};

module.exports = generatePage;
