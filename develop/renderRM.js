let generateREADME = ({ project_name, purpose, installation, usage, contributorsHuman, contributors3rd, licenseOptions, contributing, testing, roadMap, email, gitHub}) =>
`# ${project_name}

<img width="100" alt="badge for licensure" src="https://img.shields.io/badge/License-${licenseOptions}-blue.svg">

## Table of Contents:

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Contribute](#contributing-to-this-project)
- [Testing](#testing-methods)
- [Road_Map](#road-map)
- [Questions](#questions)
- [License](#license)

## Description
${purpose}

## Installation
${installation}

## Usage
${usage}

## Credits
Individual Collaborators:
${contributorsHuman}

Third Part Contributors:
${contributors3rd}

## Contributing to this Project
${contributing}

## Testing Methods
${testing}

## Road Map
${roadMap}

## Questions
For support, Contact Me: ${email}
GitHub User Profile: www.github.com/${gitHub}

## License
Licensed under the ${licenseOptions}.

  `
;