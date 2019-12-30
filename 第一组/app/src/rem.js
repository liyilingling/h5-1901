const baseSize = 32

function setRemm () {
  const scale = document.documentElement.clientWidth / 750
  document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'
}
setRemm()
onresize = function () {
  setRemm(

  )
}
