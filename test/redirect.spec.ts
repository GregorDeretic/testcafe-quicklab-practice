import {ClientFunction, Selector} from "testcafe";
import sleep from "../src/func_utils"
import {removeTrailingOblique} from "../src/func_utils"

// Utility functions
const getWindowLocation = ClientFunction(() => document.location.href);


fixture `Page Redirection Tests`            // Notice the back-tick, NOT a single or double quote
    .page `../src/practice_page.html`     // notice what heppens when the test is run...  Add semicolon if no optional elements

    test('current location', async t => {
        const location = await getWindowLocation();
        const expectedResult = 'file:///Users/GDC02/Documents/Automated%20Tester%20Reskill%20Bootcamp%202021/week%203/testing/testcafe-quicklab-practice/src/practice_page.html';

        console.log( location );

        // add your assert here...
        // assert that the current location mataches the expectedResult
        await t
            .expect(location).eql(expectedResult)

        // the sleep isn't needed but useful for pausing the browser, value is in milliseconds
        await sleep(3000);
    });

    test('navigate away, then back, then away', async t => {
        // arrange...
        // fetch the tags for BBC and QA, store them in the two variable bbc and qa respectively
        const bbc = Selector('#bbc')
        const qa = Selector('#qa')

        // get your current location, store it in a location variable - this is home location
        const homeLocation = await getWindowLocation();
        console.log(homeLocation)

        // set up your expected values for the BBC and QA tags.  
        // Use the variables from above and call await bbc.getAttribute("href")
        // Use console.log() or the debugger to see what above code does
        const expectedResultBbc = await bbc.getAttribute('href')
        const expectedResultQa = await qa.getAttribute('href')

        console.log(expectedResultBbc)
        console.log(expectedResultQa)


        // act...
        // navigate to the bbc by clicking on the page
        // get your current location
        await t
            .click(bbc);

        const currentLocation = await getWindowLocation();
        

            


        // assert...
        // assert that the current location matches the expected location for the bbc
        await t
            .expect(currentLocation).eql(expectedResultBbc)

        // arrange...
        // navigate back to the home location using t.navigateTo()
            .navigateTo(homeLocation)


        // act...
        // navigate to QA by clicking on the page
        // get your current location
            .click(qa);
        

        // assert...
        // aasert that the current location matches the expected location for the QA
        const currentLocation2 = removeTrailingOblique(await getWindowLocation());
        

        await t
            .expect(currentLocation2).eql(expectedResultQa)

    });