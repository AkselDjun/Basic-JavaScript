"use strict";

let name = 'WFM';

//let str = 'Hello ' + name + ', glad to \'see\' you!';//конкатинация в es5
//let str = `Hello ${name}, glad to "see" you! ${5 + 10}`;

let html = `
    <div>
        <h1>${name}</h1>
        <span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, tempore.</p>
        </span>
    </div>
`;//конкатинация в es6

console.log(html);