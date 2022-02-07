[![pre-commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit&logoColor=white)](https://github.com/pre-commit/pre-commit)

# OPG Services Performance Data

A repository for holding our live services performance data for public consumption.

This repository is a temporary placeholder for allowing the public to consume our
service performance data as required by GDS.

Each service is setup to point to the appropriate sub directory on data.gov.uk. To update
the data available there, you only need to update this repository.

## Make a lasting power of attorney Performance Data

**Read me:** [make-a-lpa/README.md](make-a-lpa/README.md)

**Data:** [make-a-lpa/data.json](make-a-lpa/data.json)

## Use a lasting power of attorney Performance Data

**Read me:** [use-an-lpa/README.md](use-an-lpa/README.md)

**Data:** [use-an-lpa/data.json](use-an-lpa/data.json)

## Contributing

To add new data for your service

- Create a new branch
- Open your services appropriate `data.json` file
- Copy and paste the previous months statistics
- Update the date to be the first of the new month on each entry
- Update the figures on each entry
- Commit, create a PR and once signed off by your team, merge

## Pre-Commit Hooks

The root of this project contains a `.pre-commit-config.yaml` file used with [pre-commit](https://pre-commit.com/) to automate the running of tasks when a commit is made with github.

OPG Services Performance Data: Managed by opg-org-infra &amp; Terraform
