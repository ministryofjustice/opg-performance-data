import { globby } from 'globby';
import pa11y from 'pa11y';

// Every pa11y call create a remote socket connection and in node this limit is 10.
// Setting this to 50 will silence a memory leak false positive warning when running
// and enable the script to run correctly.
process.setMaxListeners(50);

const runPa11y = async (page) => {
    return pa11y(`./${page}`, {
        ignore: [],
    });
};

async function pa11yCheck() {
    const pages = await globby(['_site/**/*.html']);

    const fullResults = await Promise.all(
        pages.map((page) => {
            return runPa11y(`./${page}`);
        }),
    );

    const issuesList = fullResults.filter((result) => {
        return result.issues.length > 0;
    });

    if (issuesList.length > 0) {
        for (let i = 0; i < issuesList.length; i++) {
            const issue = issuesList[i];
            console.log('---');
            console.log(issue.pageUrl);
            console.log(issue.issues);
        }
        console.log(issue.issues);
        console.error("pa11y Errors Found");
        process.exit(2);
    } else {
        console.log("No pa11y Errors Found");
        process.exit(0);
    }
}

pa11yCheck();
