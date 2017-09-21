# Title Case

**User Story**
As an editor at a book publishing company, I need a utility that will convert book titles into "Title Case" so that all of our book titles are consistently formatted.

**Developer Notes & Definitions**
A string is considered to be in title case if each word in the string is either (a) capitalized (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalized.

**Actual Requirements**

- Function should return a title cased string
- There should be a dictionary of words (like the, a, of, etc) that never get capitalized
- First word should always be capitalized no matter what.
- Person using the utility wants to be able to send in their own set of words to ignore/leave as-is

**Implementation**
Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

Arguments

 - First Argument (Required): The string to be converted
- Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The 


Examples:

- titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
 - titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
 - titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'
