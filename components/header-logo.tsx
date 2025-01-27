import Link from "next/link";
import Image from "next/image";

export const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="items-center hidden lg:flex">
        <Image
          src="/logo.svg"
          alt="logo"
          height={28}
          width={28}
          style={{ height: "auto", width: "auto" }}
        />
        <h1 className="font-mono font-bold text-white text-2xl ml-1">Spendr</h1>
      </div>
    </Link>
  );
};
