import { Chip } from "@material-ui/core";
import React from "react";
import JustButtonC from "../components/atoms/buttons/JustButtonC";
import JustButtonT from "../components/atoms/buttons/JustButtonT";
import RootLayout from "../layouts/RootLayout";

interface Props {}

const Buttons = (props: Props) => {
  return (
    <RootLayout title="버튼" description="버튼 컴포넌트 모음">
      <div className="py-3 flex items-center flex-wrap">
        <JustButtonC ff="guide" ft="2rem" className="mr-3">
          테스트용 버튼
        </JustButtonC>
        <JustButtonT ft="2rem" ff="logo">
          테스트용 버튼 2
        </JustButtonT>
        <Chip label="test hello chip" />
      </div>
    </RootLayout>
  );
};

export default Buttons;
