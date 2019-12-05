// the require returns a function,
// so we need to () to invoke the function
const routes = require("next-routes")();

//define a new route mapping using add() function with pattern
routes
  .add("/dream_stories/new_story", "/dream_stories/new_story")
  .add("/dream_stories/:address", "/dream_stories/story_details")
  .add(
    "/dream_stories/:address/downloads_list",
    "/dream_stories/downloads_list"
  )
  .add(
    "/dream_stories/:address/request_download",
    "/dream_stories/request_download"
  );
//export some helpers
module.exports = routes;
