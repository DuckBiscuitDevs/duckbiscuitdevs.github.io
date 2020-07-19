async function loadContent(fileName) {
    dataJSON = undefined;
    await $.getJSON(fileName, function(json) {
        dataJSON = json;
    }).catch((err)=>{
        console.error(`Error loading ${fileName}`);
        return document.getElementsByTagName("main")[0].innerHTML = `<div class=\"container\"><h1 style=\"padding-top: 20px;\">Big issue!</h1><p>The file that tells this page what to show is invalid. You'll need to contact the site owners to get this fixed (and remind them to learn how JSON works!).</p><kbd>File: ${fileName}</kbd></div>`
    });

    toReplace = document.getElementsByClassName("jsonReplace")

    for (i = 0; i < toReplace.length; i++) {
        jsonPath = toReplace[i].id.split("-");
        nextThing = dataJSON;
        for (x = 0; x < jsonPath.length; x++) {
            nextThing = nextThing[jsonPath[x]];
        }

        if (nextThing == undefined) {
            console.error(`Could not find data at ${jsonPath.join("/")} in ${fileName}`)
            continue;
        }

        try {
            if (toReplace[i].nodeName.toLowerCase() == "img") {
                if (nextThing != "") {
                    toReplace[i].src = nextThing;
                }
            } else if (jsonPath[jsonPath.length - 1] == "bg" && jsonPath[jsonPath.length - 1] != "") {
                toReplace[i].style.backgroundColor = nextThing;
            } else if (toReplace[i].nodeName.toLowerCase() == "a") {
                if (nextThing != "") {
                    toReplace[i].href = nextThing;
                }
            } else {
                toReplace[i].innerHTML = nextThing;
            }
        } catch {
            console.error(`Could not change content of ${toReplace[i]}`)
            continue;
        }
    }
}