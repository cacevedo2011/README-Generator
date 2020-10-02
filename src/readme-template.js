const generatePage = 
    (username,
        email, 
        title, 
        description, 
        license, 
        install, 
        test, 
        message, 
        contribution) => {
    return `
    # ${title}
    ${license}![Github license](https://img.shields.io/badge/license-MIT-blue.svg)

    ## Description

    ${description}

    ## Table of Contents

    * [Installation](#installation)

    * [Usage](#usage)

    * [License](#license)

    * [Contributing](#contributing)

    * [Test](#test)

    * [Questions](#questions)

    ## Installation

    To Install necessary dependencies, run the following command:
    
    '''
    ${install}
    '''

    ## Usage

    ${message}

    ## License

    ## Contributing

    ${contribution}

    ## Test

    To run the tests, run the following command:

    '''
    ${test}
    '''
  `;

};

module.exports = generatePage;