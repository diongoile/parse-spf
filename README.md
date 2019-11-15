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

Currently only supports ES5 module.exports

```javascript
const ParseSpf = require('parse-spf');

const spfRecord = 'v=spf1 ip4:1.1.1.1 include:spf.protection.outlook.com -all';

ParseSpf(spfRecord);
```

## Output

Returns an array of objects.

```json
[
  { "type": "version", "content": "v=spf1", "notes": "SPF Version 1" },
  { "type": "ip4:", "content": "1.1.1.1" },
  { "type": "include:", "content": "spf.protection.outlook.com" },
  { "type": "policy", "content": "-all", "notes": "Policy type: Fail" }
]
```
