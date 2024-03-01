/**
 * マップタッチ移動の仕様を変更する
 */

const _Scene_Map_processMapTouch = Scene_Map.prototype.processMapTouch;
Scene_Map.prototype.processMapTouch = function () {
  if (globalThis.$gamekit.isTouchMove) _Scene_Map_processMapTouch.call(this);
};
