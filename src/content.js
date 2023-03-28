const observer = new MutationObserver((mutations) => {
  if (window.location.href === "https://twitter.com/home") {
    const tabList = document.querySelectorAll("div[role='tablist']");
    const tabs = document.querySelectorAll("div[role='presentation']:has(a)");

    if(tabs.length > 1) tabs[1].firstChild.click();
    if(tabList.length > 0) tabList[0].style.display = 'none';
  }
});

window.onload = () => {
  observer.observe(document.body, { childList: true, subtree: true });
};
