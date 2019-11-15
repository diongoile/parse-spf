# parse-spf

A tool written in JavaScript which parses the content of a given SPF record.

## Installation

```sh
$ npm i parse-spf
```

## Features

- Parses common SPF record values
- Shows type, content and notes where applicable

## Usage

```javascript
const ParseSpf = require('parse-spf');

const spfRecord = 'v=spf1 ip4:1.1.1.1 include:spf.protection.outlook.com -all';

ParseSpf(spfRecord);
```

## Output
