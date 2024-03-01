/*:ja
 * @target MZ
 * @plugindesc ゲームキット基本機能
 * @author Had2Apps
 *
 * @param $initTouchMove
 *  @type boolean
 *  @text タッチ移動
 *  @default false
 *
 * @command AutoSave
 *  @text オートセーブ
 * @command TouchMoveON
 *  @text タッチ移動ON
 * @command TouchMoveOFF
 *  @text タッチ移動OFF
 * @command Error
 *  @text エラー表示
 *   @arg $message
 *   @text 内容(JS)
 *   @default "ゲームがクラッシュしました"
 */
(() => {
  const PLUGIN_NAME = document.currentScript.src.match(/^.*\/(.*).js$/)[1];

  globalThis.$gamekit = {
    isTouchMove: false,
  };

  PluginManager.registerCommand(PLUGIN_NAME, "AutoSave", () => {
    SceneManager._scene.requestAutosave();
  });

  PluginManager.registerCommand(PLUGIN_NAME, "TouchMoveON", () => {
    globalThis.$gamekit.isTouchMove = true;
  });
  PluginManager.registerCommand(PLUGIN_NAME, "TouchMoveOFF", () => {
    globalThis.$gamekit.isTouchMove = false;
  });

  PluginManager.registerCommand(PLUGIN_NAME, "Error", ({ $message }) => {
    throw new Error(eval($message));
  });

  Promise.all([
    import("./native/bugfix.js"),
    import("./native/commentSound.js"),
    import("./native/like2000.js"),
    import("./native/disableAutoSave.js"),
  ]).then(() => {
    import("../mods/loader.js");
  });
})();
