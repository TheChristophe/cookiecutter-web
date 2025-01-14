import { type FC } from 'react';

import styles from './Footer.module.scss';
import Link from 'next/link';

const Footer: FC = () => (
    <footer className="footer flex items-center justify-center">
        <div className="container flex flex-wrap items-center justify-center">
            <div className="flex w-full items-center xl:w-[33%]">
                <img src="/images/ec-logo.png" alt="european commission logo" className="mr-3" />
                <span>
                    This Service is powered by the AI4OS software, provided by KIT, co-funded by the{' '}
                    <a href="https://ai4eosc.eu/" rel="noreferrer">
                        AI4EOSC project
                    </a>
                    .
                </span>
            </div>
            <div className="flex h-full w-full items-center xl:w-[33%]">
                <ul className={styles['legals']}>
                    <li>
                        <a href="https://www.scc.kit.edu/en/legals.php" title="Documentation">
                            Legals
                        </a>
                    </li>
                    <li>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link href="/aupolicy">Acceptable Use Policy</Link>
                    </li>
                </ul>
            </div>
            <div className="flex w-full items-center justify-center xl:w-[33%]">
                <a href="https://ai4eosc.eu/" rel="noreferrer">
                    <img
                        className="logo"
                        //src="/images/logo-deep-solid-white.png"
                        src="/images/ai4eosc-white-no-bg.svg"
                        alt="ai4eosc logo"
                    />
                </a>
            </div>
        </div>
    </footer>
);

export default Footer;
