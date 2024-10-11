import Link from "next/link";
import * as SocialIcons from "../../images/social-icons";
import styles from "./socialLinks.module.css";
import Icon from "../Icon";

export default function SocialLinks(): JSX.Element {
  return (
    <ul className={`${styles.socialLinksList} flex flex-row text-dark`}>
      <li className={styles.item}>
        <Link
          href="https://www.linkedin.com/company/tesseract-inc/"
          target="_blank"
          aria-label="Visit my Linkedin page"
        >
          <Icon name="Linkedin" flavor="duotone" size="20" />
        </Link>
      </li>
       <li className={styles.item}>
        <Link
          href="https://www.instagram.com/tesseract_tech/?igsh=dGluODY3eWRvNWsy"
          target="_blank"
          aria-label="Visit my Instagram page"
        >
          <Icon name="Instagram" flavor="duotone" size="20" />
        </Link>
      </li> 
      
      <li className={styles.item}>
        <Link
          href="mailto:(TBA)"
          target="_blank"
          aria-label="Send an email"
        >
          <Icon name="Mail2" flavor="duotone" size="20" />
        </Link>
      </li>
    </ul>
  );
}
