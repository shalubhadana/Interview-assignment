The issue with the news section not appearing on the website https://osa-web.t-cg.co.uk/qatest is due to the failure of network API calls.

Steps to reproduce the issue:

1. Visit https://osa-web.t-cg.co.uk/
2. Search for the text "B16 8PE"
3. Scroll down to the "Active Contact Group" and click to select the organization
4. Observe that the new sections with recent news are displayed
5. Open https://osa-web.t-cg.co.uk/qatest in the same tab
6. Notice that the news section fails to appear.


Investigation:
Upon checking the network and console in the browser, it was found that the API call to https://pro-fapi-osa.t-cg.co.uk/api/schools/organisationId/news?markAsRead=false is failing. The reason for the failure is due to an invalid resource being passed in the URL path. It was discovered that the correct URL should be https://pro-fapi-osa.t-cg.co.uk/api/schools/4055/news?markAsRead=false with organizationId = 4055.