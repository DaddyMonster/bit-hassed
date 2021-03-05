import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { NavProps } from "../App";
import { MainLogoProps } from "../components/atoms/logos";
import AppBaseLayout from "../components/layout/AppBaseLayout";

interface Props {
  navProps: NavProps[];
}

const roleInfo = {
  student: "학생",
  teacher: "선생님",
  admin: "관리자",
};

type RoleInfoType = typeof roleInfo;

interface LogMock {
  name: string;
  role: keyof RoleInfoType;
  id: number;
  academyName: string;
}

const logoProps: MainLogoProps = {
  mainColUni: "secondary",
  mainText: "SparkLite",
  subText: "Free Learning Resources",
};

const AppLayout: React.FC<Props> = ({ children, navProps }) => {
  const { pathname } = useLocation();
  const { push } = useHistory();

  const [logInfo, setlogInfo] = useState<LogMock | null>(null);

  return (
    <div className="w-full">
      <AppBaseLayout
        logoProps={logoProps}
        onLogin={() => {
          setlogInfo({
            id: 1,
            name: "Dan",
            role: "student",
            academyName: "Dan's English",
          });
        }}
        navProps={navProps}
        navValue={pathname}
        onNavChange={push}
        roleMap={roleInfo}
        userInfo={logInfo}
      >
        {children}
      </AppBaseLayout>
    </div>
  );
};

export default AppLayout;
