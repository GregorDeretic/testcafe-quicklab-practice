import { ArgumentOutOfRangeError } from "rxjs";
import {Selector} from "testcafe";
import sleep from "../src/func_utils"



fixture `Personal Details Tests`            // Notice the back-tick, NOT a single or double quote
    .page `../src/practice_page.html`     // notice what heppens when the test is run...  Add semicolon if no optional elements

    test('test username', async t => {
        const username = Selector('#username');


        await t     // We wait on a Promise
            .typeText(username, 'species8472')
            .expect(username.value).contains('species8472', 'input contains the test "species8472"')
        await sleep(3000);
    });

    test('test if an expression is entered into first-name & last-name, the first letter of each word is capitalised', async t => {
        const firstname = Selector('#firstname');
        

        await t     // We wait on a Promise
            .typeText(firstname, 'gregor')
            .click('#username')
            .expect(firstname.value).contains('Gregor', 'input contains the test "Gregor"')
        await sleep(3000);
    });

    test('If form is loaded, age label is empty', async t => {
        const ageElement = Selector('#age');
        
        await t     // We wait on a Promise
            .expect(ageElement.innerText).eql('', 'Age label is empty')
        await sleep(3000);
    });

    test('If date is applied to date picker, age label shows correct age', async t => {
        const dateElement = Selector('input[type=date]');
        const ageElement = Selector('#age'); 

        await t     // We wait on a Promise
            .typeText(dateElement, '1984-07-04')
            .expect(ageElement.innerText).eql('36', 'Age is 36')
        await sleep(3000);
    });
