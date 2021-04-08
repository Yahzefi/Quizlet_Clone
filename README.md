# Project Purpose

The purpose of creating this project was the utilize my knowledge of vanilla JavaScript (as well as JQuery) to create a quizlet-inspired site to create and view flashcard sets from your own library or from other user's libraries.  This could be accomplished in a similar way as Quizlet where you can view the sets, learn in the traditional flashcard flips, and through little games as well.

I focused more on the overall structuring on the site, and only progressed into the finer details slightly due to various constraints

## Navigating the Site

### index.html

The main landing page is rather barebones, and fairly simple to navigate.

The header section includes ways to login/register as well as access/modify user information once they've logged in.
The body of the page includes a basic template for a feed of "update posts", and to the right of it contains links to the various subject category pages the user can navigate (these pages are a little more involved and will be explained in the next section)

### Categories

As of now, there are four accessible category pages to explore.
**History, Programming, Math & Spanish**

Each page includes a customized introduction to the site from an "Assistant".
The user will be greeted and eventually prompted with a set of three responses to a question asked by the assistant.  The user can choose any three of these and depending on what is chosen, a certain path will begin to take shape.  Each user can have a unique experience with the tree-like structure I created for the dialogue scripts.  Due to the previously mentioned constraints I was only able to create one divergence in the dialogue path; however, *(as I explain in the individual script files)* there is a way to diverge even further to create a truly unique experience.

**NOTE** If the user chooses the third reply to the first question, a majority of the dialogue will be skipped, and the user can gain full control of the browsing experience once again *


## Final Remarks

I had a lot of fun creating this site, but there was one major limitation I consistently faced throughout its creation.

I only used vanilla JavaScript.

Although using a framework will not change a lot of the basic functionality of the site, it would've helped substantially with the overall orginization throughout development.  Not only that, but it would've also allowed for things like state management as well as the ability to condense the amount of code I ended up using.  As I created this project, I actually attempted to condense it many times (which is why the file "d.main.js" has around 500 lines of code), but in the end there was only so much I could do in hindsight.  If, in the future, I was tasked with building this site again there's a lot I would change.  Primarily, I'd change how much thought I'd put into the overall planning of the site in order to eliminate certain areas I've deemed sloppy or unorganized.
