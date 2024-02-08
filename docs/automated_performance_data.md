## Automate Monthly Performance Data Pull Requests

To automate this process you must have a process in your project that runs at the beginning 
of each month (before the scheduled job in this repo runs) and extracts a json formatted file with 
this months data to the opg-performance-data bucket. How you set this up is beyond the scope of this read me 
as projects may vary in preferred approach.

This json file must be in the same format as the file it will be merged with in the `src/_data/` folder and must 
be called the name of the service without the _service and with the year and month appended as YY_MM. 

For example complete_the_deputy_report_service for Feb 2024 will be `complete_the_deputy_report_24_02.json`.

Then simply add the name of your project to the matrix in the github actions `monthly_performance_data_pr.yml` and 
it will attempt to pick up and process the file from the bucket and raise a PR each month for your project.
