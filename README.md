# Airline
Example of black-box test design applying decision table analysis.

Test cases are based on the business rules from the following decision table:

||R1|R2|R3|R4|R5|R6|R7|R8|R9|R10|R11|R12|R13|
|-|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|**Conditions**||||||||||||||
|Destination|-|I|I|-|-|I|I|A|A|A|A|A|A|
|Passenger age|<=2|3-18|3-18|>18|>18|>18|>18|3-18|3-18|3-18|3-18|>18|>18|
|Depart Mon/Fri|-|-|-|T|T|F|F|T|T|F|F|F|F|
|Stay>=6 days|-|T|F|F|T|T|F|T|F|T|F|T|F|
|**Actions**||||||||||||||
|No discount|N|N|N|Y|N|N|N|N|N|N|N|N|N|
|10% discount|N|Y|N|N|Y|Y|N|Y|N|Y|N|Y|N|
|20% discount|N|N|N|N|N|Y|Y|N|N|N|N|N|N|
|25% discount|N|N|N|N|N|N|N|N|N|Y|Y|Y|Y|
|40% discount|N|Y|Y|N|N|N|N|Y|Y|Y|Y|N|N|
|Travel free|Y|N|N|N|N|N|N|N|N|N|N|N|N|

Original source: FlexRule, ["Preparing a decision table"](https://resource.flexrule.com/knowledge-base/preparing-a-decision-table/)

## Installation
Run the tests with `npm run test`.

## Tools
Jest / JavaScript

## Author
Arturo Mora-Rioja