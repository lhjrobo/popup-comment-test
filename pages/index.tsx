import { Global } from "@emotion/core";
import globalCSS from "./../styles/global";
import Link from "next/link";
const IndexPage = () => {
  return (
    <>
      <div>
        <Link href="./bottom">
          <a>右下コメント欄固定</a>
        </Link>
      </div>
      <div>
        <Link href="./bottom_slide_bottom">
          <a>右下コメント欄スライド(下)</a>
        </Link>
      </div>
      <div>
        <Link href="./bottom_slide_right">
          <a>右下コメント欄スライド(右)</a>
        </Link>
      </div>
      <div>
        <Link href="./bottom_slide_bottom_extended">
          <a>右下コメント欄スライド_拡張(下)</a>
        </Link>
      </div>
      <Global styles={globalCSS} />
    </>
  );
};

export default IndexPage;
