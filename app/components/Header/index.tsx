import { FC } from "react";
import styles from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";

// иконки роутов
// import HomeIcon from '../../public/home.svg';
import MessageIcon from "../../../public/message.svg";

import logo from "@/logo.svg";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div>
        <Link href={"/"}>
          <Image src={logo} alt="logo" width={260} height={30} quality={100} />
        </Link>

        <Link href={"/market"} className={styles.cartLink}>
          <ShoppingCart size={36} />
        </Link>
        <Link href={"/chat"} className={styles.cartLink}>
          <Image
            src={MessageIcon}
            alt="message image"
            width={36}
            height={36}
            quality={100}
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
