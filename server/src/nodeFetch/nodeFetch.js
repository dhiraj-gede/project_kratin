const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args))

router.post(`/leetcode1`, async function (req, res) {
    let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Content-Type": "application/json"
       }
       
       let gqlBody = {
         query: `
           query userProfileCalendar($username: String!, $year: Int) {
         matchedUser(username: $username) {
           userCalendar(year: $year) {
             activeYears
             streak
             totalActiveDays
             dccBadges {
               timestamp
               badge {
                 name
                 icon
               }
             }
             submissionCalendar
           }
         }
       }
           `,
         variables: {"username":"dhiraj-gede"}
       }
       
       let bodyContent =  JSON.stringify(gqlBody);
       
       let response = await fetch("https://leetcode.com/graphql/", { 
         method: "POST",
         body: bodyContent,
         headers: headersList
       });
       
       let data = await response.text();
       res.send(data);
});