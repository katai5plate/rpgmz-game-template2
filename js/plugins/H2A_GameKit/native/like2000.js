/**
 * ツクール 2000 風挙動の実現
 */

// アニメーションを 2 倍速
const animeUpdateMV = Sprite_AnimationMV.prototype.update;
Sprite_AnimationMV.prototype.update = function () {
  animeUpdateMV.apply(this);
  animeUpdateMV.apply(this);
};
const animeUpdateMZ = Sprite_Animation.prototype.update;
Sprite_Animation.prototype.update = function () {
  animeUpdateMZ.apply(this);
  animeUpdateMZ.apply(this);
};
// 歩行速度を倍にする
const distancePerFrame = Game_CharacterBase.prototype.distancePerFrame;
Game_CharacterBase.prototype.distancePerFrame = function () {
  return distancePerFrame.apply(this) * 2;
};
