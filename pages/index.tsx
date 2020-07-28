import { Global } from "@emotion/core";
import globalCSS from "./../styles/global";
import Link from "next/link";
const IndexPage = () => {
  return (
    <>
      <div>
        <Link href="./bottom">右下コメント欄固定</Link>
      </div>
      <div>
        <Link href="./bottom_slide_bottom">右下コメント欄スライド(下)</Link>
      </div>
      <div>
        <Link href="./bottom_slide_right">右下コメント欄スライド(右)</Link>
      </div>
      <Global styles={globalCSS} />
    </>
  );
};

export default IndexPage;
