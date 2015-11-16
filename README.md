# Tag Matcher

This repository contains two SPAs 
   1. The Tag Matcher service - (index.html) - it allows the user to enter profile data including some personality tags. On submission these personality tags are matched with the other profiles data and a (fake) matching profile is returned. Once the user "likes" a matching profile, this event is reported to Livestax server as a trigger.
   2. The Most Recently Liked Profiles - (likes.html) - this app shows the most recently liked profile reported through Livestax trigger and fetches the corresponding data from the server to display the full profile.
  
## Server
In the server folder is a json-server file that generates some fake profile data.


