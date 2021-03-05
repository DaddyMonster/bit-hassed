import React from "react";
import styled from "styled-components";
import { MainLogoProps } from "../atoms/logos";
import {
  AppTopNav,
  LiteUserInfo,
  LiteUserInfoProps,
  NavBaseProps,
  TopNavTab,
  TopNavTabItems,
  UserInfoT,
} from "../atoms/navs";

interface Props<
  _RoleType_,
  _UserInfo_ extends UserInfoT<_RoleType_>,
  _NavProps_ extends NavBaseProps
> extends LiteUserInfoProps<_RoleType_, _UserInfo_> {
  logoProps: MainLogoProps;
  children: React.ReactNode;
  navProps: _NavProps_[];
  navValue: string;
  onNavChange: (value: string) => void;
}

function AppBaseLayout<
  _RoleType_,
  _UserInfo_ extends UserInfoT<_RoleType_>,
  _NavProps_ extends NavBaseProps
>({
  onLogin,
  roleMap,
  userInfo,
  logoProps,
  navProps,
  navValue,
  children,
  onNavChange,
}: Props<_RoleType_, _UserInfo_, _NavProps_>) {
  return (
    <Root>
      <AppTopNav logoProps={logoProps}>
        <div className="flex-1 h-full">
          <TopNavTab selected={navValue} onChange={(val) => onNavChange(val)}>
            {navProps.map((item) => (
              <TopNavTabItems
                value={(item.base ?? "") + item.path}
                label={item.label}
              />
            ))}
          </TopNavTab>
        </div>
        <div className="ml-auto h-full flex items-center justify-center">
          <LiteUserInfo
            onLogin={onLogin}
            roleMap={roleMap}
            userInfo={userInfo}
          />
        </div>
      </AppTopNav>
      {children}
    </Root>
  );
}

export default AppBaseLayout;

const Root = styled.div(({ theme }) => ({
  width: "100%",
  height: "100vh",
}));
