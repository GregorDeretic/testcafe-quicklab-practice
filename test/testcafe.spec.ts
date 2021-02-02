import { ArgumentOutOfRangeError } from "rxjs";
import XPathSelector from "../src/xpath-selector";
import {ClientFunction, Selector} from "testcafe";
import sleep from "../src/func_utils";



fixture `Functional testing`            // Notice the back-tick, NOT a single or double quote
    .page `https://devexpress.github.io/testcafe/example/`     // notice what heppens when the test is run...  Add semicolon if no optional elements

    test('if you enter any name and press populate, the input field contains Peter Parker', async t => {
        const yourNameInput = Selector('#developer-name');
        const populate = Selector('#populate')


        await t     // We wait on a Promise
            .click(yourNameInput)
            .typeText(yourNameInput, 'Gregor')
            .setNativeDialogHandler(() => true)
            .click(populate)
            .expect(yourNameInput.value).eql('Peter Parker', 'input field contains "Peter Parker"')
        await sleep(3000);
    });

    test('if you click the "I have tried TestCafe" checkbox, you can access slider', async t => {
        const checkbox = XPathSelector('//*[@id="tried-test-cafe"]')
        const sliderStatus = XPathSelector('//*[@id="main-form"]/div/div[2]/fieldset[2]/div/div[2]')
        const slider = XPathSelector('//*[@id="slider"]').withAttribute('class')
        

        await t     // We wait on a Promise
            .click(checkbox);
            .expect(slider.textContent).contains('disabled')

           
            
        await sleep(3000);
    });