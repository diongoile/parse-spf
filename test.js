import ParseSpf from 'parse-spf';

const spfRecord = "v=spf1 ip4:1.1.1.1 include:spf.protection.outlook.com -all"

ParseSpf(spfRecord)