const observer = new MutationObserver((mutations) => {
  if (window.location.href === "https://twitter.com/home") {

    const tabList = document.querySelectorAll("div[role='tablist']");
    const tabs = document.querySelectorAll("div[role='presentation']:has(a)");

    if(tabList.length > 0) {
      if(tabList[0].style.display !== 'none' && tabs.length > 1)
      {
        tabList[0].style.display = 'none'
        tabs[1].firstChild.click();
      }
    }
  }
});

window.onload = () => {
  observer.observe(document.body, { childList: true, subtree: true });
};
