# Mr. Roboger's Neighborhood

#### By Matthew Foley

## Techologies Used

* GIT
* HTML
* CSS
* JavaScript
* jQuery

## Description

This webpage gives users the opportunity to enter a number of their choice into an input form and returns a message from the infamous "Mr. Roboger"
The messages from Mr. Roboger could include the following: "Beep!", "Beep", "Boop!", "Boop", and "Won't you be my neighbor?" depending on what number you enter. 

## Setup/Installation Requirements

* You need a basic pc with internet access to open this html
* Clone the repository to somewhere safe on your desktop where you can access it
* Go to the top level of the directory and open index.html in your browser

## Specs

Description: arrayInput(numbers)

Test: This returns an array with 0 if 0 is inputted by the user
* Expect: (beepBoop(0).toEqual([0]);

**Second Exception**
* *Test: Inputted numbers that contain a 1 have all their digits replaced with "Beep!"*
* *Expect inputNumber.toEqual("Beep!")*

**Third Exception**
* *Test: Inputted numbers that contain a 2 have all their digits replaced with "Boop!"*
* *Expect: inputNumber.toEqual("Boop!");*

Test: Inputted numbers that contain a 3 have all their digits replaced with "Won't you be my neighbor?"
* Expect: inputNumber.toEqual("Won't you be my neighbot?");

Test: Inputted numbers that contain a 2 or 3 will have all their digits replaced with "Won't you be my neighbor" unless the second or third exception applies.
* Expect: return InputNumber


## Known Bugs

* There are no known bugs so far

## License
MIT License

Copyright (c) [2021] [Matthew James Foley]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contact Information

_mattfoley0375@gmail.com_

