var languageValue = "languagetag";
var IDEValue = "IDEtag";
var versionControlValue = "versionControltag";
var stateValue = "statetag";
var contributorsValue = "contributortag";
var otherValue = "othertag";
var typeValue = "typetag";

var items = [];
  
function initialise()
{
  var portfolioItem = createPortfolio(
  "assets/cowdrop-poster.png",
  "Cow Drop", 
  "Cow drop was designed to be a mobile game. In addition to this due to being programmed in Javascript it is also playable online. The full version can be found either at Google Play Store <a href='https://goo.gl/Loiqkl'>here</a> or at Kongregate <a href='https://goo.gl/XctmMT'>here</a>. It was programmed in one week with one other person.",
  [languageValue, languageValue, IDEValue, versionControlValue, typeValue, typeValue, contributorsValue, stateValue],
  ["JavaScript", "HTML5", "GameClosure", "Git", "App", "Game", "2 Person Project", "Published"],
  );
  items.push(portfolioItem);
  
  portfolioItem = createPortfolio(
  "assets/codedungeon.png",
  "Code Dungeon", 
  "In a 36 hour Hackathon in Barcelona me and two others created this. It is an educational game aimed to help teach younger people to code filled with sounds, animations and simple graphics. In this game you controlled a character via a code window on the side. It consisted of 2 levels and a boss level. This boss level was implemented to show more advanced possibilities, it required coding a binary search.",
  [languageValue, contributorsValue, typeValue, versionControlValue, typeValue, otherValue, stateValue],
  ["JavaScript", "3 Person Project", "Game", "Git", "Educational", "Hackathon", "Complete"],
  );
  items.push(portfolioItem);

  portfolioItem = createPortfolio(
  "assets/cells.jpg",
  "Detecting Cells", 
  "In a Second year module, using this image and several others as training a program was created that could, as accurately as possible, outline the edges of the cells. The focus of this module was testing combinations of edge detection methods(guassian, laplacian, hough transform etc), noise removal, greyscaling and thresholding to find the optimal edge map after ROC analysis.",
  [languageValue, IDEValue, contributorsValue, versionControlValue, typeValue, stateValue],
  ["Java", "MatLab", "2 Person Project", "SVN", "Statistical", "Complete"],
  );
  items.push(portfolioItem);

  portfolioItem = createPortfolio(
  "assets/cryptovision.png",
  "CryptoVision", 
  "CryptoVision was a group project assigned by the university, the only specification being it had to be a visualisation of some algorithm. We developed an educational tool to help A level and first year university students to understand 3 different encryption algorithms. The program did this by allowing users to upload a chosen image and then converted each pixel into a new pixel with its colour encrypted. As it encrypted their image it went through each step explaining what happened. These steps could be sped up, slowed down, paused, skipped, etc.",
  [languageValue, IDEValue, contributorsValue, versionControlValue, typeValue, typeValue, stateValue],
  ["Java", "Eclipse", "5 Person Project", "SVN", "Visualisation", "Educational", "Complete"], 
  );  
  items.push(portfolioItem);   
  
  portfolioItem = createPortfolio(  "assets/robot_bottom.jpg",  "Robotic Waiter", 
  "In a university module we were given access to a robot. We rigged it with a kinect camera fixed on a lego mount on top of a telescope tripod to provide another sensor in addition to the laser and sonar build into the base of the robot. The laser was used to avoid crashes and the kinect was used for head detection. We used the ROS navstack, an amcl algorithm, to navigate from place to place. The map was generated using SLAM. With these tools we aimed to make a robotic waiter so we developed a hierarchical task planning module to prioritise functions like serving food, assigning a table to new customers, getting food from the kitchen etc. The robot also had a UI for choosing meals, and could use text to voice to communicate. The University of Birmingham is currently hosting our website from the module <a href = 'http://www.cs.bham.ac.uk/internal/courses/int-robot/halloffame/2016/Leslie/'>here</a>",
  [languageValue, IDEValue, contributorsValue, versionControlValue, typeValue, typeValue, otherValue, stateValue],
 ["Python", "PyCharm", "6 Person Project", "SVN", "Robotic", "Service", "ROS", "Complete"], 
 );
 items.push(portfolioItem);

 portfolioItem = createPortfolio(
 "assets/method-loci.png",
 "Method of Loci", 
 "The method of loci is a memory technique. Using this method you imagine your house or a familiar location and you place objects around it. In this 24 hour hackathon we made a virtual house for this purpose. Using the oculus rift you could move around the house placing images of any object wherever you wanted (option to upload your own). While we originally had intentions for a whole house we had a lot of trouble getting the oculous rift package to work with our other code and so by the end only had this one room",
  [languageValue, otherValue, contributorsValue, versionControlValue, typeValue, typeValue, otherValue, stateValue],
 ["JavaScript", "Oculus Rift", "2 Person Project", "Git", "Educational", "3D", "Hackathon", "Complete"],
 );
 items.push(portfolioItem);

 portfolioItem = createPortfolio(
 "assets/domineering.png",
 "Domineering", 
 "Note: this image is not the result of the game, The game was all in command line with no UI. The major coding task of the game was programming the game rules and an AI to play against the user. It was done soley in Haskell a functional programming language.",
  [languageValue, otherValue, contributorsValue, typeValue, stateValue],
 ["Haskell", "Functional", "Only me", "Game", "Complete"],
 );
 items.push(portfolioItem);
 
 portfolioItem = createPortfolio(
 "assets/weather-app.png",
 "Weather App", 
  "In a module at university this weather app was created. While only a small coding task The Weather App uses free online API provided by openweathermap.org in order to get up to date weather and provide some standard small talk about the current and upcoming weather as well as displaying it to the user. It gives temperature, weather condition and a time. It also contained a search bar to choose locations to see the weather for. ",
  [languageValue, IDEValue, contributorsValue, typeValue,  typeValue, stateValue],
  ["Java", "Android Studio", "Only me", "App", "Utility", "Complete"],
  );
  items.push(portfolioItem);
  
  portfolioItem = createPortfolio(
  "assets/snooker-scorer.png",
  "Snooker Scorer", 
  "In the same module as the weather app this app was created to keep score of a snooker game. This app kept track of balls potted by each player, their score (including fouls), Players total score and total won games. In addition to these it kept information on the current frame like which balls are playable and finally options incase multiple balls were potted in one turn.",
  [languageValue, IDEValue, contributorsValue, typeValue,  typeValue, stateValue],
  ["Java", "Android Studio", "Only me", "App", "Utility", "Complete"],
  );
  items.push(portfolioItem);

  portfolioItem = createPortfolio(
  "assets/mathformer.png",
  "Mathformer", 
  "Mathformer was made for my A2 Computing program it was the first large scale program I made. It was an educational game to teach maths. This game was effectively a 2D physics engine with an SQL database backend. Both students and teachers could create accounts and log in, the students would be greeted by a 2D platformer game in which they had to collect numbers and operators scattered around the level to take them to the door and place them in the right places to make the equation true. The teacher would be able to see the back end database to see their progress.",
  [languageValue, languageValue, IDEValue, contributorsValue, typeValue,  typeValue, otherValue, otherValue, stateValue],
  ["C#", "SQL", "Visual Studio", "Only me", "Game", "Educational", "XNA", "MySQL", "Complete"],
  );
  items.push(portfolioItem);

  portfolioItem = createPortfolio(
  "assets/untitled-space-poster.png",
  "Untitled Space Game", 
  "This is a newly started game. It is intended to be released on steam. It is a strategy game set in space, each player will build off of planets, asteroids, space stations in order to advance technology, money and military with the ultimate goal of beating the other players. It is 3D on a hexagon grid. At the moment the game engine is nearing completion, created with one other person.",
  [languageValue, IDEValue, contributorsValue, typeValue,  typeValue, otherValue, versionControlValue, stateValue],
  ["C#", "Visual Studio", "2 Person Project", "Game", "3D", "MonoGame", "Git", "Ongoing"],
  );
  items.push(portfolioItem);

  portfolioItem = createPortfolio(
  "assets/forester.png",
  "Forester", 
  "A personal project that has been long running but slow as takes low priority. Currently it is a randomly generate 2D tile based island with trees, lakes, player, limited items, beaches and a sea. A large amount is planned for the future with multiple islands, multiplayer, animals, crafting, hunting, building and much more.",
  [languageValue, IDEValue, contributorsValue, typeValue, otherValue, stateValue],
  ["C#", "Visual Studio", "Only me", "Game", "MonoGame", "Ongoing"],
  );
  items.push(portfolioItem);

  portfolioItem = createPortfolio(
  "assets/bleak-poster.png",
  "Bleak", 
  "This is an interactive story game, given a scenario the user gets to chose one of multiple choices to take different arcs in the story. Each part of the story comes with an image. In the future the game will display the inventory throughout the game as well as animated acompanying pictures. While this is relativly simple to code it has not yet been completed largely due to the story creator being incomplete.",
  [languageValue, languageValue, contributorsValue, typeValue, versionControlValue, stateValue],
  ["JavaScript", "HTML5", "2 Person Project", "Game", "Git", "Ongoing"],
  );
  items.push(portfolioItem);

  portfolioItem = createPortfolio(
  "assets/bleak-creator-poster.png",
  "Bleak - Story Creator", 
  "This goes hand in hand with the Bleak game. It is a tool to create your own interactive story. While it has yet to be made graphically pleasing most of the functionality is there. You can make any story node, it can have pretext, posttext, a photo, change inventory items or player statistics and it can be Exported into a .story file. When editing the story most changes can updated in a node's information, additionally story nodes can be connected by dragging and dropping arrows between them. In the future the UI will be improved and Import will work, animations will also be accepted or preset ones can be added aswell as a online library of created games with a rating system and accounts.",
  [languageValue, languageValue, contributorsValue, typeValue, typeValue, versionControlValue, stateValue],
  ["JavaScript", "HTML5", "2 Person Project", "Game", "Utility", "Git", "Ongoing"],
  );
  portfolioItem.getElementsByClassName("portfolioLeft")[0].style = "border:1px;border-style:solid;border-color:#B1B1B1;";
  items.push(portfolioItem);
  
  var portfolioItem = createPortfolio(
  "assets/isometric.png",
  "Isometric", 
  "One of my first personal projects, an Isometric game engine. The engine read map data from a file. With this file information it created a textured 2D isometric world. Each square could be highlighted, have objects placed on them and function to zoom and pan camera. It was never finished because of AS exams. Originally it was intended to be a game however in its incomplete stage it is mostly just a partial isometric game engine.", 
  [languageValue, otherValue, contributorsValue, typeValue, typeValue, IDEValue, stateValue],
  ["C#", "XNA", "Only me", "Game", "Game Engine", "Visual Studio", "Incomplete"],
  );
  items.push(portfolioItem);
  
  addPortfolios(items);
  getOptions();
}

function addPortfolios(portfolios)
{
  var placeholder = document.getElementById("portfolioPlacement");
  placeholder.innerHTML = '';
  for(var i = 0; i < portfolios.length; i++)
  {
    placeholder.appendChild(portfolios[i]);
  }
}

function createPortfolio(src, title, description, tagValues, tagNames)
{  
  var portfolioItem = document.createElement('div');
  var portfolioLeft = document.createElement('img');
  var portfolioRight = document.createElement('div');
  
  portfolioItem.className = "portfolioItem";
  
  portfolioLeft.src = src;
  portfolioLeft.className = "portfolioLeft";
  portfolioItem.appendChild(portfolioLeft);
  
  portfolioRight.className = "portfolioRight";
  var h2 = document.createElement('h2');
  var portfolioText = document.createElement('p');
  h2.textContent = title;
  portfolioText.className = "portfolioText";
  portfolioText.innerHTML = description;
  portfolioRight.appendChild(h2);
  portfolioRight.appendChild(portfolioText);
  
  
  for(var i = 0; i < tagValues.length; i++)
  {
    var tag = document.createElement('div');
    tag.className = tagValues[i];
    tag.textContent = tagNames[i];
    portfolioRight.appendChild(tag);
  }
  
  
  portfolioItem.appendChild(portfolioRight);
  
  
  return portfolioItem
}

function getOptions()
{
  var divFilter = document.createElement('div')
  divFilter.id = 'filterBox';
  divFilter.textContent = 'Filter Tags:';
  
  var selectBox = document.createElement("select");
  var option = document.createElement('option');
  option.value = "None";
  option.textContent = "None";
  selectBox.appendChild(option);
  
  var terms = [];
  var languageTags = document.getElementsByClassName(languageValue);
  var IDETags = document.getElementsByClassName(IDEValue);
  var versionControlTags = document.getElementsByClassName(versionControlValue);
  var stateTags = document.getElementsByClassName(stateValue);
  var contributorsTags = document.getElementsByClassName(contributorsValue);
  var otherTags = document.getElementsByClassName(otherValue);
  var typeTags = document.getElementsByClassName(typeValue);
  
  var selectPlacement = document.getElementById("selectPlacement")
  
  for(var i = 0; i < languageTags.length; i++)
  {
    if (terms.indexOf(languageTags[i].textContent) <= -1)
    {
      terms.push (languageTags[i].textContent);
      var option = document.createElement('option');
      option.value = languageValue;
      option.textContent = languageTags[i].textContent;
      option.style.backgroundColor = "#B5DCE1";
      selectBox.appendChild(option);
    }
  }
  
  for(var i = 0; i < IDETags.length; i++)
  {
    if (terms.indexOf(IDETags[i].textContent) <= -1)
    {
      terms.push (IDETags[i].textContent);
      var option = document.createElement('option');
      option.value = IDEValue;
      option.textContent = IDETags[i].textContent;
      option.style.backgroundColor = "#D7E0B1";
      selectBox.appendChild(option);
    }
  }
  
  for(var i = 0; i < stateTags.length; i++)
  {
    if (terms.indexOf(stateTags[i].textContent) <= -1)
    {
      terms.push (stateTags[i].textContent);
      var option = document.createElement('option');
      option.value = stateValue;
      option.textContent = stateTags[i].textContent;
      option.style.backgroundColor = "#CFD9F2";
      selectBox.appendChild(option);
    }
  }
  
  for(var i = 0; i < typeTags.length; i++)
  {
    if (terms.indexOf(typeTags[i].textContent) <= -1)
    {
      terms.push (typeTags[i].textContent);
      var option = document.createElement('option');
      option.value = typeValue;
      option.textContent = typeTags[i].textContent;
      option.style.backgroundColor = "#F5E1EA";
      selectBox.appendChild(option);
    }
  }
  
  for(var i = 0; i < contributorsTags.length; i++)
  {
    if (terms.indexOf(contributorsTags[i].textContent) <= -1)
    {
      terms.push (contributorsTags[i].textContent);
      var option = document.createElement('option');
      option.value = contributorsValue;
      option.textContent = contributorsTags[i].textContent;
      option.style.backgroundColor = "#D6CDC8";
      selectBox.appendChild(option);
    }
  }

  for(var i = 0; i < versionControlTags.length; i++)
  {
    if (terms.indexOf(versionControlTags[i].textContent) <= -1)
    {
      terms.push (versionControlTags[i].textContent);
      var option = document.createElement('option');
      option.value = versionControlValue;
      option.textContent = versionControlTags[i].textContent;
      option.style.backgroundColor = "#F4E3C9";
      selectBox.appendChild(option);
    }
  }  
  
  for(var i = 0; i < otherTags.length; i++)
  {
    if (terms.indexOf(otherTags[i].textContent) <= -1)
    {
      terms.push (otherTags[i].textContent);
      var option = document.createElement('option');
      option.value = otherValue;
      option.textContent = otherTags[i].textContent;
      option.style.backgroundColor = "#F4D9D0";
      selectBox.appendChild(option);
    }
  }
  
  selectBox.onchange = function(){filter(this.value, this.options[this.selectedIndex].innerHTML);};
  
  selectPlacement.appendChild(divFilter);
  selectPlacement.appendChild(selectBox);
}

function filter(value, text)
{  var added = [];
  if (text == "None")
   added = items;
  else
  {
    for(var i = 0; i < items.length; i++)
    {
      var possible = items[i].getElementsByClassName("portfolioRight")[0].getElementsByClassName(value);
      for(var j = 0; j < possible.length; j++)
      {
        if (possible[j].innerHTML == text)
        {
          added.push(possible[j].parentElement.parentElement);
        }
      }
    }
  }
  addPortfolios(added);
}