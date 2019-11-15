const ParseSpf = (record) => {
    const data = []
    const reges = [/include:/i, /ip4:/i, /ip6:/i, /a:/i, /mx:/i, /ptr/i, /exists/i, /[-,+,?,~]all/i, /v=spf1/i]
    const components = record.split(" ")

    const mapComponent = (component, regExp) => {
        regExp.forEach(element => {
            const match = component.match(element)
            if (match) {
                switch (match[0]) {
                    case "-all":
                        data.push({ type: 'policy', content: match[0], notes: "Policy type: Fail" });
                        break;
                    case "+all":
                        data.push({ type: 'policy', content: match[0], notes: "Policy type: Pass" });
                        break;
                    case "?all":
                        data.push({ type: 'policy', content: match[0], notes: "Policy type: Neutral" });
                        break;
                    case "~all":
                        data.push({ type: 'policy', content: match[0], notes: "Policy type: SoftFail" });
                        break;
                    case "v=spf1":
                        data.push({ type: 'version', content: match[0], notes: "SPF Version 1" });
                        break;
                    default:
                        const string = component.split(match)
                        data.push({ type: match[0], content: string[1] })
                        break
                }
            }
        });
    }
    components.map(component => mapComponent(component, reges))
    return data
}

export default ParseSpf;