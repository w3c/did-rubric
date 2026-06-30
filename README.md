
![W3C Logo](https://www.w3.org/Icons/w3c_home)

# DID Method Rubric v2.0

This is the repository of the W3C’s note, *DID Method Rubric v2.0*, developed by the [DID Working Group](https://www.w3.org/2019/did-wg/). The editors’ draft of the specification can also be [read directly](https://w3c.github.io/did-rubric/).

## Contributing to the Repository

Use the standard fork, branch, and pull request workflow to propose changes to the specification. Please make branch names informative—by including the issue or bug number for example.

Editorial changes that improve the readability of the spec or correct spelling or grammatical mistakes are welcome.

Please read [CONTRIBUTING.md](CONTRIBUTING.md), about licensing contributions.

## Building and Viewing Locally

The specification (`index.html`) is a [ReSpec](https://respec.org/) document that renders in the browser. The rubric content it displays is generated from JSON source files under `rubric/` by the tooling in `tooling/`.

### Source layout

- `rubric/criteria/` — one JSON file per criterion (validated against `tooling/src/did-criteria.yml`)
- `rubric/rubric-outline.json` — defines the categories and which criteria belong to each
- `rubric/evaluationCitations/` — one JSON file per evaluation citation
- `rubric/methodsConsidered/` — one JSON file per DID method considered

These are compiled into the JavaScript files that `index.html` loads:

- `rubric/rubric.js` (from the criteria + outline)
- `rubric/evaluations.js` (from `evaluationCitations/`)
- `rubric/methodsConsidered.js` (from `methodsConsidered/`)

These generated `*.js` files are git-ignored, so you must build them before the spec will render correctly.

### Generate the rubric JSON

```bash
cd tooling
npm install            # first time only
npm run generate-rubric
```

This writes `rubric/rubric.js`, `rubric/evaluations.js`, and `rubric/methodsConsidered.js`.

To validate the criteria JSON against the schema before generating:

```bash
npm run validate-rubric
```

### View index.html

`index.html` references the generated files and `tooling/src/*` render scripts with relative paths, so serve the **repository root** with any static file server and open it in a browser. For example:

```bash
# from the repository root, after running generate-rubric
npx serve .
# or
python3 -m http.server
```

Then open the served URL (e.g. `http://localhost:8000/index.html`). ReSpec renders the document and the render scripts populate the criteria, evaluations, and methods-considered sections from the generated JavaScript. Opening `index.html` directly via `file://` may fail because browsers block the script loads.

## Code of Conduct

W3C functions under a [code of conduct](https://www.w3.org/Consortium/cepc/).

## DID Working Group Repositories

* [W3C Decentralized Identifier Specification v1.0](https://github.com/w3c/did-core)
* [Home page of the Decentralized Identifier Working Group](https://github.com/w3c/did-wg)
* [Specs and documentation for all DID-related /.well-known resources](https://github.com/decentralized-identity/.well-known)
* [W3C Decentralized Characteristics Rubric v1.0](https://github.com/w3c/did-rubric)
* [Decentralized Identifier Use Cases v1.0](https://github.com/w3c/did-use-cases)
* [W3C DID Test Suite and Implementation Report](https://github.com/w3c/did-test-suite)
