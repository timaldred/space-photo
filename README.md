# Tim's space photo project

## This a project, built in React with CSS styling, which pulls in NASA's astronomy photo of the day for today (or any other day you choose)

[You can see it live, here](https://www.timaldred.com/space)

Here's some cool things it uses:

## 🪐 API Calls
I've built projects which pull in information from public APIs before, but this was my first use of an API key, and with limited API use.

*Note:* if you're working with an API with a limited number of calls, and you accidentally build in an infinite loop, you won't be able to work on your project for the rest of the day.

## 🪐 Playing with dates
NASA's photos of the day are organised by date.  

Although there's a 'today' function in React, I pulled in the latest photo from the NASA API and used the date from that as 'today'. I did this to avoid any potential time zone / photo hasn't been uploaded yet issues.

Then I used React to determine yesterday, last year etc. 

## 🪐 Date picker
During CODELancashire, somebody on a ~rival~ fellow team (I wish I could remember who so that I could credit them properly) used a date picker. I was very envious and started looking for an excuse to use one myself.

In this project, there's a date picker, allowing you to view any of NASA's previous photos of the day. I added in a start date (when the first photo was uploaded) and end date (the last photo, so far...). 

*Additional problem:* When testing this app on my iPhone, I found the browser zoomed in when the date picker was selected and it messed up the viewing experience. Through CSS, I made the date picker larger, so that no zoom was required, and also changed the colour so that it better suited my theme.

## 🪐 Random date!
Because what's the fun of building something if you don't make it as complicated as can be?

As well as being able to pick a specific date, you can also choose a random photo from the archives. Which isn't just a random number, but **a random date**, just to add to the complexity.

## 🪐 Other things
Some things that aren't new to me but are included in this project:

- **Google fonts:** For a retro-futuristic heading typeface
- **Show/hide:** Everything looked a bit cluttered when the photo description loaded as default, but I didn't want to leave it out altogether. So I hid it in a 'see more' box.
- **Scroll to the top:** Because selecting a new date doesn't load a new page, but instead updates the page you're seeing, this meant the user had to manually scroll back to the photo to see it. So I automated this part.
