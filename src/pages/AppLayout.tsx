import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { NavProps } from "../App";
import { MainLogoProps } from "../components/atoms/logos";
import { LeftSideContent } from "../components/atoms/navs";
import { AppWithSidebars } from "../components/layout/AppWithSidebar";
import { FaAccusoft } from "react-icons/fa";
import { red } from "@material-ui/core/colors";
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

  const baseLayoutProps = {
    logoProps,
    navProps,
    navValue: pathname,
    onLogin: () => {},
    onNavChange: push,
    roleMap: roleInfo,
    userInfo: logInfo,
    onUserAction: () => {},
  };

  return (
    <div className="w-full">
      <AppWithSidebars
        baseLayoutProps={baseLayoutProps}
        LeftSidebarElement={() => (
          <LeftSideContent
            headerProps={{
              Icon: FaAccusoft,
              iconProps: { fill: red[300], fontSize: "2rem" },
              label: "Curriculum",
            }}
            listItems={[
              { label: "Sori Breaker", onClick: () => {}, onClickArg: "hi" },
              { label: "단어 뽀개기", onClick: () => {}, onClickArg: "Vocab" },
            ]}
          />
        )}
      >
        {children}
      </AppWithSidebars>
    </div>
  );
};

export default AppLayout;
