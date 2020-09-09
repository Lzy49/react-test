export default () => {
  const globalHistory = window.history
  const initLocation = window.location
  function createHref(location) {
    var baseTag = document.querySelector('base');
    var href = '';
    if (baseTag && baseTag.getAttribute('href')) {
      href = stripHash(window.location.href);
    }
    return href + '#' + encodePath(basename + createPath(location));
  }
  function push(path, state) {
    window.history.pushState(
      state,
      null,
      path
    )
  }
  function block() {

  }
  let history = {
    action: "POP",
    block,
    createHref,
    go,
    goBack,
    goForward,
    length: globalHistory.length,
    listen,
    location: initLocation,
    push,
    replace
  }
  return history
}