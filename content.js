let sendToPopup

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {

    if (request["type"] == 'msg_from_popup') {
      sendToPopup = sendResponse
      postMessage({ action: "hint" }, "*")
    }

    return true; // this make sure sendResponse will work asynchronously
  }
)

window.addEventListener("message", (event) => {
  let { action, value } = event.data || {}

  if (action === "hintReply") {
    sendToPopup(value)
  }
}, false)
