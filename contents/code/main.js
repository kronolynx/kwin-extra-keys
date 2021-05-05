function registerSwitchAndMove(wsNumber) {
  var bindName = "Extra: Move Window and Switch to Desktop " + wsNumber

  registerShortcut(bindName, bindName, '', function () {
    workspace.activeClient.desktop = wsNumber
    workspace.currentDesktop = wsNumber
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
}
