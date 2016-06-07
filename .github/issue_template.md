<!-- CLICK "Preview" FOR INSTRUCTIONS IN A MORE READABLE FORMAT -->

## Prerequisites

- We realize there is a lot of data requested here. We ask only that you do your best to provide as much information as possible so we can better help you.
- Support questions are better asked in one of the following locations:
	- [Our Slack](https://fountain-slack.herokuapp.com/)
	- [Stack Overflow](https://stackoverflow.com/questions/tagged/fountain)
- Ensure the issue isn't already reported.
- Should be reproducible with the latest generator-fountain-webapp version.
	- (Ensure `npm ls -g --depth=0 2>/dev/null | grep generator-fountain` matches ![](https://img.shields.io/npm/v/generator-fountain-webapp.svg))

*Delete the above section and the instructions in the sections below before submitting*


## Description

If this is a feature request, explain why it should be added. Specific use-cases are best.

For bug reports, please provide as much *relevant* info as possible.

### Error Message & Stack Trace

```
COPY THE ERROR MESSAGE, INCLUDING STACK TRACE HERE
```

### Config

Copy the content from `.yo-rc.json`:

```json
{
  "generator-fountain-webapp": {
    ...
  }
}
```


## Relevant Links

- If your project is public, link to the repo so we can investigate directly.
- **BONUS POINTS:** Create a [minimal reproduction](http://stackoverflow.com/help/mcve) and upload it to GitHub. This will get you the fastest support.


## Environment

Tell us which operating system you are using, as well as which versions of Node.js, npm, and yo. Run the following to get it quickly:

```
node -e "var os=require('os');console.log('Node.js ' + process.version + '\n' + os.platform() + ' ' + os.release())"
yo --version
npm --version
```
