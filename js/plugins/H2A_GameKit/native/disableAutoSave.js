/**
 * 場所移動でオートセーブしないようにする
 */

Scene_Map.prototype.shouldAutosave = () => false;
Scene_Battle.prototype.shouldAutosave = () => false;
