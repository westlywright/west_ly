angular.module('ngTemplates').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('src/app/directives/side-nav-template.html',
    "<span  class=\"side-nav-container\">\n" +
    "    <i class=\"fa fa-cog\" id=\"side-nav-cog\"></i>\n" +
    "</span>"
  );


  $templateCache.put('src/app/views/home.html',
    "<div class=\"inner-content\">\n" +
    "    <p>Hello! Im Wes. I am a Software Engineer living in Southern California. I make stuff for the web. I love it.</p>\n" +
    "    <quote>What a computer is to me is the most remarkable tool that we have ever come up with. It’s the equivalent of a bicycle for our minds. - Steve Jobs</quote>\n" +
    "    <p>I am a contradiction. I am passionate about technology and how much it's improved our lives and humanity in general. But I have a great fondness of the solitude of nature. I love being disconnected from everything. It's how I find balance. I have a romantic idea of living off the grid for a while and seeing what I find out about myself. My wife just smiles and nods.</p>\n" +
    "    <quote>Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean. - John Muir </quote>\n" +
    "    <p>I am an adventurer. I take pictures. I write. I like hobbies. I am a smartass. I laugh, loud and from my gut.</p>\n" +
    "    <quote>The very basic core of a man's living spirit is his passion for adventure. The joy of life comes from our encounters with new experiences, and hence there is no greater joy than to have an endlessly changing horizon, for each day to have a new and different sun. - Christopher McCandless</quote>\n" +
    "    <p>256bits is my hub. You can find everything you may need to know about me here. I am currently in the process of redesigning and rebuilding this hub. Somethings aren't here yet. Somethings may never be here. Somethings have yet to come. Check back and see what I've done.</p>\n" +
    "</div>\n"
  );

}]);
