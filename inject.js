// function injectScript(file_path, tag) {
//   var script = document.createElement('script')
//   script.setAttribute('type', 'text/javascript')
//   script.setAttribute('src', file_path)
//   document.body.appendChild(script)
// }

function injectScript(file_path, tag) {
  // inject once!
  if(!document.querySelector(`[src="${file_path}"]`)){
    console.log(`injecting ${file_path}`)

    var script = document.createElement('script')
    script.setAttribute('type', 'text/javascript')
    script.setAttribute('src', file_path)
    document.body.appendChild(script)
  }
}

for(key of ["injected.js"]){
  injectScript(chrome.runtime.getURL(key))
}

