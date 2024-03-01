/**
 * コアスクリプトのバグ修正
 */
(() => {
  // 職業欄を空にしたらゲームが起動しなくなる問題の修正
  const MAX_LEVEL = 100;
  const _Game_Actor_prototype_currentClass = Game_Actor.prototype.currentClass;
  Game_Actor.prototype.currentClass = function () {
    const before = _Game_Actor_prototype_currentClass.apply(this, arguments);
    if (before) return before;
    const A = new Array(MAX_LEVEL).fill(1);
    const B = new Array(MAX_LEVEL).fill(0);
    const expParams = new Array(4).fill(0);
    return (
      _Game_Actor_prototype_currentClass.apply(this, arguments) ?? {
        expParams,
        traits: [],
        learnings: [],
        name: "",
        params: [A, B, B, B, B, B, B, B],
      }
    );
  };
})();
