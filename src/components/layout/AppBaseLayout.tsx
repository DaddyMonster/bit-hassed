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

enum BaseRoleType {
  Teacher = "teacher",
  Student = "student",
  Admin = "admin",
}

export type LayoutBaseComponent<
  _RoleType_ = BaseRoleType,
  _UserInfo_ extends UserInfoT<_RoleType_> = UserInfoT<_RoleType_>,
  _NavProps_ extends NavBaseProps = NavBaseProps
> = (props: BaseLayoutProps<_RoleType_, _UserInfo_, _NavProps_>) => JSX.Element;

export interface BaseLayoutProps<
  _RoleType_ = BaseRoleType,
  _UserInfo_ extends UserInfoT<_RoleType_> = UserInfoT<_RoleType_>,
  _NavProps_ extends NavBaseProps = NavBaseProps
> extends LiteUserInfoProps<_RoleType_, _UserInfo_> {
  logoProps: MainLogoProps;
  children: React.ReactNode;
  navProps: _NavProps_[];
  navValue: string;
  onNavChange: (value: string) => void;
}

export const AppBaseLayout: LayoutBaseComponent = ({
  onLogin,
  roleMap,
  userInfo,
  logoProps,
  navProps,
  navValue,
  children,
  onNavChange,
  onUserAction,
  className,
}) => {
  return (
    <Root>
      <AppTopNav logoProps={logoProps}>
        <div className="flex-1 h-full">
          <TopNavTab selected={navValue} onChange={(val) => onNavChange(val)}>
            {navProps.map((item) => (
              <TopNavTabItems
                key={item.path}
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
            onUserAction={onUserAction}
            className={className}
          />
        </div>
      </AppTopNav>
      {children}
    </Root>
  );
};

const Root = styled.div(({ theme }) => ({
  width: "100%",
  height: "100vh",
}));
