/**
* news page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class NewPage {

    get searchField(){
        return $("//input[@id='main']")
        
    }

    get searchButton(){
        return $("//button[@id='searchPostcodeButton']")
        
    }

    get activeContactGroup(){
        return $(".//li//strong[text()='Contact Group']/../following-sibling::div[@data-testid='activeIcon']");
    }

    get finishloading(){
        return $("//div[@data-testid='finishedLoadingText']");
    }

    get loadRecentNews(){
    return $("//div[@data-testid='loadRecentNewsItemFromNewsList']");
    }

}

export default new NewPage();
