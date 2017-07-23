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
  "Cow drop was designed to be a mobile game, but due to being programmed in Javascript it is also playable online. The full version can be found either on Google Play Store <a href='https://goo.gl/Loiqkl'>here</a> or on Kongregate <a href='https://goo.gl/XctmMT'>here</a>. It was programmed in one week with one other person.",
  [languageValue, languageValue, IDEValue, versionControlValue, typeValue, typeValue, contributorsValue, stateValue],
  ["JavaScript", "HTML5", "GameClosure", "Git", "App", "Game", "2 Person Project", "Published"],
  );
  document.getElementById("portfolioPlacement").appendChild(portfolioItem);
  
  var portfolioItem = createPortfolio(
  "assets/codedungeon.png",
  "Code Dungeon", 
  "In a 36 hour Hackathon in Barcelona me and two others created this. It is an educational game aimed to help teach younger people to code filled with sounds animations and basic graphics. In it you controled a player via a code window on the side. It consisted of 2 levels and a boss level to show more advanced possibilities. This boss level required coding a binary search.",
  [languageValue, contributorsValue, typeValue, versionControlValue, typeValue, otherValue, stateValue],
  ["JavaScript", "3 Person Project", "Game", "Git", "Educational", "Hackathon", "Complete"],
  );
  document.getElementById("portfolioPlacement").appendChild(portfolioItem);
  
  var portfolioItem = createPortfolio(
  "assets/cells.jpg",
  "Detecting Cells", 
  "In a Second year module, using this image and several others as training a program was created that could, as accuretly as possible, outline the edges of the cells. The focus of this module was testing combinations of edge detection methods(guassian, laplacian, hough transform etc), noise removal, greyscaling and thresholding to find the optimal edge map after ROC analysis.",
  [languageValue, IDEValue, contributorsValue, versionControlValue, typeValue, stateValue],
  ["Java", "MatLab", "2 Person Project", "SVN", "Statistical", "Complete"],
  );
  document.getElementById("portfolioPlacement").appendChild(portfolioItem);
  
  /*
      <div class = "portfolioItem">
        <img class = "portfolioLeft" src ="assets/cells.jpg">
        </img>
        <div class = "portfolioRight">
          <h2>Detecting Cells</h2>
          <p class = "portfolioText">In a Second year module, using this image and several others as training a program was created that could, as accuretly as possible, outline the edges of the cells. The focus of this module was testing combinations of edge detection methods(guassian, laplacian, hough transform etc), noise removal, greyscaling and thresholding to find the optimal edge map after ROC analysis.
          </p>
          <div class = "languagetag">Java</div>
          <div class = "IDEtag">MatLab</div>
          <div class = "contributortag">2 Person Project</div>
          <div class = "versionControltag">SVN</div>
          <div class = "typetag">Statistical</div>
          <div class = "statetag">Complete</div>
        </div>
      </div>
      */
  
  
  
  
  
  var portfolioItem = createPortfolio(
  "assets/isometric.png",
  "Isometric", 
  "One of my first personal projects, an Isometric game engine. Read map data from a file so could customise landscape. It was 2D isometric view and each square could be highlighted, have objects placed on them and function to zoom and pan camera. It was never finished because AS exams needed focusing on.", 
  [languageValue, otherValue, contributorsValue, typeValue, typeValue, IDEValue, stateValue],
  ["C#", "XNA", "Only me", "Game", "Game Engine", "Visual Studio", "Incomplete"],
  );
  document.getElementById("portfolioPlacement").appendChild(portfolioItem);
  
  getOptions();
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
  
  selectPlacement.appendChild(divFilter);
  selectPlacement.appendChild(selectBox);
}