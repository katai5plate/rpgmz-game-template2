/*:
 * @target MZ
 * @plugindesc 最新の JS 構文に対応しているかテスト
 */

(function () {
  const tests = [
    "/* let, const */ let a = 1; const b = 2;",
    "/* アロー関数 */ const f = () => {};",
    "/* テンプレートリテラル */ const t = `${0}`;",
    "/* 分割代入 */ const {x, y} = {x: 1, y: 2}; const [c, d] = [1, 2];",
    "/* スプレッド演算子 */ const s = { ...{x: 1}, ...{y: 2} }; const a = [...[1, 2], ...[3, 4]];",
    "/* デフォルト引数 */ const f = (a = 1) => a;",
    "/* Restパラメータ */ const f = (...a) => a;",
    "/* Promise */ const p = Promise.resolve(1);",
    "/* async / await */ const f = async () => await Promise.resolve(1);",
    "/* オプショナルチェーン */ const o = {}; const c = o?.a?.b;",
    "/* Null合体演算子 */ const n = null ?? 'default';",
    "/* クラス */ class C {}",
    "/* Private フィールド */ class C { #p = 1; }",
    "/* クラスフィールドの宣言 */ class C { f = 1; }",
    "/* 静的クラスフィールド */ class C { static f = 1; }",
    "/* BigInt */ const bigInt = 1n;",
    "/* ダイナミックインポート */ import('data:text/javascript,').catch(e => {});",
    "/* for...of */ for (const v of [1,2,3]) {}",
  ];
  for (var i = 0; i < tests.length; i++) {
    var code = tests[i];
    try {
      new Function(code)();
    } catch (error) {
      console.error(`エラーが発生しました: ${error}\nコード: ${code}`);
      throw new Error(
        `あなたの環境ではこのゲームを起動することができません。最新のブラウザに更新してください。\nエラーが発生したコード: ${code}`
      );
    }
  }
})();
