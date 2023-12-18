# ARCO Coding exercise

CSV Dashboard application - Built using React JS

App consists of 4 components- Navbar, Home, UploadCSV, SearchCSV.

### Home
Basic intro home component which is displayed by default.

### Upload CSV
The Upload CSV component which was created so that instead of hardcoding and saving this csv, the app's functionalities can be tested with any csv of your choosing.\
If a CSV has been previously uploaded it shows below in a tabular form.\
If no cs has been uploaded (not present in app state) then no table is displayed.\
To use the functionality- upload csv once, navigate to the Searchpage and try filtering by the parameters you wish to use and then you can try the same with another csv.

### Search Page
This component takes the uploaded csv as a prop.\
It first shows you 1 dropdown which is the column you want to filter by.\
On choosing that, it immediately populates an array for the options for the second dropdown to be chosen.\
You can pick the unique value from the second dropdown that you wish to filter the table by.\
eg. type -> accident.\
Then the filtered table is displayed.\
This has been designed and deployed in keeping with SOLID principles so that the app is as generic as possible wrt the csv used etc. Designed to be as modular as possible.

### Limitations

Only search by one column at a time, not several filters at once.\
Unfortunately due to time constraints no persistence is implemented so the csv stored in state dissapears if you forcibly reload the application.

## Deployed

Netlify is a free tool which deployed from my git link which I have also previously used to submit class assignments.\

Assesment time taken 90 mins, can be verified by the git commit timings.\
Thank you! 

Netlify link: https://dreamy-marzipan-7e882d.netlify.app/
