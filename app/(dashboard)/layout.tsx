import { Header } from "@/components/ui/header";

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
