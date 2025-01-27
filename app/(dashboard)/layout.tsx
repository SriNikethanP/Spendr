import { Header } from "@/components/header";

type Props = {
  children: React.ReactNode;
};

const DashBoardLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};

export default DashBoardLayout;
