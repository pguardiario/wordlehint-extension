// chrome.runtime.onInstalled.addListener(function() {

//   chrome.tabs.create({
//     url: 'https://wordlehint.com/',
//     active: true
//   });

//   return false;
// });
console.log(1)

chrome.runtime.onConnect.addListener(function(port) {
  let {id} = port.sender.tab
  // chrome.tabs.sendMessage(id, {action: "test"}, () => {})

  // ports[id] = port
  // console.log({port})
  // console.assert(port.name === "gql");

  // if(apiHeader){
  //   port.postMessage({action: "apiHeader", header: apiHeader})
  // }
  console.log({port, id})

  // port.onMessage.addListener(function(msg) {
  //   console.log(3)
  //   console.log(msg)
  //   chrome.tabs.sendMessage(id, msg, () => {})
  // })
})




console.log(2)

// chrome.runtime.sendMessage({
//   msg: "something_completed",
//   data: {
//       subject: "Loading",
//       content: "Just completed!"
//   }
// });

// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//   console.log(message.data);
//   chrome.runtime.sendMessage({ data: "xxx" }, function (response) {
//   });
// });