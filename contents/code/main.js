/**
 * Move window and switch to desktop
 */
function registerSwitchAndMove(wsNumber) {
  var bindName = "Extra: Move Window and Switch to Desktop " + wsNumber

  registerShortcut(bindName, bindName, '', function () {
    workspace.activeClient.desktop = wsNumber
    workspace.currentDesktop = wsNumber
  })
}

/**
 * Close all windows in desktop
 */
function closeClientsInDesktop() {
  var bindName = "Extra: Close clients in Desktop "
  registerShortcut(bindName, bindName, '', function () {
    var currentDesktop = workspace.currentDesktop
    var clients = workspace.clientList()
    clients.forEach(function (client) {
      if(client.desktop === currentDesktop) client.closeWindow()
    })
  })
}

if (registerShortcut) {
  // [...Array(20).keys()].map(i => registerSwitchAndMove(i + 1))
  registerSwitchAndMove(1)
  registerSwitchAndMove(2)
  registerSwitchAndMove(3)
  registerSwitchAndMove(4)
  registerSwitchAndMove(5)
  registerSwitchAndMove(6)
  registerSwitchAndMove(7)
  registerSwitchAndMove(8)
  registerSwitchAndMove(9)
  registerSwitchAndMove(10)
  registerSwitchAndMove(11)
  registerSwitchAndMove(12)
  registerSwitchAndMove(13)
  registerSwitchAndMove(14)
  registerSwitchAndMove(15)
  registerSwitchAndMove(16)
  registerSwitchAndMove(17)

  closeClientsInDesktop()
}
