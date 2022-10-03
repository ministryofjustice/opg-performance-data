[![pre-commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit&logoColor=white)](https://github.com/pre-commit/pre-commit)
[![eleventy](https://img.shields.io/badge/staticgen-eleventy-%23707070.svg?style=flat-square)](https://11ty.io)

[![repo standards badge](https://img.shields.io/badge/dynamic/json?color=blue&style=for-the-badge&logo=github&label=MoJ%20Compliant&query=%24.result&url=https%3A%2F%2Foperations-engineering-reports.cloud-platform.service.justice.gov.uk%2Fapi%2Fv1%2Fcompliant_public_repositories%2Fperformance-data)](https://operations-engineering-reports.cloud-platform.service.justice.gov.uk/public-github-repositories.html#performance-data "Link to report")

# OPG Services Performance Data

A repository for holding our live services performance data for public consumption.

This repository is for allowing the public to consume our service performance data as required by GDS.

Each service is setup to point to the appropriate sub directory on data.gov.uk. To update
the data available there, you only need to update this repository.

On update of the JSON data, the pipeline will build a eleventy static site and publish to github pages. This site is generated from the JSON data automatically.

## Make a lasting power of attorney Performance Data

**Read me:** [src/_data/make_a_lpa/README.md](src/_data/make_a_lpa/README.md)

**Data:** [src/_data/make_a_lpa/data.json](src/_data/make_a_lpa/data.json)

## Use a lasting power of attorney Performance Data

**Read me:** [src/_data/use_an_lpa/README.md](src/_data/use_an_lpa/README.md)

**Data:** [src/_data/use_an_lpa/data.json](src/_data/use_an_lpa/data.json)

## Running the site locally

If you want to run a local copy of the site, run the following commands to install dependencies.

* `nvm use`
* `yarn install`

Then to run the site use `yarn run start` which will run the site on localhost:8080 in watch mode.

## Contributing

To add new data for your service

* Create a new branch
* Open your services appropriate `data.json` file
* Copy and paste the previous months statistics
* Update the date to be the first of the new month on each entry
* Update the figures on each entry
* Commit, create a PR and once signed off by your team, merge

## Pre-Commit Hooks

The root of this project contains a `.pre-commit-config.yaml` file used with [pre-commit](https://pre-commit.com/) to automate the running of tasks when a commit is made with github.

## Validation of JSON

You can check the validity of your JSON document by running the following command in your terminal at the root of the project.

`node ./validate/index.js`

This also runs in the Github Action and will break the build if there is an error.

OPG Services Performance Data: Managed by opg-org-infra &amp; Terraform
