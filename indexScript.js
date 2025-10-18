modeSelectionWindow = document.getElementById("modeSelection");
wordModeMenu = document.getElementById("wordModeMenu");
statsWindow = document.getElementById("statsWindow");
settingsWindow = document.getElementById("settingsBox");
backButton = document.getElementById("exitButton");
letterModeButtons = wordModeMenu.getElementsByClassName("letterModeButtons");
var lettersChosen = 5;
var competitiveBool = false;


windowsPossible = [modeSelectionWindow, wordModeMenu, statsWindow, settingsWindow];

function modeSelection(modeSelected)
{
    if(modeSelected == 1)
    {
        window.alert("WIP: not ready yet"); //will just be an <a> tag
    }
    else if(modeSelected == 2)
    {
        openWindow(1);
        competitiveBool = false;
    }
    else if(modeSelected == 3)
    {
        openWindow(1);
        competitiveBool = true;
    }
    else if(modeSelected == 4)
    {
        openWindow(2);
    }
    else if(modeSelected == 5)
    {
        openWindow(3);
    }
}

function openWindow(windowNum)
{
    windowsPossible[windowNum].style.display = "flex";
    backButton.style.display = "block";
    windowsPossible[0].style.display = "none";
}

wordModeMenu.addEventListener("click", (event) =>
{
    for(i=0;i<letterModeButtons.length;i++)
    {
        if(letterModeButtons[i] == event.target)
        {
            lettersChosen = (i + 5);
        }
    }
    transferStorage();
});

addEventListener("keydown", function (event) 
{
    if (event.key === "Escape") 
    {
        exitCurrentWindow();
    }
});

function exitCurrentWindow()
{
    backButton.style.display = "none";
    competitiveBool = false;
    if(windowsPossible[0].style.display == "none")
    {
        for(i=1;i<windowsPossible.length;i++)
        {
            windowsPossible[i].style.display = "none";
        }
        modeSelectionWindow.style.display = "flex";
    }
}


function transferStorage() 
{
    localStorage.setItem("competitiveBool", competitiveBool);
    localStorage.setItem("lettersChosen", lettersChosen);
}


