import { css } from "@emotion/core";
import emotionReset from "emotion-reset";

const globalCSS = css`
  ${emotionReset}
  head {
    background-color: #eac79a;
  }
  body {
    width: 100%;
    font-size: 1.4rem;
    background-color: #eac79a;
    color: white;
    font-family: "Jost", "YuGothic", "Yu Gothic", "游ゴシック", "Meiryo",
      "メイリオ", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN",
      -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
  }
`;

export default globalCSS;
