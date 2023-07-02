// css
import './globals.css';
import Nav from './components/Nav'

// fonts
import { Bangers, Quicksand, Roboto_Condensed } from 'next/font/google'
import CartMobileIcon from './components/CartMobileIcon';
import CartMobile from './components/CartMobile';
import CartProvider from './context/CartContext';
import CartDesktop from './components/CartDesktop';
import Footer from './components/Footer';

const bangers = Bangers({
  subsets: ['latin'],
  variable: '--font-bangers',
  weight: ['400']
})

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand'
})

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  variable: '--font-robotoCondensed',
  weight: ['300', '400', '700'],
})

export default function RootLayout({ children }) {
  return (
    <CartProvider>
      <html lang='en'>
        <body className={`${quicksand.variable} ${bangers.variable} ${robotoCondensed.variable} font-quicksand`}>

          <Nav />
          <CartMobileIcon />
          <CartMobile />
          {children}

          <CartDesktop />
          <Footer />
        </body>
      </html>
    </CartProvider>
  );
}
