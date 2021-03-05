import { Avatar } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { JustButtonT, JustTypo } from "../..";

export interface UserInfoT<_RoleType_> {
  id: number;
  name: string;
  role: keyof _RoleType_;
  academyName: string;
  thumbUrl?: string;
}

export interface LiteUserInfoProps<
  _RoleType_,
  _UserInfo_ extends UserInfoT<_RoleType_>
> {
  onLogin: (e: React.MouseEvent) => void;
  className?: string;
  userInfo: _UserInfo_ | null;
  roleMap: _RoleType_;
}

export function LiteUserInfo<
  _RoleType_,
  _UserInfo_ extends UserInfoT<_RoleType_>
>({
  onLogin,
  className,
  userInfo,
  roleMap,
}: LiteUserInfoProps<_RoleType_, _UserInfo_>) {
  return (
    <Root className={className}>
      {userInfo ? (
        <div className="flex items-center h-full">
          <UserAvatar src={userInfo.thumbUrl}>
            {userInfo.thumbUrl ? undefined : userInfo.name.slice(0, 1)}
          </UserAvatar>
          <div className="flex flex-col justify-center items-center">
            <JustTypo ff="guide" className="px-3 mt-1">{`${userInfo.name} ${
              roleMap[userInfo.role]
            }`}</JustTypo>
            <JustTypo ff="guide" sz="xs" grey={500}>
              {userInfo.academyName}
            </JustTypo>
          </div>
        </div>
      ) : (
        <JustButtonT onClick={onLogin}>로그인하기</JustButtonT>
      )}
    </Root>
  );
}

const Root = styled.div(({ theme }) => ({
  padding: theme.spacing(1, 2, 1, 3),
  display: "flex",
  alignItems: "center",
}));

const UserAvatar = styled(Avatar)(({ theme }) => ({
  width: 35,
  height: 35,
  marginRight: theme.spacing(1),
  boxShadow: theme.shadows[1],
}));
