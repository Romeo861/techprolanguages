/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import logo from '../assets/logo.png'

export default function Logo({ src, ...rest }) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
        display: 'flex',
        cursor: 'pointer',
        mr: 15,
      }}
      {...rest}
    >
      <Image src={logo} alt="Techprolanguages" />
    </Link>
  );
}
