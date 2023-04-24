
chrome.runtime.onInstalled.addListener(({ reason }) => {

    if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
        chrome.tabs.create({
            url: chrome.runtime.getURL('src/bootstrap/index.html')
        });
    }

});

chrome.action.onClicked.addListener(() => {

    chrome.tabs.create({
		url: chrome.runtime.getURL('src/bootstrap/index.html')
	});

    chrome.action.enable();

    chrome.action.setPopup({
        popup: 'src/popup/index.html'
    });
    
});
